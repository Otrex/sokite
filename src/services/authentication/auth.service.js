import Vue from 'vue';
import endpoint from "../endpoints.js";



class AuthService {

  register(user) {
    return Vue.prototype.$http
      .post(endpoint.createAccount, {
        username: user.username,
        email: user.email,
        password: user.password
      });
  }

  login(user) {
    return Vue.prototype.$http
      .post(endpoint.login, user)
      .then(response => {
        return response.data;
      });
  }

  loginEmail2FA(user) {
    return Vue.prototype.$http
      .post(endpoint.loginEmail2FA, user)
      .then(response => {
        if (response.data['access_token']) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  loginApp2FA(user) {
    return Vue.prototype.$http
      .post(endpoint.loginApp2FA, user)
      .then(response => {
        if (response.data['access_token']) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  changePassword(data) {
    return Vue.prototype.$http
      .post(endpoint.changePassword, data);
  }

  requestChangePassword(email) {
    return Vue.prototype.$http
      .post(endpoint.requestChangePassword, {email: email});
  }

  resetPassword(data) {
    return Vue.prototype.$http
      .post(endpoint.requestChangePassword, data);
  }

  activateEmail2FA(){
    return Vue.prototype.$http
      .post(endpoint.activateEmail2FA);
  }

  createTOTP2FA(){
    return Vue.prototype.$http
      .post(endpoint.createTOTP);
  }

  verifyTOTP2FA(token){
    return Vue.prototype.$http
      .post(endpoint.verifyTOTP+token);
  }

  deactivateEmail2FA(){
    return Vue.prototype.$http
      .post(endpoint.deactivateEmail2FA);
  }

  deactivateApp2FA(){
    return Vue.prototype.$http
      .post(endpoint.deactivateApp2FA);
  }

}

export default new AuthService();
