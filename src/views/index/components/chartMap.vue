<template>
    <echarts ref="chartRef" :option="option" autoresize></echarts>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { registerMap } from 'echarts/core';
import china from '@/assets/map/china.json';

const chartRef = ref();

// 注册中国地图
registerMap('china', china);

// 生成随机数
function getRrandom() {
    return Math.round(Math.random() * 500);
}

const option = ref({
    tooltip: {
        formatter: '{a}: {c}'
    },
    geo: {
        map: 'china',
        roam: false, // 不开启缩放和平移
        zoom: 1.2, // 视角缩放比例
        top: '23%',
        label: {
            show: false,
            color: '#fff',
        },
        itemStyle: {
            areaColor: 'rgba(43, 196, 243, 0.42)',
            borderColor: 'rgba(43, 196, 243, 1)',
            borderWidth: 1,
        },
        emphasis: {
            itemStyle: {
                areaColor: 'rgba(43, 145, 183, 1)',
            },
            label: {
                show: true,
                color: '#fff',
            }
        },
        select: {
            disabled: true,
            label: {
                color: '#fff',
            },
            itemStyle: {
                areaColor: 'rgba(43, 145, 183, 1)',
            },
        },
    },
    series: [
        {
            name: '人数',
            type: 'map',
            map: 'china',
            geoIndex: 0,
            data: [
                { name: '北京', value: getRrandom() },
                { name: '天津', value: getRrandom() },
                { name: '上海', value: getRrandom() },
                { name: '重庆', value: getRrandom() },
                { name: '河北', value: getRrandom() },
                { name: '河南', value: getRrandom() },
                { name: '云南', value: getRrandom() },
                { name: '辽宁', value: getRrandom() },
                { name: '黑龙江', value: getRrandom() },
                { name: '湖南', value: getRrandom() },
                { name: '安徽', value: getRrandom() },
                { name: '山东', value: getRrandom() },
                { name: '新疆', value: getRrandom() },
                { name: '江苏', value: getRrandom() },
                { name: '浙江', value: getRrandom() },
                { name: '江西', value: 800 },
                { name: '湖北', value: getRrandom() },
                { name: '广西', value: getRrandom() },
                { name: '甘肃', value: getRrandom() },
                { name: '山西', value: getRrandom() },
                { name: '内蒙古', value: getRrandom() },
                { name: '陕西', value: getRrandom() },
                { name: '吉林', value: getRrandom() },
                { name: '福建', value: getRrandom() },
                { name: '贵州', value: getRrandom() },
                { name: '广东', value: getRrandom() },
                { name: '青海', value: getRrandom() },
                { name: '西藏', value: getRrandom() },
                { name: '四川', value: getRrandom() },
                { name: '宁夏', value: getRrandom() },
                { name: '海南', value: getRrandom() },
                { name: '台湾', value: getRrandom() },
                { name: '香港', value: getRrandom() },
                { name: '澳门', value: getRrandom() },
            ]
        },
    ],
});
</script>

<style lang="scss" scoped></style>
