<template>
  <div>
    <div class="roll-top">{{textOne}}</div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          textOne:'欢迎来到全球最大的空白网站!',
          textTwo:'阿巴阿巴!',
        };
    },
    created(){
        // this.$router.push('/myMine')
    },
    methods: {
      menuClick(index){
        this.$router.push(index)
      }
    }
  }
</script>


<style scoped>
  .roll-top{
    color: #fff;
    font-size: 30px;
    font-family: "aigeiCom";
    margin-bottom: 40px;
    /* 让文字滚动 */
    display: inline-block;
    white-space: nowrap;
    animation: 10s wordsLoop linear infinite normal;
  }
  @keyframes wordsLoop {
      0% {
          transform: translateX(1000px);
          -webkit-transform: translateX(1000px);
      }
      100% {
          transform: translateX(-100%);
          -webkit-transform: translateX(-100%);
      }
  }
</style>

