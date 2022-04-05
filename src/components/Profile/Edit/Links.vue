<template>
  <div class="links">
    <div class="profilelinks link" @click="handle_function_call(link.handler)">
      <div class="link__name ">{{ link.text }}</div>
      <div class="link__icon ml-2">
        <img :src="link.icon" />
      </div>
    </div>
  </div>
</template>
<script>
import User from "../../../model/user";

export default {
  name: 'Links',
  props: {
    link: Object
  },
  data() {
    return {
      hovered: false
    };
  },
  methods: {
    handleLogout(){
      this.$store.dispatch('auth/logout').then(
        () => {
          this.$router.push({name:'Sign In'});
        }
      );
    },
    handle_function_call(f) {
      !!f ? this[f]():'';
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/Profile/Edit/links.scss";
</style>
