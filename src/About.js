import React, { useEffect } from "react";
import NavBar from "./NavBar";
import heroSvg from "./starter/assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import australia from "./starter/assets/shared/desktop/illustration-australia.svg";
import canada from "./starter/assets/shared/desktop/illustration-canada.svg";
import uk from "./starter/assets/shared/desktop/illustration-united-kingdom.svg";
import "./styles/scss/About.scss";
import Location from "./Location";
import Footer from "./Footer";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="About">
      <NavBar />
      <section className="hero">
        <div className="img-wrap">{/* <img src={heroImage} alt="" /> */}</div>
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
        <div className="img-wrap">{/* <img src={talentImage} alt="" /> */}</div>
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
      <section className="locations">
        <Location name="Canada" image={canada} />
        <Location name="Australia" image={australia} />
        <Location name="United Kingdom" image={uk} />
      </section>
      <section className="talent" id="real">
        <div className="img-wrap">{/* <img src={realImage} alt="" /> */}</div>
        <div className="talent-text">
          <img src={heroSvg} alt="" />
          <h2>The real deal</h2>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <br />
          <p id="last">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </section>
      <Footer showContact={true} />
    </div>
  );
}
