<template>
  <div>
    <!-- <div class="home-content">欢迎光临来到全球最大空白的网站,这里是分享个人技术的网站</div> -->
    <div class="home-content">
      <div>欢迎光临来到我的博客</div>
      <div>这里是分享个人技术的网站</div>
    </div>
  </div>
</template>


<style scoped>
.home-content{
    color: #fff;
    font-size: 30px;
    font-family: "aigeiCom";
    position:absolute;
    width:500px;
    height:500px;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    background-color: transparent !important;
    resize:both;/*用于设置了所有除overflow为visible的元素*/
    overflow:auto; 
}
</style>