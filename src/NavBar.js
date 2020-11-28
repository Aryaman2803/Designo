import React, { useState } from "react";
import logoDark from "./starter/assets/shared/desktop/logo-dark.png";
import { useMediaQuery } from "react-responsive";
import "./styles/scss/Navbar.scss";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
export default function NavBar() {
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
  });
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-device-width:768px)",
  });

  const openMenu = () => {
    setOpen(!open);
  };

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
