<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
     
    }
  },
  created(){
    //验证用户是否登陆
    this.$axios.get('/login/status')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      if(err){
        //如果没有登陆跳转登陆页面
        this.$router.push("/login")
      }
    })
  }
}
</script>

<style scoped>

</style>