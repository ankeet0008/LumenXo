import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10">
        
        {/* Column 1 - Logo & Intro */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://bing.com/th/id/OIP.3pHyhWedLbR9iGYTQq76EgAAAA?o=7&cb=thvnextc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="logo"
              className="h-10 w-10 object-cover rounded-full"
            />
            <h2 className="text-2xl font-bold">LumenXo</h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            A creative digital agency helping brands build modern experiences across the web, mobile & beyond.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Portfolio</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 hover:bg-indigo-600 p-2 rounded-full text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-indigo-600 p-2 rounded-full text-white">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-indigo-600 p-2 rounded-full text-white">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-indigo-600 p-2 rounded-full text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 text-center text-sm text-gray-400 border-t border-gray-200">
        © {new Date().getFullYear()} LumenXo. All rights reserved.
      </div>
    </footer>
  );
}
