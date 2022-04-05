// const base = process.env.VUE_APP_API_BASE_URL;
const escapeCors = 'https://cors.bridged.cc/'; //todo remove before deploy
const base =  escapeCors+'https://dev-glf-mono2.herokuapp.com/v1';
const baseUpload = escapeCors+'https://dev-glf-upload-server2.herokuapp.com/v1';

const urls = {
  escape: escapeCors,
  baseURL: base,
  createAccount: base+'/register',
  login: base+'/auth/generate',
  loginEmail2FA: base+'/auth/generate/twofa/email',
  loginApp2FA: base+'/auth/generate/twofa/authenticator',
  updateProfile: base+'/user/profile/update',
  changePassword: base+'/user/change/password',
  requestChangePassword: base+'/user/request/reset/password',
  resetPassword: base+'/user/reset/password',
  reqEmailVerification: base+'/user/email/token/verification',
  reqPhoneVerification: base+'/user/phone/token/verification',
  EmailVerification: base+'/user/verify/email/token/verification/',
  PhoneVerification: base+'/user/verify/phone/token/verification/',
  activateEmail2FA: base+'/user/auth/email/activate',
  createTOTP: base+'/user/auth/totp/create-key',
  verifyTOTP: base+'/user/auth/totp/verify/',
  deactivateEmail2FA: base+'/user/auth/email/deactivate',
  deactivateApp2FA: base+'/user/auth/authenticator/deactivate',

  //Uploads
  generateSignedURL: baseUpload+'/upload-daemon/generate-url',
  createPost: baseUpload+'/upload-daemon/create/post',

  //Payment Transactions
  topUpCoin: base+'/transaction/initiate',
  subscribeToUser: base+'/transaction/subscribe/user',
};

export default urls;

