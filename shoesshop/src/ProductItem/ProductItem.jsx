import React from "react";
import "./ProductItem.css";

export default function ProductItem(props) {
  const {shoes, onChoiced} = props;
  return (
    <div
      className="card"
      style={{ backgroundColor: "white", borderColor: "#0701012e" }} data-toggle="modal" data-target="#myModal"
      onClick={()=>onChoiced(shoes)}
    >
      <img className="card-img-top" src={shoes.image} alt={shoes.image} />
      <div className="card-body">
        <h4 className="card-title">{shoes.name}</h4>
        <p className="card-text">{shoes.price} $</p>
      </div>

      <div className="card-footer cart-btn d-flex justify-content-left">
        <button className="btn btn-success text-center">
          Add to cart <span className="fa fa-shopping-cart "></span>
        </button>
      </div>
    </div>
  );
}
