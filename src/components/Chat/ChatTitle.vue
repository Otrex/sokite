<template>
  <div class="title d-flex align-items-center justify-content-center pb-3">
    <div class="title__back mr-auto d-lg-none" @click="closeChat">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-arrow-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </div>
    <div class="title__details ml-3 mr-lg-0">
      <div class="title__details-namenuser d-flex align-items-center">
        <div class="title__details-namenuser--dn">
          {{ conversation.participants.name }}
        </div>
        <div class="title__details-namenuser--username ml-2">
          {{ conversation.participants.username }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChatTitle',
  props: {
    conversation: Object,
  },
  methods: {
    closeChat() {
      this.$emit('clicked', false);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/Chat/chattitle.scss";
</style>
