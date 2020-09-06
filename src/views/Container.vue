<template>
    <div>
        <Search />
        <Banner />
        <IconEntry />
        <HomePage />
    </div>
</template>

<script>
import Search from '../components/index/Search';
import Banner from '../components/index/banner';
import IconEntry from '../components/index/IconEntry';
import HomePage from '../components/index/homePage';
export default {
    components:{
        Search,
        Banner,
        IconEntry,
        HomePage,
    }
}
</script>

<style scoped>
  
</style>