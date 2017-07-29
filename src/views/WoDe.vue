<template>
    <div>
    	<wo-de-head :getHeadInfo="getHeadInfo"></wo-de-head>
    	<wo-de-fu-li :getFuLiInfo="getFuLiInfo"></wo-de-fu-li>
    	<wo-de-set :getSetInfo="getSetInfo"></wo-de-set>
		<public-footer :getFooter_img="getFooter_img"></public-footer>

	</div>
</template>


<script type='text/ecmascript-6'>
    //引入css,js

    //引入组件
    import WoDeHead from "../components/WoDe/WoDeHead.vue";
    import WoDeFuLi from "../components/WoDe/WoDeFuLi.vue";
    import WoDeSet from "../components/WoDe/WoDeSet.vue";
    import PublicFooter from "../components/public/PublicFooter.vue";


    //引入数据
    import WoDeData from "../services/WoDe.js";
    import publicData from "../services/public.js";


    //出口
    export default {
        components:{
            WoDeHead,
            WoDeFuLi,
            WoDeSet,
            PublicFooter,

        },
        data(){
            return{
                getHeadInfo:[],
                getFuLiInfo:[],
                getSetInfo:[],
                getFooter_img: [],

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
                this.getHeadInfo=WoDeData.getHeadInfo();
                this.getFuLiInfo=WoDeData.getFuLiInfo();
                this.getSetInfo=WoDeData.getSetInfo();
                this.getFooter_img = publicData.getFooter_img();

            }
        }
    }
</script>

<style scoped>
	a {-webkit-tap-highlight-color: transparent; }
</style>