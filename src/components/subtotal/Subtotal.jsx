import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketCount } from "../../utils/reducer";
import { useStateValue } from "../../utils/stateProvider";
import { useNavigate } from "react-router-dom";
 
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate()
    const proceedToCheckout = () => {
        navigate("/create-order")
        console.log("/create-order");
    }
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                    </>
                )}

                decimalScale={2}
                value={getBasketCount(basket)}
                displayType={"text"}
                thousandSeparator={true}
            />

            <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
