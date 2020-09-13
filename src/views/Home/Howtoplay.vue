<template>
<div class="Howtoplay-Section">
    <div class="howtoplay-topshapeDiv"><div class="howtoplay-topshape"></div></div>
    <SectionTitle>
        <template #title> <span>HOW</span> TO PLAY </template>
    </SectionTitle>

    <div class="row justify-content-center .custom80-Container">
        <div class="howto_box col-md-12 col-lg-6 col-xl-4">
             <div class="howto_box_wrap">
                 <div class="blackBG"></div>
                 <div class="inner_howto_box_wrap">
                     <div class="inner_howto_box_rotate">
                        <img src="@assets/imgs/client/Orange.svg" width="100%" draggable="false">
                        <h6>Be an Orange customer</h6>
                    </div>
                        <div class="howto_box_number_wrap"> <div class="howto_box_number"> 1 </div>  </div>
                </div>
            </div>
        </div>
        <div class="howto_box col-md-12 col-lg-6 col-xl-4">
            <div class="howto_box_wrap">
                <div class="blackBG"></div>
                <div class="inner_howto_box_wrap">
                    <div class="inner_howto_box_rotate">
                        <img src="@assets/imgs/client/Orange.svg" width="100%" draggable="false">
                        <h6><span>subscribe</span> orange go games package</h6>
                    </div>
                </div>
                <div class="howto_box_number_wrap"> <div class="howto_box_number"> 2 </div> </div>
            </div>
        </div>
        <div class="howto_box col-md-12 col-lg-6 col-xl-4">
            <div class="howto_box_wrap">
                <div class="blackBG"></div>
                <div class="inner_howto_box_wrap">
                    <div class="inner_howto_box_rotate">
                        <img src="@assets/imgs/client/Orange.svg" width="100%" draggable="false">
                        <h6>Register in <span>our games</span></h6>
                    </div>
                </div>
                <div class="howto_box_number_wrap"> <div class="howto_box_number"> 3 </div> </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SectionTitle from '@components/layout/SectionTitle.vue'
export default {
  components: { SectionTitle }
}
</script>
<style lang="scss">
</style>
