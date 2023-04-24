<template>
    <div class="container" :class="{'home-bgc':showBgc}">
        <div class="head" :style="{'background-color': this.$store.state.topColor}">
            <img src="" alt="" class="logo">

            <div class="user">
                <img src="" alt="" class="image">
                <div class="user-name"></div>
                <div class="massage"></div>
            </div>
        </div>
        <div class="body" >
            <div class="menu" :style="{'background-color': this.$store.state.menuColor}">
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-button  @click="openMenu">
                        <i class="el-icon-s-unfold"></i>
                    </el-button>
                </el-radio-group>
                <el-menu :default-active="$store.state.activeTab" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title" >
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                        </template>
                            <el-menu-item
                                index="/test1"
                                @click="$router.push({path: '/test1'})">选项1</el-menu-item>
                            <el-menu-item index="/test2" @click="$router.push('/test2')">选项2</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </div>
           <div class="tabs">
               <div class="tab-list">
                   <TabsView></TabsView>
               </div>
               <div class="view">
                   <router-view></router-view>
               </div>

           </div>
        </div>
<!--        <div class="footer">-->

<!--        </div>-->
    </div>
</template>

<script>
import TabsView from "@/components/TabsView";
export default {
    name: "MainVue",
    components: {
        TabsView: TabsView
    },
    mounted() {

    },
    data() {
        return {
            isCollapse: true,
            color: '#fcede4'
            // openTabs: this.$store.state.tabsView.openTab,
            // activeTab: this.$store.state.tabsView.activeTab,
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        // 菜单折叠/打开
        openMenu () {
            this.isCollapse = !this.isCollapse
            console.log(this.isCollapse)
        },
        // handleTabsEdit(targetName, action) {
        //     // if (action === 'add') {
        //     //     let newTabName = ++this.tabIndex + '';
        //     //     this.editableTabs.push({
        //     //         title: 'New Tab',
        //     //         name: newTabName,
        //     //         content: 'New Tab content'
        //     //     });
        //     //     this.editableTabsValue = newTabName;
        //     // }
        //     if (action === 'remove') {
        //         let tabs = this.editableTabs;
        //         let activeName = this.editableTabsValue;
        //         if (activeName === targetName) {
        //             tabs.forEach((tab, index) => {
        //                 if (tab.name === targetName) {
        //                     let nextTab = tabs[index + 1] || tabs[index - 1];
        //                     if (nextTab) {
        //                         activeName = nextTab.name;
        //                     }
        //                 }
        //             });
        //         }
        //
        //         this.editableTabsValue = activeName;
        //         this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        //     }
        // }
    },
    computed: {
        showBgc: function () {
            let pathName = this.$route.name;
            return !pathName || pathName === "home";
        }
    },
}
</script>

<style scoped lang="less">
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;

        .head {
            width: 100%;
            height: 50px;
            background-color: #dfe4ed;
            align-self: flex-start;
        }

        .body {
            width: 100%;
            flex: 1;
            display: flex;

            .menu {
                background-color: #fcede4;

                .el-menu-vertical-demo:not(.el-menu--collapse) {
                    width: 200px;
                    min-height: 400px;
                }
                /deep/ .el-menu-vertical-demo {
                    background-color: rgba(255, 255,255, 0);

                }
                /deep/ .el-menu--inline{
                    background-color: rgba(255, 255,255, 0);
                }
            }

            .tabs {
                flex: 1;
                display: flex;
                flex-direction: column;

                .tab-list {
                    height: 35px;
                }

                .view {
                    flex: 1;
                }
            }
        }

        .footer {
            width: 100%;
            height: 50px;
            background-color: #f2f2f2;
            align-self: flex-end;
        }
    }
</style>
