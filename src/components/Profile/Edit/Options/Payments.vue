<template>
  <modal v-if="showModal" @close="$emit('closePayment')">
    <template slot="modal-header">
      <div class="text-capitalize">
        <h4 class="m-0 p-0 text-capitalize headercolor">Payments</h4>
      </div>
    </template>
    <template slot="modal-text">
      <div>
        <ul id="pills-tab" class="nav nav-pills mb-3 nav-fill" role="tablist">
          <li class="nav-item">
            <a id="pills-verification-tab" aria-controls="pills-verification" aria-selected="true" class="nav-link active" data-toggle="pill"
               href="#pills-verification" role="tab"> Payments history</a>
          </li>

          <li class="nav-item">
            <a id="pills-verification2-tab" aria-controls="pills-verification2" aria-selected="true" class="nav-link" data-toggle="pill"
               href="#pills-verification2" role="tab"> Account top-up</a>
          </li>

          <li class="nav-item">
            <a id="pills-password-tab" aria-controls="pills-password" aria-selected="false" class="nav-link" data-toggle="pill"
               href="#pills-password" role="tab">Subscription</a>
          </li>
<!--          <li class="nav-item">
            <a id="pills-profile-tab" aria-controls="pills-profile" aria-selected="false" class="nav-link" data-toggle="pill"
               href="#pills-profile" role="tab">Setup 2FA</a>
          </li>-->
        </ul>

        <div id="pills-tabContent" class="tab-content">

          <div id="pills-verification" aria-labelledby="pills-verification-tab" class="tab-pane fade show active" role="tabpanel">
            <hr>
            <hr>
          </div>

          <div id="pills-verification2" aria-labelledby="pills-verification2-tab" class="tab-pane fade" role="tabpanel">
            <hr>
              <top-up/>
            <hr>
          </div>

          <div id="pills-password" aria-labelledby="pills-password-tab" class="tab-pane fade" role="tabpanel">
          </div>

<!--          <div id="pills-profile" aria-labelledby="pills-profile-tab" class="tab-pane fade" role="tabpanel">
            <two-f-a/>
          </div>-->

        </div>
      </div>
    </template>
    <template slot="modal-footer">

    </template>
  </modal>
</template>

<script>
import modal from '../../Modal.vue';
import TopUp from './TopUp';

export default {
  name: "Payments",
  components: {
    modal,
    TopUp
  },
  props: {
    showModal: Boolean,
    logo: String
  },
  methods: {}
}
</script>

<style>

.text-theme{
  color: #bc84f8;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.bg-theme{
  background-color: #bc84f8;
}

.bg-theme-secondary{
  background-color: #b7b0be;
}

input.form-control {
  border: 1px solid #9e6fd1;
  border-radius: 15px;
}

input.form-control:focus {
  border: 1px solid #9e6fd1;
  box-shadow: 1px 1px 10px #9e6fd1;
  border-radius: 15px;
}

textarea.form-control {
  border: 1px solid #9e6fd1;
  border-radius: 15px;
}

textarea.form-control:focus {
  border: 1px solid #9e6fd1;
  box-shadow: 1px 1px 10px #9e6fd1;
  border-radius: 15px;
}

.btn-theme {
  color: #fff;
  background-color: #9e6fd1;
  border-color: #9e6fd1;
  border-radius: 15px;
}

.btn-theme:hover {
  color: #fff;
  background-color: #ab82d7;
  border-color: #ab82d7;
  border-radius: 15px;
}

.btn-theme:focus, .btn-theme.focus {
  color: #fff;
  background-color: #9e6fd1;
  border-color: #9e6fd1;
  border-radius: 15px;
  box-shadow: 0 0 0 0.2rem rgba(191, 174, 208, 0.5);
}

.btn-theme.disabled, .btn-theme:disabled {
  color: #fff;
  background-color: #BFAED0;
  border-color: #BFAED0;
  border-radius: 15px;
}

.btn-theme:not(:disabled):not(.disabled):active, .btn-theme:not(:disabled):not(.disabled).active,
.show > .btn-theme.dropdown-toggle {
  color: #fff;
  background-color: #9e6fd1;
  border-color: #9e6fd1;
  border-radius: 15px;
}

.btn-theme:not(:disabled):not(.disabled):active:focus, .btn-theme:not(:disabled):not(.disabled).active:focus,
.show > .btn-theme.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(191, 174, 208, 0.5);
}


.btn-outline-theme {
  color: #9e6fd1;
  border-color: #9e6fd1;
}

.btn-outline-theme:hover {
  color: #fff;
  background-color: #9e6fd1;
  border-color: #9e6fd1;
}

.btn-outline-theme:focus, .btn-outline-theme.focus {
  box-shadow: 0 0 0 0.2rem rgb(128, 94, 165);
}

.btn-outline-theme.disabled, .btn-outline-theme:disabled {
  color: #9e6fd1;
  background-color: transparent;
}

.btn-outline-theme:not(:disabled):not(.disabled):active, .btn-outline-theme:not(:disabled):not(.disabled).active,
.show > .btn-outline-theme.dropdown-toggle {
  color: #fff;
  background-color: #9e6fd1;
  border-color: #9e6fd1;
}

.btn-outline-theme:not(:disabled):not(.disabled):active:focus, .btn-outline-theme:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-theme.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgb(128, 94, 165);
}
</style>

<style scoped>
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  color: #fff;
  background-color: #9e6fd1;
}
a{
  color: #9e6fd1;
}
a:hover{
  color: #57278d;
}
.headercolor{
  color: #9e6fd1;
}
</style>
