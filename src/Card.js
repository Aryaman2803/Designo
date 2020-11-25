import React from "react";
import "./Card.scss";

export default function Card(props) {
  return (
    <div className="Card">
      <div className="">
        <img src={props.image} alt="" />
      </div>

      <div className="text-wrap">
        <h3>{props.title}</h3>
        <p> {props.text}</p>
      </div>
    </div>
  );
}
