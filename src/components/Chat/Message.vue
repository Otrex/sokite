<template>
  <div
    :class="[`message mb-4 ${message.sender_id === 1 ? `ml-auto` : `mr-auto`}`]"
  >
    <div class="message__text">{{ message.message }}</div>
    <div
      :class="[
        `message__details d-flex align-items-center mt-2 ${
          message.sender_id === 1 ? `justify-content-end` : ``
        }`,
      ]"
    >
      <div class="message__details-status mr-2" v-if="message.read">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#9f6fd2"
          class="bi bi-check2-all"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12.354 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
          <path
            d="M6.25 8.043l-.896-.897a.5.5 0 1 0-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L8.5 10.293l-.543-.543-.707.707z"
          />
        </svg>
      </div>
      <div class="message__details-date mr-2">31/4/2020</div>
      <div class="message__details-time">9:20am</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Message',
  props: {
    message: Object,
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/Chat/message.scss";
</style>
