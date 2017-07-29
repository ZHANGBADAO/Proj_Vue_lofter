<template>
	<div id="fuli">
        <div class="left">
            <img :src="getFuLiInfo[0]" alt="">
            <div>
                <h4>福利市集</h4>
                <h5></h5>
            </div>
        </div>
        <div class="right">
            <img :src="getFuLiInfo[1]" alt="">

            <div>

                <router-link to="/yinpin">
                    <h4>乐夫印品</h4>
                    <h5>照片印出来更美</h5>
                </router-link>
            </div>
        </div>
    </div> 
</template>

<script>
	export default {
        props:["getFuLiInfo"]
    }
</script>

<style scoped>
	#fuli {
  height: 2.7rem;
  display: flex;
  border-top: .01rem solid #cccccc;
  border-bottom: .01rem solid #cccccc; }
  #fuli .left {
    flex: 50%;
    border-right: .01rem solid #cccccc; }
    #fuli .left img {
      float: left;
      width: 1.51rem;
      margin: .6rem 0 0 .47rem; }
    #fuli .left div {
      float: left;
      padding: .84rem 0 0 .33rem; }
      #fuli .left div h4 {
        font: .43rem/.43rem ""; }
      #fuli .left div h5 {
        width: 1.2rem;
        height: .4rem;
        background: url("/Proj_Vue_lofter/src/static/img/small/w04.png") no-repeat center;
        background-size: 1.02rem auto;
        margin-top: .32rem; }
  #fuli .right {
    flex: 50%; }
    #fuli .right img {
      float: left;
      width: 1.51rem;
      margin: .6rem 0 0 .47rem; }
    #fuli .right div {
      float: left;
      padding: .84rem 0 0 .33rem; }
      #fuli .right div h4 {
        font: .43rem/.43rem ""; }
      #fuli .right div h5 {
        width: 2.85rem;
        height: .4rem;
        font: .35rem "";
        margin-top: .32rem; }
</style>