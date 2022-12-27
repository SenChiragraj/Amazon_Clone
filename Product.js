import React from 'react'
import { useStateValue } from './StateProvider'
import './styles/Product.css'

export default function Product({id,title,image,price,rating}) {

  const [{basket},dispatch] = useStateValue();
  // console.log("this is basket ",basket);
  const addToBasket = () => {
    dispatch({
      type: "Add_To_Basket",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating
      },
    });
  };

  return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_,i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>
        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}
