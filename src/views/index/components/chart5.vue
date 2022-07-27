<template>
    <echarts ref="chartRef" :option="option"></echarts>
</template>

<script setup>
import { ref, reactive, onUnmounted } from 'vue';

const chartRef = ref();

const option = ref({
    color: ['#0184d5', '#00d887'],
    grid: {
        left: '0%',
        top: '20%',
        right: '2%',
        bottom: '4%',
        containLabel: true,
    },
    legend: {
        textStyle: {
            color: '#4c9bfd',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
        },
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                alignWithLabel: true,
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12,
                },
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
                formatter: '{value}',
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12,
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                },
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                },
            },
        },
    ],
    series: [
        {
            name: '播放量',
            type: 'line',
            smooth: true,
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        },
        {
            name: '转发量',
            type: 'line',
            smooth: true,
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
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
