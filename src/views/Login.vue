<template>
    <div class="login" :style="{ width: windowWidth + 'px' , height: windowHeight + 'px'}">
        <div class="logo">
            <van-icon name="music" size="70" color="#fff"/>
        </div>
        <van-icon name="edit" color="#fff" size="20" class="input-phone" @click="inputPhone"/>
        <div class="login-box">
            <span class="login-btn">一键登陆</span>
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
                <van-button type="primary" size="large" :round="true" color="#f00" class="next-btn" :disabled='isDisabled'>下一步</van-button>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    data(){
        return {
            windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
            windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
            checked: false,
            show: false,
            tel: '',
            isDisabled: true,
        }
    },
    methods:{
        inputPhone(){
            if(!this.checked){
                this.$notify({
                    message: '请先勾选《服务条款》《隐私政策》《儿童隐私政策》和《天翼账号服务协议》',
                    color: '#fff',
                    background: '#000',
                });
            }else{
                this.show = true;
            }
        },
        inputVal(){
            if(this.tel !== ''){
                this.isDisabled = false;
            }
        }
    },
    mounted(){
       
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
     margin-top: 150px;
     margin-bottom: 10px;
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
 .next-btn{
     margin-top: 20px;
 }
</style>