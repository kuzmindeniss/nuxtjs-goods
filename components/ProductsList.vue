<script>
export default {
  data () {
    return {
      items: [
        { label: 'По умолчаню', value: 'default' },
        { label: 'По цене min', value: 'min' },
        { label: 'По цене max', value: 'max' }
      ],
      choseValue: 'default'
    }
  },
  computed: {
    goods () {
      return this.$store.state.store.goods
    }
  }
}
</script>

<template>
  <div class="products-list">
    <div class="products-list__header">
      <CustomSelect v-model="choseValue" :items="items" />
    </div>
    <div class="products-list__list-wrapper">
      <ul class="products-list__list">
        <li v-for="product in goods" :key="product.id" class="products-list__item">
          <img src="/product-photo.jpg" width="332" height="200" alt="product" class="products-list__item-photo">
          <span class="products-list__item-name">{{ product.name }}</span>
          <span class="products-list__item-description">{{ product.description }}</span>
          <span class="products-list__item-price">{{ $numberToString(product.price) }} руб.</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.products-list__header {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  height: 36px;
  margin-bottom: 16px;
}

.products-list {
  flex-grow: 1;
}

.products-list__list {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill,minmax(332px, 1fr));
  justify-items: center;
}

.products-list__item {
  display: flex;
  flex-flow: column;
  max-width: 332px;
  background: rgb(255, 254, 251);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding-bottom: 16px;
  color: #3F3F3F;
  transition: all .3s;

  &:hover {
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.2);
  }
}

.products-list__item-photo {
  margin-bottom: 16px;
}

.products-list__item-name {
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
}

.products-list__item-description {
  margin-bottom: 32px;
  margin-left: 16px;
  margin-right: 16px;
}

.products-list__item-price {
  margin-left: 16px;
  margin-right: 16px;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
}
</style>
