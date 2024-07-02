import React from "react";
import { Pacifico } from "next/font/google";

const inter = Pacifico({ weight: ["400"], subsets: ["latin"] });
function Footer() {
  return (
    <section className="text-center p-5 my-10">
      <div>
        <p
          style={{ fontFamily: inter.style.fontFamily }}
          className="text-center"
        >
          About Us
        </p>

        <p className="text-xs font-semibold text-center p-5 ">
          At Insnapsys, we are committed to delivering excellence in
          everything we do. Established in 2018, our mission has been to
          provide innovative solutions that meet the evolving needs of our
          clients. Our team of dedicated professionals brings together a wealth
          of experience and expertise, ensuring that we consistently deliver
          high-quality products and services. We believe in fostering a
          collaborative and inclusive environment where creativity and
          innovation thrive. Our core values of integrity, customer focus, and
          continuous improvement drive us to exceed expectations and build
          lasting relationships with our clients. Join us on our journey as we
          strive to make a positive impact in the industry and beyond.
        </p>
        <p className="text-xs font-semibold text-center p-5 ">
          At Insnapsys, we are committed to delivering excellence in
          everything we do. Established in 2018, our mission has been to
          provide innovative solutions that meet the evolving needs of our
          clients. Our team of dedicated professionals brings together a wealth
          of experience and expertise, ensuring that we consistently deliver
          high-quality products and services. We believe in fostering a
          collaborative and inclusive environment where creativity and
          innovation thrive. Our core values of integrity, customer focus, and
          continuous improvement drive us to exceed expectations and build
          lasting relationships with our clients. Join us on our journey as we
          strive to make a positive impact in the industry and beyond.
        </p>
        <p
          style={{ fontFamily: inter.style.fontFamily }}
          className="text-center"
        >
          Contact Us
        </p>

        <a href="tel:+46 789 456 1320" className="underline p-5 ">
          +46 789 456 1320
        </a>
      </div>

      <footer className="border-t border-black p-8 text-right text-xs font-semibold mt-16 p-5 ">
        &copy; 2024 All rights are reserved
      </footer>
    </section>
  );
}

export default Footer;
