<template>
    <div class="container" :style="{'background-color': this.$store.state.bgColor}">
        <div class="box" :style="{'background-color': this.$store.state.mainColor}">
            <div class="special-effects" >
                <h2>背景</h2>
                <div class="list">
                    <div class="block">
                        <el-color-picker v-model="topColor"></el-color-picker>
                        <p>顶部颜色</p>
                    </div>
                    <div class="block">
                        <el-color-picker v-model="menuColor"></el-color-picker>
                        <p>菜单栏颜色</p>
                    </div>
                    <div class="block">
                        <el-color-picker v-model="mainColor"></el-color-picker>
                        <p>背景颜色</p>
                    </div>
                    <div class="block">
                        <el-color-picker v-model="bgColor"></el-color-picker>
                        <p>内容区颜色</p>
                    </div>

<!--                    <div class="cobweb">-->
<!--                        <img src="../assets/cobweb.png" alt="">-->
<!--                        <span>动态蜘蛛网</span>-->
<!--                    </div>-->
                </div>
            </div>
            <div class="special-effects">
                <h2>鼠标点击效果</h2>
                <div class="list">
                    <div class="cobweb" @click="changeMouseStyle('none')">
                        <img src="../assets/blank.png" alt="">
                        <span>无效果</span>
                    </div>
                    <div class="cobweb" @click="changeMouseStyle('firework')">
                        <img src="../assets/firework.png" alt="">
                        <span>烟花效果</span>
                    </div>
                    <div class="cobweb" @click="changeMouseStyle('benevolence')">
                        <img src="../assets/benevolence.png" alt="">
                        <span>爱心效果</span>
                    </div>
                    <div class="cobweb" @click="changeMouseStyle('randomWrite')">
                        <img src="../assets/randomWrite.png" alt="">
                        <span>随机文字效果</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "testVue",
    mounted() {

    },
    data() {
        return {
            topColor: this.$store.state.topColor,
            menuColor: this.$store.state.menuColor,
            bgColor: this.$store.state.bgColor,
            mainColor: this.$store.state.mainColor,
            mouseStyleFlag: ''
        }
    },
    methods: {
        changeMouseStyle(value) {
            this.mouseStyleFlag = value
            localStorage.setItem('mouseStyleFlag', this.mouseStyleFlag)
            // 强制刷新
            this.$router.go(0)
            window.location.reload();
        }
    },
    watch: {
        topColor(value) {
            this.$store.state.topColor = value
        },
        menuColor(value) {
            this.$store.state.menuColor = value
        },
        bgColor(value) {
            this.$store.state.bgColor = value
        },
        mainColor(value) {
            this.$store.state.mainColor = value
        },

    }
}
</script>

<style scoped lang="less">
img {
    width: 130px;
    height: 85px;
}

h2 {
    margin-left: 40px;
    margin-top: 30px;
}

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

        .special-effects {
            box-sizing: border-box;

            .list {
                margin: 30px;
                display: flex;

                .block {
                    padding-left: 20px;
                    padding-top: 20px;
                }

                .cobweb {
                    width: 130px;
                    margin: 10px;
                    text-align: center;
                    cursor: pointer;

                    span {
                        line-height: 35px;
                    }
                    span:hover{
                        color: #c8c9cc;
                    }
                }
            }
        }
    }
}

</style>
