import React, { useState } from 'react';
import { Send } from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xzbnykya', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        console.error('Form submission failed:', await response.text());
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-8 lg:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start bg-white p-8 rounded-xl shadow-lg">
        
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            At <strong>LumenXo Software Pvt. Ltd.</strong>, we craft tailored digital solutions that empower businesses to grow faster and smarter.
          </p>
          <div className="text-gray-600 space-y-2">
            <p><strong>Address:</strong> Kolkata, India</p>
            <p><strong>Email:</strong> contact@lumenxo.com</p>
          </div>
          <div className="flex space-x-4 pt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xl hover:scale-110 transition">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-xl hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 text-xl hover:scale-110 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-xl hover:scale-110 transition">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          {submitted ? (
            <div className="text-green-600 font-semibold text-lg">
              Thank you for contacting us! 🎉
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block mb-1 text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Honeypot */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Send <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
