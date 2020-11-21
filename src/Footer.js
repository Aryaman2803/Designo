import React from "react";
import logoLight from "./starter/assets/shared/desktop/logo-light.png";
import facebook from "./starter/assets/shared/desktop/icon-facebook.svg";
import instagram from "./starter/assets/shared/desktop/icon-instagram.svg";
import pinterest from "./starter/assets/shared/desktop/icon-pinterest.svg";
import twitter from "./starter/assets/shared/desktop/icon-twitter.svg";
import youtube from "./starter/assets/shared/desktop/icon-youtube.svg";
import circles from "./starter/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-contact">
        <img src={circles} alt="circles" />
        <h2>Let's talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <button>Get in Touch</button>
      </div>
      <div className="Footer-content">
        <img src={logoLight} alt="" />
        <hr />
        <ul>
          <li>Our Company</li>
          <li>Locations</li>
          <li>Contact</li>
        </ul>
        <p>
          <span className="office">Designo Central Office</span> <br />
          3886 Wellington Street <br />
          Toronto, Ontario M9C 3J5
        </p>
        <p>
          <span className="office">Contact Us (Central Office)</span> <br />
          P : +1 253-863-8967 <br />M : contact@designo.co
        </p>
        <div className="icons-container">
          <img src={facebook} alt="" />
          <img src={youtube} alt="" />
          <img src={twitter} alt="" />
          <img src={pinterest} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
}
