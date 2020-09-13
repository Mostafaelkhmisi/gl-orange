<template>
<div class="tournaments-bg">

        <div  v-for="tournament in getTournaments" :key="tournament.id">
            <div class="row tournament-container" v-if="tournament.id == $route.params.id">
                <div class="col-md-12 col-lg-12 col-xl-6"> <img  :src="tournament.img" width="100%"> </div>

                    <div class="col-md-12 col-lg-12 col-xl-6 tournament-text-side">
                        <div class="tournament-title col-12"> <h3> {{ tournament.title }} </h3> </div>

                        <div class="row m-0"> <div class="col-md-4">  {{ tournament.date }}</div> <div class="col-md-4"> JOINED  <h5>{{ tournament.joined }} Players</h5> </div> <div class="col-md-4">PRIZE <h5>{{ tournament.prize }}</h5> </div> </div>
                        <div class="row m-0"> <p class="col-md-12">{{ tournament.description }}</p></div>
                        <div class="row m-0 justify-content-start"> <div class="tournament-joinBtn col-md-12"> <button >JOIN</button></div> </div>
                    </div>

                    <div class="col-md-12 tournament-tabsContainer">
                        <Tabs>
                            <Tab name="DETAILS" selected="true">
                                <p>Game</p>
                                <h5>{{ tournament.game }}</h5>
                                <p>Date & time</p>
                                <h5>{{ tournament.date }} {{ tournament.time }}</h5>
                                <p>Format</p>
                                <h5>{{ tournament.format }}</h5>
                            </Tab>
                            <Tab name="RULES">
                                <h1 style="color:white;"> HELLLLLjjjjjjjjkkkkkkkkkkkLLLLLLL</h1>
                            </Tab>
                            <Tab name="PRIZES">
                                <h1 style="color:white;"> HELLLLLhhhhhhhhhhhhjjjjjjjjjjLLLLLLL</h1>
                            </Tab>
                            <Tab name="SCHEDULE">
                                <h1 style="color:white;"> HELLLsdfffffffffffffffLLLLLLLLL</h1>
                            </Tab>
                            <Tab name="CONTACT">
                                <h1 style="color:white;"> HELLLLLLhghghghghghghghghghghghghghghghghghghghgLLLLLL</h1>
                            </Tab>

                        </Tabs>

                    </div>
            </div>
        </div>

</div>
</template>

<script>
import Tab from './Tab'
import Tabs from './Tabs'
import { mapGetters } from 'vuex'

export default {
  components: { Tab, Tabs },
  computed: {
    ...mapGetters('tournaments', ['getTournaments'])
  }
}
</script>
<style lang="scss" scoped>
</style>
