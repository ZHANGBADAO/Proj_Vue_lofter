<template>
    <div id="wode">
        <h4>
            我的订阅
        </h4>
        <ul>
            <li>
                <router-link to="/jijian">
                    <img :src="getWoDeImg[0]" alt="">
                    <p>极简</p>
                </router-link>
            </li>
            <li>
                <a href="">
                    <img :src="getWoDeImg[1]" alt="">
                    <p>极简</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img :src="getWoDeImg[2]" alt="">
                    <p>极简</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img :src="getWoDeImg[3]" alt="">
                    <p>极简</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img :src="getWoDeImg[4]" alt="">
                    <p>极简</p>
                </a>
            </li>
        </ul>

        <a href="" class="more">分类查看所有标签</a>
    </div>
</template>



<!--------------------------------------------------->
<script type='text/ecmascript-6'>
    export default {
        props:["getWoDeImg"],
        mounted:function(){


        },
    }
</script>
<!--------------------------------------------------->

<style scoped>
    /*我的订阅*/
    #wode {
        background: #f3f5f4;
        margin-top: .44rem; }
    #wode h4 {
        font: .47rem/1.2rem "";
        height: 1.2rem;
        color: #666666;
        text-indent: .48rem;
        border-bottom: .01rem solid #cccccc;
        background: #fff; }
    #wode ul {
        background: #fff; }
    #wode ul li:last-child p {
        border: 0; }
    #wode ul li a {
        display: block;
        padding-left: .45rem;
        zoom: 1; }
    #wode ul li a:after {
        content: "";
        clear: both;
        display: block; }
    #wode ul li a img {
        float: left;
        width: 1.2rem;
        margin-top: .3rem; }
    #wode ul li a p {
        font: .44rem/1.78rem "";
        float: right;
        width: 8.7rem;
        height: 1.78rem;
        border-bottom: .01rem solid #ccc;
        color: #000; }
    #wode .more {
        display: block;
        font: .46rem/1.2rem "";
        text-align: center;
        color: #000;
        background: #fff;
        margin-top: .45rem; }

</style>
