<template>
    <div id="all">
        <div class="title">
            <a href="">165234人参与</a>
            <a href=""></a>
        </div>

        <div class="pics">
            <a href=""><img :src="getAll_img[0]" alt=""></a>
            <a href=""><img :src="getAll_img[1]" alt=""></a>
            <a href=""><img :src="getAll_img[2]" alt=""></a>
            <a href=""><img :src="getAll_img[3]" alt=""></a>
            <a href=""><img :src="getAll_img[4]" alt=""></a>
            <a href=""><img :src="getAll_img[5]" alt=""></a>
            <a href=""><img :src="getAll_img[2]" alt=""></a>
            <a href=""><img :src="getAll_img[0]" alt=""></a>
            <a href=""><img :src="getAll_img[4]" alt=""></a>

        </div>

    </div>
</template>



<!--------------------------------------------------->
<script type='text/ecmascript-6'>
    export default {
        props:["getAll_img"],
        mounted:function(){


        },
    }
</script>
<!--------------------------------------------------->

<style scoped>
    #all .title {
        height: 1.5rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        margin: .45rem 0 .3rem;
        padding: 0 .5rem; }
    #all .title a:first-child {
        font: .4rem/1.5rem ""; }
    #all .title a:nth-child(2) {
        width: .6rem;
        background: url("/Proj_Vue_lofter/src/static/img/small/j16.png") no-repeat center;
        background-size: .6rem auto; }
    #all .pics {
        background: #fff;
        display: flex;
        padding: .3rem;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: space-between; }
    #all .pics a {
        width: 3.25rem;
        height: 3.25rem;
        margin-bottom: .16rem; }
    #all .pics a img {
        width: 100%; }

</style>
