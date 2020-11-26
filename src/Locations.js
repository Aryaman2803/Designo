import React from "react";
import NavBar from "./NavBar";
import heroSvg from "./starter/assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import "./Locations.scss";

export default function Locations() {
  return (
    <div className="Locations">
      <NavBar />
      <section className="country">
        <div className="img-wrap"></div>
        <div className="text-wrap">
          {/* <img src={heroSvg} alt="" /> */}
          <h2>Canada</h2>
          <ul>
            <li>Designo Central Office</li>
            <li>3886 Wellington Street</li>
            <li>Toronto, Ontario M9C 3J5</li>
          </ul>
          <br />
          <ul>
            <li> Contact</li>
            <li>P : +1 253-863-8967</li>
            <li>M : contact@designo.co</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
