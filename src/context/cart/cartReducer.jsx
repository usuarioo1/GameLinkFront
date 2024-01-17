const cartReducer = (state, action) => {
    const { type, payload } = action;

<<<<<<< HEAD
const cartReducer = (state, action) => {

    const { type, payload } = action;

=======
>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38
    switch (type) {
        case "SET_CART_ITEMS":
            return {...state, ...payload}
        case "SET_IS_CART_OPEN":
            return {...state, isCartOpen: payload}
        case "CLEAR_CHECKOUT":
            return {
                isCartOpen: false,
                cartItems: [],
                cartCount: 0,
                cartTotal: 0  
            }
        default:
            throw new Error(`unhandledd type of ${type} in cartReducer`)
    }
}

export default cartReducer;