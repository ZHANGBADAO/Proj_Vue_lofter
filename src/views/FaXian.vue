<template>
    <div id="body">
        <fa-xian_dao-hang :daoHangData="daoHangData"></fa-xian_dao-hang>
        <fa-xian_container :tuiJianData="tuiJianData " :sheYingData="sheYingData"></fa-xian_container>
    
        <public-footer :getFooter_img="getFooter_img"></public-footer>
        
    </div>
</template>


<script type='text/ecmascript-6'>
//引入css,js

//引入组件
import PublicFooter from "../components/public/PublicFooter.vue";
import FaXian_daoHang from "../components/FaXian/FaXian_daoHang.vue";
import FaXian_container from "../components/FaXian/FaXian_container.vue";


//引入数据
import FaXianData from "../services/FaXian";
import publicData from "../services/public.js";

//出口
export default {
    components: {

        PublicFooter,
        FaXian_daoHang,
        FaXian_container

    },
    data() {
        return {
            getFooter_img: [],

            daoHangData: [],
            tuiJianData: [],
            sheYingData:[]

        }
    },
    created: function () {
        this.initData();

    },
    mounted: function () {
        //导航栏轮播图------------------------------------
        var nav = new Swiper('.nav', {
            slidesPerView: 'auto',
            slidesOffsetAfter: 430,
        });

         //点击导航栏跳转页面
        $(".nav .swiper-wrapper").on("click", ".swiper-slide", function () {
            var index_num = $(this).index();
            switch (index_num) {
                case 0:
                    container.slideTo(0, 300, false);
                    $(".nav .swiper-slide").css({ border: 0 });
                    $(this).css({ "border-bottom": ".01rem solid #000" });
                    break;
                case 1:
                    container.slideTo(1, 300, false);
                    $(".nav .swiper-slide").css({ border: 0 });
                    $(this).css({ "border-bottom": ".01rem solid #000" });
                    break;
                case 2:
                    container.slideTo(2, 300, false);
                    $(".nav .swiper-slide").css({ border: 0 });
                    $(this).css({ "border-bottom": ".01rem solid #000" });
                    break;
                case 3:
                    container.slideTo(3, 300, false);
                    $(".nav .swiper-slide").css({ border: 0 });
                    $(this).css({ "border-bottom": ".01rem solid #000" });
                    break;
                case 4:
                    container.slideTo(4, 300, false);
                    $(".nav .swiper-slide").css({ border: 0 });
                    $(this).css({ "border-bottom": ".01rem solid #000" });
                    break;
                default:
                    break;
            };
        });
        //页面大轮播图
        var container = new Swiper('.container', {
            onSlideChangeEnd: function (swiper) {
                switch (swiper.realIndex) {
                    case 0:
                        $(".nav .swiper-slide").css({ border: 0 });
                        $(".nav .swiper-slide:nth-child(1)").css({ "border-bottom": ".01rem solid #000" });

                        break;
                    case 1:
                        $(".nav .swiper-slide").css({ border: 0 });
                        $(".nav .swiper-slide:nth-child(2)").css({ "border-bottom": ".01rem solid #000" });
                        break;
                    case 2:
                        $(".nav .swiper-slide").css({ border: 0 });
                        $(".nav .swiper-slide:nth-child(3)").css({ "border-bottom": ".01rem solid #000" });
                        nav.setWrapperTransition(500);
                        nav.setWrapperTranslate(0);
                        break;
                    case 3:
                        $(".nav .swiper-slide").css({ border: 0 });
                        $(".nav .swiper-slide:nth-child(4)").css({ "border-bottom": ".01rem solid #000" });
                        nav.setWrapperTransition(500);
                        nav.setWrapperTranslate(-80);
                        break;
                    case 4:
                        $(".nav .swiper-slide").css({ border: 0 });
                        $(".nav .swiper-slide:nth-child(5)").css({ "border-bottom": ".01rem solid #000" });
                        nav.setWrapperTransition(500);
                        nav.setWrapperTranslate(-160);
                        break;
                    default:
                        break;
                };

            },
        });

    },
    methods: {


        initData: function () {
            FaXianData.getFaXianData((data) => {
                this.daoHangData = data.daoHang[0].img;
                this.tuiJianData = data.tuiJian;
                this.sheYingData = data.sheYing;

            });

            this.getFooter_img = publicData.getFooter_img();
        }
    }
}
</script>

<style scoped>
#body {
    background: #f3f5f4;
}
</style>

