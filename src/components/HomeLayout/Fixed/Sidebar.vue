<template>
  <div class="sidebar position-fixed">
    <div class="sidebar__links">
      <ul
        class="d-flex align-items-center justify-content-around flex-column pt-5"
      >
        <li
          v-for="(link, index) in links"
          :key="index"
          class="text-uppercase mb-5"
        >
          <router-link :to="link.link">
            <div><img :src="link.icon" /></div>
            <div class="mt-1">
              {{ link.name }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      links: [
        {
          name: 'Home',
          link: '/',
          icon: '/img/custom_icons/home.svg',
        },
        {
          name: 'GF TV',
          link: '/gf-tv',
          icon: '/img/custom_icons/gftv.svg',
        },
        {
          name: 'Dm',
          link: '/dm',
          icon: '/img/custom_icons/dm.svg',
        },
        {
          name: 'Alerts',
          link: '/notifications',
          icon: '/img/custom_icons/notification.svg',
        },
        {
          name: 'Profile',
          link: '/profile',
          icon: '/img/custom_icons/profile.svg',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/HomeLayout/Fixed/sidebar.scss";
</style>
