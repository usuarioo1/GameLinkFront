import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../../context/cart/cartContext';
import './checkout.css'

const CheckoutItem = ({ cartItem, stock }) => {
    const { addItemToCart, removeItemToCart, clearItemToCart, cartCount } = useContext(CartContext);

    const clearHandler = () => clearItemToCart(cartItem);
    const addHandler = () => {
        if (cartItem.quantity < stock) addItemToCart(cartItem);
    };
    const removeHandler = () => removeItemToCart(cartItem);

    const { nombre, precio, img, quantity } = cartItem;

    return (
        <Card className="checkout-item-container">
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    <div className="quantity">
                        <div className="arrow" onClick={removeHandler}>
                            &#10094;
                        </div>
                        <span className="value">{quantity}</span>
                        <div className="arrow" onClick={addHandler}>
                            &#10095;
                        </div>
                    </div>
                </Card.Text>
                <Card.Text className="price">{precio}</Card.Text>
                <Button variant="danger" onClick={clearHandler}>
                    Remove
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CheckoutItem;
