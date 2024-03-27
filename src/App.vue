<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  body {
      margin: 0;   /**主要是去除谷歌浏览器默认的8像素的外边距 */
  }
  #app {
      position: absolute;   /**使这个div的大小撑满整个屏幕 */
      width: 100%;
      height: 100%;
  }
</style>

