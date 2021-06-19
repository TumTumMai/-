export const state = () => ({
    cart: { items:[] }
})
export const getters = {
    getCart(state) {
        return state.cart.items
    }
}

export const mutations = {
    setCart(state, cart) {
        state.cart.items = cart
    }
}

export const actions = {
    setCart({commit},cart) {
        commit("setCart", cart)
    }
}
