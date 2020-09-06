<template>
    <div class="login" :style="{ width: windowWidth + 'px' , height: windowHeight + 'px'}">
        <div class="logo">
            <van-icon name="music" size="70" color="#fff"/>
        </div>
        <div class="input-phone">
            <van-icon name="edit" color="#fff" size="20"  @click="inputPhone"/>
            <div class="input-phone-cell">{{phone}}</div>
        </div>
        <div class="login-box">
            <span class="login-btn" @click="signin">一键登陆</span>
            <span class="login-feel">立即体验</span>
        </div>
        <div class="clause">
            <van-checkbox v-model="checked" icon-size="14" checked-color="#07c160"></van-checkbox>
            <span>同意 &laquo;服务条款&raquo;&laquo;隐私政策&raquo;&laquo;儿童隐私政策&raquo;</span>
        </div>
        <span class="bottom-clause">&laquo;天翼账号服务协议&raquo;</span>
        <van-popup
            v-model="show"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '30%' }"
        >
            <div class="phone-box">
                <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号码" maxlength="11" @input="inputVal"/>
                <van-button type="primary" size="large" :round="true" color="#f00" class="next-btn" :disabled='isDisabled' @click="next">下一步</van-button>
                <span class="promptMsg">如果手机号码没有注册，则自动注册</span>
            </div>
        </van-popup>
        <van-popup
            v-model="passwordShow"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '30%' }"
        >
            <div class="phone-box">
                <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" maxlength="9" @input="inputUpwd"/>
                <van-button type="primary" size="large" :round="true" color="#f00" class="next-btn" @click="login">登录</van-button>
            </div>
        </van-popup>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){
        return {
            windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
            windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
            checked: false,
            show: false, //输入手机号码显示隐藏
            tel: '',
            isDisabled: true,
            canClick: false, //只有手机号码验证通过才可以发送请求
            password: '',
            passwordShow: false,
        }
    },
    methods:{
        //点击图标输入手机号码
        inputPhone(){
            if(!this.checked){
                this.$toast('请先勾选《服务条款》《隐私政策》《儿童隐私政策》和《天翼账号服务协议》');
            }else{
                this.show = true;
            }
        },
        inputVal(){ //input输入框事件
            if(this.tel !== ''){
                this.isDisabled = false;
            }else{
                this.isDisabled = true;
            }
        },
        next(){ //输入手机号码验证是否注册，进行下一步操作
            let phone = parseInt(this.tel);
            this.$axios.get('/cellphone/existence/check?phone=' + phone)
            .then(res => {
                if(res.data.exist === 1){
                    this.show = false;
                    this.passwordShow = true;
                } else {
                    this.$router.push('/checkcode');
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        // 将用户密码存入vuex中
        inputUpwd(){
            this.$store.commit('increment',this.password);
        },
        //获取用户名密码登录
        login(){
            let phone = this.tel;
            let upwd = this.password;
            this.$axios.get(`/login/cellphone?phone=${phone}&password=${upwd}`)
            .then(res => {
                if(res.data.loginType === 1){
                    localStorage.setItem('username', res.data.account.userName);
                    localStorage.setItem('token', res.data.token);
                    let userInfo = res.data.bindings[0];
                    let tokenJsonObj = JSON.parse(userInfo.tokenJsonStr);
                    let userId = res.data.bindings[0].userId;
                    localStorage.setItem('phone', tokenJsonObj.cellphone);
                    localStorage.setItem('userId', userId);
                    this.$router.push('/');
                } else {
                    this.$toast(res.data.msg);
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        //快速登录
        signin(){
            if(this.checked){
                 this.$axios.get(`/login/cellphone?phone=${this.phone}&password=${this.upwd}`)
                .then(res => {
                    if(res.data.loginType === 1){
                        this.$router.push('/');
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            } else {
                this.$toast('请先勾选《服务条款》《隐私政策》《儿童隐私政策》和《天翼账号服务协议》');
            }
        }
    },
    computed: {
        ...mapState({
            phone: 'phone',
            upwd: 'upwd',
        })
    },
    watch:{
        tel(){ //监视tel属性
            //正则验证手机号格式
            let phoneExp = /^1\d{10}$/;
            if(phoneExp.test(this.tel)){
                this.canClick = true;
            }else{
                this.canClick = false;
            }
        }
    }
}
</script>

<style scoped>
 .login{
     background: #f00;
     display: flex;
     flex-direction: column;
     align-items: center;
 }
 .logo{
     margin-top: 200px;
 }
 .input-phone{
     display: flex;
     flex-direction: row;
     margin-top: 130px;
     margin-bottom: 10px;
 }
 .input-phone-cell{
     margin-left: 5px;
     color: #fff;
 }
 .login-box{
     display: flex;
     flex-direction: column;
 }
 .login-box>span{
     width: 260px;
     height: 40px;
     border-radius: 50px;
     text-align: center;
     line-height: 40px;
 }
 .login-btn{
     background: #fff;
     color: #f00;
 }
 .login-feel{
     border: 1px solid #fff;
     color: #fff;
     margin-top: 10px;
 }
 .clause{
     width: 270px;
     color: #f5f5f5;
     font-size: 0.6em;
     text-align: center;
     display: flex;
     margin-top: 20px;
     align-items: center;
     justify-content: space-around;
 }
 .bottom-clause{
     color: #f5f5f5;
     font-size: 0.6em;
 }
 .phone-box{
     margin-top: 50px;
 }
 .promptMsg{
     font-size: 14px;
     color: #d2d2d2;
     display: flex;
     justify-content: center;
     margin-top: 8px;
 }
 .next-btn{
     margin-top: 20px;
 }
</style>