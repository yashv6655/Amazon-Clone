import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";

export default function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt="img" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="product__price">
          <small>
            <strong>${price}</strong>
          </small>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => {
              return (
                <span key={index} aria-label="star" role="img">
                  ⭐
                </span>
              );
            })}
        </div>

        <button type="button" onClick={removeFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}
