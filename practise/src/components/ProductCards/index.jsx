import React from "react";
import "./productcards.scss";

const ProductCards = ({image, name, price, category} ) => {
  return (
    <div>
      <div className="card">
        <div className="image">
          <img src={image} />
        </div>
        <div className="name">
          <h3>
            Məhsulun adı: {name}
          </h3>
        </div>
        <div className="category">
          <h3>
            Məhsulun Kateqoriyası: {category}
          
            </h3>
        </div>
        <div className="price">
          <h3>
            Qiymət: {price}₼</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
