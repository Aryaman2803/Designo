import React from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import headerCircle from "./starter/assets/home/desktop/bg-pattern-hero-home.svg";
import multipleCircles from "./starter/assets/web-design/desktop/bg-pattern-intro-web.svg";
import express from "./starter/assets/web-design/desktop/image-express.jpg";
import transfer from "./starter/assets/web-design/desktop/image-transfer.jpg";
import photon from "./starter/assets/web-design/desktop/image-photon.jpg";
import builder from "./starter/assets/web-design/desktop/image-builder.jpg";
import blogr from "./starter/assets/web-design/desktop/image-blogr.jpg";
import camp from "./starter/assets/web-design/desktop/image-camp.jpg";
import "./WebDesign.scss";
import Project from "./Project";
import Footer from "./Footer";

export default function WebDesign() {
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-device-width:768px)",
  });
  return (
    <div className="WebDesign">
      <NavBar />
      <section className="hero">
        <div className="hero-text">
          <h2> Web Design</h2>
          <p>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </div>

        <img src={isTabletOrDesktop ? multipleCircles : headerCircle} alt="" />
      </section>
      <section className="projects">
        <Card
          image={express}
          title="Express"
          text="A multi-carrier shipping website for ecommerce businesses"
        />
        <Card
          image={transfer}
          title="Transfer"
          text="Site for low-cost money transfers and sending money within seconds"
        />
        <Card
          image={photon}
          title="Photon"
          text="Site for low-cost money A state-of-the-art music player with high-resolution audio "
        />
        <Card
          image={builder}
          title="Builder"
          text="Site for   Connects users with local contractors based on their location"
        />
        <Card
          image={blogr}
          title="Blogr"
          text="Site for low-  Blogr is a platform for creating an online blog or publication"
        />
        <Card
          image={camp}
          title="Camp"
          text="Site for low-    Get expert training in coding, data, design, and digital marketing"
          id="camp"
        />
      </section>
      <section className="other-projects">
        <Project name="App Design" id="app-design" />
        <Project name="Graphic Design" id="graphic-design" />
      </section>
      <Footer />
    </div>
  );
}
