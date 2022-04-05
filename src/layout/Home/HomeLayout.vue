<template>
  <div class="homeLayout row">
    <TopNav />
    <Sidebar />
    <div class="homeLayout__views col-sm-12 col-md-12 col-lg-8">
      <div class="homeLayout__views-container">
        <router-view />
      </div>
    </div>
    <div class="homeLayout__widgets col-sm-12 col-md-12 col-lg-4 d-none d-lg-block">
      <div class="homeLayout__widgets-container position-sticky">
        <div class="contain">
          <Search />
          <WhoToFollow :people="people"/>
          <CreatePost v-if="$route.name !== `GF TV`" />
          <FollowNow v-else />
          <Tips />
          <div class="spacer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '../../components/HomeLayout/Fixed/Sidebar.vue';
import TopNav from '../../components/HomeLayout/Fixed/TopNav.vue';
import Search from '../../components/HomeLayout/Widgets/Search.vue';
import Tips from '../../components/HomeLayout/Widgets/Tips.vue';
import CreatePost from '../../components/HomeLayout/Widgets/CreatePost.vue';
import FollowNow from '../../components/HomeLayout/Widgets/Follow.vue';
import people from '../../mock/whotofollow';
import WhoToFollow from '../../components/HomeLayout/WhoToFollow.vue';

export default {
  name: 'HomeLayout',
  data() {
    return {
      people : people
    }
  },
  components: {
    WhoToFollow,
    Sidebar,
    TopNav,
    Search,
    Tips,
    CreatePost,
    FollowNow,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/layout/Home/homeLayout.scss";
</style>
