<template>
    <div class="echarts" id="myChart">

    </div>
</template>

<script>
import *as echarts from "echarts"

export default {
    name: "echartsVue",
    data() {
        return {

        }
    },
    mounted() {
        this.initEcharts()
    },
    methods: {
        initEcharts() {
            // 柱状图
            const option = {
                // 统计图名
                title: {
                    text: "Echarts入门示例"
                },
                tooltip: {},
                // 图例，图例方向orient：默认横向排列，vertical表示纵向排列
                legend: {
                    data: ["销量","收入"],
                    orient: "vertical"
                },
                // x轴
                xAxis: {
                    data: ["衬衫","羊毛衫","鞋","裤子","帽子",]
                },
                // y轴
                yAxis: {},
                // type：统计图类型（bar柱状图）
                series: [{
                    name: "销量",
                    type: "bar",
                    data: [23, 43, 78, 32, 45]
                },{
                    name: "收入",
                    type: "bar",
                    data: [100, 356, 656, 342, 445]
                }]
            }

            const myChart = echarts.init(document.getElementById("myChart"))
            myChart.setOption(option)
            window.addEventListener("resize", () => {
                myChart.resize()
            })
        }
    }
}
</script>

<style scoped lang="less">
.echarts {
    width: 90%;
    height: 400px;
    padding-top: 50px;
}

</style>
