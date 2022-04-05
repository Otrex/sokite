import Vue from 'vue';
import 'bootstrap';
import bsIcon from 'bootstrap-icons/bootstrap-icons.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from './services/axios.js';
import VueProgressBar from 'vue-progressbar'
import {ValidationObserver, ValidationProvider} from 'vee-validate';
import './services/validation.js';

import xoptions from './xcomponents/options.vue'


const options = {
  color: '#9e6fd1',
  failedColor: '#fa0101',
  thickness: '7px',
  transition: {
    speed: '0.4s',
    opacity: '0.6s',
    termination: 3000
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
  autoFinish: false
}

Vue.use(VueProgressBar, options)
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('x-options', xoptions);

Vue.config.productionTip = false;
Vue.prototype.$bsIcon = bsIcon;
Vue.prototype.$http = axios;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
