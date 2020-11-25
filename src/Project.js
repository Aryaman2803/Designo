import React from "react";
import "./Project.scss";
import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <div className="Project" id={props.id}>
      <div className="transparent-dark">
        <h3>
          <Link
            to={props.id}
            style={{ textDecoration: "none", color: "white" }}
          >
            {props.name}
          </Link>
        </h3>
        <p>
          View Projects<i class="fas fa-chevron-right"></i>
        </p>
      </div>
    </div>
  );
}
