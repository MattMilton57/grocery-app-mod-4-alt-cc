import React from "react";



const CartItemCard = props => {

  const handleclick = () => {
    const remove = props.item
    console.log(remove)
    props.deleteMe(remove)
    
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

export default CartItemCard;