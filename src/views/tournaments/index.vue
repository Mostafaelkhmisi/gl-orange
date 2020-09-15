<template>
<div>
  <div class="mainTournament-Div">
        <img class="Tournament-cover" src="https://via.placeholder.com/1920x400?text=Visit+Blogging.com+NowC/O https://placeholder.com/">

        <VueSlickCarousel v-bind="sliderSettings">
            <template v-slot:prevArrow>
               <div id="gallery-prev"> <div class="gallery-next-orangeBox leftSliderOrange"> <i class="fas fa-chevron-left"></i> </div> </div>
            </template>
                <div v-for="tournament in getTournaments" :key="tournament.id" class="tournament-gallery-glider">
                    <div class="img_imgOverlay">
                        <img :src="tournament.img" draggable="false" alt="">
                        <div class="tournamentImg-overlay">
                            <div class="tournamentName">{{ tournament.name }}</div>
                            <div class="tournamentPlayers"><i class="fas fa-user-friends"></i> {{tournament.joined}}</div>
                            <div class="tournamentPrize"><i class="fas fa-trophy"></i>  {{tournament.prize}} EGP</div>
                        </div>
                    </div>
                    <button class="tournament-joinBtn"> Join </button>
                    <p> {{tournament.date}} </p>
                </div>
            <template v-slot:nextArrow>
              <div id="gallery-next"> <div class="gallery-next-orangeBox"> <i class="fas fa-chevron-right" ></i> </div> </div>
            </template>
        </VueSlickCarousel>

      <downAnchor>
          <template #anchor>
            <div class="scrolltoShow" v-scroll-to="{el:'#browseGames', duration: 1000 }">
                <i class="fas fa-arrow-down"></i>
            </div>
        </template>
        <template #scrollText> Browse All </template>
      </downAnchor>

  </div>
 <browseGames> </browseGames>

</div>
</template>
<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import downAnchor from '@components/layout/down-Anchor.vue'
import browseGames from './Browse.vue'
import { mapGetters } from 'vuex'
export default {
  components: { VueSlickCarousel, downAnchor, browseGames },
  data () {
    return {
      sliderSettings: {
        infinite: true,
        speed: 500,
        draggable: true,
        slidesToShow: 3.5,
        slidesToScroll: 3.5,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters('tournaments', ['getTournaments'])
  }
}
</script>
<style>
</style>
