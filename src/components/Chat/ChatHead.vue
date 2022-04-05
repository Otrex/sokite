<template>
  <div class="sender d-flex align-items-center pb-3 pt-3 mb-3">
    <div
      class="sender__avatar d-flex align-items-center justify-content-center"
    >
      {{ conversation.participants.initials }}
    </div>
    <div class="sender__details ml-3">
      <div class="sender__details-namenuser d-flex align-items-center">
        <div class="sender__details-namenuser--dn">
          {{ conversation.participants.name }}
        </div>
        <div class="sender__details-namenuser--username ml-2">
          {{ conversation.participants.username }}
        </div>
      </div>
      <div class="sender__details-message text-left">
        {{ conversation.messages[0].message }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChatHead',
  props: {
    conversation: Object,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/Chat/chathead.scss";
</style>
