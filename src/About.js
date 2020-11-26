import React from "react";
import NavBar from "./NavBar";
import heroImage from "./starter/assets/about/mobile/image-about-hero.jpg";
import talentImage from "./starter/assets/about/mobile/image-world-class-talent.jpg";
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
      <section className="talent">
        <div className="img-wrap">
          <img src={talentImage} alt="" />
        </div>
        <div className="talent-text">
          <img src={heroSvg} alt="" />
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <br />
          <p id="last">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </section>
    </div>
  );
}
