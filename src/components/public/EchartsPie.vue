<template>
    <div class="echarts" id="myChart">

    </div>
</template>

<script>
import * as echarts from "echarts";

export default {
    name: "EchartsPie",
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
                    text: "Echarts饼图示例",
                    left: "center"
                },
                // 图例
                legend: {
                    date: ["北京", "上海", "南京", "武汉", "成都", "天津"],
                    top: '30%',
                    right: '10%',
                    orient: "vertical"
                },
                // type：统计图类型（pie饼状图）
                series: [{
                    type: "pie",
                    label: {
                        show: true,
                        formatter: "{b} : {c} ({d}%)"
                    },
                    // 空心
                    // radius: ["30%", "50%"],
                    // 实心
                    radius: "30%",
                    data: [{
                        value: 200,
                        name: "北京"
                    },{
                        value: 300,
                        name: "上海"
                    },{
                        value: 100,
                        name: "南京"
                    },{
                        value: 200,
                        name: "武汉"
                    },{
                        value: 100,
                        name: "成都"
                    },{
                        value: 100,
                        name: "天津"
                    }]
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

