<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
  
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components:{FooterGuide},
  mounted() {
  },
}
</script>

<style>
  @media only screen and (-webkit-device-pixel-ratio: 2) {
    .border-1px::before {
      transform: scaleY(0.5);
    }
  }
  @media only screen and (-webkit-device-pixel-ratio: 3) {
    .border-1px::before {
      transform: scaleY(0.333333);
    }
  }
  #app {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    position: relative;
  }
</style>
