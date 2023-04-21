<template>
    <!-- 标签页 -->
    <el-tabs v-model="activeTab"
             @tab-click="clickTab"
             @tab-remove="removeTab"
             type="border-card"
             closable>
        <el-tab-pane
            class="el-tab-pane"
            v-for="item in openTab"
            :key="item.name"
            :label="item.name"
            :name="item.route">
        </el-tab-pane>
    </el-tabs>

</template>

<script>
export default {
    name: "TabsView",
    mounted () {
        // 如果展示的不是首页，展示首页，并添加到数组和activeIndex中
        if (this.$route.path !== '/' && this.$route.path !== '/home') {
            this.$store.dispatch('addTab', {route: '/home', name: '首页'})
            this.$store.dispatch('addTab', {route: this.$route.path, name: this.$route.name})
            this.$store.dispatch('activeIndex', this.$route.path)
        } else {
            this.$store.dispatch('addTab', {route: '/home', name: '首页'})
            this.$store.dispatch('activeIndex', '/home')
        }
    },
    methods: {
        // 点击标签，切换路由，展示页面
        clickTab () {
            this.$router.push({path: this.activeTab})
            // console.log(this.$route.path)
            window.location.href
        },
        // 关闭标签页
        removeTab (target) {
            // 首页不能关
            if (target === '/' || target === '/home') {
                return
            }
            // 从数组中删除标签
            this.$store.commit('DEL_TAB', target)
            // 如果是正在激活页，切换activeIndex值，展示数组最后一个标签页
            if (this.activeTab === target) {
                if (this.openTab && this.openTab.length >= 1) {
                    console.log('-----', this.openTab[this.openTab.length - 1].route)
                    this.$store.dispatch('activeIndex', this.openTab[this.openTab.length - 1].route)
                    this.$router.push({path: this.activeTab})
                }
            }
            if (this.openTab.length === 0) {
                this.$router.push({path: '/home'})
            }
        }
    },
    computed: {
        // 接收vuex中的方法
        openTab () {
            return this.$store.state.openTab
        },
        activeTab: {
            get () {
                return this.$store.state.activeTab
            },
            set (value) {
                this.$store.dispatch('activeIndex', value)
            }
        }
    },
    watch: {
        // 监视路由
        '$route' (to) {
            let flag = false
            for (let item of this.openTab) {
                if (item.name === to.meta.title) {
                    this.$store.dispatch('activeIndex', to.path)
                    flag = true
                    break
                }
            }
            if (!flag) {
                this.$store.dispatch('addTab', {route: to.path, name: to.name})
                this.$store.dispatch('activeIndex', to.path)
            }
        }
    }
}
</script>

<style scoped lang="less" type="text/less">
/deep/ .el-tabs__content {
    display: none;
}
/deep/.el-tabs__item:nth-child(1) .el-icon-close{
    display: none;
}
/*修改标签页原本的样式*/
.el-tabs--border-card {
    border: transparent;
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}

</style>
