import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

const ContactUs11 = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section
      className="relative py-20 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://cdn.easyfrontend.com/pictures/contact/contact_11.png)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-white">
          {/* Left Side Content */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6 text-lg">
              LumenXo is a forward-thinking software company delivering powerful
              digital solutions to help businesses thrive in the modern world.
              From websites to full-scale enterprise tools, we build it all.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-blue-500">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Twitter />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Github />
              </a>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <span>contact@lumenxo.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-black rounded-xl shadow-lg p-8 max-w-md w-full mx-auto">
            <form
              noValidate
              validated={validated.toString()}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/YOUR_FORMSPREE_ID"
              method="POST"
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs11;
