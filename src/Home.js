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
        <img src={phoneImage} alt="" />
      </section>
    </div>
  );
}
