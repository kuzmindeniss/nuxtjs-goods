<template>
  <div class="app">
    <div class="app-wrapper">
      <ProductAdd/>
      <ProductsList/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
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
