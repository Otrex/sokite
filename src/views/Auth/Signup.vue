<template>
  <div
    class="signup d-flex justify-content-center align-items-center flex-column"
  >
    <div>
      <h5>Create an Account</h5>
    </div>
    <button
      class="signup__fb-btn d-flex justify-content-center align-items-center mb-5 mt-2"
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
      <div>Sign up with facebook</div>
    </button>
    <div class="d-flex justify-content-center align-items-center">
      <div class="signup__line"></div>
      <div class="mr-2 ml-2 font-weight-bold">or</div>
      <div class="signup__line"></div>
    </div>
    <div class="signup__form mt-3">

      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="handleLogin">

          <div class="form-group">
            <label for="email">Email address</label>
            <ValidationProvider v-slot="{ errors }" rules="required|email|max:50">
              <input id="email" v-model="user.email" class="form-control" type="email">
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

          <div class="form-group">
            <label for="display name">Display Name</label>
            <ValidationProvider v-slot="{ errors }" rules="required|max:15|min:3|alpha_dash">
              <input id="display name" v-model="user.username" class="form-control" type="text">
              <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>
          <div
            v-if="message"
            class="alert mt-2"
            :class="successful ? 'alert-success' : 'alert-danger'"
          >{{message}}</div>
          <button :disabled="invalid || loading" class="btn text-white" type="submit">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Sign up</span>
          </button>

        </form>
      </ValidationObserver>
    </div>
    <div class="signup__has-account">
      <router-link :to="{name:'Sign In'}"> Sign in to <b>Q-Social.com</b></router-link>
    </div>
  </div>
</template>

<script>
import User from '../../model/user';

export default {
  name: 'Signup',
  data() {
    return {
      loading: false,
      user: new User('a@a.com', 'Kelechi1$', 'test'),
      message: "",
      successful: false,
    };
  },
  methods: {
    handleLogin() {
      if (this.user.email && this.user.password && this.user.username) {
        this.loading = true;
        this.message = "";

        this.$store.dispatch('auth/register', this.user).then(
          response => {
            this.successful = true;
            this.loading = false;
            this.message = "Your registration is successful. Proceed to login";
            /*alert("success");
            console.log(response);*/
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
              this.successful = false;
              this.message = "An error occurred"
            }
            this.loading = false;
          }
        );
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/views/Auth/signup.scss";
</style>
