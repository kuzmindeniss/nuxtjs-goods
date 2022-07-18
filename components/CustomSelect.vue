<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      choseItem: this.$props.items.filter(item => item.value === this.$props.value)[0]
    }
  },
  watch: {
    value (val) {
      this.choseItem = this.$props.items.filter(item => item.value === val)[0]
    }
  },
  methods: {
    itemClicked (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<template>
  <div class="custom-select">
    <div class="custom-select__chose">
      {{ choseItem.label }}
      <div class="custom-select__chose--icon"></div>
    </div>
    <ul class="custom-select__list">
      <li v-for="item in items" :key="item.value" @click="itemClicked(item.value)" :class="{'custom-select__item': true, 'custom-select__item--chose': item.value === choseItem.value}">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.custom-select {
  position: relative;
  width: 122px;
  cursor: pointer;
}

.custom-select__list {
  position: absolute;
  width: 100%;
  display: none;
  background: #FFFEFB;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
}

.custom-select__item {
  padding: 10px 16px;
  transition: all .2s;

  &--chose {
    display: none;
  }

  &:hover {
    color: #000;
  }
}

.custom-select__chose {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: #FFFEFB;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
}

.custom-select:hover .custom-select__list {
  display: flex;
  flex-flow: column;
}

.custom-select__chose--icon {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-bottom: 1px solid rgb(180, 180, 180);
  border-right: 1px solid rgb(180, 180, 180);
  transform: rotate(45deg);
}
</style>
