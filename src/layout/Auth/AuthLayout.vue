<template>
  <div class="auth">
    <div class="row">
      <Slides class="d-none d-lg-block" />
      <div class="col-sm-12 col-md-12 col-lg-8 auth__views-con">
        <Header />
        <div class="container">
          <div
            class="auth__views d-flex align-items-center justify-content-center flex-column"
          >
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slides from '../../components/Auth/Slides.vue';
import Header from '../../components/Auth/Header.vue';

export default {
  name: 'AuthLayout',
  components: {
    Slides,
    Header,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/layout/Auth/_authLayout.scss";
</style>
