import React, { Component } from "react";
import AddItemForm from "../components/AddItemForm";
import ItemContainer from "./ItemContainer";
import YourCart from "./YourCart";
const API = "http://localhost:6001/items"

class Grocery extends Component {

  state = {
    showForm: false,
    groceries: [],
    itemsInCart: []
  }

  componentDidMount() {
    this.fetchGroceries()
  }

  fetchGroceries() {
    fetch (API)
    .then (res => res.json())
    .then (res => this.groceriesToState(res))
  }

  groceriesToState(fetchedGroceries) {
    this.setState({groceries:fetchedGroceries})
  }

  intoTheCart = (purchased) => {
    console.log(purchased)
    let incart=purchased
    let cart = this.state.itemsInCart
    let newCart = [...cart, incart]
    this.setState({itemsInCart:newCart})
  }

  deleteFromCart = (toDelete) =>{
    let cart = this.state.itemsInCart
    let search = toDelete 
    let deleteCart = cart.filter(cart => cart !== search)
    this.setState({itemsInCart:deleteCart})   
    // this.setState({itemsInCart:4})   

    console.log(deleteCart)
    // console.log(newCart)
    // console.log(toDelete)
    console.log(cart)

  }

  render() {
    return <div>
      <button onClick={()=>this.setState({showForm: !this.state.showForm})}>Toggle Form</button>
      {this.state.showForm && <AddItemForm />}
      {/* add other components here */}
        <ItemContainer groceries={this.state.groceries} intoTheCart={this.intoTheCart} purchased={this.props.purchased} />

        <YourCart inCart={this.state.itemsInCart} deleteMe={this.deleteFromCart} toDelete={this.props.remove}/>
      </div>;
  }
}

export default Grocery;
