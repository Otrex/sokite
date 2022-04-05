<template>
  <div class="whotofollow pb-5">
    <div>
      <!-- <p class="text-left">People to follow</p> -->
      <div style="padding-top: 50px">&nbsp;</div>
    </div>
    <div class="con">
      <!-- Maximum Columns Per Row is 10 Check Style sheet to increse or decrease -->
      <div
        class="whotofollow__card"
        v-for="(person, index) in people"
        :key="index"
      >
        <div class="whotofollow__card-more">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#000"
            class="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
            />
          </svg>
        </div>
        <div
          class="whotofollow__card--title d-flex align-items-start justify-content-center flex-column"
        >
          <div class="whotofollow__card--title-dn">
            {{ person.displayName }}
          </div>
          <div class="whotofollow__card--title-username">
            {{ person.username }}
          </div>
        </div>
        <img :src="person.avatar" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WhoToFollow',
  props: {
    people: Array,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/HomeLayout/whotofollow.scss";
</style>
