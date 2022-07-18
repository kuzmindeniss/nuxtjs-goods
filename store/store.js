import goods from '@/goods.json'

export const state = () => ({
  goods
})

export const mutations = {
  add (state, item) {
    state.goods.push({
      id: state.goods.length + Date.now(),
      ...item
    })
  },
  delete (state, id) {
    state.goods = state.goods.filter(item => id !== item.id)
  }
}
