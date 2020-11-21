import React from "react";
import NavBar from "./NavBar";
import phoneImage from "./starter/assets/home/desktop/image-hero-phone.png";
import "./Home.scss";
export default function Home() {
  return (
    <div className="Home">
      <NavBar />
      <section className="Home-landing">
        <h2>Award-winning custom designs and digital branding solutions</h2>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button>Learn More</button>
        <div className="Home-img-wrap">
          <img src={phoneImage} alt="" />
        </div>
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
      <section className="Home-projects">
        <div className="project">
          <div className="transparent-dark">
            <h3>Web Design</h3>
            <p>
              View Projects<i class="fas fa-chevron-right"></i>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
