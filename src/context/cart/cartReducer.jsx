import React from 'react'

const cartReducer = (state, payload) => {

    switch (key) {
        case "SET_CART_ITEMS":
            return {
                ...state,
                ...payload
            }

        case "SET_IS_CART_OPEN":
            return {
                ...state,
                isCartOpen: payload
            }

        case "CLEAR_CHEACKOUT":

            return {
                isCartOpen: false,
                cartItems: [],
                CartCount: 0,
                cartTotal: 0
            }

            default:
                throw new Error(`Error desconocido ${type} en cartReducer`)



    }
}

export default cartReducer