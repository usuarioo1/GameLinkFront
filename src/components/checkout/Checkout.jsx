import { useContext } from "react";
import CartContext from "../../context/cart/cartContext";
import CheckoutItem from "./CheckoutItem";
import { Paypal } from '../../payPal/Paypal'
import '../../css/checkout.css'
import { Container } from "react-bootstrap";



const Checkout = () => {

  const { cartItems, cartTotal } = useContext(CartContext)
  console.log(cartItems)
  console.log("cartTotal:", cartTotal);
  


  return (
    <Container className="mt-5">
    <div className="checkout-container">
      <table className="checkout-table">
        <h1>Productos en tu carrito:</h1>
        <tbody>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem._id} cartItem={cartItem} stock={cartItem.stock} />
          ))}
        </tbody>
      </table>

      <div className="total-container">
        <div className="total-text">Total: ${cartTotal}</div>
      </div>

      <Paypal />
    </div>
    </Container>
  );
};

export default Checkout;

// se debe setear desde BD