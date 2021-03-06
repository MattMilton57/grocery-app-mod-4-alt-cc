import React from "react";



const GroceryItemCard = props => {

  const handleclick = () => {
    const purchased = props.item
    console.log(purchased)
    props.intoTheCart(purchased)
  }
  
  return (
    <div className="ui column"  >
      <div
        className="ui card"
        key={props.item.id}
        onClick={(e) => handleclick()}
      
      >
        <div className="image">
          <img alt="oh no!" src={props.item.image} />
        </div>
        <div className="content">
          <div className="header">
            {props.item.name}
          </div>
          <div className="meta text-wrap">
            <small>{props.item.description}</small>
            {/* <small>Word</small> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryItemCard;
