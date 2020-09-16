<template>
<div id="ourGames" class="games-section">
    <SectionTitle>
        <template #title> <span>OUR</span> GAMES </template>
    </SectionTitle>

        <!-- <Pagination v-if="getHomecarousel"
          :totalRecords="getHomecarousel.length"
          :perPageOptions="perPageOptions"
          v-model="pagination"
        />
        <div v-for="img in computedTableData" :key="img.id">
            <div class="home-gallery-glider">
                  <img :src="img.img" draggable="false" alt="">
            </div>
        </div> -->
        <div class="row home_carousel_imgs">
            <div class="col-4 carousel-imgs firstImg">
                  <div class="home_img_overlay" data-aos="fade-right" data-aos-duration="1000">
                    <div class="main_img_container">
                      <img class="main_img" src="@assets/imgs/home-games/image-1.png" draggable="false" alt="">
                      <div class="game_logo"> <img src="@assets/imgs/gameslogo/pubg-logo.png" alt=""> </div>
                    </div>
                  </div>
            </div>
            <div class="col-4 carousel-imgs">
                  <div class="home_img_overlay" data-aos="fade-down" data-aos-duration="1000">
                    <div class="main_img_container">
                      <img class="main_img secondImage" src="@assets/imgs/home-games/image-2.png" draggable="false" alt="">
                      <div class="game_logo"> <img src="@assets/imgs/gameslogo/mobilelegends-logo.png" alt=""> </div>
                    </div>
                  </div>
                  <div class="home_img_overlay" data-aos="fade-up" data-aos-duration="1000">
                    <div class="main_img_container">
                      <img class="main_img thirdImage" src="@assets/imgs/home-games/image-3.png" draggable="false" alt="">
                      <div class="game_logo"> <img src="@assets/imgs/gameslogo/clash-logo.png" alt=""> </div>
                    </div>
                  </div>
            </div>
            <div class="col-4 carousel-imgs" >
                  <div class="home_img_overlay" data-aos="fade-down" data-aos-duration="1000">
                    <div class="main_img_container">
                      <img class="main_img fourthImage" src="@assets/imgs/home-games/image-4.png" draggable="false" alt="">
                      <div class="game_logo"> <img src="@assets/imgs/gameslogo/pubg-logo.png" alt=""> </div>
                    </div>
                  </div>
                  <div class="home_img_overlay" data-aos="fade-up" data-aos-duration="1000">
                    <div class="main_img_container">
                      <img class="main_img" src="@assets/imgs/home-games/image-5.png" draggable="false" alt="">
                      <div class="game_logo"> <img src="@assets/imgs/gameslogo/modern-logo.png" alt=""> </div>
                    </div>
                  </div>
            </div>
        </div>

</div>
</template>
<script>
// import Pagination from '@components/ui/Pagination';
import SectionTitle from '@components/layout/SectionTitle.vue';
// import { mapGetters } from 'vuex';
// const perPageOptions = [5];
export default {
  components: { SectionTitle } // Pagination
  // data () {
  //  return {
  // perPageOptions,
  // pagination: { page: 1, perPage: perPageOptions[0] }
  // };
  // },
  // computed: {
  //   ...mapGetters('homeGames', ['getHomecarousel']),
  //   computedTableData () {
  //     if (!this.getHomecarousel) return [];
  //     else {
  //       const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
  //       const lastIndex = this.pagination.page * this.pagination.perPage;

  //       return this.getHomecarousel.slice(firstIndex, lastIndex);
  //     }
  //   }
  // }
};
</script>

<style lang="scss" scoped>
</style>
