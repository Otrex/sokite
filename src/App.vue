<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <welcome-component ></welcome-component>
    <router-view />
  </div>
</template>
<script>
import WecomeComponent from './layout/WelcomeComponent'
export default {
  name : "App",
  components : {
    "welcome-component" : WecomeComponent
  }
};
</script>
<style lang="scss">
@import './styles/effects/effects.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  /*border-radius: 5px;*/
  opacity: .5;
  background-color: rgba(50,50,50,.5);
  transition: all .3s;
}

::-webkit-scrollbar-thumb:hover {
  opacity: 1;
}
::-webkit-scrollbar-track {
  /*background-color: rgb(255,255,255);*/
  box-shadow: inset 0px 0px 6px rgba(0,0,0,.0);
  transition: all .3s;
}

::-webkit-scrollbar-track:hover {
  background-color: rgb(250,250,250);
  box-shadow: inset 0px 0px 6px rgba(0,0,0,.2);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.alert {
  position: relative;
  padding: .2rem .2rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
}


</style>
