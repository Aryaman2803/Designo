import React from "react";
import NavBar from "./NavBar";
import phoneImage from "./starter/assets/home/desktop/image-hero-phone.png";
import passionate from "./starter/assets/home/desktop/illustration-passionate.svg";
import resourceful from "./starter/assets/home/desktop/illustration-resourceful.svg";
import friendly from "./starter/assets/home/desktop/illustration-friendly.svg";
import leaf from "./starter/assets/shared/desktop/bg-pattern-leaf.svg";
import { useMediaQuery } from "react-responsive";
import "./Home.scss";
import Project from "./Project";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1220px)",
  });
  return (
    <div className="Home">
      <NavBar />
      {isDesktop && (
        <>
          <img src={leaf} alt="" id="leaf1" />{" "}
          <img src={leaf} alt="" id="leaf2" />
        </>
      )}

      <section className="Home-landing">
        <div className="landing-wrap">
          <h2>Award-winning custom designs and digital branding solutions</h2>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button>Learn More</button>
        </div>

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
        <Project name="Web Design" id="web-design" />
        <Project name="App Design" id="app-design" />
        <Project name="Graphic Design" id="graphic-design" />
      </section>
      <section className="Home-values">
        <div className="value">
          <div className="img-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202">
              <defs>
                <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
                  <stop offset="0%" stop-color="#5D0202" stop-opacity="0" />
                  <stop
                    offset="100%"
                    stop-color="#5D0202"
                    stop-opacity=".498"
                  />
                </linearGradient>
              </defs>
              <circle
                cx="101"
                cy="101"
                r="101"
                fill="url(#a)"
                fill-rule="evenodd"
                opacity=".203"
                transform="matrix(-1 0 0 1 202 0)"
              />
            </svg>
            <img src={passionate} alt="" />
          </div>
          <div className="value-text-wrap">
            <h3>Passionate</h3>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div className="value">
          <div className="img-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202">
              <defs>
                <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
                  <stop offset="0%" stop-color="#5D0202" stop-opacity="0" />
                  <stop
                    offset="100%"
                    stop-color="#5D0202"
                    stop-opacity=".498"
                  />
                </linearGradient>
              </defs>
              <circle
                cx="101"
                cy="101"
                r="101"
                fill="url(#a)"
                fill-rule="evenodd"
                opacity=".203"
                transform="matrix(-1 0 0 1 202 0)"
              />
            </svg>
            <img src={resourceful} alt="" />
          </div>

          <div className="value-text-wrap">
            <h3>Resourceful</h3>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div className="value">
          <div className="img-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202">
              <defs>
                <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
                  <stop offset="0%" stop-color="#5D0202" stop-opacity="0" />
                  <stop
                    offset="100%"
                    stop-color="#5D0202"
                    stop-opacity=".498"
                  />
                </linearGradient>
              </defs>
              <circle
                cx="101"
                cy="101"
                r="101"
                fill="url(#a)"
                fill-rule="evenodd"
                opacity=".203"
                transform="matrix(-1 0 0 1 202 0)"
              />
            </svg>
            <img src={friendly} alt="" />
          </div>

          <div className="value-text-wrap">
            <h3>Friendly</h3>
            <p>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
