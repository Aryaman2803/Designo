import React from "react";
import logoDark from "./starter/assets/shared/desktop/logo-dark.png";
import { useMediaQuery } from "react-responsive";
import "./Navbar.scss";
export default function NavBar() {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
  });
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-device-width:768px)",
  });

  return (
    <div className="Navbar">
      <img src={logoDark} alt="" />
      {isMobile && (
        <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="#1D1C1E" fill-rule="evenodd">
            <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z" />
          </g>
        </svg>
      )}
      {isTabletOrDesktop && (
        <>
          <ul>
            <li>Our Company</li>
            <li>Locations</li>
            <li>Contact</li>
          </ul>
        </>
      )}
    </div>
  );
}
