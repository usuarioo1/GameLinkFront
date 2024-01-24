import "./CartItem.scss"
const CartItem = ({cartItem}) => {

    const {img, nombre, stock, precio} = cartItem
// son los item dentro del cartDrpdawn
  return (
    <div className="cart-item-container">
        <img src={img} alt={nombre}/>
        <div className="item-details">
            <span className="name">{nombre}</span>
            <span className="price">{stock} x {precio}</span>
        </div>
    </div>
  )
}

//crear boton eliminar removecartitem
//remover producto y limpiar carro

export default CartItem