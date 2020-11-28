import React from "react";
import logoDark from "./starter/assets/shared/desktop/logo-dark.png";
import "./styles/scss/Navbar.scss";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="">
      <div className="Navbar">
        <Link to="/">
          <img src={logoDark} alt="" />
        </Link>
        <ul>
          <li>
            <Link to="/about-us" className="NavLink">
              Our Company
            </Link>
          </li>
          <li>
            <Link to="/locations" className="NavLink">
              Locations
            </Link>
          </li>
          <li>
            <Link to="/contact" className="NavLink">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
