import React from "react";
import "./SingleItem.css";

export default function SingleItem(props) {
  return (
    <div className="single_item">
      <img className="single_item__img" src={props.location.state.img} />
      <div>
        <h1>{props.location.state.name}</h1>
        <span>{props.location.state.description}</span>
        <span>{props.location.state.price}</span>
      </div>
    </div>
  );
}
