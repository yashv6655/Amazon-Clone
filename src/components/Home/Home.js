import React from "react";
import "./Home.css";
import Product from "../Product/Product";

export default function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NWMxMzg2ZjUt/NWMxMzg2ZjUt-ODcwNDM1NDQt-w1500._CB410890200_.jpg"
        alt="img"
      />

      {/* Products */}
      <div className="home__row">
        <Product
          id={1}
          title="Deal of the Day"
          price={69.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41l5dxB9xOL._AC_SY240_.jpg"
        />
        <Product
          id={2}
          title="Deal of the Day"
          price={29.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41741Z1KwxL._AC_SY240_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={3}
          title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor"
          price={85.18}
          rating={4}
          image="https://m.media-amazon.com/images/I/51I3UjD-Q1L._AC_SY149_.jpg"
        />
        <Product
          id={4}
          title="Madden NFL 20 - PlayStation 4"
          price={29.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51udwpsw2UL._AC_SY149_.jpg"
        />
        <Product
          id={5}
          title="Super Smash Bros. Ultimate"
          price={58.04}
          rating={5}
          image="https://m.media-amazon.com/images/I/513ttWDr7eL._AC_SY149_.jpg"
        />
      </div>
    </div>
  );
}
