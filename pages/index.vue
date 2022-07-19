<template>
  <div class="app">
    <PreloaderComponent v-if="loading"/>
    <div v-else class="app-wrapper">
      <ProductAdd/>
      <ProductsList/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted () {
    setTimeout(() => {
      this.finish()
    }, 800)
  },
  data: () => ({
    loading: true
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
.app {
  padding: 32px;
  background: rgba(255, 254, 251, 0.8);
}

.app-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
