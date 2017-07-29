<template>

    <div class="swiper-slide">
        <a href="" class="huoDong">
            <img :src="tuiJianData[0].pic[0]" alt="">
        </a>
        <a href="" class="zhiding">
            <img :src="tuiJianData[0].pic[1]" alt="">
            <h4>{{tuiJianData[1].text[0]}}</h4>
            <p>{{tuiJianData[1].text[1]}}</p>
        </a>
        <a href="" class="huoDong2">
            <img :src="tuiJianData[0].pic[2]" alt="">
            <p>{{tuiJianData[1].text[2]}}</p>
        </a>
        <a href="" class="huoDong3">
            <img :src="tuiJianData[0].pic[3]" alt="">
            <p>{{tuiJianData[1].text[3]}}</p>
        </a>
    </div>

</template>

<script type="text/ecmascript-6">


    export default{
        props:["tuiJianData"],
        mounted:function () {


        }

    }

</script>

<style scoped>
    
    .container .swiper-slide:nth-child(1) .huoDong {
        display: block; }
    .container .swiper-slide:nth-child(1) .huoDong img {
        width: 100%; }
    .container .swiper-slide:nth-child(1) .zhiding {
        display: block;
        margin-top: .6rem; }
    .container .swiper-slide:nth-child(1) .zhiding img {
        width: 100%; }
    .container .swiper-slide:nth-child(1) .zhiding h4 {
        font: .45rem/.45rem "";
        color: #000;
        padding: .5rem 0 .4rem 1.2rem;
        background: url("/Proj_Vue_lofter/src/static/img/small/f04.png") no-repeat 0.45rem 0.15rem;
        background-size: .46rem auto; }
    .container .swiper-slide:nth-child(1) .zhiding p {
        width: 9.92rem;
        height: .9rem;
        margin: 0 auto;
        border-bottom: .01rem solid #cccccc;
        font: .4rem ""; }
    .container .swiper-slide:nth-child(1) .huoDong2 {
        display: block;
        margin-top: .6rem; }
    .container .swiper-slide:nth-child(1) .huoDong2 img {
        width: 100%; }
    .container .swiper-slide:nth-child(1) .huoDong2 p {
        width: 9.92rem;
        height: .9rem;
        margin: 0 auto;
        border-bottom: .01rem solid #cccccc;
        font: .4rem "";
        padding-top: .2rem; }
    .container .swiper-slide:nth-child(1) .huoDong3 {
        display: block;
        margin-top: .6rem; }
    .container .swiper-slide:nth-child(1) .huoDong3 img {
        width: 100%; }
    .container .swiper-slide:nth-child(1) .huoDong3 p {
        width: 9.92rem;
        height: .9rem;
        margin: 0 auto;
        border-bottom: .01rem solid #cccccc;
        font: .4rem "";
        padding-top: .2rem; }

</style>