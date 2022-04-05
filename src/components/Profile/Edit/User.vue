<template>
  <div class="user">
    <div class="user__details d-flex align-items-center">
      <div class="user__details-avatar">
        <div class="user__details-avatar--overlay">Change</div>
        <img src="/img/slides/QSO-451.jpg"/>
      </div>
      <div class="user__details-other text-left mt-4 ml-4">
        <div class="user__details-other--dn">Joker</div>
        <div class="user__details-other--username">@jokermo</div>
        <div class="user__details-other--points">
          <div
            class="user__details-other--points-coin d-flex align-items-center"
          >
            <div class="user__details-other--points-coin--image">
              <img src="/img/custom_icons/coin.svg"/>
            </div>
            <div class="user__details-other--points-coin--coins">{{ balance }}</div>
          </div>
          <div class="user__details-other--points-rate">~{{ balance }}USD</div>
        </div>
      </div>
    </div>
    <div class="user__bio mt-4" v-once>
      {{this.data.bio}}
    </div>

    <ValidationObserver v-slot="{ invalid }">
      <form method="post" @submit.prevent="handleEdit">
        <div class="user__info mt-4">
          <ValidationProvider v-slot="{ errors }" rules="required|max:15|min:3|alpha_dash">
            <div class="user__info-input d-flex align-items-center text-left">
              <label for="username">Username</label>
              <input id="username" v-model="data.username" type="text">
            </div>
            <div v-show="errors[0]" class="text-danger mb-2" role="alert"><small>{{ errors[0] }}</small></div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required|max:35|min:2">
            <div class="user__info-input d-flex align-items-center text-left">
              <label for="name">Name</label>
              <input id="name" v-model="data.fullName" type="text"/>
            </div>
            <div v-show="errors[0]" class="text-danger mb-2" role="alert"><small>{{ errors[0] }}</small></div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required|max:255|">
            <div class="user__info-input d-flex align-items-center text-left txt">
              <label for="bio">Bio</label>
              <textarea id="bio" v-model="data.bio" type="text"></textarea>
            </div>
            <div v-show="errors[0]" class="text-danger mb-2" role="alert"><small>{{ errors[0] }}</small></div>
          </ValidationProvider>

          <ValidationProvider name="date of birth" v-slot="{ errors }" rules="required">
            <div class="user__info-input d-flex align-items-center text-left">
              <label>Date of birth</label>
              <datetime v-model="data.dob" type="date" class="theme-orange"></datetime>
            </div>
            <div v-show="errors[0]" class="text-danger mb-2" role="alert"><small>{{ errors[0] }}</small></div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required|gender">
            <div class="user__info-input d-flex align-items-center text-left">
              <label for="gender">Gender</label>
              <select id="gender" v-model="data.gender" class="form-control">
                <option class="form-control" selected value="">--select gender--</option>
                <option :selected="data.gender==='FEMALE'" class="form-control" value="FEMALE">Female</option>
                <option :selected="data.gender==='MALE'" class="form-control" value="MALE">Male</option>
                <option :selected="data.gender==='OTHERS'" class="form-control" value="OTHERS">Others</option>
              </select>
            </div>
            <div v-show="errors[0]" class="text-danger mb-2" role="alert"><small>{{ errors[0] }}</small></div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required|country">
            <div class="user__info-input d-flex align-items-center text-left">
              <label for="country">Country</label>
              <select id="country" v-model="data.country"
                      class="form-control" size="1">
                <option class="form-control" value="" selected>--select country--</option>
                <option v-for="(country, i) in countries" :key="i" :value="country.name"
                        :selected="data.country===country.name" class="form-control">
                  {{ country.name }}
                </option>
              </select>
            </div>
            <div v-show="errors[0]" class="text-danger mb-2" role="alert"><small>{{ errors[0] }}</small></div>
          </ValidationProvider>

          <ValidationProvider name="Phone number" v-slot="{ errors }" rules="required|min:7">
            <div class="user__info-input d-flex align-items-center text-left">
              <label>Phone number</label>
              <vue-tel-input v-model="data.phoneNumber" v-bind="bindProps"></vue-tel-input>
            </div>
            <div v-show="errors[0]" class="text-danger mb-2" role="alert"><small>{{ errors[0] }}</small></div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" :rules="{ regex: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ }">
            <div class="user__info-input d-flex align-items-center text-left">
              <label for="web">Website URL</label>
              <input id="web" v-model="data.website" required type="text"/>
            </div>
            <div v-show="errors[0]" class="text-danger mb-2" role="alert"><small>{{ errors[0] }}</small></div>
          </ValidationProvider>

        </div>
        <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
        >{{message}}</div>
        <div class="d-flex align-items-center">
          <button :disabled="invalid || loading" class="mr-auto" type="submit">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Save</span>
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import countries from '../../../mock/countries';
import {VueTelInput} from 'vue-tel-input';
import {Datetime} from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';

export default {
  name: 'EditUser',
  components: {
    VueTelInput,
    Datetime: Datetime,
  },
  data() {
    return {
      countries,
      bindProps: {
        mode: "international",
        defaultCountry: "",
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        placeholder: "",
        required: false,
        enabledCountryCode: false,
        enabledFlags: true,
        preferredCountries: ["NG", "GH", "ZA"],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: "off",
        name: "telephone",
        maxLen: 24,
        minLen:7,
        wrapperClasses: "",
        inputClasses: "",
        inputId: "mobile",
        dropdownOptions: {
          disabledDialCode: false
        },
        inputOptions: {
          showDialCode: false
        }
      },
      data: {
        username: '',
        dob: '',
        fullName: '',
        bio: '',
        phoneNumber: '',
        website: '',
        gender: '',
        country: ''
      },
      balance: null,
      loading: false,
      message: "",
      successful: false,
    };
  },
  methods: {
    handleEdit() {
      this.loading = true;
      this.message = "";

      this.handleDateOfBirth(this.data.dob);
      this.handlePhoneNumber(this.data.phoneNumber);


      this.$store.dispatch('profile/saveProfileData', this.data).then(
        response => {
          this.successful = true;
          this.loading = false;
          this.message = "Profile update successful.";
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
    handleDateOfBirth(date){
      this.data.dob = date.split('T')[0];
    },
    handlePhoneNumber(phone){
       this.data.phone_number = phone.replaceAll('+', '').replaceAll(' ', '');
    }
  },
  created() {
    let data = this.$store.getters["profile/profile"];
    Object.keys(data).forEach(key => {
      if (key in this.data){
        this.data[key]= data[key];
      }
    });
    this.data.dob += 'T00:00:00.000Z';
    this.balance = data.coinBalance;
    // console.log(this.data)
  }
};
</script>
<style>
input.vti__input:focus {
  outline: none;
  background-color: transparent;
  border: unset;
  width: 100%;
  font-size: 14px;
  box-shadow: none;
}

input.vti__input {
  background-color: transparent;
  border: unset;
  width: 100%;
  font-size: 14px;
  box-shadow: none;
}

select.form-control:focus{
  outline: none;
  box-shadow: none;
}

.vue-tel-input:focus {
  outline: none;
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

div.vue-tel-input {
  border: 0;
  box-shadow: none;
}

div.vue-tel-input:focus-within {
  outline: none;
  border: unset;
  box-shadow: none;
}

input.vdatetime-input {
  background-color: transparent;
  border: unset;
  width: 100%;
  font-size: 14px;
  box-shadow: none;
}

input#web{
  border: 0;
  box-shadow: none;
}


.theme-orange .vdatetime-popup__header,
.theme-orange .vdatetime-calendar__month__day--selected > span > span,
.theme-orange .vdatetime-calendar__month__day--selected:hover > span > span {
  background: #9e6fd1;
}

.theme-orange .vdatetime-year-picker__item--selected,
.theme-orange .vdatetime-time-picker__item--selected,
.theme-orange .vdatetime-popup__actions__button {
  background: #9e6fd1;
}

.theme-orange .vdatetime-popup__actions__button {
  color: #fff;
}
</style>
<style lang="scss" scoped>
@import "../../../styles/components/Profile/Edit/user.scss";
</style>


