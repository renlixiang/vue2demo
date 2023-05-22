<template>
    <div class="echarts" id="myChart">
    </div>
</template>

<script>
import * as echarts from "echarts";

export default {
    name: "EchartsLine",
    data() {
        return {

        }
    },
    mounted() {
       this.initEcharts()

    },
    methods: {
        initEcharts() {

            const option = {
                title: {
                    text: 'ECharts折线图示例',
                    right: '10%',
                    top: '10%'
                },
                toolbox: {
                    feature: {
                        saveAsImage:{}
                    }
                },
                // 图表距离上下左右的距离
                grid: {
                    bottom: '10%',
                    top: '10%',
                    left: '10%',
                    right: '10%'
                },
                // hover效果
                tooltip: {
                    trigger: "axis",
                },
                legend: {
                    data: ["温度"]
                },
                // x轴设置
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },

                // y轴设置
                yAxis: {
                    type: "value",
                },
                series: [{
                    name: "温度",
                    type: "line",
                    // 取消折点圆圈
                    symbol: "none",
                    // 取平滑曲线
                    smooth: true,
                    // stack: "总量",
                    // animation: false,
                    // 折线数据
                    data: ["2","4","6","3","1","-2","0"],
                }]
            }

            const myChart = echarts.init(document.getElementById("myChart"))
            myChart.setOption(option)
            window.addEventListener("resize", () => {
                myChart.resize()
            })
        }

    },
}
</script>

<style scoped lang="less">
.echarts {
    width: 80%;
    height: 400px;
    //padding-top: 50px;
    //background-color: #666666;
}

</style>
