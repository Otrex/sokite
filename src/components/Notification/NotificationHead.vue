<template>
  <div class="notification d-flex align-items-center pb-3 pt-3 mb-3">
    <div
      class="notification__avatar d-flex align-items-center justify-content-center"
    >
      {{ notification.initials }}
    </div>
    <div class="notification__details ml-3">
      <div class="notification__details-namenuser d-flex align-items-center">
        <div class="notification__details-namenuser--dn">
          {{ notification.name }}
        </div>
        <div class="notification__details-namenuser--username ml-2">
          {{ notification.username }}
        </div>
      </div>
      <div class="notification__details-message text-left">
        {{ notification.message }}
      </div>
    </div>
    <div class="notification__time ml-auto">{{ notification.time }}</div>
  </div>
</template>
<script>
export default {
  name: 'NotificationHead',
  props: {
    notification: Object,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/Notification/notificationhead.scss";
</style>
