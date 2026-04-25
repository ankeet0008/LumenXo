import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Navbar from './Navbar';

const ContactLumenXo = () => {
  return (
    <>
      <Navbar />

      <div
        className="h-[calc(100vh-64px)] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage:
            "url('https://weddingsathilton.com/wp-content/uploads/2021/04/getintouch.jpg')",
        }}
      >
        {/* Optional: overlay tint */}
        <div className="absolute inset-0  bg-opacity-40 z-0" />

        <div
          className="relative z-10 bg-black bg-opacity-90 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-6 md:p-8 border border-gray-200 h-[350px] sm:h-[400px] md:h-[450px] flex flex-col justify-center text-white"
          style={{
            boxShadow:
              '0 10px 25px -3px rgba(120, 53, 15, 0.3), 0 4px 6px -2px rgba(120, 53, 15, 0.1)',
          }}
        >
          <div className="flex flex-col justify-center h-full space-y-6 sm:space-y-8">
            <div className="text-center">
              <h1 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">
                Contact LumenXo Software Pvt. Ltd.
              </h1>
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                Book our experts now
              </p>
              <p className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed px-1 sm:px-0">
                Need our help or services? Reach out through any option below.
              </p>
            </div>

            <div className="flex justify-center items-center space-x-2 sm:space-x-3 flex-wrap">
              <Link
                to="https://alvo.chat/6hdD"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-lg bg-green-600 hover:bg-green-700 transition duration-200 shadow hover:shadow-md active:scale-95"
              >
                <FaWhatsapp size={20} className="text-white" />
              </Link>

              <Link
                to="https://alvo.chat/6hdS"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-lg bg-green-600 hover:bg-green-700 transition duration-200 shadow hover:shadow-md active:scale-95"
              >
                <FaWhatsapp size={20} className="text-white" />
              </Link>

              <Link
                to="tel:+917656918304"
                className="p-2 sm:p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-200 shadow hover:shadow-md active:scale-95"
              >
                <FaPhoneAlt size={20} className="text-white" />
              </Link>

              <Link
                to="tel:+918260569773"
                className="p-2 sm:p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-200 shadow hover:shadow-md active:scale-95"
              >
                <FaPhoneAlt size={20} className="text-white" />
              </Link>

              <Link
                to="mailto:info.lumenxo@gmail.com"
                className="p-2 sm:p-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition duration-200 shadow hover:shadow-md active:scale-95"
              >
                <FaEnvelope size={20} className="text-white" />
              </Link>

              <Link
                to="mailto:inc.lumenxo@gmail.com"
                className="p-2 sm:p-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition duration-200 shadow hover:shadow-md active:scale-95"
              >
                <FaEnvelope size={20} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactLumenXo;
