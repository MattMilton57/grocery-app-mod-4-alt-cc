import React, { Component } from "react";
import CartItemCard from "../components/CartItemCard";

class YourCart extends Component {

  sendGroceries(){
    return this.props.inCart.map((food) => <CartItemCard item={food} intoTheCart={this.props.intoTheCart} deleteMe={this.props.deleteMe}/>)
  }
  //your shopping cart code here...

  render() {
    return (
      <div className="ui segment inverted yellow item">
        <div className="ui five column grid">
          <div className="row item-row">
            Your Shopping Cart
            {this.sendGroceries()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourCart;
