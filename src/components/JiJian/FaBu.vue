<template>
    <div>
        <!--发布-->
        <div id="fabu">

        </div>

        <!--遮罩-->
        <div id="mask">
            <div id="box">
                <a id="a1" href=""><img :src="getFaBu_img[0]" alt=""></a>
                <a id="a2" href=""><img :src="getFaBu_img[1]" alt=""></a>
                <a id="a3" href=""><img :src="getFaBu_img[2]" alt=""></a>
                <a id="a4" href=""><img :src="getFaBu_img[3]" alt=""></a>
            </div>
        </div>
    </div>
</template>



<!--------------------------------------------------->
<script type='text/ecmascript-6'>


    export default {
        props:["getFaBu_img"],
        mounted:function(){
            //点击按钮显示遮罩
            $("#fabu").click(function () {
                $("#mask").css({"z-index":202});
                $("#mask").animate(
                    {opacity:"1"},
                    100
                );
                $("#a1").animate({bottom:"4.9rem"},200).delay(100);
                $("#a2").animate({bottom:"4.9rem"},200).delay(200);
                $("#a3").animate({bottom:"0rem"},200).delay(300);
                $("#a4").animate({bottom:"0rem"},200).delay(400);
            });
//点击遮罩隐藏遮罩,并降低z
            $("#mask").click(function () {
                $("#mask").css({"z-index":-1,opacity:0});
                $("#a1").css({bottom:"-7rem"});
                $("#a2").css({bottom:"-7rem"});
                $("#a3").css({bottom:"-7rem"});
                $("#a4").css({bottom:"-7rem"});
            });

        },
    }
</script>
<!--------------------------------------------------->

<style scoped>
    #fabu {
        position: fixed;
        width: 1.5rem;
        height: 1.5rem;
        right: .45rem;
        bottom: .45rem;
        background: url("/Proj_Vue_lofter/src/static/img/small/j17.png") no-repeat center;
        background-size: 1.5rem auto;
        box-shadow: #ccc 0 0.03rem 0.13rem;
        border-radius: 50%;
        z-index: 200; }

    #mask {
        width: 100%;
        height: 100%;
        background: white;
        opacity: 0;
        position: fixed;
        z-index: 100;
        top: 0; }
    #mask #box {
        width: 7.87rem;
        height: 9.48rem;
        position: absolute;
        bottom: 0;
        left: 1.48rem;
        bottom: 1.76rem; }
    #mask #box a {
        width: 3.3rem;
        height: 4.5rem;
        position: absolute; }
    #mask #box a img {
        width: 100%; }
    #mask #box #a1 {
        left: 0;
        bottom: -7rem; }
    #mask #box #a2 {
        bottom: -7rem;
        right: 0; }
    #mask #box #a3 {
        left: 0;
        bottom: -7rem; }
    #mask #box #a4 {
        right: 0;
        bottom: -7rem; }

</style>
