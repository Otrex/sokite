<template>
  <div
    class="signin d-flex justify-content-center align-items-center flex-column"
  >
    <button
      class="signin__fb-btn d-flex justify-content-center align-items-center mb-5 mt-2"
    >
      <div class="mr-3">
        <svg
          class="`bi bi-facebook`"
          fill="#3b5998"
          height="16"
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <div>Sign in with facebook</div>
    </button>
    <div class="d-flex justify-content-center align-items-center">
      <div class="signin__line"></div>
      <div class="mr-2 ml-2 font-weight-bold">or</div>
      <div class="signin__line"></div>
    </div>
    <div class="signin__form">
      <div
        v-if="message"
        :class="successful ? 'alert-success' : 'alert-danger'"
        class="alert"
      >{{ message }}
      </div>

      <template v-if="!requires2FA">
        <ValidationObserver v-slot="{ invalid }">
          <form class="mt-3" @submit.prevent="handleLogin">

            <div class="form-group">
              <label for="email or username">Email address or Username</label>
              <ValidationProvider v-slot="{ errors }" rules="required|min:3|max:50">
                <input id="email or username" v-model="user.email" class="form-control" type="text">
                <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <ValidationProvider v-slot="{ errors }" rules="required|max:30|min:6">
                <input id="password" v-model="user.password" class="form-control" type="password">
                <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>

            <div class="signin__fp mb-2">
              <router-link :to="{name: 'Reset Password'}">Forgot Password</router-link>
            </div>

            <button :disabled="invalid || loading" class="btn text-white" type="submit">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Sign in</span>
            </button>
          </form>
        </ValidationObserver>
      </template>

      <template v-else-if="requires2FA === 'EMAIL'">

        <ValidationObserver v-slot="{ invalid }">
          <form class="mt-3" @submit.prevent="handleEmailToken">

            <div class="form-group">
              <label for="email token">Enter token: </label>
              <ValidationProvider v-slot="{ errors }" rules="required|min:6">
                <input id="email token" v-model="token" class="form-control">
                <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>

            <div class="signin__back mb-2">
              <p @click="back">Back to Sign in</p>
            </div>

            <button :disabled="invalid || loading" class="btn text-white" type="submit">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Submit</span>
            </button>
          </form>
        </ValidationObserver>
      </template>
      <template v-else-if="requires2FA === 'AUTHENTICATOR'">
        <ValidationObserver v-slot="{ invalid }">
          <form class="mt-3" @submit.prevent="handleAppToken">

            <div class="form-group">
              <label for="token">Enter token: </label>
              <ValidationProvider v-slot="{ errors }" rules="required|min:6">
                <input id="token" v-model="token" class="form-control">
                <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>

            <div class="signin__back mb-2">
              <p @click="back">Back to Sign in</p>
            </div>

            <button :disabled="invalid || loading" class="btn text-white" type="submit">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Submit</span>
            </button>
          </form>

        </ValidationObserver>
      </template>

    </div>
    <div class="signin__no-account">
      Don't have an account yet
      <br/>
      <router-link :to="{name:'Sign Up'}"> Signup for <b>Q-Social.com</b></router-link>
    </div>
  </div>
</template>

<script>
import User from "../../model/user";

export default {
  name: 'Signin',
  data() {
    return {
      loading: false,
      user: new User('kelechiemmanuel45@gmail.com', 'Kelechi1$', 'test'),
      message: null,
      successful: false,
      twoFAType: false,
      token: null,
    };
  },
  methods: {
    handleLogin() {
      if (this.user.email && this.user.password) {
        this.loading = true;
        this.message = null;

        let User = {};
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.user.email)) {
          User = {email: this.user.email, password: this.user.password}
        } else {
          User = {username: this.user.email, password: this.user.password}
        }
        this.$store.dispatch('auth/login', User).then(
          response => {
            this.successful = true;
            this.loading = false;

            if (response.data && response.data['2FAType'] === 'EMAIL') {
              this.twoFAType = response.data['2FAType'];
              this.message = response.message;
            } else if (response.data && response.data['2FAType'] === 'AUTHENTICATOR') {
              this.twoFAType = response.data['2FAType'];
              this.message = "Enter the token from your Google authenticator app";
            } else {
              this.$router.push({name: "Home"});
            }
          },
          error => {
            if (error.response) {
              this.message = error.response.data.message;
              this.successful = false;
            } else if (error.request) {
              // The request was made but no response was received
              this.message = "Check your internet connection"
              this.successful = false;
            } else {
              this.message = "An error occurred"
              this.successful = false;
            }
            this.loading = false;
          }
        );
      }
    },
    handleEmailToken() {
      this.loading = true;
      this.message = null;

      let User = {};
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.user.email)) {
        User = {email: this.user.email, password: this.user.password, token: this.token}
      } else {
        User = {username: this.user.email, password: this.user.password, token: this.token}
      }
      this.$store.dispatch('auth/loginEmailToken', User).then(
        res => {
          this.successful = true;
          this.loading = false;
          this.$router.push({name: "Home"});
        },
        error => {
          if (error.response) {
            this.message = error.response.data.message;
            this.successful = false;
          } else if (error.request) {
            // The request was made but no response was received
            this.message = "Check your internet connection"
            this.successful = false;
          } else {
            this.message = "An error occurred"
            this.successful = false;
          }
          this.loading = false;
        }
      );
    },
    handleAppToken() {
      this.loading = true;
      this.message = null;

      let User = {};
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.user.email)) {
        User = {email: this.user.email, password: this.user.password, token: this.token}
      } else {
        User = {username: this.user.email, password: this.user.password, token: this.token}
      }
      this.$store.dispatch('auth/loginAppToken', User).then(
        res => {
          this.successful = true;
          this.loading = false;
          this.$router.push({name: "Home"});
        },
        error => {
          if (error.response) {
            this.message = error.response.data.message;
            this.successful = false;
          } else if (error.request) {
            // The request was made but no response was received
            this.message = "Check your internet connection"
            this.successful = false;
          } else {
            this.message = "An error occurred"
            this.successful = false;
          }
          this.loading = false;
        }
      );
    },
    back() {
      this.message = '';
      this.twoFAType = false;
    }
  },
  computed: {
    requires2FA() {
      return this.twoFAType;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/views/Auth/signin.scss";
</style>
