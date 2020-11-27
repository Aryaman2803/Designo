import React from "react";
import NavBar from "./NavBar";
import "./Contact.scss";
import circles from "./starter/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";

export default function Contact() {
  return (
    <div className="Contact">
      <NavBar />
      <section className="form">
        <div className="container">
          <img src={circles} alt="" />
          <h2>Contact Us</h2>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
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
      </section>
    </div>
  );
}
