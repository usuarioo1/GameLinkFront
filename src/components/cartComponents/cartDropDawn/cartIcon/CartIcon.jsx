
import { CartContext } from '../../../../context/cart/cartContext'
import shopIcon from '../../../../assets/carro.svg'
import { useContext } from 'react'

const CartIcon = () => {

    const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext)

    const handleCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <div onClick={handleCartOpen}>
            <img src={shopIcon}/>
            <span>{cartCount}</span>
        </div>
    )
}

export default CartIcon