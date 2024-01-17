<<<<<<< HEAD
import { CartContext } from '../../../context/cart/cartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import CartItem from '../cartItem/CartItem';
import '../../../components/cartComponents/cartDropDawn/CartDropDown.css'

const CartDropdown = () => {
    const navigate = useNavigate()
    const { cartItems } = useContext(CartContext)
=======
import  CartContext from '../../../context/cart/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import {Button} from "@mui/material";
import CartItem from '../../../components/cartComponents/cartItem/CartItem';
import './CartDropdown.scss';

const CartDropdown = () => {
    const navigate = useNavigate()
    const {cartItems} = useContext(CartContext)
>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38


    const goToCheckout = () => {
        navigate("/checkout")
    }

<<<<<<< HEAD
    return (
        <>
            <div className="cart-dropdown-container">
                <div className="cart-items">
                    {cartItems ? (cartItems.map((cartItem) => (
                        <CartItem key={cartItem._id} cartItem={cartItem} />
                    ))
                    ) :
                        <span className="empty-message">Empty Cart</span>
                    }
                </div>
                <Button onClick={goToCheckout}>Go to checkout</Button>
            </div>
        </>
    )
=======
  return (
    <>
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems ? (cartItems.map((cartItem) => (
                    <CartItem key={cartItem._id} cartItem={cartItem}/> 
                ))
                ) : 
                    <span className="empty-message">Empty Cart</span>
                }
            </div>
            <Button onClick={goToCheckout}>Go to checkout</Button> 
        </div>
    </>
  )
>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38
}

export default CartDropdown