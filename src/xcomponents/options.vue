<template>
    <div class="options">
        <div :class="{'options__container': true, 'xclose' : !show }">
            <ul>
                <li v-for="(opt, key) in options" :key="key"><a @click='opt.action(opt.postId)'>{{opt.label}}</a></li>
            </ul>
        </div>
    </div>
</template>
<script >
    export default {
        name : "Options",
        props : {
            options : Array,
            show : Boolean
        }
    };
</script>
<style lang="scss" scoped >
.options {
    position: relative;
    &__container {
        position: absolute;
        width: 200px;
        border: 1px solid rgba($primary, $alpha : .5);
        right: 0px;
        top: 20px;
        z-index: 1000;
        background: white;
        border-radius: 8px;

        & ul {
            margin: 0px;
            padding: 0px;
            list-style:none;

            & li {
                border-bottom: 1px solid rgba($primary, $alpha : .3);
                &::last-child {
                    border-bottom: none;
                }

                & a {
                    display: block;
                    padding: 8px;
                }
            }
        }
    }
}

.xclose {
    display: none;
}
</style>