<template>
  <div class="home">
    <div v-for="(post, index) in posts" :key="index" class="home__posts">
      <Post :post="post"/>
    </div>
    <div>
      <!-- <WhoToFollow :people="people"/> -->
    </div>
  </div>
</template>
<script>
import Post from '../../components/HomeLayout/Post.vue';
import WhoToFollow from '../../components/HomeLayout/WhoToFollow.vue';
import posts from '../../mock/posts';
import people from '../../mock/whotofollow';

export default {
  name: 'Home',
  data() {
    return {
      posts,
      people,
    };
  },
  components: {
    Post,
    WhoToFollow,
  },
};
</script>

