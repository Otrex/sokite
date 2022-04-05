<template>
  <div class="sidelinks">
    <ul class="text-left">
      <li v-for="(link, i) in links" :key="i">
        <router-link :to="link.link">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SideLinks',
  data() {
    return {
      links: [
        {
          name: 'FAQ',
          link: '',
        },
        {
          name: 'Terms',
          link: '',
        },
        {
          name: 'Privacy',
          link: '',
        },
        {
          name: 'About',
          link: '',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/Auth/sidelinks.scss";
</style>
