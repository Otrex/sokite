import Vue from 'vue';
import Vuex from 'vuex';
import {auth} from './authentication/auth.js';
import {profile} from './profile/profile';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    profile
  },
});
