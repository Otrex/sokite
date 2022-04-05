<template>
  <div class="tips mt-5">
    <p class="text-left">Tips</p>
    <div id="slides" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators slides__indicator">
        <li data-target="#slides" data-slide-to="0" class="active"></li>
        <li data-target="#slides" data-slide-to="1"></li>
        <li data-target="#slides" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner slides__inner">
        <div
          :class="[`carousel-item ${index + 1 === 1 ? `active` : ``}`]"
          v-for="(tip, index) in tips"
          :key="index"
        >
          {{ tip }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tips',
  data() {
    return {
      tips: [
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        'Long established fact that a reader will be distracted by the readable content of a page',
        'A reader will be distracted by the readable content of a page when looking at its layout',
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/HomeLayout/Widgets/tip.scss";
</style>
