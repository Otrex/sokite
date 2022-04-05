<template>
  <div class="post">
    <div
      class="post__type d-flex align-items-center justify-content-center"
      v-if="post.isVideo"
    >
      <img src="/img/custom_icons/play icon.svg" />
    </div>
    <div class="post__thumbnail">
      <img :src="post.thumbnail" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Post',
  props: {
    post: Object,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/Profile/post.scss"
</style>
