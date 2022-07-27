<template>
    <div class="page-index">
        <div class="page-head">
            <h2 class="title">可视化展板-ECharts</h2>
            <com-time></com-time>
        </div>
        <div class="page-main">
            <div class="column">
                <com-panel title="就业行业">
                    <chart1></chart1>
                </com-panel>
                <com-panel title="人员变化">
                    <chart2></chart2>
                </com-panel>
                <com-panel title="年龄分布">
                    <chart3></chart3>
                </com-panel>
            </div>
            <div class="column column-middle">
                <com-panel class="middle-top">
                    <div class="item">
                        <div class="num">135800</div>
                        <div>前端需求人数</div>
                    </div>
                    <div class="item">
                        <div class="num">158800</div>
                        <div>市场供应人数</div>
                    </div>
                </com-panel>
                <div class="map-box">
                    <div class="map1"></div>
                    <div class="map2"></div>
                    <div class="map3"></div>
                    <div>rgba(43, 196, 243, 0.42)</div>
                </div>
            </div>
            <div class="column">
                <com-panel title="技能掌握">
                    <chart4></chart4>
                </com-panel>
                <com-panel title="播放量">
                    <chart5></chart5>
                </com-panel>
                <com-panel title="地区分布">
                    <chart6></chart6>
                </com-panel>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import chart1 from './components/chart1.vue'
import chart2 from './components/chart2.vue'
import chart3 from './components/chart3.vue'
import chart4 from './components/chart4.vue'
import chart5 from './components/chart5.vue'
import chart6 from './components/chart6.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()


</script>

<style lang="scss" scoped>
@import '@/assets/scss/index/index.scss';
</style>
