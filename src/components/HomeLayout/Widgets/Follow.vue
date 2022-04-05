<template>
  <div class="follow mt-5">
    <p class="text-left">Who to Follow</p>
    <div id="follow__now" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators slides__indicator">
        <li data-target="#follow__now" data-slide-to="0" class="active"></li>
        <li data-target="#follow__now" data-slide-to="1"></li>
        <li data-target="#follow__now" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner slides__inner">
        <div
          :class="[`carousel-item ${index + 1 === 1 ? `active` : ``}`]"
          v-for="(tip, index) in 3"
          :key="index"
        >
          <div class="slides__inner-add">
            <img src="/img/icons/add icon.svg" />
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="slides__inner-avatar">
              <img src="/img/slides/QSO-452.jpg" />
            </div>
            <div class="slides__inner-details mt-4">
              <div class="slides__inner-details--dn">Joker</div>
              <div class="slides__inner-details--username">@jokermo</div>
              <div class="slides__inner-details--bio">
                I really can’t help but relish knowledge, art and music
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev slides__control"
        href="#follow__now"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next slides__control"
        href="#follow__now"
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
export default {
  name: 'FollowNow',
  props: {
    people: Array,
  },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/HomeLayout/Widgets/follow.scss";
</style>
