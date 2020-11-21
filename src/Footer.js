import React from "react";
import logoLight from "./starter/assets/shared/desktop/logo-light.png";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <defs>
            <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
              <stop offset="0%" stop-color="#5D0202" stop-opacity="0" />
              <stop offset="100%" stop-color="#5D0202" stop-opacity=".498" />
            </linearGradient>
          </defs>
          <g fill="url(#a)" fill-rule="evenodd" opacity=".09">
            <circle
              cx="146"
              cy="438"
              r="146"
              transform="matrix(1 0 0 -1 0 876)"
            />
            <circle
              cx="146"
              cy="146"
              r="146"
              transform="matrix(-1 0 0 1 292 0)"
            />
            <circle cx="438" cy="438" r="146" transform="matrix(0 1 1 0 0 0)" />
          </g>
        </svg>
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
