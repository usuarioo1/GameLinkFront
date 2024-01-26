import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
import '../../css/checkoutItem.css'
import { Container } from 'react-bootstrap';


const CheckoutItem = ({ cartItem, stock }) => {

    const { addItemToCart, removeItemToCart, clearItemToCart } = useContext(CartContext);

    console.log(cartItem);

    const clearHandler = () => clearItemToCart(cartItem);
    const addHandler = () => { if (cartItem.quantity < stock) addItemToCart(cartItem); };
    const removeHandler = () => removeItemToCart(cartItem);

    const { nombre, precio, img } = cartItem;

    return (
        <Container>
            <Container>
                <div className="checkout-item-container">
                    <div className="image-container">
                        <img src={img} alt={`${nombre}`} />
                    </div>
                    <span className="name">{nombre}</span>
                    <span className="quantity">
                        <div className="arrow" onClick={removeHandler}>
                        <i class="bi bi-dash"></i>
                        </div>
                        <span className="value">{cartItem.quantity}</span>
                        <div className="arrow" onClick={addHandler}>
                        <i class="bi bi-plus"></i>
                        </div>
                    </span>
                    <span className="price">${precio*cartItem.quantity}</span>

                </div>
            </Container>
            {/* <div className="remove-button" onClick={clearHandler}>
                &#10005;
            </div> */}
        </Container>
    );
};

export default CheckoutItem;
