<template>
<div v-if="isActive">
  <slot> </slot>
</div>
</template>

<script>
export default {
  props: {
    name: { required: true },
    selected: { default: false }
  },
  data: () => {
    return {
      isActive: false
    }
  },
  mounted () {
    this.isActive = this.selected
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
    animation: fade-in 1s ease-out forwards;
}

.fade-leave-active {
    animation: fade-out 1s ease-out forwards;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fade-out {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>
