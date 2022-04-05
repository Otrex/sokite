<template>
  <div class="settings">
    <div class="settings__title mb-4 pl-4">
      <h5 class="text-lg-left">Notification Settings</h5>
    </div>
    <div class="settings__option">
      <ul class="p-0">
        <li
          class="d-flex align-items-center justify-content-between pr-4 pl-4 pt-3 pb-3"
          v-for="(option, index) in settings"
          :key="index"
        >
          <div>{{ option }}</div>
          <div>
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                :id="`customSwitch${index}`"
              />
              <label
                class="custom-control-label"
                :for="`customSwitch${index}`"
              ></label>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NotificationSettings',
  data() {
    return {
      settings: ['New subscription', 'Like', 'Comments'],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/Notification/notificationsettings.scss";
</style>
