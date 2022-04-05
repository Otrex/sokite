<template>
  <div class="row">
    <div class="col-md-8 col-8 col-sm-6 mx-auto mt-3 p-2">
      <div
        v-if="message"
        :class="successful ? 'alert-success' : 'alert-danger'"
        class="alert"
      >{{ message }}
      </div>
      <ValidationObserver v-slot="{ invalid }">
        <form class="text-left" @submit.prevent="handleChangePassword">

          <div class="form-group">
            <ValidationProvider name="password" v-slot="{ errors }" rules="required|max:30|min:6|password:@confirm">
              <input v-model="data.old_password" class="form-control" placeholder="Old Password"
                     type="password" autocomplete="off">
              <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <ValidationProvider v-slot="{ errors }" name="confirm" rules="">
              <input v-model="old_password2" class="form-control" placeholder="Confirm Old Password"
                     type="password" autocomplete="off">
              <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <ValidationProvider v-slot="{ errors }" rules="required|max:30|min:6">
              <input id="new password" v-model="data.new_password" class="form-control" placeholder="New Password"
                     type="password" autocomplete="off">
              <div v-show="errors[0]" class="alert alert-danger" role="alert">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <button :disabled="invalid || loading" class="btn btn-theme text-white" type="submit">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Save Password</span>
          </button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>


export default {
  name: "ChangePassword",
  data() {
    return {
      loading: false,
      message: "",
      successful: false,
      data: {
        old_password: null,
        new_password: null
      },
      old_password2: null,
    };
  },
  methods: {
    handleChangePassword() {
      this.loading = true;
      this.message = "";


      this.$store.dispatch('auth/changePassword', this.data).then(
        response => {
          this.successful = true;
          this.loading = false;
          this.message = "Password Change successful.";
          this.data.new_password = null;
          this.data.old_password = null;
          this.old_password2 = null;
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
}
</script>

<style scoped>


</style>
