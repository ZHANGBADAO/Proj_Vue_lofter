<template>
	 <ul id="set">
        <li>
            <img :src="getSetInfo[0]" alt="">
            <router-link to="/geren">
                个人应用
            </router-link>

        </li>
        <li>
            <img :src="getSetInfo[1]" alt="">
            <router-link to="/ketang">
                摄影课堂
            </router-link>
        </li>
        <li>
            <img :src="getSetInfo[2]" alt="">
            <a href="">
                分享LOFTER APP
            </a>
        </li>
        <li>
            <img :src="getSetInfo[3]" alt="">
            <a href="">
                设置
            </a>
        </li>
    </ul>
</template>

<script>
	export default {
        props:["getSetInfo"]
    }
</script>

<style scoped>
	#set li {
  height: 1.5rem;
  display: flex; }
  #set li img {
    width: .66rem;
    height: .66rem;
    margin: .45rem .5rem; }
  #set li a {
    flex: 1;
    font: .5rem "";
    line-height: 1.5rem;
    color: #000;
    border-bottom: .01rem solid #cdd2d6;
    background: url("/Proj_Vue_lofter/src/static/img/small/w09.png") no-repeat 8.53rem 0.55rem;
    background-size: .23rem auto; }
</style>