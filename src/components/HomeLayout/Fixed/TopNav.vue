<template>
  <div
    class="topNav position-sticky d-flex align-items-center justify-content-lg-center"
  >
    <div
      class="topNav__add d-lg-none d-xl-none"
      v-if="!rejectRoutes.includes($route.name)"
      :style="`${rejectRoutes.includes($route.name) ? `opacity: 0;visibility:none` : ``}`"
    >
      <div v-if="endRoutes.includes($route.name)">
        <a @click="goBack">
          <img src="/img/custom_icons/back.svg"/>
        </a>
      </div>
      <div v-else>
        <router-link to="/create"  v-if="!expectedRoutes.includes($route.path)">
          <img src="/img/custom_icons/add icon.svg"/>
        </router-link>
        <!--      <img
                src="/img/custom_icons/add icon.svg"
                v-if="!expectedRoutes.includes($route.path)"
              />-->
        <router-link to="/notifications/settings" v-else>
          <img src="/img/custom_icons/consent preference.svg" />
        </router-link>
      </div>

    </div>
<!--    <div v-else>-->
<!--&lt;!&ndash;      <router-link :to="$router.go(-1)">-->
<!--        <svg class="bi bi-arrow-left" width="32" height="32" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">-->
<!--          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"/>-->
<!--        </svg>-->
<!--      </router-link>&ndash;&gt;-->
<!--      <svg class="bi bi-arrow-left" width="32" height="32" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">-->
<!--        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"/>-->
<!--      </svg>-->
<!--    </div>-->

    <div class="topNav__logo">Social Media</div>
    <div class="topNav__search d-lg-none d-xl-none">
      <label for="showSearch">
        <img src="/img/custom_icons/search icon.svg" class="search-btn-mobile" @click="show_search = !show_search" />
      </label>
    </div>
    <input type="checkbox" id="showSearch" style="display:none;">
    <Search class="search-bar-panel"/>
  </div>
</template>
<script>
import Search from '../Widgets/Search.vue'
export default {
  name: 'TopNav',
  data() {
    return {
      show_search : false,
      expectedRoutes: ['/notifications', '/notifications/settings'],
      rejectRoutes: ['Profile', 'Edit Profile'],
      endRoutes: ['CreatePostMobile','Settings'],
    };
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  },
  components :{
    Search
  }

};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/HomeLayout/Fixed/topnav.scss";
</style>
