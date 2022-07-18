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
  },
  methods: {
    deleteProduct (id) {
      this.$store.commit('store/delete', id)
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
      <TransitionGroup :appear="true" enter-class="products-list__item-enter" name="products-list__item" class="products-list__list" tag="ul">
        <li v-for="product in goods" :key="product.id" class="products-list__item">
          <img src="/product-photo.jpg" width="332" height="200" alt="product" class="products-list__item-photo">
          <span class="products-list__item-name">{{ product.name }}</span>
          <span class="products-list__item-description">{{ product.description }}</span>
          <span class="products-list__item-price">{{ $numberToString(product.price) }} руб.</span>
          <div class="products-list__item-delete" @click="deleteProduct(product.id)"></div>
        </li>
      </TransitionGroup>
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
  transition: all 0.5s ease;
}

.products-list__item {
  position: relative;
  display: flex;
  flex-flow: column;
  max-width: 332px;
  background: rgb(255, 254, 251);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding-bottom: 16px;
  color: #3F3F3F;
  transition: all 1s;
  opacity: 1;

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

.products-list__item-move,
.products-list__item-enter-active,
.products-list__item-leave-active {
  transition: all 0.5s ease;
}

.products-list__item-enter,
.products-list__item-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.products-list__item-leave-active {
  position: absolute;
}

.products-list__item:hover .products-list__item-delete {
  opacity: 1;
}

.products-list__item-delete {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #FF8484;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 32px;
  height: 32px;
  background-image: url('static/delete.svg');
  background-repeat: no-repeat;
  background-position: center;
  color: #000;
  opacity: 0;
  transition: all .5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
}
</style>
