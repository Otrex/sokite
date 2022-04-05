<template>
  <div class="compose d-flex align-items-center">
    <div class="compose__attach mr-4">
      <img src="/img/custom_icons/file icon.svg" />
    </div>
    <div class="compose__text">
      <input
        type="text"
        class="form-control"
        placeholder="Start a message..."
        aria-describedby="basic-addon2"
      />
    </div>
    <div class="compose__send ml-auto">
      <img src="/img/custom_icons/send icon.svg" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Compose',
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/Chat/compose.scss";
</style>
