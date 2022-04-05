<template>
    <div :class="{'media-viewer': enlarge }" @click="enlarge = !enlarge">
        <div class="media-viewer__container" >
            <div class="close-btn"></div>
            <img :src="media" />
        </div>
    </div>
</template>
<script>

export default {
    name : "MediaViewer",
    props : {
        media : String,
        show : Boolean
    },
    data() {
        return {
            enlarge : false
        }
    }
};
</script>
<style lang="scss" scoped>
@import '../../../styles/components/HomeLayout/Widgets/media-viewer.scss';
</style>