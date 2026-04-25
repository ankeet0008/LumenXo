import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactUs11 = () => {
  const [state, handleSubmit] = useForm("mldlbald");

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-8"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/white-concrete-wall_53876-92803.jpg")',
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: About Text + Social Icons */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">About LumenXo</h2>
            <p className="text-gray-600 mb-6">
              LumenXo Software Pvt. Ltd. is dedicated to building scalable, innovative digital solutions tailored for businesses. From idea to execution, we empower brands with custom web, mobile, and software applications that drive growth and engagement.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 text-2xl text-gray-600">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-800 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-600 transition" />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div>
          {state.succeeded ? (
            <p className="text-green-600 text-xl font-semibold">Thanks for reaching out!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs11;
