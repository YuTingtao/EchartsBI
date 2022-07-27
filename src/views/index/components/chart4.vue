<template>
    <echarts ref="chartRef" :option="option"></echarts>
</template>

<script setup>
import { ref, reactive, onUnmounted } from 'vue';

const chartRef = ref();

const colors = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
const option = ref({
    grid: {
        left: '0%',
        top: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true,
    },
    xAxis: {
        show: false,
    },
    yAxis: [
        {
            show: true,
            data: ['HTML5', 'CSS3', 'JavaScript', 'VUE', 'NODE'],
            inverse: true,
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#fff',
                rich: {
                    lg: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        borderRadius: 15,
                        align: 'center',
                        width: 15,
                        height: 15,
                    },
                },
            },
        },
        {
            show: true,
            inverse: true,
            data: [702, 350, 610, 793, 664],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
        },
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [70, 34, 60, 78, 69],
            barCategoryGap: 50,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function(params) {
                        var num = colors.length;
                        return colors[params.dataIndex % num];
                    }
                },
            },
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                    position: 'inside',
                    formatter: '{c}%',
                },
            },
        },
        {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barCategoryGap: 50,
            data: [100, 100, 100, 100, 100],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 2,
                    barBorderRadius: 16,
                },
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
