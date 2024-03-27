<template>
  <div class="biggest">
    <div class="title-one">记录生活</div>
    <div class="conter-list">
      <el-table
        :data="tableData"
        style="width: 100%"
        @row-click="(row)=>handleClick(row.url)"
        >
        <el-table-column
          prop="name"
          label="PU主"
          width="180">
        </el-table-column>
        <el-table-column
          prop="contentType"
          label="视频类型"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="date"
          label="更新日期"
          width="180">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row.url)" type="text" size="small">点击播放视频</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>


<script>
  export default {
    data() {
        return {
          tableData: [{
            date: '2021-12-09',
            name: '吉吉魔丸',
            contentType:'数码分享',
            address: 'CASINO扑克游戏机3合一，怀旧老游戏机，帅小伙不推荐购买，因为这游戏机太无聊啦',
            url:'https://www.bilibili.com/video/BV1ib4y1i7oh?spm_id_from=333.999.0.0',
          },{
            date: '2021-12-14',
            name: '吉吉魔丸',
            contentType:'数码分享',
            address: '梦龙游戏机，晶码战士游戏掌机经典童年小游戏机',
            url:'https://www.bilibili.com/video/BV1Nb4y1q7Fw?spm_id_from=333.999.0.0',
          },{
            date: '2021-12-21',
            name: '吉吉魔丸',
            contentType:'数码分享',
            address: '点阵屏游戏掌机，怀旧游戏机，DY-959游戏机，帅小伙推荐评测',
            url:'https://www.bilibili.com/video/BV1QL4y1J7Qa?spm_id_from=333.999.0.0',
          },{
            date: '2021-12-29',
            name: '吉吉魔丸',
            contentType:'数码分享',
            address: '评测游戏机数码掌机-帅小伙推荐DY-G202点阵屏45合1游戏机介绍  好玩怀旧数码掌机',
            url:'https://www.bilibili.com/video/BV1k44y177Qp?spm_id_from=333.999.0.0',
          },{
            date: '2022-01-10',
            name: '吉吉魔丸',
            contentType:'数码分享',
            address: '点印刷屏游戏机 怀旧数码游戏机 双人对战掌机 帅小伙推荐 型号DY_631 开箱介绍',
            url:'https://www.bilibili.com/video/BV1aa411q7BB?spm_id_from=333.999.0.0',
          }]
        };
    },
    created(){
    },
    methods: {
      // 点击事件
      handleClick(e){
          window.open(
            e ,//需要跳转的路由
            '_blank',//是否在新的页面打开
          )
      }
    }
  }
</script>

<style scoped>
  .biggest{
    width: 100%;
    height: 100%;
    background-image:url('../../assets/img/2.jpeg');
    background-repeat:no-repeat;/*设置背景不重复*/
    background-attachment:fixed; /*背景图片不会随着页面的滚动而滚动。*/
    background-size:cover;/*	此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。*/
  }
  .title-one{
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  .conter-list{
    height: 90%;
  }

  ::v-deep .el-table,
  .el-table__expanded-cell {
    background-color: transparent;
  }

  ::v-deep .el-table tr {
    background-color: transparent !important;
    color: rgba(38, 176, 201, 0.897);
  }
  ::v-deep .el-table__body td,::v-deep .el-table__header th,
  .el-table .cell {
    background-color: transparent;
  }
  ::v-deep .el-table::before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
  }
  ::v-deep .el-table th.el-table__cell {
    background-color: transparent !important;
  }
  ::v-deep.el-table thead {
    color: #fff;
  }

</style>

