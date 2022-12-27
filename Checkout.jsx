import React from "react";
import "./styles/Checkout.css";
import Subtotal from "./Subtotal.jsx";
import CheckoutProduct from "./CheckoutProduct.jsx";
import { useStateValue } from "./StateProvider";

export default function () {

  const [{basket, user},dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jgp"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email.slice('@')}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {
            basket.map(item => (
              <CheckoutProduct
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          }
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
