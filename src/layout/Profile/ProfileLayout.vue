<template>
  <div class="profile">
    <TopNav />
    <Sidebar />
    <div class="profile__views col-sm-12 col-md-12 col-lg-12">
      <Header />
      <div class="profile__views-layout-ctrl">
        <span v-if="grid_view">List View</span><span v-if="!grid_view">Grid View</span>
        <div :class="{icon_container:true, 'grid__view':!grid_view}" @click="grid_view=!grid_view"><img src="/img/custom_icons/menu.svg"></div>
      </div>
      <div :class="{'profile__views-container': true, 'full':grid_view }">
        <div
          class="profile__views-container--post "
          v-for="(post, index) in profilePost"
          :key="index"
        >
          <Post :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '../../components/HomeLayout/Fixed/Sidebar.vue';
import TopNav from '../../components/HomeLayout/Fixed/TopNav.vue';
import Header from '../../components/Profile/Header.vue';
import Post from '../../components/Profile/Post.vue';
import profilePost from '../../mock/profilePost';


export default {
  name: 'ProfileLayout',
  data() {
    return {
      profilePost,
      grid_view: false
    };
  },
  components: {
    Sidebar,
    TopNav,
    Header,
    Post,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/layout/Profile/profilelayout.scss";
</style>
