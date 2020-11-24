import React from "react";
import NavBar from "./NavBar";

export default function WebDesign() {
  return (
    <div className="WebDesign">
      <NavBar />
      <section className="hero">
        <h2>Web Design</h2>
        <p>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
        <svg width="640" height="639" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
              <stop stop-color="#5D0202" stop-opacity="0" offset="0%" />
              <stop stop-color="#5D0202" stop-opacity=".498" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            fill="url(#a)"
            transform="matrix(0 -1 -1 0 640 640)"
            cx="320"
            cy="320"
            r="320"
            fill-rule="evenodd"
            opacity=".309"
          />
        </svg>
      </section>
    </div>
  );
}
