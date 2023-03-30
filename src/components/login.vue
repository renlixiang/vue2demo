<template>
    <div class="body">
        <!--登录页-->
        <transition name="login">
        <div class="container" v-show= "Flag.login">
            <div class="block">
                <img class="headImg" :src="massage.img" alt="">
            </div>
            <div class="user">
                <el-input v-model="massage.inputUser" placeholder="请输入您的账号" clearable />
            </div>
            <div class="password">
                <el-input
                    v-model="massage.inputPassword"
                    type="password"
                    placeholder="请输入您的密码"
                    show-password
                />
            </div>
            <div class="skip">
                <el-link class="forget" :underline="false" @click="skipForgetPassword">忘记密码</el-link>
                <el-link class="register" :underline="false" @click="skipRegistry">没有账号？去注册</el-link>
            </div>
            <div class="button">
                <el-button class="btt" type="primary">登录</el-button>
            </div>
        </div>
        </transition>
        <!--注册页-->
        <transition name="registry">
        <div class="container" v-show="Flag.registry">
            <div class="first-registry">
                <el-input v-model="massage.phone" placeholder="请输入您的手机号" clearable />
            </div>
            <div class="registry">
                <el-input v-model="massage.mail" placeholder="请输入您的邮箱" clearable />
            </div>
            <div class="registry">
                <el-input v-model="massage.name" placeholder="请输入您的姓名" clearable />
            </div>
            <div class="registry">
                <el-date-picker
                    v-model="massage.birthday"
                    type="date"
                    placeholder="请选择您的生日"
                    size="large"
                    clearable
                />
            </div>
            <div class="registry">
                <el-input
                    v-model="massage.newPassword"
                    type="password"
                    placeholder="请设置您的密码"
                />
            </div>
            <div class="registry">
                <el-input
                    v-model="massage.confirmPassword"
                    type="password"
                    placeholder="请再次确认您的密码"
                    show-password
                />
            </div>
            <div class="skip">
                <el-link class="register" :underline="false" @click="skipLogin">已有账号，去登录</el-link>
            </div>
            <div class="button">
                <el-button class="btt" type="primary">确认</el-button>
            </div>
        </div>
        </transition>
        <!--忘记密码页-->
        <transition name="forget">
        <div class="container" v-show="Flag.forget">
            <div class="skip">
                <el-link class="cancel" :underline="false" @click="skipLogin">取消</el-link>
            </div>
            <div class="first-forget">
                <el-input v-model="massage.inputUser" placeholder="请输入您的账号" clearable />
            </div>
            <div class="setPassword">
                <el-input v-model="massage.phone" placeholder="请输入您的手机号" clearable />
            </div>
            <div class="setPassword">
                <el-input v-model="massage.name" placeholder="请输入您的姓名" clearable />
            </div>
            <div class="setPassword">
                <el-input
                    v-model="massage.newPassword"
                    type="password"
                    placeholder="请设置您的新密码"
                />
            </div>
            <div class="setPassword">
                <el-input
                    v-model="massage.confirmPassword"
                    type="password"
                    placeholder="请再次确认您的密码"
                    show-password
                />
            </div>
            <div class="button">
                <el-button class="btt" type="primary">确认</el-button>
            </div>
        </div>
        </transition>
    </div>
</template>

<script lang="js">
export default {
    name: "loginVue",
    data() {
        return {
            massage : {
                inputUser: '',
                inputPassword: '',
                img: require("../assets/logo.png"),
                birthday: '',
                phone: '',
                mail: '',
                name:'',
                newPassword:'',
                confirmPassword:'',
                },
            Flag : {
                login: true,
                forget: false,
                registry: false
             },
        }},
    methods: {
        skipRegistry() {
            this.Flag.login = false
            this.Flag.forget = false
            this.Flag.registry = true
        },

        skipForgetPassword () {
            this.Flag.login = false
            this.Flag.registry = false
            this.Flag.forget = true
        },

        skipLogin () {
            this.Flag.registry = false
            this.Flag.forget = false
            this.Flag.login = true
        }

    }

}
</script>

<style scoped lang="less">

.body {
    height: 100vh;
    width: 100%;
    background: url("../assets/bgfengzheng.png") center center no-repeat;
    background-size: cover;
    position: absolute;

    .container {
        width: 400px;
        height: 550px;
        margin: 150px auto;
        border-radius: 12px;
        background-color: #fcede4;
        opacity: 0.8;
        box-sizing: border-box;

        .block {
            height: 80px;
            width: 100%;
            position: relative;
            margin-bottom: 30px;
            //margin: auto;

            .headImg {
                width: 30%;
                position: absolute;
                margin: 40px auto;
                left: 0;
                right: 0;
            }
        }

        .user {
            width: 260px;
            margin: 120px auto 30px;
        }

        .password{
            width: 260px;
            margin: 0 auto 30px;
        }

        .skip {

            .forget {
                float: left;
                left: 40px;
            }

            .register {
                float: right;
                right: 40px;
            }

            .cancel {
                float: right;
                right: 25px;
                top: 25px;
            }
        }

        //解决高度坍塌
        .skip:after {
            content: '';
            display: block;
            clear: both;
            height: 0;
            overflow: hidden;
            visibility: hidden;
        }

        .button {
            //width: 100%;
            position: relative;
            margin: 30px auto;
            width: 200px;

            .btt {
                position: absolute;
                margin: 10px auto;
                width: 200px;
                height: 50px;
            }
        }

        .registry, .setPassword{
            width: 270px;
            margin: 0 auto 20px;
        }

        .first-registry, .first-forget{
            width: 270px;
            margin: 20px auto;
            padding-top: 50px;
        }

        /deep/ .el-input__inner {
            width: 270px;
        }

    }

}

</style>
