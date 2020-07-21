<template>
    <div class="icon-box">
        <ul class="icon-list">
            <li>
                <router-link to="/">
                    <van-icon name="music" size="50px" color="#f00"/>
                    <span>每日推荐</span>
                </router-link>
            </li>
             <li>
                <router-link to="/">
                    <van-icon name="play-circle" size="50px" color="#f00"/>
                    <span>歌单</span>
                </router-link>
            </li>
             <li>
                <router-link to="/">
                    <van-icon name="pause-circle" size="50px" color="#f00"/>
                    <span>排行榜</span>
                </router-link>
            </li>
             <li>
                <router-link to="/">
                    <van-icon name="comment-circle" size="50px" color="#f00"/>
                    <span>电台</span>
                </router-link>
            </li>
             <li>
                <router-link to="/">
                    <van-icon name="stop-circle" size="50px" color="#f00"/>
                    <span>直播</span>
                </router-link>
            </li>
             <li>
                <router-link to="/">
                    <van-icon name="checked" size="50px" color="#f00"/>
                    <span>数字专辑</span>
                </router-link>
            </li>
             <li>
                <router-link to="/">
                    <van-icon name="phone-circle" size="50px" color="#f00"/>
                    <span>唱聊</span>
                </router-link>
            </li>
             <li>
                <router-link to="/">
                    <van-icon name="comment-circle" size="50px" color="#f00"/>
                    <span>线上演出</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    created(){
        
    }
}
</script>

<style scoped>
    .icon-box{
        height: 90px;
        overflow: hidden;
    }
    .icon-list{
        display: flex;
        padding: 10px;
        overflow: scroll;
        padding-bottom: 20px;
    }
    .icon-list>li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 20px;
    }
    .icon-list>li>a{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>