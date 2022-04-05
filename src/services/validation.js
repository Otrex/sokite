import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
import countries from '../mock/countries';

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

extend('minOrNone', value => {
  if(value > 5){
    return true;
  }
  return 'Post amount cannot be less than 0';
});

extend('gender', value => {
  return ['MALE','FEMALE','OTHERS'].includes(value)? true: 'gender must be male, female or others';
});

extend('country', value => {
  return countryExists(countries,value)? true: 'country not valid';
});

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Password confirmation does not match'
});

function countryExists(arr,country) {
  return arr.some(function(el) {
    return el.name === country;
  });
}
