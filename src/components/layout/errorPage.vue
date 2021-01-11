<template>
  <div class="errorpage">
    <div>
        <h1> Page not found</h1>
          <lottie-animation
          path="./notfound/ghost-notfound.json"
          :loop="true"
          :autoPlay="true"
          :loopDelayMin="0"
          :loopDelayMax="0"
          :speed="1"
          :width="300"
          :height="300"
          />
    </div>
  </div>
</template>

<script>
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue';
export default {
  components: {
    LottieAnimation
  }
};
</script>

<style lang="scss" scoped>
.errorpage{
  background-color: #232528;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
    h1{
      color: #7a84db;
    }
}
</style>
