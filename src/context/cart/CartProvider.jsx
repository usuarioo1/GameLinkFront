import { CartContext } from "./cartContext";
import { useReducer } from "react";
import { addCartItem, removecartItem, clearCartItem } from "./cartTFunction";
import cartReducer from "./cartReducer";


export const CartProvider = ({children}) => {

    const initialState = {
        isCartOpen: false,
        cartItems: [],
        CartCount: 0,
        cartTotal: 0
    }

    const [{ isCartOpen,
        cartItems,
        CartCount,
        cartTotal
    }, dispatch] = useReducer("cartReducer", initialState)

    //funcionaes del carrito de compras 

    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.precio, 0)

        dispatch({
            type: "SET_CART_ITEMS",
            payload: {
                cartItems: newCartItems,
                CartCount: newCartCount,
                cartTotal: newCartTotal
            }
        })
    }

    const addItemtoCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemReducer(newCartItems)
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removecartItem(cartItems, cartItemToRemove)
        updateCartItemReducer(newCartItems)
    }

    const clearItemToCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear)
        updateCartItemReducer(newCartItems)
    }

    const clearItemToCheckout = () => {
        dispatch({
            type: "CLEAR_CHEACKOUT",
        })
    }

    const setIsCartOpen = (bool) => {
        dispatch({
            type: "SET_IS_CART_OPEN",
            payload: bool
        })
    }

    return (
        <CartContext.Provider value={{addItemtoCart,
            removeItemToCart, 
            clearCartItem,
            clearItemToCheckout, 
            isCartOpen,
            cartItems,
            CartCount, 
            cartTotal}}>{children}</CartContext.Provider>
    )
}
