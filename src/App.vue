<template>
  <div class="page-container">
    <div class="flex">
      <div class="the-menu">
        <TheMenu/>
      </div>
      <div class="the-content">
        <TheHeader/>
        <TheContent/>
      </div>
    </div>
  </div>
</template>
<script>
import TheContent from './layout/TheContent.vue'
import TheHeader from "./layout/TheHeader.vue"
import TheMenu from "./layout/TheMenu.vue"

export default {
  components: { TheMenu, TheHeader, TheContent },
}
</script>

<style>
  @import url('./css/common.css');
  @import url('./css/page/page.css');
  @import './assets/fontawesome-5.15.1/css/all.min.css';
  @font-face {
    font-family: notosans-regular;
    src: url('./assets/fonts/notosans-regular.2cb88a13.woff2');
  }
</style>
