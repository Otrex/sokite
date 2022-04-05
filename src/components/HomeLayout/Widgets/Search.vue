<template>
  <div class="search d-flex align-items-center">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="search users"
        aria-label="search users"
        v-model='q'
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <img
          class="input-group-text"
          id="basic-addon2"
          src="/img/custom_icons/search icon.svg"
        />
      </div>
    </div>

    <div class="result">
      <ul>
        <li v-for="search in filteredList" class="result__list" >
          <div class="result__avatar">
            <img :src="search.avatar" />
          </div>
          <div class="result__info">
            <div class="result__info-name">{{search.displayName}}</div>
            <div class="result__info-username">{{search.username}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import people from "../../../mock/search"
export default {
  name: 'Search',
  data () {
    return {
      q : '',
      searchResult : people
    }
  },
  computed : {
    filteredList() {
      if (this.q == '') return ''
      return this.searchResult.filter(search => {
        return search.username.toLowerCase().includes(this.q.toLowerCase())
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/HomeLayout/Widgets/search.scss";
</style>
