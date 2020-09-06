<template>
    <div>homepage</div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {

    },
    created(){
        this.$axios.get('/homepage/block/page')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
}
</script>

<style scoped>

</style>