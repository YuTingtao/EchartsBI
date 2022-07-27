<template>
    <div class="com-panel">
        <div class="com-panel-title">
            <slot name="header">{{ title }}</slot>
        </div>
        <slot></slot>
        <div class="com-panel-border"></div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const route = useRoute()
const store = useStore()

const props = defineProps({
    title: {
        type: [String, Number]
    }
})
</script>

<style lang="scss">
.com-panel{
    position: relative;
    box-sizing: border-box;
    height: 3.08rem;
    padding: 0.15rem;
    background: rgba(255, 255, 255, 0.04) url('@/assets/image/bg_line.png') 50% 50% no-repeat;
    background-size: cover;
    border: 1px solid rgba(25, 186, 139, 0.17);
    & + &{
        margin-top: 0.15rem;
    }
    &:before, &:after{
        content: '';
        position: absolute;
        top: 0;
        width: 0.15rem;
        height: 0.15rem;
        border-top: 2px solid #02a6b5;
    }
    &:before{
        left: 0;
        border-left:  2px solid #02a6b5;
    }
    &:after{
        right: 0;
        border-right:  2px solid #02a6b5;
    }
    .echarts{
        height: 2.4rem;
    }
}
.com-panel-border{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    &:before, &:after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 0.15rem;
        height: 0.15rem;
        border-bottom: 2px solid #02a6b5;
    }
    &:before{
        left: 0;
        border-left:  2px solid #02a6b5;
    }
    &:after{
        right: 0;
        border-right:  2px solid #02a6b5;
    }
}
.com-panel-title{
    margin-top: -0.15rem;
    line-height: 0.5rem;
    font-size: 0.18rem;
    text-align: center;
    color: #fff;
}
</style>
