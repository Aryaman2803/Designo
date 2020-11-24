import React from "react";
import "./Card.scss";

export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.image} alt="" />
      <div className="text-wrap">
        <h3>{props.title}</h3>
        <p> {props.text}</p>
      </div>
    </div>
  );
}
