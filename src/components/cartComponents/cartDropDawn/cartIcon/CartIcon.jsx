
import { CartContext } from '../../../../context/cart/cartContext'
import shopIcon from '../../../../assets/online-shop-svgrepo-com.svg'
import { useContext } from 'react'

const CartIcon = () => {

    const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext)

    const handleCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-icon-container' onClick={handleCartOpen}>
            <img src={shopIcon} className='shop-icon' alt="cart-icon" />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon