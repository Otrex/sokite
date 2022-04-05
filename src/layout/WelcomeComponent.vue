<template>
	<div :class="{'welcome__container':true, 'slide-up':hide}">
        <div class="welcome__message-container">
            <div class="welcome__message"><h1> Welcome USER to Social </h1></div>
            <button @click="hide = !hide"> Continue </button>
        </div>
    </div>
</template>
<script >
export default {
    name : "WelcomeComponent",
    data() {
        return {
            hide : false
        }
    },
};
</script>
<style lang="scss" scoped>
@import "../styles/layout/welcome.scss";
</style>