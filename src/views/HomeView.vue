<template>
  <div class="home">
    <el-container>
      <el-header>
        <!-- 顶部导航 -->
        <top-title></top-title>
      </el-header>

      <el-container>
        <el-aside width="10%">
          <!-- 左侧导航 -->
          <left-title></left-title>
        </el-aside>

        <el-container>
          <el-main>
            <!-- 中间内容 -->
           <router-view v-if="active==false"></router-view>
           <centre-title v-else></centre-title>
          </el-main>
        </el-container>

      </el-container>
      <div class="back-bottom">
          <a class="text-url" href="https://beian.miit.gov.cn/">ICP备案号:粤ICP备2022076435号</a>
      </div>

    </el-container>
  </div>
</template>

<script>
    import topTitle from './homeContent/TopTitle';//顶部导航
    import leftTitle from './homeContent/LeftTitle';//左侧导航
    import centreTitle from './homeContent/CentreTitle';//中间内容
    export default {
        computed: {},
        components: {
            topTitle,
            leftTitle,
            centreTitle,
        },
        data() {
            return {
               active: true,
            }
        },
        watch:{
          '$store.state.sysFrm.active.active': {
            deep: true, //深度监听
            handler(active) {
              this.active = active
            },
          },
        },
        methods: {
        },
        created() {
        }
    }
</script>

<style scoped>
  .home{
    height: 100%;
  }
  .el-container{
    height:100%;
  }
  /* 顶部导航 */
  .el-header, .el-footer {
    line-height: 60px;
    background-image:url('../assets/img/9.jpg');
  }
  /* 左侧导航 */
  .el-aside {
    height: 100%;
    background-image:url('../assets/img/9.jpg');
    /* background-image: linear-gradient(to top, #000000,#202129, #212325); */
    /* background-image:url('../assets/img/10.jfif');
    background-repeat:no-repeat;
    background-attachment:fixed; 
    background-size:cover; */
  }
  /* 中间内容 */
  .el-main {
    /* background-color: rgb(24, 31, 39);; */
    color: #333;
    height: 100%;
    padding:0 !important;
    background-image:url('@/assets/img/1.jpg');
    background-repeat:no-repeat;/*设置背景不重复*/
    background-attachment:fixed; /*背景图片不会随着页面的滚动而滚动。*/
    background-size:cover;/*	此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。*/
  }
  .back-bottom{
    background-color: rgb(0, 0, 0);
    text-align: center;

  }
  .text-url{
    color: rgb(206, 200, 200);
  }
</style>

