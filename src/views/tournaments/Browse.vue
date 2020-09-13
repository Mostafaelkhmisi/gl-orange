<template>
<div id="browseGames" class="browse-section">
    <SectionTitle>
        <template #title> <span>BROWSE</span> TOURNAMENTS </template>
    </SectionTitle>

    <div class="row m-0 p-0">
      <div class="col-3 pl-0 inputContainer">
        <label for="tournament" :class='clazzTournament'> Tournament </label>
        <input @focus="onFocusTournament($event)" v-model="form.tournament" @blur="onBlur" class="inputs" id="tournament" type="text" required>
      </div>
      <div class="col-3 inputContainer">
        <label for="game" :class='clazzGame'> Game </label>
        <input @focus="onFocusGame($event)" v-model="form.game" @blur="onBlur" class="inputs" id="game" type="text" required>
      </div>
      <div class="col-3 inputContainer">
        <!-- <label for="date" :class='clazzDay'> Day </label> -->
        <input @focus="onFocusDay($event)" v-model="form.day" @blur="onBlur" class="inputs" id="date" type="date" required>
      </div>
    </div>

    <VueSlickCarousel v-bind="sliderSettings">
            <template v-slot:prevArrow>
               <div id="gallery-prev"> <div class="gallery-next-orangeBox leftSliderOrange"> <i class="fas fa-chevron-left"></i> </div> </div>
            </template>
            <template v-slot:nextArrow>
              <div id="gallery-next"> <div class="gallery-next-orangeBox"> <i class="fas fa-chevron-right" ></i> </div> </div>
            </template>
                <div v-for="tournament in searchTournaments" :key="tournament.id" class="tournament-gallery-glider">
                    <div class="img_imgOverlay">
                        <img :src="tournament.img" draggable="false" alt="">
                        <div class="tournamentImg-overlay">
                           <div class="tournamentDate"><i class="fas fa-user-friends"></i> {{tournament.date}}</div>
                            <div class="tournamentPlayers"><i class="fas fa-user-friends"></i> {{tournament.joined}}</div>
                            <div class="tournamentPrize"><i class="fas fa-trophy"></i>  {{tournament.prize}} EGP</div>
                            <div class="game_logo"> <img src="https://via.placeholder.com/100x100?text=Visit+Blogging.com+NowC/O https://placeholder.com/" alt="" srcset=""> </div>
                            <div class="tournamentName">{{ tournament.name }}</div>
                        </div>
                    </div>
                </div>
    </VueSlickCarousel>

</div>
</template>

<script>
import SectionTitle from '@components/layout/SectionTitle.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import { mapGetters } from 'vuex'
export default {
  components: { SectionTitle, VueSlickCarousel },
  data () {
    return {
      search: '',
      sliderSettings: {
        infinite: true,
        speed: 500,
        draggable: true,
        slidesToShow: 4,
        rows: 2,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 1800,
            settings: {
              slidesToShow: 3.5,
              slidesToScroll: 1,
              rows: 2
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              rows: 2
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              rows: 2
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              rows: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 1
            }
          }
        ]
      },
      gameActive: false,
      TournamentActive: false,
      DayActive: false,
      form: {
        day: '',
        game: '',
        tournament: ''
      }
    }
  },
  methods: {
    onFocusTournament: function (event) {
      event.target.select()
      this.TournamentActive = true
    },
    onFocusGame: function (event) {
      event.target.select()
      this.gameActive = true
    },
    onFocusDay: function (event) {
      event.target.select()
      this.DayActive = true
    },
    onBlur: function (event) {
      if (this.form.tournament.length <= 0) {
        this.TournamentActive = false
      }
      if (this.form.game.length <= 0) {
        this.gameActive = false
      }
    }
  },
  computed: {
    ...mapGetters('tournaments', ['getTournaments']),
    searchTournaments: function () {
      if (this.form.game.length > 0) {
        return this.getTournaments.filter((tournament) =>
          tournament.title.toLowerCase().includes(this.form.game.toLowerCase()))
      } else if (this.form.tournament.length > 0) {
        return this.getTournaments.filter((data) =>
          data.title.toLowerCase().includes(this.form.tournament.toLowerCase()))
      } else {
        return this.getTournaments
      }
    },
    clazzTournament: function () {
      let clzz = 'activeInput'
      if (this.TournamentActive === false) {
        clzz = ''
      }
      return clzz
    },
    clazzGame: function () {
      let clzz = 'activeInput'
      if (this.gameActive === false) {
        clzz = ''
      }
      return clzz
    },
    clazzDay: function () {
      let clzz = 'activeInput'
      if (this.DayActive === false) {
        clzz = ''
      }
      return clzz
    }
  }
}
</script>
<style>
</style>
