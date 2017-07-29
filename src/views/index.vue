<template>
    <div id="body">
        <index-header :headerImg="headerImg"></index-header>
        <dong-tai1 :getDongTai1_img="getDongTai1_img"></dong-tai1>
        <tui-jian :getTuiJian_img="getTuiJian_img"></tui-jian>
        <dong-tai2 :getDongTai2_img="getDongTai2_img"></dong-tai2>
        <public-footer :getFooter_img="getFooter_img"></public-footer>
    </div>
</template>


<script type='text/ecmascript-6'>
    //引入css,js


    //引入组件
    import IndexHeader from "../components/index/IndexHeader.vue";
    import DongTai1 from "../components/index/DongTai1.vue";
    import TuiJian from "../components/index/TuiJian.vue";
    import DongTai2 from "../components/index/DongTai2.vue";
    import PublicFooter from "../components/public/PublicFooter.vue";

    //引入数据
    import IndexData from "../services/index.js";
    import publicData from "../services/public.js";

    //出口
    export default {
        components:{
            IndexHeader,
            DongTai1,
            TuiJian,
            DongTai2,
            PublicFooter

        },
        data(){
            return{
                headerImg:[],
                getDongTai1_img:[],
                getTuiJian_img:[],
                getDongTai2_img:[],
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
                this.headerImg=IndexData.getHeaderImg();
                this.getDongTai1_img=IndexData.getDongTai1();
                this.getTuiJian_img=IndexData.getTuiJian();
                this.getDongTai2_img=IndexData.getDongTai2_img();
                this.getFooter_img=publicData.getFooter_img();
            }
        }
    }
</script>

<style scoped>
    #body{
    }
</style>

