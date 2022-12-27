import "./styles/Subtotal.css";
import React from "react";
import CurrenyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

export default function Subtotal() {

  const [{basket},dispatch] =  useStateValue();



  return(
    <>
      <div className="subtotal">
        <CurrenyFormat 
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): 
              <strong>{`${value}`}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        <button>Proceed to Checkout</button>
      </div>
    </>
  );
}
