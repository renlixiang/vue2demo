<template>
    <div class="body">
        <!--登录页-->
        <div class="container" v-show= "this.flag.login">
            <div class="block">
                <img class="headImg" :src="message.img" alt="">
            </div>
            <div class="user">
                <el-input v-model="message.inputUser" placeholder="请输入您的账号" clearable />
            </div>
            <div class="password">
                <el-input
                    v-model="message.inputPassword"
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
                <el-button class="btt" type="primary" @click="login">登录</el-button>
            </div>
        </div>
        <!--注册页-->
        <div class="container" v-show="this.flag.registry">
            <div class="first-registry">
                <el-input v-model="message.phone" placeholder="请输入您的手机号" clearable />
            </div>
            <div class="registry">
                <el-input v-model="message.email" placeholder="请输入您的邮箱" clearable />
            </div>
            <div class="registry">
                <el-input v-model="message.userName" placeholder="请输入您的账号" clearable />
            </div>
            <div class="registry">
                <el-date-picker
                    v-model="message.birthday"
                    type="date"
                    placeholder="请选择您的生日"
                    size="large"
                    clearable
                />
            </div>
            <div class="registry">
                <el-input
                    v-model="message.newPassword"
                    type="password"
                    placeholder="请设置您的密码"
                />
            </div>
            <div class="registry">
                <el-input
                    v-model="message.confirmPassword"
                    type="password"
                    placeholder="请再次确认您的密码"
                    show-password
                />
            </div>
            <div class="skip">
                <el-link class="register" :underline="false" @click="skipLogin">已有账号，去登录</el-link>
            </div>
            <div class="button">
                <el-button class="btt" type="primary" @click="register">确认</el-button>
            </div>
        </div>

        <!--忘记密码页-->
        <div class="container" v-show="this.flag.forget">
            <div class="skip">
                <el-link class="cancel" :underline="false" @click="skipLogin">取消</el-link>
            </div>
            <div class="first-forget">
                <el-input v-model="message.userName" placeholder="请输入您的账号" clearable />
            </div>
            <div class="setPassword">
                <el-input v-model="message.phone" placeholder="请输入您的手机号" clearable />
            </div>
            <div class="setPassword">
                <el-input v-model="message.email" placeholder="请输入您的邮箱" clearable />
            </div>
            <div class="setPassword">
                <el-input
                    v-model="message.newPassword"
                    type="password"
                    placeholder="请设置您的新密码"
                />
            </div>
            <div class="setPassword">
                <el-input
                    v-model="message.confirmPassword"
                    type="password"
                    placeholder="请再次确认您的密码"
                    show-password
                />
            </div>
            <div class="button">
                <el-button class="btt" type="primary" @click="forgetPassword">确认</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="js">
export default {
    name: "loginVue",
    mounted() {

    },
    data() {
        return {
            message : {
                inputUser: '',
                inputPassword: '',
                img: require("../assets/logo.png"),
                userName: '',
                birthday: '',
                phone: '',
                email: '',
                newPassword:'',
                confirmPassword:'',
                },
            flag : {
                login: true,
                forget: false,
                registry: false
             },
            users: this.$store.state.users,
            data: ''
        }},
    methods: {
        skipRegistry() {
            this.flag.login = false
            this.flag.forget = false
            this.flag.registry = true
        },

        skipForgetPassword () {
            this.flag.login = false
            this.flag.registry = false
            this.flag.forget = true
        },

        skipLogin () {
            this.flag.registry = false
            this.flag.forget = false
            this.flag.login = true
        },

        // 用户注册
        register (){
            // let phoneReg = /^1[345789][0-9]{9}$/
            // // 密码包括数字，字母，长度8-16
            // let passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
            // let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

            // if( !phoneReg.test(this.phone) ) {
            //     this.$message({
            //         type:"error",
            //         message: '手机号格式错误，请重新输入',
            //         duration: 2000
            //     })
            // }else if(!emailReg.test(this.email)) {
            //     this.$message({
            //         type:"error",
            //         message: '邮箱格式错误，请重新输入',
            //         duration: 2000
            //     })
            // }else if(!passwordReg.test(this.newPassword)) {
            //     this.$message({
            //         type:"error",
            //         message: '密码不符合要求，请重新设置',
            //         duration: 2000
            //     })
            // }else if(!(this.newPassword === this.confirmPassword)) {
            //     this.$message({
            //         type:"error",
            //         message: '两次密码不一样，请重新输入',
            //         duration: 2000
            //     })
            // } else {
            //     let data = {
            //         userName: this.message.userName,
            //         password: this.message.newPassword,
            //         phone: this.message.phone,
            //         birthday: this.message.birthday,
            //         email: this.message.email
            //     }
            //     this.$store.commit("add_user", data)
            //     this.$message({
            //         type:"success",
            //         message: '注册成功，请登录',
            //         duration: 2000
            //     })
            //     this.skipLogin()
            // }

            this.data = {
                userName: this.message.userName,
                password: this.message.newPassword,
                phone: this.message.phone,
                birthday: this.message.birthday,
                email: this.message.email
            }
            this.$store.commit("add_user", this.data)
            this.$message({
                type:"success",
                message: '注册成功，请登录',
                duration: 2000
            })
            this.skipLogin()

        },

        // 用户登录
        login () {
            console.log(this.users)
            for (let i in this.users) {
                if ((this.users[i].userName === this.message.inputUser) && (this.users[i].password === this.message.inputPassword)) {
                    this.$message({
                        type: 'success',
                        message: '登录成功',
                        duration: 2000
                    })
                }
            }
        },

        forgetPassword () {
            this.data = {
                userName: this.message.userName,
                password: this.message.newPassword,
                phone: this.message.phone,
                birthday: this.message.birthday,
                email: this.message.email
            }
            this.$store.commit("updatePassword", this.data)
            this.$message({
                type:"success",
                message: '密码设置成功，请登录',
                duration: 2000
            })
            this.skipLogin()
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
