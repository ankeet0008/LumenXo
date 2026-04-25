// ContactPage.jsx
import React from "react";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from "lucide-react";

const ContactPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-16 px-4 md:px-20"
      style={{
        backgroundImage:
          "url(https://cdn.easyfrontend.com/pictures/contact/contact_11.png)",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg max-w-7xl mx-auto p-8 md:flex md:gap-8">
        {/* Left Side - Contact Form */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>
          <form
            action="https://formspree.io/f/your-id-here"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Info + Socials */}
        <div className="md:w-1/2 w-full text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            <strong>LumenXo Software Pvt. Ltd.</strong> is a forward-thinking IT company delivering
            scalable digital solutions that help businesses thrive. We specialize in custom
            software, web, and mobile app development tailored to your needs.
          </p>
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              <span>contact@lumenxo.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Kolkata, India</span>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 hover:text-blue-700" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 hover:text-sky-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 hover:text-pink-600" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 hover:text-gray-800" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
