import React, { useEffect } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import { useMediaQuery } from "react-responsive";
import headerCircle from "./starter/assets/home/desktop/bg-pattern-hero-home.svg";
import multipleCircles from "./starter/assets/web-design/desktop/bg-pattern-intro-web.svg";
import water from "./starter/assets/graphic-design/desktop/image-boxed-water.jpg";
import change from "./starter/assets/graphic-design/desktop/image-change.jpg";
import science from "./starter/assets/graphic-design/desktop/image-science.jpg";

import "./styles/scss/WebDesign.scss";
import Project from "./Project";
import Footer from "./Footer";

export default function WebDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-device-width:768px)",
  });
  return (
    <div className="WebDesign">
      <NavBar />
      <section className="hero">
        <div className="hero-text">
          <h2> Graphic Design</h2>
          <p>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </div>

        <img src={isTabletOrDesktop ? multipleCircles : headerCircle} alt="" />
      </section>
      <section className="projects">
        <Card
          image={change}
          title="  Tim Brown
"
          text="A multi-  Solving   A book cover designed for Tim Brown’s new release, ‘Change’
 "
        />
        <Card
          image={water}
          title="  Boxed water
"
          text="Site for   A simple packaging concept made for Boxed Water
-  Product that lets you edit your favorite photos and videos at any time
"
        />
        <Card
          image={science}
          title="Science!"
          text="Site for low-  Get to   A poster made in collaboration with the Federal Art Project
 your favorite internet superstar with the faceit app
 "
        />
      </section>
      <section className="other-projects">
        <Project name="Web Design" id="web-design" />
        <Project name="App Design" id="app-design" />
      </section>
      <Footer showContact={true} />
    </div>
  );
}
