import AuthService from '../../services/authentication/auth.service'

const data = ({...localStorage});
const init = {
    token_type: null,
    expiry_time: null,
    user: null,
    access_token: null
}
Object.keys(data).forEach(key=> {
  if (key in init){
    init[key]= JSON.parse(data[key])
  }
});

export const auth = {
  namespaced: true,
  state: init,
  getters: {
    isLoggedIn: state => state["access_jwt_token"] !== null,
    client: state => state.user,
    },
  actions: {
    register({commit}, user) {
      return AuthService.register(user).then(
        response => {
          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    login({commit}, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user);
          commit('profile/saveState', user.user, { root: true });
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },

    loginEmailToken({commit}, user) {
      return AuthService.loginEmail2FA(user).then(
        user => {
          commit('loginSuccess', user);
          commit('profile/saveState', user.user, { root: true });
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },

    loginAppToken({commit}, user) {
      return AuthService.loginApp2FA(user).then(
        user => {
          commit('loginSuccess', user);
          commit('profile/saveState', user.user, { root: true });
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    changePassword({commit}, data) {
      return AuthService.changePassword(data).then(
        res => {
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    requestChangePassword({commit}, email) {
      return AuthService.requestChangePassword(email).then(
        res => {
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    resetPassword({commit}, data) {
      return AuthService.resetPassword(data).then(
        res => {
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    logout({commit}) {
      commit('logout');
    },
  },
  mutations: {
    saveState(state){
      localStorage.setItem('user',JSON.stringify(state.user));
    },
    loginSuccess(state, user) {
      const keys = Object.keys(user)
      for (const key of keys) {
        localStorage.setItem(key,JSON.stringify(user[key]));
        state[key] = user[key];
      }
    },
    loginFailure(state) {
      state.user = null;
    },
    email2FAactivated(state) {
      state.user.user.twoFAType  = 'EMAIL';
    },
    app2FAactivated(state) {
      state.user.user.twoFAType  = 'AUTHENTICATOR';
    },
    twoFADeactivated(state) {
      state.user.user.twoFAType  = '';
    },
    logout(state) {
      localStorage.clear();
      state = {
        token_type: null,
        expiry_time: null,
        user: null,
        access_token: null
      };
    },
  }
};
