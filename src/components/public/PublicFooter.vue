<template>
    <footer>
        <ul>
            <li>
                <router-link to="/">
                    <img :src="getFooter_img[0]" alt="">
                    <p>首页</p>
                </router-link>

            </li>
            <li>
                <router-link to="/faxian">
                    <img :src="getFooter_img[1]" alt="">
                    <p>发现</p>
                </router-link>
            </li>
            <li>
                <a href="">
                    <img :src="getFooter_img[2]" alt="">
                </a>
            </li>
            <li>
                <router-link to="/xiaoxi">
                    <img :src="getFooter_img[3]" alt="">
                    <p>消息</p>
                </router-link>
            </li>
            <li>
                <router-link to="/wode">
                    <img :src="getFooter_img[4]" alt="">
                    <p>我的</p>
                </router-link>

            </li>
        </ul>
    </footer>
</template>



<!--------------------------------------------------->
<script type='text/ecmascript-6'>
    export default {
        props:["getFooter_img"],
        mounted:function(){


        },
    }
</script>
<!--------------------------------------------------->

<style scoped>
    footer {
        height: 1.5rem;
        background: #fdfffe;
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: 50; }
    footer ul {
        display: flex;
        justify-content: space-around;
        height: 100%; }
    footer ul li {
        position: relative;
        width: .82rem; }
    footer ul li:nth-child(2) {
        width: .82rem; }
    footer ul li:nth-child(2) img {
        width: .82rem; }
    footer ul li:nth-child(3) {
        width: .91rem; }
    footer ul li:nth-child(3) img {
        width: .91rem; }
    footer ul li a {
        display: block;
        padding-top: .23rem; }
    footer ul li a img {
        display: block;
        width: .6rem;
        margin: 0 auto; }
    footer ul li a p {
        text-align: center;
        font: .28rem "";
        position: absolute;
        width: 100%;
        bottom: 0.1rem; }


</style>
