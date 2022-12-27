import React from "react";
import { useStateValue } from "./StateProvider";
import "./style/CheckoutProduct.css";
import FlipMove from "react-flip-move"

export default function CheckoutProduct({ id, title, price, rating, image }) {
  const [{basket},dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'Remove_From_Basket',
      id: id,
    })

  }

  return (
    <FlipMove>
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
        <button onClick={removeFromBasket}> Remove from Basket</button>
      </div>
    </div>
    </FlipMove>
  );
}
