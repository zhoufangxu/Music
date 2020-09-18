<template>
    <div style="height:2000px;">
        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
        <div ref="main" style="width: 100%;height:200px;"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        init(){
            var myChart = this.$echarts.init(this.$refs.main);
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    },
    created(){
        this.$axios.get('/homepage/block/page')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    },
    mounted(){
        this.init();
    }
}
</script>

<style scoped>

</style>