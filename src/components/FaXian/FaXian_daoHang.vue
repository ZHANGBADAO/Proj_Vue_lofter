<template>
    <!--导航-->
    <div id="title">
        <a class="search" href="">
            <img :src="daoHangData[0]" alt="">
        </a>
        <div class="swiper-container nav">
            <div class="swiper-wrapper">
                <div class="swiper-slide">推荐</div>
                <div class="swiper-slide">摄影</div>
                <div class="swiper-slide">旅行</div>
                <div class="swiper-slide">摄影课程</div>
                <div class="swiper-slide">穿搭</div>
                <div class="swiper-slide">女神</div>
                <div class="swiper-slide">电影</div>
                <div class="swiper-slide">萌宠</div>
                <div class="swiper-slide">美食</div>
                <div class="swiper-slide">娱乐</div>
                <div class="swiper-slide">文具控</div>
            </div>
        </div>
    
    </div>
</template>

<script type="text/ecmascript-6">


export default {
    props: ["daoHangData"],
    mounted: function () {

        
       

    }

}

</script>

<style scoped>
#title {
    height: 1.3rem;
    margin-bottom: .02rem;
    background: #fff;
}

#title .search {
    float: left;
    width: 1.4rem;
    padding: .35rem 0 0 .45rem;
    box-sizing: border-box;
}

#title .search img {
    width: .63rem;
}

#title .nav .swiper-slide {
    width: 2rem;
    font: .55rem "";
    text-align: center;
    line-height: 1.3rem;
    box-sizing: border-box;
}
#title .nav .swiper-slide:nth-child(1) {
      border-bottom: .01rem solid #000; }

#title .nav .swiper-slide:nth-child(4) {
    width: 2.5rem;
}
</style>