import React from "react";
import NavBar from "./NavBar";
import headerCircle from "./starter/assets/home/desktop/bg-pattern-hero-home.svg";
import "./WebDesign.scss";

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
        <img src={headerCircle} alt="" />
      </section>
    </div>
  );
}
