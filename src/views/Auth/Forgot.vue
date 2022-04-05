<template>
  <div
    class="signin d-flex justify-content-center align-items-center flex-column"
  >
    <div class="mt-3">
      <h5>Reset Password</h5>
    </div>
    <div class="signin__form" v-if="!verifiedEmail">
      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>

      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="handleRequest" class="mt-3">

          <div class="form-group">
            <label for="email">Email address</label>
            <ValidationProvider v-slot="{ errors }" rules="required|email|max:50">
              <input id="email" v-model="email" class="form-control" type="email">
              <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <button :disabled="invalid || loading" class="btn text-white" type="submit">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Submit</span>
          </button>
        </form>
      </ValidationObserver>
    </div>

    <div class="signin__form" v-else>
      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>

      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="handleChangePassword" class="mt-3">
          <small>Enter the token that was sent to your email</small>
          <div class="form-group">
            <label for="token">Token</label>
            <ValidationProvider v-slot="{ errors }" rules="required|max:10|min:3">
              <input id="token" v-model="token" class="form-control" type="text">
              <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <label for="new">New Password</label>
            <ValidationProvider name="password" v-slot="{ errors }" rules="required|max:30|min:6|password:@confirm">
              <input v-model="new_password" class="form-control" id="new"
                     type="password" autocomplete="off">
              <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <label for="confirm password">Confirm New Password</label>
            <ValidationProvider v-slot="{ errors }" name="confirm" rules="">
              <input v-model="new_password2" class="form-control" id="confirm password"
                     type="password" autocomplete="off">
              <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <button :disabled="invalid || loading" class="btn text-white" type="submit">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Submit</span>
          </button>
        </form>
      </ValidationObserver>
    </div>
    <div class="signin__no-account">
      <router-link :to="{name:'Sign In'}"> Sign in to <b>Q-Social.com</b></router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Signin',
  data() {
    return {
      loading: false,
      email:null,
      message: null,
      successful: false,
      verifiedEmail: false,
      token: null,
      new_password: null,
      new_password2: null,
    };
  },
  methods: {
    handleRequest() {
        this.loading = true;
        this.message = null;

        this.$store.dispatch('auth/requestChangePassword', this.email).then(
          response => {
            this.successful = true;
            this.loading = false;
            this.verifiedEmail = true;
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

    handleChangePassword() {
        this.loading = true;
        this.message = null;

        let data = {
          email: this.email,
          token: this.token,
          new_password: this.new_password
        }

        this.$store.dispatch('auth/resetPassword', data).then(
          response => {
            this.successful = true;
            this.loading = false;
            this.message = "Password reset successful";
            setTimeout(()=>{
              this.verifiedEmail = false;
              this.$router.push({name:"Sign In"});
            },3000);
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
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/views/Auth/signin.scss";
</style>
