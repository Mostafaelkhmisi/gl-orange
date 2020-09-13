<template>
<transition appear
            name="slide"
            mode="out-in">
    <article>
            <header class="tabs tabBtns" >
                    <div v-for="(tab, index) in tabs" :key="index">
                        <button :class="{ 'activeTab' : tab.isActive }" @click="selectedTab(tab)"> {{tab.name}} </button>
                    </div>
            </header>

            <section class="tournament-details">
                <slot>
                </slot>
            </section>
    </article>
</transition>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: []
    }
  },
  methods: {
    selectedTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name === selectedTab.name
      })
    }
  },
  created () {
    this.tabs = this.$children
  }

}
</script>

<style lang="scss" scoped>
.slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
