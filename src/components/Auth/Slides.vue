<template>
  <div class="col-sm-12 col-md-6 col-lg-4 slides">
    <SideLinks />
    <div id="slides" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators slides__indicator">
        <li data-target="#slides" data-slide-to="0" class="active"></li>
        <li data-target="#slides" data-slide-to="1"></li>
        <li data-target="#slides" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner slides__inner">
        <div
          :class="[`carousel-item ${index + 1 === 1 ? `active` : ``}`]"
          v-for="(slide, index) in 3"
          :key="index"
        >
          <img
            :src="`/img/slides/QSO-45${index + 1}.jpg`"
            class="d-block w-100"
            :alt="`QSO-45${index + 1}`"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev slides__control"
        href="#slides"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next slides__control"
        href="#slides"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
import SideLinks from './SideLinks.vue';

export default {
  name: 'Slides',
  components: {
    SideLinks,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/Auth/slides.scss";
</style>
