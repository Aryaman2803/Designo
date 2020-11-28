import React, { useEffect } from "react";
import NavBar from "./NavBar";
import "./styles/scss/Contact.scss";
import circles from "./starter/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";
import Location from "./Location";
import australia from "./starter/assets/shared/desktop/illustration-australia.svg";
import canada from "./starter/assets/shared/desktop/illustration-canada.svg";
import uk from "./starter/assets/shared/desktop/illustration-united-kingdom.svg";
import Footer from "./Footer";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Contact">
      <NavBar />
      <section className="form">
        <div className="container">
          <img src={circles} alt="" />
          <div className="text-wrap">
            <h2>Contact Us</h2>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <div className="">
            <form action="">
              <input type="text" placeholder="Name" name="name" id="name" />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                id="email"
              />
              <input type="text" placeholder="Phone" name="phone" id="phone" />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <section className="locations">
        <Location name="Canada" image={canada} />
        <Location name="Australia" image={australia} />
        <Location name="United Kingdom" image={uk} />
      </section>
      <Footer showContact={false} />
    </div>
  );
}
