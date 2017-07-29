<template>
	<header>
        <img :src="getHeadInfo[0]" alt="" class="touxiang">
        <div class="name">
            <h5>典帝</h5>
            <h6>ID : qtldsy</h6>
            <p>关注 <b>20</b> 喜欢 <b>0</b> 粉丝 <b>20</b></p>
        </div>
        <a href="" class="more"></a>
    </header>
</template>

<script>
	export default {
        props:["getHeadInfo"]
    }
</script>

<style scoped>
	header {
  height: 4rem;
  display: flex;
  background: linear-gradient(#cdd2d6, #e4e9ea); }
  header .touxiang {
    width: 2.4rem;
    height: 2.4rem;
    margin: 1rem 0 0 .4rem;
    border-radius: 50%; }
  header .name {
    width: 5.9rem;
    margin-left: .48rem; }
    header .name h5 {
      font: .5rem/.5rem "";
      padding: 1.14rem 0 .4rem; }
    header .name h6 {
      font: .4rem/.4rem "";
      color: #666; }
    header .name p {
      font: .4rem/.4rem "";
      padding-top: .4rem;
      color: #555555; }
      header .name p b {
        color: #000;
        margin: 0 .3rem; }
  header .more {
    width: .25rem;
    background: url("/Proj_Vue_lofter/src/static/img/small/w01.png") no-repeat center;
    background-size: .24rem auto;
    margin-left: .5rem; }

</style>