import CartContext from '../../../../context/cart/cartContext';
import shopIcon from '../../../../assets/carro.svg';
import { useContext } from 'react';
import "./CartIcon.scss";

const CartIcon = () => {

    const {cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext)
    console.log(isCartOpen)
    console.log(setIsCartOpen)
    const handleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={handleCartOpen} >
        <img src={shopIcon} className='shop-icon' alt='cart-icon' />
        <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon