import store from '../store';
import axioss from 'axios'
import endpoint from "./endpoints";
import router from "../router";

const axios = axioss.create({
  baseURL: endpoint.baseURL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

axios.defaults.timeout = 25000;//todo modify upload post timeout
axios.interceptors.request.use(
  config => {
    let token = JSON.parse(localStorage.getItem('access_token'));
    if (token) {
      config.headers.common["Authorization"] =token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


axios.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  }, error => {

    if ((error.response.status === 500 || error.response.status === 401) &&
      error.response.data.data.message.includes('JWT')) {
      router.push({name: 'Sign In', query: {status: 'expired'}});
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);


export default axios
