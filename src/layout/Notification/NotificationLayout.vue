<template>
  <div class="notification row">
    <TopNav />
    <Sidebar />
    <div class="notification__views col-sm-12 col-md-12 col-lg-8">
      <div class="notification__views-container">
        <div
          v-for="(notification, index) in notifications"
          :key="index"
          class="d-none d-lg-block"
        >
          <NotificationHead :notification="notification" />
        </div>
        <OnMobile class="d-lg-none" v-if="$route.name != 'Settings'" />
        <router-view />
      </div>
    </div>
    <div
      class="notification__body col-sm-12 col-md-12 col-lg-4 d-none d-lg-block"
    >
      <div class="d-flex flex-column contain">
        <div class="notification__body-container">
          <div class="pr-4 pl-2">
            <Search />
          </div>
        </div>
        <div class="mt-auto">
          <NotificationSettings />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '../../components/HomeLayout/Fixed/Sidebar.vue';
import TopNav from '../../components/HomeLayout/Fixed/TopNav.vue';
import Search from '../../components/HomeLayout/Widgets/Search.vue';
import NotificationHead from '../../components/Notification/NotificationHead.vue';
import NotificationSettings from '../../components/Notification/NotificationSettings.vue';
import OnMobile from '../../components/Notification/OnMobile.vue';
import notifications from '../../mock/notifications';

export default {
  name: 'NotificationLayout',
  data() {
    return {
      notifications,
    };
  },
  components: {
    Sidebar,
    TopNav,
    Search,
    NotificationHead,
    NotificationSettings,
    OnMobile,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/layout/Notification/notificaton.scss";
</style>
