<template>
  <div class="header">
    <div class="header__cover d-none d-lg-block">
      <img :src="user.coverPhoto" />
    </div>
    <div
      class="header__details d-flex align-items-center justify-content-between"
    >
      <div
        class="header__details--user d-flex flex-column justify-content-center align-items-center"
      >
        <div class="header__details--user-avatar">
          <div class="header__details--user-avatar--add">
            <img src="/img/icons/add icon.svg" />
          </div>
          <img :src="user.avatar" />
        </div>
        <div class="header__details--user-dn">{{ user.displayName }}</div>
        <div class="header__details--user-username mt-n2">
          {{ user.username }}
        </div>
      </div>
      <div
        class="header__details--counts mt-auto mb-5 d-flex align-items-center justify-content-around"
      >
        <div class="header__details--counts-count">
          <div class="header__details--counts-count--counter">
            {{ user.posts }}
          </div>
          <div class="header__details--counts-count--text">Posts</div>
        </div>
        <div class="header__details--counts-count">
          <div class="header__details--counts-count--counter">
            {{ user.subscribers }}
          </div>
          <div class="header__details--counts-count--text">Subscribers</div>
        </div>
        <div class="header__details--counts-count">
          <div class="header__details--counts-count--counter">
            {{ user.following }}
          </div>
          <div class="header__details--counts-count--text">Following</div>
        </div>
      </div>
      <div class="header__details--btn mt-auto">
        <router-link to="/profile/edit">
          <button>Edit Profile</button>
        </router-link>
        <router-link to="/profile/edit">
          <button style="margin-left: 10px;">Preferences</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import user from '../../mock/profile';

export default {
  name: 'ProfileHeader',
  data() {
    return {
      user,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/Profile/header.scss";
</style>
