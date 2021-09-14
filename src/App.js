import React, { Component, Fragment } from "react";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

import "./App.css";

export default class App extends Component {
  state = {
    items: [],
  };
  addToLocalStorage = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
  };
  componentDidMount() {
    let items = JSON.parse(localStorage.getItem("items"));
    if (items !== null) {
      this.setState({ items });
    }
  }
  getProductData = (item) => {
    let items = [...this.state.items];
    let exist = items.find((elm) => elm.id === item.id);
    if (exist) {
      items = items.map((elm) =>
        elm.id === item.id ? { ...exist, qty: exist.qty + 1 } : elm
      );
      /* في حاله ان العنصر اللي دوست عليه كان موجود جوا الاريي اللي شايله كل المنتجات
      ادخل اعمل لووب علي الاريي و هات العنصر المتكرر و غير الكميه بتاعته و باقي العناصر اعرضها زي ماهي */
    } else {
      items.push({ ...item, qty: 1 }); // push a new object => complete item data (product clicked on it) and add to it new key as qty = 1
    }
    this.setState({ items });
    this.addToLocalStorage(items);
  };

  decrementItem = (item) => {
    let items = [...this.state.items];
    if (item.qty > 1) {
      items = items.map((elm) =>
        elm.id === item.id ? { ...item, qty: item.qty - 1 } : elm
      );
    } else {
      let index = items.findIndex((elm) => elm.id === item.id);
      items.splice(index, 1);
    }
    this.setState({ items });
    this.addToLocalStorage(items);
  };

  deleteItem = (item) => {
    let items = [...this.state.items];
    items = items.filter((elm) => elm.id !== item.id); // another method to delete
    // let index = items.findIndex((elm) => elm.id === item.id);
    // items.splice(index, 1);
    this.setState({ items });
    this.addToLocalStorage(items);
  };
  render() {
    let { items } = this.state;
    let totalQty = items.reduce((sum, elm) => sum + elm.qty, 0);
    let totalPrice = items.reduce(
      (sum, elm) => (sum += elm.qty * elm.price),
      0
    );

    return (
      <Fragment>
        <Navbar totalQty={totalQty} totalPrice={totalPrice} />
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-9">
              <Products getProductData={this.getProductData} />
            </div>
            <div className="col-md-3">
              <Cart
                items={items}
                getProductData={this.getProductData}
                decrementItem={this.decrementItem}
                deleteItem={this.deleteItem}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
