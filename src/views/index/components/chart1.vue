<template>
    <echarts ref="chartRef" :option="option" autoresize></echarts>
</template>

<script setup>
import { ref, reactive, onUnmounted } from 'vue';

const chartRef = ref();

const option = ref({
    color: ['#409eff'],
    grid: {
        left: '0%',
        top: '4%',
        right: '2%',
        bottom: '4%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    xAxis: [
        {
            type: 'category',
            data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
            axisTick: {
                alignWithLabel: true,
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, .6)',
            },
            axisLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: true,
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, .6)',
                formatter: '{value}',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, .1)',
                },
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, .1)',
                },
            },
        },
    ],
    series: [
        {
            name: '就业人数',
            type: 'bar',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            barWidth: '35%',
            itemStyle: {
                borderRadius: 4,
            },
        },
    ],
});

// 重新调整大小
function handleResize() {
    if (chartRef.value) {
        chartRef.value.resize();
    }
}
window.addEventListener('resize', handleResize);
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style lang="scss" scoped></style>
