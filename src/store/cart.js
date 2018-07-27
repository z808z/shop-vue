const state = {
  added: []
}

const mutations = {
  add_to_cart (state, productId) {
    const record = state.added.find(p => p.id === productId)
    if (!record) {
      state.added.push({
        id: productId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  }
}

const getters = {
  cartProducts (state, getters, rootState) {
    return state.added.map(({ id, quantity }) => {
      const product = rootState.products.all.find(p => p.id === id)
      return {
        title: product.title,
        price: product.price,
        id,
        quantity
      }
    })
  },
  cartCount (state) {
    var totalCount = 0
    state.added.forEach(({ quantity }) => {
      totalCount += quantity
    })
    return totalCount
  }
}

export default {
  state,
  mutations,
  getters
}
