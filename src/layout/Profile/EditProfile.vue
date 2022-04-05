<template>
  <div class="edit">
    <div class="row">
      <TopNav />
      <Sidebar />
      <div class="edit__user col-sm-12 col-md-12 col-lg-7">
        <div class="edit__user-container">
          <div class="contain">
            <User />
          </div>
        </div>
      </div>
      <div class="edit__system col-sm-12 col-md-12 col-lg-5">
        <div
          class="edit__system-container d-flex flex-column align-items-start justify-content-center"
        >
          <div class="contain">
            <div v-for="(option, index) in editOptions" :key="index">
              <Options :option="option" />
            </div>
          </div>
          <div class="links mt-4">
            <div v-for="(link, i) in profileLinks" :key="i" class="link">
              <Links :link="link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '../../components/HomeLayout/Fixed/Sidebar.vue';
import TopNav from '../../components/HomeLayout/Fixed/TopNav.vue';
import User from '../../components/Profile/Edit/User.vue';
import Options from '../../components/Profile/Edit/Options.vue';
import Links from '../../components/Profile/Edit/Links.vue';
import editOptions from '../../mock/editOptions';
import profileLinks from '../../mock/profileLinks';

export default {
  name: 'EditProfile',
  data() {
    return {
      editOptions,
      profileLinks,
    };
  },
  components: {
    Sidebar,
    TopNav,
    User,
    Options,
    Links,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/layout/Profile/editprofile.scss";
</style>
