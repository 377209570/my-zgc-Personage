<template>
  <div class="back">
    <div>
      <div class="text-one">阿巴阿巴阿巴阿巴阿巴阿巴</div>

    </div>
  </div>
</template>

<script>
export default {
  name:"Test1",
  data() {
      return {

        
      }
    }
}
</script>



<style>
.back{
  height: 100%;
  background-color: aqua;
  background-image: url('@/assets/img/jiqing.jfif');
  background-repeat:no-repeat;/*设置背景不重复*/
	background-size:cover;/*	此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。*/
}
.text-one{
  color: #fff;
  font-size: 30px;
  font-family: "aigeiCom";
  margin-bottom: 40px;
}

</style>
