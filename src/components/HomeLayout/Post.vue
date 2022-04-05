<template>
  <div class="post mb-5">
    <div class="post__head">
      <div class="post__head-details d-flex align-items-center">
        <div class="post__head-details--avatar align-self-start">
          <div
            class="d-flex align-items-center justify-content-center"
            v-if="!post.isAvatar"
          >
            {{ post.initials }}
          </div>
          <img :src="post.avatar" v-else />
        </div>
        <div
          class="post__head-details--hd d-flex flex-column align-items-start ml-2"
        >
          <div class="post__head-details--hd-handle">
            <span class="post__head-details--hd-handle--dn">
              {{ post.displayName }}
            </span>
            <span class="post__head-details--hd-handle--username">{{
              post.username
            }}</span>
          </div>
          <div class="post__head-details--hd-desc d-none d-lg-block">
            {{ post.postText }}
          </div>
        </div>
        <div class="post__head-datenmore ml-auto d-flex align-items-center">
          <div class="post__head-datenmore--date d-none d-lg-block">
            {{ post.date }}
          </div>
          <div class="post__head-datenmore--more" @click="showOptions = !showOptions">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#9f6fd2"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
              />
            </svg>
          </div>
          <x-options :options="xoptions" :show="showOptions"></x-options>
        </div>
      </div>
    </div>
    <div class="post__body">
      <div class="position-absolute post__body-bookmark">
        <img src="/img/custom_icons/bookmark-icon.svg" />
      </div>
      <div class="post__body-image">
        <!--  <img :src="post.postImage" /> --><m-img :media="post.postImage" :show="false" />
      </div>
      <div class="post__body-comment-list">
        <Comment :postId="post.postId" :postImg="post.avatar" :postInitials="post.initials"/>
      </div>
      <div class="post__body-date text-left mt-4 d-lg-none d-xl-none">
        {{ post.date }}
      </div>
      <div class="post__body-action position-absolute">
        <div class="post__body-action--like mb-4">
          <div class="mb-2">
            <img src="/img/custom_icons/like_coloured.svg" />
          </div>
          <div class="post__body-action--like-counter">{{ post.likes }}</div>
        </div>
        <div class="post__body-action--comment">
          <div class="mb-3"><img src="/img/custom_icons/comment.svg" /></div>
          <div class="post__body-action--comment-counter">
            {{ post.comments }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Comment from "./Widgets/Comment.vue"
import MediaViewer from "./Widgets/MediaViewer.vue"

export default {
  name: 'Post',
  props: {
    post: Object,
  },
  components : {
    Comment,
    'm-img': MediaViewer
  },
  data() {
    return {
      xoptions : [
        { 
          postId : this.post.postId,
          label:'Delete Post', 
          action : this.deleteAction
        },
        { 
          postId : this.post.postId,
          label:'Save Post', 
          action : this.saveAction
        }
      ],
      showOptions : false
    }
  },
  methods : {
    deleteAction : function(postId){
      alert('Deleted Post ' + postId)
      this.showOptions = !this.showOptions
    },
    saveAction : function(postId){
      alert('Saved Post ' + postId)
      this.showOptions = !this.showOptions
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/HomeLayout/post.scss";
</style>
