<template>
    <header>
        <router-link to="/dingyue"></router-link>
        <div class="search">
            <input type="text" placeholder="输入标签" autofocus="autofocus">
            <b></b>
        </div>
        <p>取消订阅</p>
    </header>
</template>



<!--------------------------------------------------->
<script type='text/ecmascript-6'>
    export default {
//        props:["getFooter_img"],
        mounted:function(){


        },
    }
</script>
<!--------------------------------------------------->

<style scoped>
    header {
        height: 1.3rem;
        background: #fff;
        border-bottom: 0.01rem solid #cccccc;
        position: absolute;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: space-around; }
    header a {
        width: .35rem;
        background: url("/Proj_Vue_lofter/src/static/img/small/j01.png") no-repeat center;
        background-size: .35rem auto; }
    header .search {
        width: 6.76rem;
        height: .9rem;
        margin-top: .2rem; }
    header .search input {
        width: 100%;
        height: 100%;
        outline: medium;
        box-sizing: border-box;
        text-indent: 1rem;
        font-size: .4rem;
        background: url("/Proj_Vue_lofter/src/static/img/small/j02.png") no-repeat 0.3rem center;
        background-size: .43rem auto;
        background-color: #eeeeee;
        border: 0;
        border-radius: .45rem; }
    header p {
        width: 2.15rem;
        height: .9rem;
        background: #cccccc;
        font: .4rem/.9rem "";
        text-align: center;
        margin-top: .2rem;
        color: #fff;
        border-radius: .04rem; }

</style>
