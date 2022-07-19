import goodsJSON from '@/goods.json'

let goodsLocal = localStorage.getItem('goods')
if (goodsLocal) { goodsLocal = JSON.parse(goodsLocal) }

export const state = () => ({
  goods: goodsLocal || goodsJSON
})

export const mutations = {
  add (state, item) {
    state.goods.push({
      id: state.goods.length + Date.now(),
      ...item
    })
    localStorage.setItem('goods', JSON.stringify(state.goods))
  },
  delete (state, id) {
    state.goods = state.goods.filter(item => id !== item.id)
    localStorage.setItem('goods', JSON.stringify(state.goods))
  }
}
