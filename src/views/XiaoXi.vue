<template>
	<div id="xiaoxibox">
    	<xiao-xi-box :getBoxInfo="getBoxInfo"></xiao-xi-box>
		<public-footer :getFooter_img="getFooter_img"></public-footer>
	</div>
</template>


<script>
    //引入css,js
    import "../static/css/swiper.min.css";
    import "../static/js/swiper.min.js";
	
	import XiaoXiBox from "../components/XiaoXi/XiaoXiBox.vue";
    import PublicFooter from "../components/public/PublicFooter.vue";

    //引入数据
    import XiaoXiData from "../services/XiaoXi.js";
    import publicData from "../services/public.js";


    //出口
    export default {
        components:{
            XiaoXiBox,
            PublicFooter
        },
        data(){
            return{
                getBoxInfo:[],
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
                this.getBoxInfo=XiaoXiData.getBoxInfo();
                this.getFooter_img = publicData.getFooter_img();

            }
        }
    }
</script>

<style>
#xiaoxibox{
	  margin-bottom: 1.5rem;
	  background: #f3f5f4;
 }
</style>