<template>
    <header>
        <router-link to="/">
            关注
        </router-link>

        <a href="">
            订阅
        </a>
        <a href="">
            <img :src="getHeaderImg[0]" alt="">
        </a>
    </header>
</template>



<!--------------------------------------------------->
<script type='text/ecmascript-6'>
    export default {
        props:["getHeaderImg"],
        mounted:function(){


        },
    }
</script>
<!--------------------------------------------------->

<style scoped>
    header {
        height: 1.24rem;
        display: flex;
        position: fixed;
        z-index: 100;
        top: 0;
        width: 100%;
        background: #fff; }
    header a:nth-child(1) {
        width: 3.62rem;
        font: 0.5rem/1.24rem "";
        text-align: center;
        margin-left: 1.8rem; }
    header a:nth-child(2) {
        width: 3.62rem;
        font: 0.5rem/1.24rem "";
        text-align: center;
        border-bottom: .02rem solid #000000; }
    header a:nth-child(3) {
        width: .6rem;
        height: .47rem;
        margin-left: .7rem;
        margin-top: .42rem; }
    header a:nth-child(3) img {
        display: block;
        width: 100%; }


</style>
