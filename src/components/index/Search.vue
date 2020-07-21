<template>
    <div class="container">
        <div class="search">
        <van-icon name="audio" size="1.5em" />
        <div class="search-box">
            <van-icon name="search" />
            <input type="text" placeholder="云音乐新发布">
        </div>
        <van-circle
                v-model="currentRate"
                :rate="rate"
                layer-color="#ebedf0"
                size="26"
                stroke-width="50"
                color="#f00"
            />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value: '',
            rate: 0,
            currentRate: 0,
        }
    }
}
</script>

<style scoped>
  .container{
      position: fixed;
      top: 0;
      z-index: 20;
      width: 100%;
      background: #fff;
  }
  .search{
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .search-box{
      display: flex;
      align-items: center;
      padding: 6px;
      background: rgb(245, 245, 245);
      border-radius: 20px;
      width: 260px;
      padding-left: 10px;
      justify-content: center;
  }
  .search-box>input{
      border: none;
      margin-left: 4px;
      background: rgb(245, 245, 245);
      font-size: 12px;
  }
</style>