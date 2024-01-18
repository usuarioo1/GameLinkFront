import { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';

const CheckoutItem = ({ cartItem, stock }) => {

    const { addItemToCart, removeItemToCart, clearItemToCart } = useContext(CartContext);

    console.log(cartItem);
    
    const clearHandler = () => clearItemToCart(cartItem);
    const addHandler = () => { if (cartItem.quantity < stock) addItemToCart(cartItem); };
    const removeHandler = () => removeItemToCart(cartItem);

    const { nombre, precio, img } = cartItem;

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={img} alt={`${nombre}`} />
            </div>
            <span className="name">{nombre}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeHandler}>
                    &#10094;
                </div>
                <span className="value">{cartItem.quantity}</span>
                <div className="arrow" onClick={addHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">{precio}</span>
            <div className="remove-button" onClick={clearHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
