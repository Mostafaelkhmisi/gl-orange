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
</style>
