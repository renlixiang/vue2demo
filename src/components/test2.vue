<template>
    <div class="container" :style="{'background-color': this.$store.state.bgColor}">
        <div class="box" :style="{'background-color': this.$store.state.mainColor}">
<!--            <echartsVue></echartsVue>-->
            <EchartsLine></EchartsLine>
        </div>
    </div>
</template>

<script>
// import echartsVue from "@/components/public/EchartsBar";
import EchartsLine from "@/components/public/EchartsLine"
export default {
    name: "test2Vue",
    components: {
        // echartsVue
        EchartsLine
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped lang="less">

.container {
    width: 100%;
    height: 100%;
    background-color: #dfe4ed;

    .box {
        width: 92%;
        height: 85%;
        margin: auto;
        background-color: #f0f9eb;
        box-shadow: #666666;
        overflow-y: auto;

    }

}
</style>
