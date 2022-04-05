<template>

  <div>

    <div v-if="option.text === 'Security'">
      <settings-option :show-modal="settingsModal" @closeSetting="handleSettings(0)"/>
      <div class="option p-4 d-flex align-items-center" @click="handleSettings(1)">
        <div class="opt">
          <div class="option__icon">
            <img :src="option.icon"/>
          </div>
          <div class="option__name ml-3">{{ option.text }}</div>
        </div>
      </div>
    </div>

    <div v-else-if="option.text === 'Payment'">
      <payments-option :show-modal="paymentsModal" @closePayment="handlePayments(0)"/>
      <div class="option p-4 d-flex align-items-center" @click="handlePayments(1)">
        <div class="opt">
          <div class="option__icon">
            <img :src="option.icon"/>
          </div>
          <div class="option__name ml-3">{{ option.text }}</div>
        </div>
      </div>
    </div>

    <div v-else-if="option.text === 'Notifications'">
      <div class="option p-4 d-flex align-items-center">
        <div class="opt">
          <div class="option__icon">
            <img :src="option.icon"/>
          </div>
          <div class="option__name ml-3">{{ option.text }}</div>
        </div>
      </div>
    </div>
    <div v-else-if="option.text === 'Report'">
      <div class="option p-4 d-flex align-items-center">
        <div class="opt">
          <div class="option__icon">
            <img :src="option.icon"/>
          </div>
          <div class="option__name ml-3">{{ option.text }}</div>
        </div>
      </div>
    </div>

    <div v-else-if="option.text === 'Withdrawal'">
      <div class="option p-4 d-flex align-items-center">
        <div class="opt">
          <div class="option__icon">
            <img :src="option.icon"/>
          </div>
          <div class="option__name ml-3">{{ option.text }}</div>
        </div>
      </div>
    </div>

    <div v-else-if="option.text === 'Consent Preference'">
      <div class="option p-4 d-flex align-items-center">
        <div class="opt">
          <div class="option__icon">
            <img :src="option.icon"/>
          </div>
          <div class="option__name ml-3">{{ option.text }}</div>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>
<script>
import settingsOption from './Options/Settings';
import paymentsOption from './Options/Payments';

export default {
  name: 'Options',
  props: {
    option: Object,
  },
  components: {
    settingsOption,
    paymentsOption
  },
  data() {
    return {
      settingsModal: false,
      paymentsModal: false
    }
  },
  methods: {
    handleSettings(state) {
      this.settingsModal = !!state;
    },
    handlePayments(state) {
      this.paymentsModal = !!state;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/Profile/Edit/options.scss";
</style>
