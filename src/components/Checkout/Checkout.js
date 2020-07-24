import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

export default function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Amazon Cart is empty</h2>
            <img
              className="checkout__img"
              src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
              alt="Empty img"
            />
          </div>
        ) : (
          <div className="">
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {/* List all items in basket */}

            {basket?.map((item, index) => {
              return (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}
