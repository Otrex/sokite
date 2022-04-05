<template>
  <div>

    <div
      v-if="message"
      :class="successful ? 'text-success' : 'text-danger'"
    >{{ message }}
    </div>
    <div class="mt-2 col-md-6 mx-auto">
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="handleSubmit">
          <p>Enter the amount of Gcoin you want to purchase.</p>
          <div class="form-group">
            <ValidationProvider v-slot="{ errors }" name="amount" rules="min_value:10">
              <input  v-model="amount" autocomplete="off" class="form-control"
                      placeholder="0" type="number" required>
              <small>~ NGN {{amount * USDRate * NGNRate}}
                 |  ~ USD {{amount * USDRate}}
              </small>
              <div v-show="errors[0]" class="alert alert-danger" >{{ errors[0] }}</div>
            </ValidationProvider>
          </div>
          <button :disabled="invalid || loading " class="btn btn-theme text-white" type="submit">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>make payment</span>
          </button>
          <div v-if="url" class="mt-2">
            <p>Click on the link below to proceed to our payment partner</p>
            <a target="_blank" :href="url">Pay with Paystack</a>
          </div>

        </form>
      </ValidationObserver>
    </div>

  </div>
</template>

<script>
import UserService from '../../../../services/user/user.service'

export default {
  name: "TopUp",
  data() {
    return {
      USDRate: 0.5,
      NGNRate: 500,
      KOBORate: 100,
      loading: null,
      message: null,
      successful: false,
      amount: null,
      url: null,
    }
  },
  methods: {
    handleSubmit(){
      this.loading = true;
      this.message = "";
      const amount ={
        amount: this.amount * this.USDRate * this.NGNRate * this.KOBORate
      }
      console.log(amount);
      UserService.topUp( amount).then(
        response => {
          this.loading = false;
          this.successful = true;
          this.url = response.data.data['authorization_url'];
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
}
</script>

<style scoped>

</style>
