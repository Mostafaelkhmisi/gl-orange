<template>
<div class="tournament_page">
    <div class="tournament_page_header">
        <div class="row m-o p-0">
            <div class="col-12 leftHeader">
                <div v-for="tournament in getTournaments" :key="tournament.id">
                    <div  v-if="tournament.id == $route.params.id">
                        <div class="tournament_image_title">
                            <img :src="tournament.img" width="100%" alt="">
                            <div class="tournament_title"> <h5> {{ tournament.title }} </h5> </div>
                        </div>
                        <div class="tournament_joinBtn_Container">
                            <button class="row m-0 p-0 tournament_joinBtn"> JOIN</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tournament_page_rightHeader">
                <img src="https://via.placeholder.com/1300x400?text=Visit+Blogging.com+NowC/O https://placeholder.com/" alt="">
            </div>

        </div>
    </div>

    <div class="custom80-Container">
        <div class="Tournament_Details">
            <h5 class="about_tournamentText">About this tournament</h5>
            <div  v-for="tournament in getTournaments" :key="tournament.id">
                <div class="row m-0 p-0" v-if="tournament.id == $route.params.id">
                    <div class="col-md-12 col-lg-12 col-xl-3"> <div class="tournament_playersReg"> <h5><i class="fas fa-user-friends"></i></h5> <h5>{{ tournament.joined }}</h5> <h5> players registered</h5> </div> </div>

                    <div class="col-md-12 col-lg-12 col-xl-9 tournament_description">
                        <div class="row m-0"> <p class="col-md-12">{{ tournament.description }}</p></div>
                    </div>

                        <div class="col-md-12 tournament-tabsContainer">
                            <Tabs>
                                <Tab name="Details" selected="true">
                                    <p>Game</p>
                                    <h5>{{ tournament.game }}</h5>
                                    <p>Date & time</p>
                                    <h5>{{ tournament.date }} {{ tournament.time }}</h5>
                                    <p>Format</p>
                                    <h5>{{ tournament.format }}</h5>
                                </Tab>
                                <Tab name="Rules">
                                    <h4 style="color:white;"> {{ tournament.description }}</h4>
                                </Tab>
                                <Tab name="Prizes">
                                    <h1 style="color:white;"> HELLLLLhhhhhhhhhhhhjjjjjjjjjjLLLLLLL</h1>
                                </Tab>
                                <Tab name="Schedule">
                                    <h1 style="color:white;"> HELLLsdfffffffffffffffLLLLLLLLL</h1>
                                </Tab>
                                <Tab name="Contact">
                                    <h1 style="color:white;"> HELLLLLLhghghghghghghghghghghghghghghghghghghghgLLLLLL</h1>
                                </Tab>

                            </Tabs>

                        </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>
<script>
import Tab from './Tab';
import Tabs from './Tabs';
import { mapGetters } from 'vuex';

export default {
  components: { Tab, Tabs },
  computed: {
    ...mapGetters('tournaments', ['getTournaments'])
  }
};
</script>
<style lang="scss" scoped>
</style>
