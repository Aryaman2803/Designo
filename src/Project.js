import React from "react";
import "./Project.scss";

export default function Project(props) {
  return (
    <div>
      <div className="Project" id={props.id}>
        <div className="transparent-dark">
          <h3>{props.name}</h3>
          <p>
            View Projects<i class="fas fa-chevron-right"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
