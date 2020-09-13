<template>
<div>
    <div class="videoCover">
        <video src="@assets/videos/cover-videos/After-Earth.webm" autoplay loop muted type="video/mp4"
        @canplay="updatePaused" @playing="updatePaused" @pause="updatePaused"></video>
        <div class="pauseHover">
            <div class="pauseContainer"><i v-if="!this.paused" class="fas fa-pause" @click="pause"></i> <i v-if="this.paused" @click="play" class="fas fa-play"></i></div>
        </div>
    </div>

    <homeInfo> </homeInfo>
    <ourGames> </ourGames>
    <Howtoplay> </Howtoplay>
    <Contactus> </Contactus>
</div>
</template>

<script>
import homeInfo from './home-info'
import ourGames from './ourGames'
import Howtoplay from './Howtoplay'
import Contactus from './home-contact'
export default {
  components: { homeInfo, ourGames, Howtoplay, Contactus },
  data () {
    return {
      videoElement: null,
      paused: false
    }
  },
  methods: {
    updatePaused (event) {
      this.videoElement = event.target
      this.paused = event.target.paused
    },
    play () {
      this.videoElement.play()
    },
    pause () {
      this.videoElement.pause()
    }
  },
  computed: {
    playing () { return !this.paused }
  }
}
</script>

<style lang="scss">
</style>
