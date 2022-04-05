<template>
  <div class="onmobile">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          class="nav-link active"
          id="nav-all-tab"
          data-toggle="tab"
          href="#nav-all"
          role="tab"
          aria-controls="nav-all"
          aria-selected="true"
          >All</a
        >
        <a
          class="nav-link"
          id="nav-subscribed-tab"
          data-toggle="tab"
          href="#nav-subscribed"
          role="tab"
          aria-controls="nav-subscribed"
          aria-selected="false"
          >Subscribed</a
        >
        <a
          class="nav-link"
          id="nav-unsubscribed-tab"
          data-toggle="tab"
          href="#nav-unsubscribed"
          role="tab"
          aria-controls="nav-unsubscribed"
          aria-selected="false"
          >Unsubscribed</a
        >
      </div>
    </nav>
    <div class="tab-content mt-1" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-all"
        role="tabpanel"
        aria-labelledby="nav-all-tab"
      >
        <div v-for="(notification, index) in notifications" :key="index">
          <NotificationHead :notification="notification" />
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-subscribed"
        role="tabpanel"
        aria-labelledby="nav-subscribed-tab"
      >
        <div v-for="(notification, index) in notifications" :key="index">
          <NotificationHead :notification="notification" />
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-unsubscribed"
        role="tabpanel"
        aria-labelledby="nav-unsubscribed-tab"
      >
        <div v-for="(notification, index) in notifications" :key="index">
          <NotificationHead :notification="notification" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NotificationHead from './NotificationHead.vue';
import notifications from '../../mock/notifications';

export default {
  name: 'OnMobileNotification',
  data() {
    return {
      notifications,
    };
  },
  components: {
    NotificationHead,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/Notification/onmobile.scss";
</style>
