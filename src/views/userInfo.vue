<template>
    <van-button type="danger" block @click="logout">退出登录</van-button>
</template>

<script>
export default {
    methods: {
        //退出登录
        logout:function(){
            this.$axios.get('/logout')
            .then(res => {
                localStorage.clear();
                if(res.data.code == 200){
                    this.$router.push('/login');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>

</style>