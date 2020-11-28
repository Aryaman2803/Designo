import React from "react";
import smallCircle from "./starter/assets/shared/desktop/bg-pattern-small-circle.svg";
import "./styles/scss/Location.scss";
import { Link } from "react-router-dom";

export default function Location(props) {
  return (
    <div className="Location">
      <div className="img-wrap">
        <img src={smallCircle} alt="" id="circle" />
        <img src={props.image} alt="" />
      </div>
      <p>{props.name}</p>
      <button>
        <Link to="/locations" className="LocationLink">
          See Location
        </Link>
      </button>
    </div>
  );
}
