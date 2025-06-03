import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Footer() {
  const [email, setEmail] = useState("");

  const hour = new Date().getHours();
  const openHour = 5;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;

  const sendSubscriptionEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ren6j8i",
        "template_ejgfe8j",
        { email },
        "_N7JNtueDJBZFx2Y8"
      )
      .then(() => {
        toast("Subscription successful! 🎉");
        setEmail(""); // Clear input after submission
      })
      .catch((error) => console.error("EmailJS Error:", error));
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Slogan */}
        <div>
          <h2 className="text-2xl font-bold mb-2">SculptArtFitness</h2>
          <p className="text-gray-400 text-sm">
            Navigating the world through strength and balance.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/bmi" className="hover:text-primary">
                BMI Calculator
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe Form */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            Subscribe to Our Newsletter
          </h3>
          <form
            onSubmit={sendSubscriptionEmail}
            className="flex flex-col gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 rounded bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect with Us</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://web.facebook.com/sculptartfitness"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/sculpt_artfitness/?locale=es_US&hl=en"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      {/* isOpen notice */}
      {isOpen ? (
        <p className="text-center text-lg mt-6 text-white">
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      ) : (
        <p className="text-center text-lg mt-6 text-red-500 animate-pulse">
          Sorry, we're currently closed. Our hours are from {openHour}:30 to{" "}
          {closeHour}:00.
        </p>
      )}
      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SculptArtFitness. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
