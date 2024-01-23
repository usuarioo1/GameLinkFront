import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useContext } from "react";
import CartContext from "../context/cart/cartContext";
import { GamesContext } from "../context/games/gamesContext";

export function Paypal() {

    const {cartItems, clearItemToCheckout, cartTotal} = useContext(CartContext)
    const{reduceStock} = useContext(GamesContext)
    console.log(cartTotal)
    
    return (
        <PayPalScriptProvider options={{ "client-id": "AQA1mPhp24IobZmDgZhHnzuy9osesMLPzf931QbVEOyOp5vLHaUiA4LPyd1pq2F54ZqAz14ImJNzZV5x" }}>
            <PayPalButtons 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: cartTotal,
                                    currency: "CLP"
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        reduceStock(cartItems)
                        clearItemToCheckout()
                    })
                }}
            />
        </PayPalScriptProvider>
    );
}

