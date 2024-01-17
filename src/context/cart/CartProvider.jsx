<<<<<<< HEAD
// cartProvider.jsx
import { CartContext } from "./cartContext";
=======
import CartContext from "./CartContext";
>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38
import { useReducer } from "react";
import { addCartItem, clearCartItem } from "../cart/cartTFunction";
import cartReducer from "./cartReducer";

<<<<<<< HEAD
export const CartProvider = ({ children }) => {
    const initialState = {
        isCartOpen: false,
        cartItems: [],
        CartCount: 0,
        cartTotal: 0,
    };

    const [state, dispatch] = useReducer(cartReducer, initialState);

    // funciones del carrito de compras
=======


const CartProvider = ({children}) => {

    const initialState = {
        isCartOpen: false,
        cartItems: [],
        cartCount: 0,
        cartTotal: 0
    }

    const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, initialState)

>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38

    //funciones 
    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
<<<<<<< HEAD
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.precio, 0);
=======
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38

        dispatch({
            type: "SET_CART_ITEMS",
            payload: {
                cartItems: newCartItems,
<<<<<<< HEAD
                CartCount: newCartCount,
                cartTotal: newCartTotal,
            },
        });
    };

    const addItemtoCart = (productToAdd) => {
        const newCartItems = addCartItem(state.cartItems, productToAdd);
        updateCartItemReducer(newCartItems);
    };

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removecartItem(state.cartItems, cartItemToRemove);
        updateCartItemReducer(newCartItems);
    };
=======
                cartCount: newCartCount,
                cartTotal: newCartTotal
            }
        })
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemReducer(newCartItems)
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemReducer(newCartItems)
    }
>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38

    const clearItemToCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(state.cartItems, cartItemToClear);
        updateCartItemReducer(newCartItems);
    };

    const clearItemToCheckout = () => {
        dispatch({
<<<<<<< HEAD
            type: "CLEAR_CHEACKOUT",
        });
    };
=======
            type: "CLEAR_CHECKOUT"
        })
    }
>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38

    const setIsCartOpen = (bool) => {
        dispatch({
            type: "SET_IS_CART_OPEN",
            payload: bool,
        });
    };

<<<<<<< HEAD
    return (
        <CartContext.Provider
            value={{
                addItemtoCart,
                removeItemToCart,
                clearCartItem,
                clearItemToCheckout,
                setIsCartOpen,
                isCartOpen: state.isCartOpen,
                cartItems: state.cartItems,
                CartCount: state.CartCount,
                cartTotal: state.cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
=======



  return (
    <CartContext.Provider value={{
        addItemToCart,
        clearItemToCart,
        clearItemToCheckout,
        setIsCartOpen,
        isCartOpen,
        cartItems,
        cartCount,
        cartTotal
    }}>{children}</CartContext.Provider>
  )
}

export default CartProvider
>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38
