<template>
    <div class="banner-box">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" width="100%" height="145.83">
            <van-swipe-item v-for="(item, i) of imgList" :key="i">
                <img :src="item.pic" class="banner-img">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {
            imgList: [],
        }
    },
    created(){
        this.$axios.get('/banner?type=2')
         .then(res => {
             this.imgList = res.data.banners;
         })
         .catch(err => {
             console.log(err);
         })
    }
}
</script>

<style scoped>
    .banner-box{
        width: 96%;
        margin: 0 auto;
        margin-top: 50px;
        border-radius: 8px;
        overflow: hidden;
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
    .banner-img{
        width: 375px;
    }
</style>