import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../../context/cart/cartContext';
//import './Cart.css'; // Asegúrate de importar el archivo CSS correcto

const CheckoutItem = ({ cartItem }) => {
    const { updateQuantity, removeItem } = useContext(CartContext);

    const handleIncrement = () => {
        updateQuantity(cartItem.id, cartItem.quantity + 1);
    };

    const handleDecrement = () => {
        updateQuantity(cartItem.id, cartItem.quantity - 1);
    };

    const handleRemove = () => {
        removeItem(cartItem.id);
    };

    const { nombre, precio, img, stock } = cartItem;

    return (
        <Card className="cart-item-container">
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    <div className="quantity">
                        <div className="arrow" onClick={handleDecrement}>
                            &#10094;
                        </div>
                        <span className="value">{stock}</span>
                        <div className="arrow" onClick={handleIncrement}>
                            &#10095;
                        </div>
                    </div>
                </Card.Text>
                <Card.Text className="price">{precio}</Card.Text>
                <Button variant="danger" onClick={handleRemove}>
                    Eliminar
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CheckoutItem;
