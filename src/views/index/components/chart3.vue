<template>
    <echarts ref="chartRef" :option="option"></echarts>
</template>

<script setup>
import { ref, reactive, onUnmounted } from 'vue';

const chartRef = ref();

const option = ref({
    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
    legend: {
        bottom: '0%',
        itemWidth: 10,
        itemHeight: 10,
        data: ['20-29岁', '30-39岁', '40-49岁', '50岁以上'],
        textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12',
        },
    },
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            name: '年龄分布',
            type: 'pie',
            center: ['50%', '42%'],
            radius: ['40%', '60%'],
            label: { show: false },
            labelLine: { show: false },
            data: [
                { value: 400, name: '20-29岁' },
                { value: 200, name: '30-39岁' },
                { value: 200, name: '40-49岁' },
                { value: 100, name: '50岁以上' },
            ],
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
