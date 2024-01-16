

export const addCartItem = (cartItems, productToAdd) =>{

    // esta funciona busca si el carrito de compras tiene cosas es su interior( productos)


    const existingCartItem = cartItems.find((cartItem) => cartItem._id === productToAdd._id) ;

    if(existingCartItem){
        return cartItems.map((cartItem) => 
        cartItem._id === productToAdd._id ? {...cartItem , quantity:cartItem.quantity + 1}:
        cartItem)
    }

    return [...cartItems, {...productToAdd, quantity:1}]

}

export const removecartItem = (cartItems, cartItemRemove) => {

    existingCartItem = cartItems.find((cartItem) => cartItem._id === cartItemRemove._id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem._id !== cartItemRemove._id)
    }

    return cartItems.map((cartItem)=>{
        cartItem._id === cartItem._id ? {...cartItem, quantity: cartItem.quantity - 1 } :
        cartItems
    })

}

export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => {
        cartItem._id !== cartItemToClear._id
    })
}

