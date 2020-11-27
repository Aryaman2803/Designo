import React from "react";
import NavBar from "./NavBar";
import heroSvg from "./starter/assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import "./Locations.scss";
import Footer from "./Footer";

export default function Locations() {
  return (
    <div className="Locations">
      <NavBar />
      <section className="country">
        <div className="img-wrap"></div>
        <div className="text-wrap">
          <img src={heroSvg} alt="" />
          <h2>Canada</h2>
          <div className="list">
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
        </div>
      </section>
      <section className="country">
        <div className="img-wrap"></div>
        <div className="text-wrap">
          <img src={heroSvg} alt="" />
          <h2>Australia</h2>
          <div className="list">
            <ul>
              <li> Designo AU Office</li>
              <li>19 Balonne Street</li>
              <li>New South Wales 2443</li>
            </ul>
            <br />
            <ul>
              <li> Contact</li>
              <li>P : (02) 6720 9092</li>
              <li>M : contact@designo.au</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="country" id="uk">
        <div className="img-wrap"></div>
        <div className="text-wrap">
          <img src={heroSvg} alt="" />
          <h2>United Kingdom</h2>
          <div className="list">
            <ul>
              <li>Designo UK Office</li>
              <li>13 Colorado Way</li>
              <li>Rhyd-y-fro SA8 9GA</li>
            </ul>
            <br />
            <ul>
              <li> Contact</li>
              <li>P : 078 3115 1400</li>
              <li>M : contact@designo.uk</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
