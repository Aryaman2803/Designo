import React, { useEffect } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import { useMediaQuery } from "react-responsive";
import headerCircle from "./starter/assets/home/desktop/bg-pattern-hero-home.svg";
import multipleCircles from "./starter/assets/web-design/desktop/bg-pattern-intro-web.svg";
import airfilter from "./starter/assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "./starter/assets/app-design/desktop/image-eyecam.jpg";
import faceit from "./starter/assets/app-design/desktop/image-faceit.jpg";
import loop from "./starter/assets/app-design/desktop/image-loopstudios.jpg";
import todo from "./starter/assets/app-design/desktop/image-todo.jpg";
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
          <h2> App Design</h2>
          <p>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>

        <img src={isTabletOrDesktop ? multipleCircles : headerCircle} alt="" />
      </section>
      <section className="projects">
        <Card
          image={airfilter}
          title="Airfilter"
          text="A multi-  Solving the problem of poor indoor air quality by filtering the air
 "
        />
        <Card
          image={eyecam}
          title="Eyecam"
          text="Site for low-  Product that lets you edit your favorite photos and videos at any time
"
        />
        <Card
          image={faceit}
          title="Faceit"
          text="Site for low-  Get to meet your favorite internet superstar with the faceit app
 "
        />
        <Card
          image={loop}
          title="Loopstudios"
          text="Site for     A VR experience app made for Loopstudios
 "
        />
        <Card
          image={todo}
          title="Todo"
          text="Site for low-    A todo app that features cloud sync with light and dark mode
 "
        />
      </section>
      <section className="other-projects">
        <Project name="Web Design" id="web-design" />
        <Project name="Graphic Design" id="graphic-design" />
      </section>
      <Footer showContact={true} />
    </div>
  );
}
