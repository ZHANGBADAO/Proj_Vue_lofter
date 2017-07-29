<template>
    <div id="body">
        <Head_ :getHeaderImg="getHeaderImg"></Head_>
        <wo-de :getWoDeImg="getWoDeImg"></wo-de>
        <public-footer :getFooter_img="getFooter_img"></public-footer>

    </div>
</template>


<script type='text/ecmascript-6'>
    //引入css,js

    //引入组件
    import Head_ from "../components/DingYue/Head_.vue";
    import WoDe from "../components/DingYue/WoDe.vue";
    import PublicFooter from "../components/public/PublicFooter.vue";


    //引入数据
    import DingYueData from "../services/DingYue.js";
    import publicData from "../services/public.js";

    //出口
    export default {
        components:{
            Head_,
            WoDe,
            PublicFooter

        },
        data(){
            return{
                getHeaderImg:[],
                getWoDeImg:[],
                getFooter_img:[],

            }
        },
        created:function () {
            this.initData();
        },
        mounted:function(){
//            console.log(this.headerImg)
        },
        methods:{
            initData:function () {
                this.getHeaderImg=DingYueData.getHeaderImg();
                this.getWoDeImg=DingYueData.getWoDeImg();
                this.getFooter_img=publicData.getFooter_img();

            }
        }
    }
</script>

<style scoped>
    #body{
        padding-top: 1.24rem;
        background: #f3f5f4;
        height: 19.2rem;
        box-sizing: border-box;
    }
</style>

