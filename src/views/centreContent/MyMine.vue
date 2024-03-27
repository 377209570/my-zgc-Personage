<template>
  <div class="homepage">
    <div class="text-title">
      <span class="text-one">个人简介</span>
      <span class="text-two">命名:朱帅潮</span>
      <span class="text-three">B站最知名科技数码PU主</span>
      <span class="text-four">杰出的技术:</span>
      <span class="text-three">知道Ai、Fw、Br、Ae、Pr、Id、Ps等软件的安装与卸载，</span>
      <span class="text-three">精通CSS、Java、PHP、C、C++、C#、Java、Ruby、</span>
      <span class="text-three">Perl、Lisp、Python、Objective-C、Action等单词的拼写，</span>
      <span class="text-three">熟悉Windows、Linux、MacOS、IOS、Android等系统的开关机！</span>
      <span class="text-four">粉丝评价:</span>
      <span class="text-three">亚洲最帅最帅名人,与吴彦组,彭于晏,天若有情版本刘德华,古天乐齐名</span>
    </div>

    <div class="block">
      <div class="text-wo">本人自拍</div>
      <img class="block-img" src="@/assets/img/wo.webp">'
    </div>

  </div>
</template>


<script>
  export default {
    data() {
        return {

        };
    },
    created(){

    },
    methods: {

    }
  }
</script>

<style scoped>
.homepage{
  background-image:url('../../assets/img/1.jpg');
  background-repeat:no-repeat;/*设置背景不重复*/
	background-attachment:fixed; /*背景图片不会随着页面的滚动而滚动。*/
	background-size:cover;/*	此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。*/
  /* background-color: aqua; */
  height: 100%;
  width: 100%;
}
.text-title{
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-left: 80px;
}
.text-one{
  color: #fff;
  font-size: 50px;
  font-family: "aigeiCom";
  margin-bottom: 40px;
}
.text-two{
  color: #fff;
  font-size: 30px;
  font-family: "aigeiCom";
  margin-bottom: 20px;
}
.text-three{
  color: #fff;
  font-size: 25px;
  font-family: "aigeiCom";
  margin-bottom: 10px;
}
.text-four{
  color: #fff;
  font-size: 25px;
  font-family: "aigeiCom";
  margin-bottom: 20px;
  margin-top: 20px;
}
.text-wo{
  color: #fff;
  font-size: 25px;
  font-family: "aigeiCom";
  margin-bottom: 20px;
  text-align: center;
}
.block{
  position: absolute;
  right: 150px;
  top: 150px;
}
.block-img{
  width: 400px;
  height: 400px;
}
</style>
