import { useContext } from "react";
import CartContext from "../../context/cart/cartContext";
import CheckoutItem from "./CheckoutItem";
import {Paypal} from '../../payPal/Paypal'


const Checkout = () => {

    const {cartItems, cartTotal} = useContext(CartContext)
    console.log(cartItems)
    console.log("cartTotal:", cartTotal);
    

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      { cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem._id} cartItem={cartItem} stock={cartItem.stock}/>
      ))}
      
      <span className="total">Total: ${cartTotal}</span>
      
        {console.log(cartTotal)}
      {cartItems.length ? <Paypal /> : null}
      
    
    </div>
  );
};

export default Checkout;

// se debe setear desde BD