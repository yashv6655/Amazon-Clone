import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";

export default function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>
            <strong>${price}</strong>
          </small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => {
              return (
                <span key={index} role="img">
                  ⭐
                </span>
              );
            })}
        </div>
      </div>
      <img src={image} alt="img" />
      <button type="button" onClick={addToBasket}>
        Add To Basket
      </button>
    </div>
  );
}
