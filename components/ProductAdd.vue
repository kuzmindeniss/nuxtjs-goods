<script>
export default {
  data () {
    return {
      isValidForm: false,
      isNameNotEmpty: false,
      isNameTouched: false,
      isImgNotEmpty: false,
      isImgTouched: false,
      isPriceNotEmpty: false,
      isPriceTouched: false,
      isProductAdded: false
    }
  },
  methods: {
    checkIsFormValid () {
      this.isValidForm = this.isNameNotEmpty && this.isImgNotEmpty && this.isPriceNotEmpty
    },
    onNameInput (e) {
      this.isNameTouched = true
      this.isNameNotEmpty = !!e.target.value.trim()
      this.checkIsFormValid()
    },
    onImgInput (e) {
      this.isImgTouched = true
      this.isImgNotEmpty = !!e.target.value.trim()
      this.checkIsFormValid()
    },
    onPriceInput (e) {
      this.isPriceTouched = true
      this.isPriceNotEmpty = !!parseInt(e.target.value.trim())
      if (isNaN(parseInt(e.target.value.trim()))) {
        e.target.value = ''
      } else {
        const int = parseInt(e.target.value.trim().split(' ').join(''))
        e.target.value = this.$numberToString(int)
      }
      this.checkIsFormValid()
    },
    resetForm () {
      this.$refs.name.value = ''
      this.$refs.description.value = ''
      this.$refs.img.value = ''
      this.$refs.price.value = ''
      this.isValidForm = false
      this.isNameNotEmpty = false
      this.isNameTouched = false
      this.isImgNotEmpty = false
      this.isImgTouched = false
      this.isPriceNotEmpty = false
      this.isPriceTouched = false
    },
    onClickAddProduct (e) {
      if (!this.isValidForm) {
        return null
      }
      this.isProductAdded = true
      setTimeout(() => {
        this.isProductAdded = false
      }, 1000)
      this.$store.commit('store/add', {
        name: this.$refs.name.value,
        description: this.$refs.description.value,
        price: this.$refs.price.value.split(' ').join('')
      })
      this.$toast({
        type: 'success',
        header: 'Товар добавлен',
        text: `Товар ${this.$refs.name.value} успешно добавлен`
      })
      this.resetForm()
    }
  }
}
</script>

<template>
  <div class="product-add">
    <div class="product-add__header">
      <h2 class="product-add__title">
        Добавление товара
      </h2>
    </div>
    <div :class="{'product-add__body': true, 'product-add__body--added': isProductAdded}">
      <form class="product-add__form">
        <label :class="{
          'product-add__label': true,
          'product-add__label--required': isNameTouched && !isNameNotEmpty,
          'product-add__label--failed': isNameTouched && !isNameNotEmpty
        }"
        >
          <span class="product-add__field-name">Наименование товара</span>
          <input
            ref="name"
            type="text"
            required
            class="product-add__field"
            placeholder="Введите наименование товара"
            @blur="onNameInput"
            @input="onNameInput"
          />
        </label>
        <label class="product-add__label">
          <span class="product-add__field-name">Описание товара</span>
          <textarea ref="description" class="product-add__field" placeholder="Введите описание товара"/>
        </label>
        <label
          :class="{
            'product-add__label': true,
            'product-add__label--required': isImgTouched && !isImgNotEmpty,
            'product-add__label--failed': isImgTouched && !isImgNotEmpty
          }"
        >
          <span class="product-add__field-name">Ссылка на изображение товара</span>
          <input
            ref="img"
            type="text"
            class="product-add__field"
            placeholder="Введите ссылку"
            @blur="onImgInput"
            @input="onImgInput"
          />
        </label>
        <label
          :class="{
            'product-add__label': true,
            'product-add__label--required': isPriceTouched && !isPriceNotEmpty,
            'product-add__label--failed': isPriceTouched && !isPriceNotEmpty
          }"
        >
          <span class="product-add__field-name">Цена товара</span>
          <input
            ref="price"
            type="text"
            class="product-add__field"
            placeholder="Введите цену"
            @blur="onPriceInput"
            @input="onPriceInput"
          />
        </label>
        <button :class="{'product-add__button': true, 'product-add__button--active': isValidForm}"
                @click.prevent="onClickAddProduct"
        >
          Добавить товар
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-add {
  flex-basis: 332px;
  flex-shrink: 0;
  color: #3F3F3F;
  margin-right: 16px;
  @media (max-width: 750px) {
    flex-grow: 1;
    margin-bottom: 48px;
  }
}

.product-add__header {
  height: 36px;
  margin-bottom: 16px;
  @media (max-width: 750px) {
    text-align: center;
  }
}

.product-add__title {
  margin: 0;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
}

.product-add__body {
  position: sticky;
  top: 24px;
  border-radius: 4px;
  padding: 24px;
  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border: 2px solid transparent;
  transition: box-shadow 1s;
  &--added {
    //border:2px solid #25ff00;
    box-shadow: 0 20px 30px rgba(37, 255, 0, 0.5), 0 6px 10px rgba(37, 255, 0, 0.5);
  }

  @media (max-width: 750px) {
    position: relative;
  }
}

.product-add__form {
  display: flex;
  flex-flow: column;
}

.product-add__label {
  position: relative;
  display: flex;
  flex-flow: column;
  margin-bottom: 16px;
}

.product-add__field-name {
  position: relative;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485E;
  margin-bottom: 4px;
}

.product-add__label--required .product-add__field-name:after {
  display: inline-block;
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 16px;
  background-color: rgb(255, 132, 132);
  transform: translate(2px, -4px);
}

.product-add__label--failed .product-add__field {
  border: 1px solid #FF8484;
}

.product-add__label--required.product-add__label--failed:after {
  position: absolute;
  bottom: -14px;
  content: 'Поле является обязательным';
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #FF8484;
}

.product-add__field {
  padding: 10px 16px;
  background: #FFFEFB;
  font-family: 'Source Sans Pro', sans-serif;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  font-size: 12px;
  line-height: 15px;
  color: #3F3F3F;
  transition: all .3s;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
}

textarea.product-add__field {
  height: 108px;
  resize: none;
}

.product-add__button {
  width: 100%;
  background: #EEEEEE;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 24px;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #B4B4B4;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  font-family: 'Inter', sans-serif;
  text-align: center;
  letter-spacing: -0.02em;
  transition: all .2s;

  &--active {
    background: #7BAE73;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover {
      opacity: .9;
    }
  }
}
</style>
