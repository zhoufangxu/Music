<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active" active-color="#f00" inactive-color="#747474" z-index="100" :route="true">
            <van-tabbar-item icon="music" to="/">发现</van-tabbar-item>
            <van-tabbar-item icon="play-circle">视频</van-tabbar-item>
            <van-tabbar-item icon="audio">我的</van-tabbar-item>
            <van-tabbar-item icon="friends">云村</van-tabbar-item>
            <van-tabbar-item icon="manager">账号</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data(){
        return {
             active: 0,
        }
    }
}
</script>

<style scoped>
  
</style>