<template>
  <div class="browse-section">
    <SectionTitle id="browseGames">
      <template #title>
        <span>BROWSE</span> TOURNAMENTS
      </template>
    </SectionTitle>

    <div class="row m-0 p-0 pl-3 pr-3">
      <div class="col-md-12 col-lg-6 col-xl-3 pl-0 inputContainer">
        <label for="tournament" :class="clazzTournament">Tournament</label>
        <input
          @focus="onFocusTournament($event)"
          v-model="form.tournament" @blur="onBlur" class="inputs" id="tournament" type="text"  required />
      </div>
      <div class="col-md-12 col-lg-6 col-xl-3 pl-0 inputContainer">
        <label for="game" :class="clazzGame">Game</label>
        <input
          @focus="onFocusGame($event)"
          v-model="form.game" @blur="onBlur" class="inputs" id="game" type="text" required />
      </div>
      <div class="col-md-12 col-lg-6 col-xl-3 pl-0 inputContainer">
        <!-- <label for="date" :class='clazzDay'> Day </label> -->
        <input @focus="onFocusDay($event)" v-model="form.day" @blur="onBlur" class="inputs" id="date" type="date" required />
      </div>
      <div class="col-md-12 col-lg-6 col-xl-3 pl-0">
        <Pagination v-if="getTournaments"
          :totalRecords="getTournaments.length"
          :perPageOptions="perPageOptions"
          v-model="pagination"
        />
      </div>
    </div>

    <div class="row m-0 p-0">
      <div v-for="tournament in searchTournaments" :key="tournament.id" class="col-md-6 col-lg-4 col-xl-3 tournament-gallery-glider" >
        <router-link :to="'/tournament/'+tournament.id" draggable="false">
          <div class="img_imgOverlay">
            <img :src="tournament.img" width="100%" draggable="false" alt />
            <div class="tournamentImg-overlay">
              <div class="game_logo">
                <img :src="tournament.gamelogo" alt srcset />
              </div>

              <div class="tournamentTextsHolder">
                <div class="tournamentDate">
                  <i class="fas fa-user-friends"></i>
                  {{tournament.date}}
                </div>
                <div class="tournamentPlayers">
                  <i class="fas fa-user-friends"></i>
                  {{tournament.joined}}
                </div>
                <div class="tournamentPrize">
                  <i class="fas fa-trophy"></i>
                  {{tournament.prize}} EGP
                </div>
              </div>
              <div class="tournamentName">{{ tournament.name }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@components/layout/SectionTitle.vue';
// import VueSlickCarousel from 'vue-slick-carousel';
// import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import Pagination from '@components/ui/Pagination';
import { mapGetters } from 'vuex';

const perPageOptions = [8, 16, 20];
export default {
  components: { SectionTitle, Pagination },
  data () {
    return {
      search: '',
      perPageOptions,
      pagination: { page: 1, perPage: perPageOptions[0] },
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
    };
  },
  methods: {
    onFocusTournament: function (event) {
      event.target.select();
      this.TournamentActive = true;
    },
    onFocusGame: function (event) {
      event.target.select();
      this.gameActive = true;
    },
    onFocusDay: function (event) {
      event.target.select();
      this.DayActive = true;
    },
    onBlur: function (event) {
      if (this.form.tournament.length <= 0) {
        this.TournamentActive = false;
      }
      if (this.form.game.length <= 0) {
        this.gameActive = false;
      }
    }
  },
  computed: {
    ...mapGetters('tournaments', ['getTournaments']),

    searchTournaments: function () {
      if (this.getTournaments && this.form.game.length <= 0 && this.form.tournament.length <= 0) {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
        const lastIndex = this.pagination.page * this.pagination.perPage;
        return this.getTournaments.slice(firstIndex, lastIndex);
      } else if (this.form.game.length > 0) {
        return this.getTournaments.filter(
          (tournament) =>
            tournament.title.toLowerCase().includes(this.form.game.toLowerCase()) ||
            tournament.tournament.toLowerCase().includes(this.form.tournament.toLowerCase()) ||
            tournament.game.toLowerCase().includes(this.form.game.toLowerCase())
        );
      } else if (this.form.tournament.length > 0) {
        return this.getTournaments.filter((data) =>
          data.game.toLowerCase().includes(this.form.tournament.toLowerCase())
        );
      } else return [];
    },

    clazzTournament: function () {
      let clzz = 'activeInput';
      if (this.TournamentActive === false) {
        clzz = '';
      }
      return clzz;
    },
    clazzGame: function () {
      let clzz = 'activeInput';
      if (this.gameActive === false) {
        clzz = '';
      }
      return clzz;
    },
    clazzDay: function () {
      let clzz = 'activeInput';
      if (this.DayActive === false) {
        clzz = '';
      }
      return clzz;
    }
  }
};
</script>
<style>
</style>
