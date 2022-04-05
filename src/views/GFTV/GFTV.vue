<template>
  <div class="home">
    <div class="home__posts" v-for="(post, index) in posts" :key="index">
      <GFTVPost :post="post" />
    </div>
  </div>
</template>
<script>
import GFTVPost from '../../components/HomeLayout/GFTVPost.vue';
import posts from '../../mock/posts';

export default {
  name: 'GFTV',
  data() {
    return {
      posts,
    };
  },
  components: {
    GFTVPost,
  },
};
</script>
