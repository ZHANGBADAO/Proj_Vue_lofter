<template>
    <!--参与的人-->
    <div id="canYu">
        <a class="title" href="">参与的人</a>
        <div class="pic">
            <a href=""><img :src="getCanYu_img[0]" alt=""></a>
            <a href=""><img :src="getCanYu_img[1]" alt=""></a>
            <a href=""><img :src="getCanYu_img[2]" alt=""></a>
            <a href=""><img :src="getCanYu_img[3]" alt=""></a>
            <a href=""><img :src="getCanYu_img[0]" alt=""></a>
            <a href=""><img :src="getCanYu_img[1]" alt=""></a>

        </div>
    </div>
</template>



<!--------------------------------------------------->
<script type='text/ecmascript-6'>
    export default {
        props:["getCanYu_img"],
        mounted:function(){


        },
    }
</script>
<!--------------------------------------------------->

<style scoped>
    #canYu {
        background: #fff;
        padding: 0 .35rem .35rem;
        border-bottom: .01rem solid #cccccc;
        margin-top: .45rem; }
    #canYu .title {
        font: .48rem/1.3rem "";
        display: block;
        color: #666666;
        background: url("/Proj_Vue_lofter/src/static/img/small/j09.png") no-repeat right center;
        background-size: .31rem auto; }
    #canYu .pic {
        height: 1.52rem;
        display: flex;
        justify-content: space-between; }
    #canYu .pic a {
        width: 1.5rem; }
    #canYu .pic a img {
        width: 100%; }

</style>
