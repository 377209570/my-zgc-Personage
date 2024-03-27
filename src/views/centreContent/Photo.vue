<template>
  <div class="top-back">
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="(item,index) in urls" :key="index">
          <img style="width: 100%; height: 100%" :src="item.url">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <div class="text-one">我是一天才,整天只会阿巴阿巴,</div>
      <div class="text-one">如果你的钱太多了花不完,扫描下方二维码,我可以勉为其难帮你花花</div>
    </div>
    <div class="payment">
      <!-- 微信 -->
      <el-image 
        style="width: 200px; height: 200px; margin: 30px 50px;"
        :src="urlwx" 
        :preview-src-list="srcListwx">
      </el-image>
      <!-- 支付宝 -->
      <el-image 
        style="width: 200px; height: 200px; margin: 30px 50px;"
        :src="urlzfb" 
        :preview-src-list="srcLiszfb">
      </el-image>
    </div>
  </div>
</template>

<script>
export default {
  name:"Test1",
  data() {
      return {
        urls: [
          { url: require("@/assets/img/lbt/11.jpg") },
          { url: require("@/assets/img/lbt/22.jpg") },
          { url: require("@/assets/img/lbt/33.jpg") },
          { url: require("@/assets/img/lbt/44.jpg") },
        ],
        // 微信
        urlwx: require("@/assets/img/wx.jpg"),
        srcListwx: [
          require("@/assets/img/wx.jpg") 
        ],
        // 支付宝
        urlzfb: require("@/assets/img/zfb.jpg"),
        srcLiszfb: [
          require("@/assets/img/zfb.jpg") 
        ],
      }
    }
}
</script>



<style>
  .top-back{
    height: 100%;
    background-image:url('@/assets/img/9.jpg');
    background-repeat:no-repeat;/*设置背景不重复*/
    background-attachment:fixed; /*背景图片不会随着页面的滚动而滚动。*/
    background-size:cover;/*	此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。*/
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 250px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .text-one{
    color: #fff;
    font-size: 30px;
    font-family: "aigeiCom";
    margin-bottom: 10px;
  }
  .payment{
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    /* align-items: center; */
  }
</style>
