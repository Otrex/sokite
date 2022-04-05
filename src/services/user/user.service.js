import Vue from 'vue';
import endpoint from "../endpoints.js";


class UserService {

  saveProfileData(data) {
    return Vue.prototype.$http
      .post(endpoint.updateProfile,
        data
      );
  }

  requestEmailVer() {
    return Vue.prototype.$http
      .post(endpoint.reqEmailVerification);
  }

  requestPhoneVer() {
    return Vue.prototype.$http
      .post(endpoint.reqPhoneVerification);
  }

  PhoneVerification(data) {
    return Vue.prototype.$http
      .post(endpoint.PhoneVerification + data);
  }

  EmailVerification(data) {
    return Vue.prototype.$http
      .post(endpoint.EmailVerification + data);
  }

  getSignedURL(data) {
    return Vue.prototype.$http
      .post(endpoint.generateSignedURL, data);
  }

  s3UploadMedia(url, data,type) {
    return Vue.prototype.$http
      .put(url,data,
        {
          headers: {'Content-Type': type },
          transformRequest: (data, headers) => {
            delete headers.common;
            return data;
          }
        });
  }

  postCreate(data) {
    return Vue.prototype.$http
      .post(endpoint.createPost, data);
  }

  topUp(data) {
    return Vue.prototype.$http
      .post(endpoint.topUpCoin, data);
  }


}

export default new UserService();
