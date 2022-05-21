import React, { Component } from "react";
import "./ShoesStore.css";
import ProductList from "../ProductList/ProductList";
import ProductItem from "../ProductItem/ProductItem";
import data from "../data.json";
import Modal from "../Modal/Modal";
export default class ShoesStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoesChoiced: "",
    };
  }
  onChoiced = (shoesChoiced) => {
    this.setState({shoesChoiced:shoesChoiced})
  };
  render() {
    return (
      <div className="container page-content">
        <div className="row">
          <div className="col-sm-3 shoes-bar">
            <h2>Shoes Shop</h2>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#shop">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div id="" className="col-sm-9">
            <ProductList shoesList={data}  onChoiced = {this.onChoiced}/>
          </div>
        </div>
        <Modal shoesChoiced={this.state.shoesChoiced}/>
      </div>
    );
  }
}
