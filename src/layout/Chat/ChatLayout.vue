<template>
  <div class="chat row">
    <TopNav />
    <Sidebar />
    <div class="chat__views col-sm-12 col-md-12 col-lg-6">
      <div class="chat__views-container">
        <div class="chat__views-container--search mb-3 d-none d-lg-block">
          <Search />
        </div>
        <div class="chat__view-heads">
          <div
            class="chat__view-heads--head"
            v-for="(conversation, index) in conversations"
            :key="index"
            @click="selectChat(conversation, index)"
            ref="chat__head"
          >
            <ChatHead :conversation="conversation" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="chat__body col-sm-12 col-md-12 col-lg-6"
      :class="{ inDm: inDm }"
    >
      <div class="chat__body-container">
        <div class="chat__body-container--title mb-4">
          <ChatTitle
            :conversation="inView"
            v-if="Object.keys(inView).length != 0"
            @clicked="closeChat"
          />
        </div>
        <div
          class="chat__body-container--placeholder d-flex align-items-center justify-content-center"
          v-if="Object.keys(inView).length === 0"
        >
          Select chat to start a conversation
        </div>
        <div class="contain">
          <div
            class="chat__body-container--message"
            v-for="(message, i) in inView.messages"
            :key="i"
          >
            <Message :message="message" />
          </div>
        </div>
        <div
          class="chat__body-container--compose"
          v-if="Object.keys(inView).length != 0"
        >
          <Compose />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '../../components/HomeLayout/Fixed/Sidebar.vue';
import TopNav from '../../components/HomeLayout/Fixed/TopNav.vue';
import Search from '../../components/HomeLayout/Widgets/Search.vue';
import ChatHead from '../../components/Chat/ChatHead.vue';
import ChatTitle from '../../components/Chat/ChatTitle.vue';
import Message from '../../components/Chat/Message.vue';
import Compose from '../../components/Chat/Compose.vue';
import conversations from '../../mock/conversations';

export default {
  name: 'ChatLayout',
  data() {
    return {
      conversations,
      inView: {},
      inDm: false,
    };
  },
  components: {
    Sidebar,
    TopNav,
    Search,
    ChatHead,
    ChatTitle,
    Message,
    Compose,
  },
  methods: {
    selectChat(conversation, index, type) {
      this.$refs.chat__head.forEach((chat) => {
        const classes = [...chat.classList];
        if (type === 'removeAll') {
          chat.classList.remove('active');
          return;
        }
        if (classes.includes('active')) {
          chat.classList.remove('active');
          return;
        }
        this.$refs.chat__head[index].classList.add('active');
        this.inDm = true;
      });
      this.inView = conversation;
    },
    closeChat(value) {
      this.inDm = value;
      this.selectChat([], 0, 'removeAll');
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/layout/Chat/chat.scss";
</style>
