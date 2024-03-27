<template>
  <div>
    <el-row class="tac">
        <el-menu
         @select="menuClick"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <el-menu-item index="/movie">
            <i class="el-icon-video-camera-solid"></i>
            <span slot="title">记录生活</span>
          </el-menu-item>

          <el-menu-item index="/myMine">
            <i class="el-icon-user-solid"></i>
            <span slot="title">个人</span>
          </el-menu-item>

          <el-menu-item index="/photo">
            <i class="el-icon-upload"></i>
            <span slot="title">相册</span>
          </el-menu-item>

          <el-menu-item index="/test1">
            <i class="el-icon-s-marketing"></i>
            <span slot="title">技术资讯攻略</span>
          </el-menu-item>

          <el-menu-item index="/test2">
            <i class="el-icon-location"></i>
            <span slot="title">我的自拍</span>
          </el-menu-item>

          <el-menu-item index="/atlas">
            <i class="el-icon-location"></i>
            <span slot="title">学习地图</span>
          </el-menu-item>

        </el-menu>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";//引入vuex

  export default {
    data() {
        return {
        };
    },
    computed: {
      ...mapGetters({}),//使用vuex
    },
    created(){
    },
    methods: {
      menuClick(index){
        this.$router.push(index);
        // 点击后,保存active为false到vuex里面
        this.$store.dispatch("sysFrm/GetOne",{
          active:false
        })
      },
    }
  }
</script>

<style>
  .el-menu{
    border-right: solid 0px !important;
  }
  .el-menu-item.is-active {
    background: #000000 !important;
  }
  .el-menu-item {
    background-image:url('../../assets/img/9.jpg');
  }

</style>
