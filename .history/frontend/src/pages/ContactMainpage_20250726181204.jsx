import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Left: Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <form
            action="https://formspree.io/f/yourformid"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right: Info */}
        <div className="md:w-1/2 bg-blue-50 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Get in touch
            </h2>
            <p className="text-gray-600 mb-6">
              <strong>LumenXo Software Pvt. Ltd.</strong> is a forward-thinking
              IT company committed to delivering powerful and scalable digital
              solutions that drive business success. We specialize in web,
              mobile, and software applications tailored to modern businesses.
            </p>
            <div className="space-y-4 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Kolkata, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>support@lumenxo.com</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Connect with us
            </h3>
            <div className="flex gap-4 text-blue-600">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-blue-800 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 hover:text-blue-500 transition" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 hover:text-black transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 hover:text-pink-600 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
