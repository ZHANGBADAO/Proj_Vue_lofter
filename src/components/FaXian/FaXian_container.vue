<template>
    <div class="swiper-container container">
        <div class="swiper-wrapper">
            <fa-xian_container_tui-jian :tuiJianData="tuiJianData"></fa-xian_container_tui-jian>
            <fa-xian_container_she-ying :sheYingData="sheYingData"></fa-xian_container_she-ying>
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
</template>

<script type="text/ecmascript-6">
import FaXian_container_tuiJian from "./FaXian_container_tuiJian.vue"
import FaXian_container_sheYing from "./FaXian_container_sheYing.vue"

export default {
    components: {
        FaXian_container_tuiJian,
        FaXian_container_sheYing
    },

    props: ["tuiJianData", "sheYingData"],

    mounted: function () {



    }

}

</script>

<style scoped>

</style>