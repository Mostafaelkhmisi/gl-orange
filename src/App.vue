<template>
<div id="app">
    <AppHeader></AppHeader>

    <router-view/>

    <AppFooter></AppFooter>
</div>
</template>

<script>
import AppHeader from '@/components/layout/appHeader.vue'
import AppFooter from '@/components/layout/appFooter.vue'

export default {
  components: { AppHeader, AppFooter }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
::-webkit-scrollbar{
  width: 7px;
}
::-webkit-scrollbar-track{
  //border: 4px solid orange;
  //box-shadow: inset 0 0 2.5px 2px rgba(0, 0, 0 ,0.5);
  background-color: black;
}
::-webkit-scrollbar-thumb{
  background: linear-gradient(45deg,#ff6b0969, #FF6600CC);
  border-radius: 5px;
}
</style>
