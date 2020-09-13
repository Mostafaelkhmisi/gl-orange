<template>
<div id="ourGames" class="games-section">
    <SectionTitle>
        <template #title> <span>OUR</span> GAMES </template>
    </SectionTitle>

    <VueSlickCarousel v-bind="sliderSettings">
        <template v-slot:prevArrow>
            <i class="fas fa-chevron-left" id="gallery-prev"></i>
        </template>
            <div class="home-gallery-glider">
                  <img src="@assets/imgs/backgrounds/SHbg.jpg" draggable="false" alt="">
            </div>
            <div class="home-gallery-glider">
                  <img src="@assets/imgs/backgrounds/SHbg.jpg" draggable="false" alt="">
            </div>
                        <div class="home-gallery-glider">
                  <img src="@assets/imgs/backgrounds/SHbg.jpg" draggable="false" alt="">
            </div>
                        <div class="home-gallery-glider">
                  <img src="@assets/imgs/backgrounds/SHbg.jpg" draggable="false" alt="">
            </div>
        <template v-slot:nextArrow>
            <i class="fas fa-chevron-right" id="gallery-next"></i>
        </template>
    </VueSlickCarousel>
</div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import SectionTitle from '@components/layout/SectionTitle.vue'
export default {
  components: { VueSlickCarousel, SectionTitle },
  data () {
    return {
      sliderSettings: {
        infinite: true,
        speed: 500,
        draggable: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
  #gallery-next, #gallery-prev {
    position: absolute;
    z-index: 5;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: #ccc;
    font-size: 2rem;
    transition: all .5s ease-in-out;
      &:hover {
        color: #fff;
      }
  }
  #gallery-prev {
    left: 0;
  }
  #gallery-next {
    right: 0;
    text-align: end;
  }
</style>
