import React from "react";
import NavBar from "./NavBar";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <section className="form">
        <h2>Contact Us</h2>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
        <form action="">
          <input type="text" placeholder="Name" name="name" />
        </form>
      </section>
    </div>
  );
}
