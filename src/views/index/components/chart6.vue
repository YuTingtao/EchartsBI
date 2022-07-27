<template>
    <echarts ref="chartRef" :option="option"></echarts>
</template>

<script setup>
import { ref, reactive, onUnmounted } from 'vue';

const chartRef = ref();

const option = ref({
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9'],
    legend: {
        bottom: '0%',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 10,
        },
    },
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            name: '点位统计',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '42%'],
            roseType: 'radius',
            top: '4%',
            bottom: '10%',
            data: [
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '深圳' },
                { value: 42, name: '广东' },
            ],
            label: {
                fontSize: 12,
                color: '#fff',
            },
            labelLine: {
                length: 10,
                length2: 10,
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
