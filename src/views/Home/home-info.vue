<template>
<div class="homeInfo">
    <!-- <img class="infoBackground-img" src="@assets/imgs/backgrounds/SHbg.jpg" width="100%"> -->
<downAnchor>
    <template #anchor>
        <div class="scrolltoShow" v-scroll-to="{el:'#ourGames', duration: 1000 }">
            <i class="fas fa-arrow-down"></i>
        </div>
     </template>
     <template #scrollText> Scroll to show more </template>
</downAnchor>

    <div class="row m-0 Info-Details">
        <div class="col-md-12 col-lg-12 col-xl-6"></div>
        <div class="col-md-12 col-lg-12 col-xl-6 rightInfo">
            <div class="rightInfo-content">
                <div class="inner-border">
                    <div class="inner-border-content">
                        <div class="row m-0 p-0">
                            <div class="col-6"> <img src="@assets/imgs/client/Orange.svg" width="80%" /></div>
                            <div class="col-6"> <img class="go-gamespng" src="@assets/imgs/client/go-games.png" width="80%" /> </div>
                            <div class="col-12">
                                    <p>For the first time in Egypt .. GO Games Internet packages for mobile gaming customers from the first pound of the day! GO Games</p>
                                    <p> For 10 EGP per month, you will have 1000 MB length of the month and 300 MB for free at Wake ends</p>
                                    <p> To subscribe, call 222 * 31 # # or through the My Orange app or log in to my account on the Orange website </p>
                                <div class="orangeWebsite-link"> <p class="link-hover"> <i class="fas fa-chevron-left third-arrow"></i>  <i class="fas fa-chevron-left second-arrow"></i> <i class="fas fa-chevron-left"></i> <a href="#"> Visit our website </a> <i class="fas fa-chevron-right"></i> <i class="fas fa-chevron-right second-arrow"></i> <i class="fas fa-chevron-right third-arrow"></i>  </p> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import downAnchor from '@components/layout/down-Anchor.vue'
export default {
  components: { downAnchor }
}
</script>

<style lang="scss">

</style>
