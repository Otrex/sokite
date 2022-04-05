<template>
  <div v-if="!emailIsVerified">
    <h4 class="">Email Verification
    <span class="fa fa-times">
    </span></h4>
    <div>
      <p class="text-dark">A token will be sent to your email address.</p>
      <button @click="handleRequest" :disabled="reqLoading" class="btn rounded-pill btn-theme text-white" type="submit">
        <span v-show="reqLoading" class="spinner-border spinner-border-sm"></span>
        <span> Request token</span>
      </button>
      <small v-if="reqMessage && !reqError" class="px-2 text-success">
        Check your email for the token and enter it below
      </small>
      <small v-else-if="reqMessage && reqError" class="px-2">Request. failed try again later</small>
    </div>

    <div
      v-if="message"
      :class="successful ? 'alert-success' : 'alert-danger'"
      class="alert"
    >{{ message }}
    </div>
    <div class="mt-2 col-md-6 mx-auto">
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <ValidationProvider v-slot="{ errors }" name="token" rules="required|max:10|min:3">
              <input v-model="token" autocomplete="off" class="form-control"
                     placeholder="Enter token" type="text">
              <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <button :disabled="invalid || loading" class="btn btn-theme text-white" type="submit">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>verify</span>
          </button>
        </form>
      </ValidationObserver>
    </div>

  </div>
  <div v-else>
    <h4 class="mt-5">Your Email has been verified</h4>
  </div>
</template>

<script>
import UserService from '../../../../services/user/user.service'

export default {
  name: "EmailVerification",
  data() {
    return {
      emailVerified: false,
      requestCount: 5,
      token: '',
      reqLoading: null,
      reqError: null,
      reqMessage: null,
      loading: null,
      message: null,
      successful: false,
      submitCount: 5,
      emailIsAlreadyVerified: false
    }
  },
  methods: {
    handleRequest() {
      if (this.requestCount){
        this.reqLoading = true;
        this.reqMessage = "";
        this.reqError = null;
        this.requestCount--;

        UserService.requestEmailVer().then(
          response => {
            this.reqLoading = false;
            this.reqMessage = "success";
            this.emailIsAlreadyVerified = true;
          },
          err => {
            this.reqLoading = false;
            this.reqError = true;
            this.reqMessage = "failed";
          }
        );
      }
    },
    handleSubmit() {
      this.loading = true;
      this.message = "";

      this.$store.dispatch('profile/verifyEmail', this.token).then(
        response => {
          this.loading = false;
          this.message = "Email verified successfully";
          this.successful = true;
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

  computed: {
    emailIsVerified: function (){
      return this.$store.getters["profile/emailVerified"]
    }
  }
}
</script>

<style scoped>

</style>
