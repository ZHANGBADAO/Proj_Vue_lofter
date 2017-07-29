<template>
    <!--摄影-->
    <div class="swiper-slide">
        <div class="swiper-container s_slider1">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img :src="sheYingData[0].img[0]" alt="">
                </div>
                <div class="swiper-slide">
                    <img :src="sheYingData[0].img[1]" alt="">
                </div>
                <div class="swiper-slide">
                    <img :src="sheYingData[0].img[2]" alt="">
                </div>
    
            </div>
            <div class="swiper-pagination"></div>
        </div>
    
        <div class="swiper-container s_slider2">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img :src="sheYingData[0].img[3]" alt="">
                </div>
                <div class="swiper-slide">
                    <img :src="sheYingData[0].img[4]" alt="">
                </div>
                <div class="swiper-slide">
                    <img :src="sheYingData[0].img[5]" alt="">
                </div>
                <div class="swiper-slide">
                    <img :src="sheYingData[0].img[6]" alt="">
                </div>
                <div class="swiper-slide">
                    <img :src="sheYingData[0].img[7]" alt="">
                </div>
                <div class="swiper-slide">
                    <img :src="sheYingData[0].img[8]" alt="">
                </div>
    
            </div>
            <div class="swiper-pagination"></div>
        </div>
    
        <div id="daRen">
            <div class="main">
                <h4>{{sheYingData[1].text[0]}}</h4>
                <img :src="sheYingData[0].img[9]" alt="">
            </div>
            <div class="dongTai">
                <div class="title">
                    <dl>
                        <dt>
                            <img :src="sheYingData[0].img[10]" alt="">
                            <b>{{sheYingData[1].text[1]}}</b>
                        </dt>
                        <dd>
                            {{sheYingData[1].text[2]}}
                        </dd>
                    </dl>
                </div>
                <img :src="sheYingData[0].img[11]" class="zhuTu" alt="">
                <div class="text">
                    <h4>
                        <b>美食</b>
                        <b>没事就吃吃喝喝</b>
                        <b>摄影是一种态度</b>
                        <b>美食摄影</b>
                    </h4>
                    <div class="huDong">
                        <dl class="zan">
                            <dt>
                                <img :src="sheYingData[0].img[12]" alt="">
                                <img :src="sheYingData[0].img[13]" alt="">
                                <img :src="sheYingData[0].img[14]" alt="">
                                <img :src="sheYingData[0].img[15]" alt="">
                            </dt>
                            <dd>
                                <img :src="sheYingData[0].img[16]" alt="">
                            </dd>
                        </dl>
                        <div class="reDu">
                            <b>62 热度</b>
                            <b>1 条评论</b>
                        </div>
                        <div class="pinLun">
                            <b>小牛的梦</b>
                            <s> : 麻烦吗?</s>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    
    </div>
</template>

<script type="text/ecmascript-6">


export default {
    props: ["sheYingData"],
    updated: function () {
        //第二个页面两个轮播图
        var s_slider1 = new Swiper('.s_slider1', {
            autoplay: 3000,
            pagination: '.swiper-pagination',
        });
        var s_slider2 = new Swiper('.s_slider2', {
            slidesPerView: 'auto',
            slidesOffsetAfter: 90,
        });

    }

}

</script>

<style scoped>
.container .swiper-slide:nth-child(2) .s_slider1 {
    height: 4.28rem;
}

.container .swiper-slide:nth-child(2) .s_slider1 .swiper-pagination-bullet-active {
    background: #fff;
}

.container .swiper-slide:nth-child(2) .s_slider1 .swiper-slide img {
    width: 100%;
}

.container .swiper-slide:nth-child(2) .s_slider2 {
    padding-top: .3rem;
    height: 2.8rem;
}

.container .swiper-slide:nth-child(2) .s_slider2 .swiper-slide {
    width: 2.4rem;
    margin: 0 .15rem;
}

.container .swiper-slide:nth-child(2) .s_slider2 .swiper-slide img {
    width: 100%;
}

.container .swiper-slide:nth-child(2) #daRen {
    /*动态*/
}

.container .swiper-slide:nth-child(2) #daRen .main {
    height: 1.75rem;
    background: #fff;
    margin-bottom: .45rem;
}

.container .swiper-slide:nth-child(2) #daRen .main h4 {
    float: left;
    font: .45rem/1.75rem "";
    text-indent: .4rem;
    color: #666;
}

.container .swiper-slide:nth-child(2) #daRen .main img {
    float: right;
    width: 2.88rem;
    margin: .4rem .45rem 0 0;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai {
    margin-bottom: .45rem;
    background: #fff;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .title {
    height: 1.8rem;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .title dl {
    zoom: 1;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .title dl:after {
    content: "";
    clear: both;
    display: block;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .title dl dt {
    float: left;
    width: 4.8rem;
    position: relative;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .title dl dt img {
    width: 1.22rem;
    position: absolute;
    top: .3rem;
    left: .45rem;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .title dl dt b {
    font: .42rem/.42rem "";
    position: absolute;
    top: .68rem;
    left: 2.11rem;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .title dl dd {
    float: right;
    font: 0.37rem/.37rem "";
    margin: .73rem .48rem 0 0;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .zhuTu {
    display: block;
    width: 100%;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text {
    padding: 0 .43rem;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text h4 {
    height: 1.47rem;
    overflow: hidden;
    border-bottom: .02rem dotted #666666;
    font: .42rem/1.47rem "";
    text-indent: .72rem;
    background: url("/Proj_Vue_lofter/src/static/img/small/i10.png") no-repeat left center;
    background-size: .36rem auto;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text h4 b {
    margin-right: .25rem;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text .huDong .zan {
    height: 1.76rem;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text .huDong .zan dt {
    float: left;
    display: flex;
    justify-content: space-between;
    margin-top: .58rem;
    width: 6.26rem;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text .huDong .zan dt img {
    width: .68rem;
    height: .59rem;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text .huDong .zan dd {
    float: right;
    margin-top: 0.6rem;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text .huDong .zan dd img {
    width: .64rem;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text .huDong .reDu {
    height: .66rem;
    font: .37rem/.66rem "";
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text .huDong .reDu b {
    margin-right: .36rem;
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text .huDong .pinLun {
    height: .95rem;
    font: .38rem/.95rem "";
}

.container .swiper-slide:nth-child(2) #daRen .dongTai .text .huDong .pinLun b:nth-child(1) {
    color: #007aff;
}
</style>