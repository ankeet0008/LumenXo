// src/components/ContactPage.jsx
import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Top Section with Icons */}
      <div className="flex flex-col items-center px-6 md:px-20 py-16 gap-10">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Contact LumenXo Software Pvt. Ltd.
        </h1>
        <p className="text-gray-300 mb-6 text-center">
          Need our help or services? Reach out through any option below.
        </p>

        {/* Icon Links */}
        <div className="flex justify-center items-center space-x-3 flex-wrap gap-3">
          {/* WhatsApp */}
          <a
            href="https://alvo.chat/6hdD"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            <FaWhatsapp size={20} className="text-white" />
          </a>
          <a
            href="https://alvo.chat/6hdS"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            <FaWhatsapp size={20} className="text-white" />
          </a>

          {/* Phone */}
          <a
            href="tel:+917656918304"
            className="p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            <FaPhoneAlt size={20} className="text-white" />
          </a>
          <a
            href="tel:+918260569773"
            className="p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            <FaPhoneAlt size={20} className="text-white" />
          </a>

          {/* Email */}
          <a
            href="mailto:info.lumenxo@gmail.com"
            className="p-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            <FaEnvelope size={20} className="text-white" />
          </a>
          <a
            href="mailto:inc.lumenxo@gmail.com"
            className="p-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            <FaEnvelope size={20} className="text-white" />
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="px-6 md:px-20 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-4">Contact us</h2>
        <p className="text-gray-300 mb-8 max-w-2xl">
          Please provide the following information and we’ll put you in touch
          with the right person.
        </p>

        <form className="max-w-2xl space-y-6">
          {/* Inquiry Type */}
          <div>
            <label className="block mb-2 font-medium">Inquiry Type*</label>
            <select
              className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select...</option>
              <option value="General">General Inquiry</option>
              <option value="Partnership">Partnership</option>
              <option value="Careers">Careers</option>
              <option value="Support">Support</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">Full Name*</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">Message*</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md font-semibold transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
