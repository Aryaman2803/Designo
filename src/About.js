import React from "react";
import NavBar from "./NavBar";
import heroImage from "./starter/assets/about/mobile/image-about-hero.jpg";
import heroSvg from "./starter/assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import "./About.scss";

export default function About() {
  return (
    <div className="About">
      <NavBar />
      <section className="hero">
        <div className="img-wrap">
          <img src={heroImage} alt="" />
        </div>
        <div className="hero-text">
          <img src={heroSvg} alt="" />
          <h2>About Us</h2>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
      </section>
    </div>
  );
}
