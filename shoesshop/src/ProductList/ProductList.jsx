import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";
export default function ProductList(props) {
  const { shoesList, onChoiced } = props;
  return (
    <div>
      <div className="row">
        {shoesList.map((shoes) => {
          return (
            <div className="col-sm-4 col-xs-12 card-item" key={shoes.id}>
                <ProductItem  shoes = {shoes} onChoiced={onChoiced}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
