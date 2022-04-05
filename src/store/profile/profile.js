import UserService from '../../services/user/user.service'
import AuthService from "../../services/authentication/auth.service";

const data = JSON.parse(localStorage.getItem('user'));

const init = {
  userId: null,
  fullName: null,
  username: null,
  email: null,
  phoneNumber: null,
  country: null,
  bio: null,
  gender: null,
  website: null,
  dob: null,
  coinBalance: null,
  verified: null,
  emailVerified: null,
  phoneVerified: null,
  twoFAType: null
}

if(data !== null){
  Object.keys(data).forEach(key=> {
    if (key in init){
      init[key]= data[key]
    }
  });
}

// console.log(init);
export const profile = {
  namespaced: true,
  state: init,
  getters: {
    isFetched: state => data !== null,
    emailVerified: state => !!state.emailVerified,
    phoneVerified: state => !!state.phoneVerified,
    profile: state => state,
    the2FA: state => state.twoFAType
  },
  actions: {
    saveProfileData({commit}, data) {
      return UserService.saveProfileData(data).then(
        res => {
          commit('saveState',data);
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    verifyEmail({commit}, token) {
      return UserService.EmailVerification(token).then(
        res => {
          commit('emailVerifiedSuccess');
          commit('saveState');
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    activateEmail2FA({commit}) {
      return AuthService.activateEmail2FA().then(
        res => {
          commit('email2FAactivated');
          commit('saveState');
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    deActivateEmail2FA({commit}) {
      return AuthService.deactivateEmail2FA().then(
        res => {
          commit('twoFADeactivated');
          commit('saveState');
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    verifyTOTP2FA({commit},token) {
      return AuthService.verifyTOTP2FA(token).then(
        res => {
          commit('app2FAactivated');
          commit('saveState');
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    deActivateApp2FA({commit}) {
      return AuthService.deactivateApp2FA().then(
        res => {
          commit('twoFADeactivated');
          commit('saveState');
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    verifyPhone({commit}, token) {
      return UserService.PhoneVerification(token).then(
        res => {
          commit('phoneVerifiedSuccess');
          commit('saveState');
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },

  },
  mutations: {
    saveState(state, userData=null){
      if(userData){
        const keys = Object.keys(userData)
        for (const key of keys) {
          if(key in state){
            state[key] = userData[key];
          }
        }
      }
      localStorage.setItem('user',JSON.stringify(state));
    },
    emailVerifiedSuccess(state) {
      state.emailVerified = true;
    },
    phoneVerifiedSuccess(state) {
      state.phoneVerified = true;
    },
    email2FAactivated(state) {
      state.twoFAType  = 'EMAIL';
    },
    app2FAactivated(state) {
      state.twoFAType  = 'AUTHENTICATOR';
    },
    twoFADeactivated(state) {
      state.twoFAType  = '';
    },

  }
};
