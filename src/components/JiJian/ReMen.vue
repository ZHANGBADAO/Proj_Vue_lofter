<template>
    <!--热门内容-->
    <div id="remen">
        <a class="title" href="">热门内容</a>
        <div class="pic">
            <a href=""><img :src="getReMen_img[0]" alt=""></a>
            <a href=""><img :src="getReMen_img[2]" alt=""></a>
            <a href=""><img :src="getReMen_img[1]" alt=""></a>
            <a href=""><img :src="getReMen_img[3]" alt=""></a>

        </div>
    </div>
</template>



<!--------------------------------------------------->
<script type='text/ecmascript-6'>
    export default {
        props:["getReMen_img"],
        mounted:function(){


        },
    }
</script>
<!--------------------------------------------------->

<style scoped>
    #remen {
        background: #fff;
        padding: 0 .35rem .35rem;
        border-bottom: .01rem solid #cccccc; }
    #remen .title {
        font: .48rem/1.3rem "";
        display: block;
        color: #666666;
        background: url("/Proj_Vue_lofter/src/static/img/small/j09.png") no-repeat right center;
        background-size: .31rem auto; }
    #remen .pic {
        height: 2.4rem;
        display: flex;
        justify-content: space-between; }
    #remen .pic a {
        width: 2.4rem; }
    #remen .pic a img {
        width: 100%; }

</style>
