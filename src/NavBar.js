import React from "react";
import logoDark from "./starter/assets/shared/desktop/logo-dark.png";
import "./Navbar.scss";
export default function NavBar() {
  return (
    <div className="Navbar">
      <img src={logoDark} alt="" />
      <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
        <g fill="#1D1C1E" fill-rule="evenodd">
          <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z" />
        </g>
      </svg>
    </div>
  );
}
