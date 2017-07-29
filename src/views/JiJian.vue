<template>
    <div id="body">
        <head_></head_>
        <can-yu :getCanYu_img="getCanYu_img"></can-yu>
        <re-men :getReMen_img="getReMen_img"></re-men>
        <all :getAll_img="getAll_img"></all>
        <fa-bu :getFaBu_img="getFaBu_img"></fa-bu>

    </div>
</template>


<script type='text/ecmascript-6'>
    //引入css,js

    //引入组件
    import Head_ from "../components/JiJian/Head_.vue";
    import CanYu from "../components/JiJian/CanYu.vue";
    import ReMen from "../components/JiJian/ReMen.vue";
    import All from "../components/JiJian/All.vue";
    import FaBu from "../components/JiJian/FaBu.vue";



    //引入数据
    import JiJianData from "../services/JiJian.js";
    import publicData from "../services/public.js";

    //出口
    export default {
        components:{
            Head_,
            CanYu,
            ReMen,
            All,
            FaBu


        },
        data(){
            return{
                getCanYu_img:[],
                getReMen_img:[],
                getAll_img:[],
                getFaBu_img:[],


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
                this.getCanYu_img=JiJianData.getCanYu_img();
                this.getReMen_img=JiJianData.getReMen_img();
                this.getAll_img=JiJianData.getAll_img();
                this.getFaBu_img=JiJianData.getFaBu_img();

            }
        }
    }
</script>

<style scoped>
    #body{
        margin-bottom: 1.5rem;
        padding-top: 1.3rem;
        background: #f3f5f4;
    }
</style>

