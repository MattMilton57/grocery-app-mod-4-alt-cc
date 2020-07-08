import React, { Component } from "react";
import GroceryItemCard from "../components/GroceryItemCard";

class ItemContainer extends Component {
  
  sendGroceries(){
    return this.props.groceries.map((food) => <GroceryItemCard item={food} intoTheCart={this.props.intoTheCart}/>)
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Available Grocery Items
          {this.sendGroceries()}
        </div>
      </div>
    );
  }
}

export default ItemContainer;
