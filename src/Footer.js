import React from "react";
import logoLight from "./starter/assets/shared/desktop/logo-light.png";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-contact">
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
          <span className="office">Designo Central Office</span>
          3886 Wellington Street <br />
          Toronto, Ontario M9C 3J5
        </p>
        <p>
          <span className="office">Contact Us (Central Office)</span>
          P : +1 253-863-8967 <br />M : contact@designo.co
        </p>
      </div>
    </div>
  );
}
