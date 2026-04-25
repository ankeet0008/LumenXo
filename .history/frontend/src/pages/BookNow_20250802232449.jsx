import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Navbar from './Navbar';

const ContactLumenXo = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-[calc(100vh-64px)] bg-brown-200 bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage:
            "url('data:image/jpeg;base64,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')",
        }}
      >
  
        <div className="absolute inset-0 z-0"></div>
        
     
        <div
          className="relative  rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-6 md:p-8 border border-gray-200 z-10 mx-4 h-[350px] sm:h-[400px] md:h-[450px] flex flex-col justify-center"
          style={{
            boxShadow: '0 10px 25px -3px rgba(120, 53, 15, 0.3), 0 4px 6px -2px rgba(120, 53, 15, 0.1)'
          }}
        >
          <div className="flex flex-col justify-center h-full space-y-6 sm:space-y-8">
            <div className="text-center">
              <h1 className="text-sm sm:text-base md:text-lg font-semibold text-center text-white mb-2 sm:mb-3">
                Contact LumenXo Software Pvt. Ltd.
              </h1>
              <p className="text-center text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                Book our experts now
              </p>
              <p className="text-center text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed px-1 sm:px-0">
                Need our help or services? Reach out through any option below.
              </p>
            </div>
            
          
            <div className="flex justify-center items-center space-x-2 sm:space-x-3 flex-wrap">
      
              <Link
                to="https://alvo.chat/6hdD"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
              >
                <FaWhatsapp size={14} className="text-white sm:hidden" />
                <FaWhatsapp size={16} className="text-white hidden sm:block" />
              </Link>
              <Link
                to="https://alvo.chat/6hdS"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
              >
                <FaWhatsapp size={14} className="text-white sm:hidden" />
                <FaWhatsapp size={16} className="text-white hidden sm:block" />
              </Link>
           
              <Link
                to="tel:+917656918304"
                className="p-2 sm:p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
              >
                <FaPhoneAlt size={14} className="text-white sm:hidden" />
                <FaPhoneAlt size={16} className="text-white hidden sm:block" />
              </Link>
              <Link
                to="tel:+918260569773"
                className="p-2 sm:p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
              >
                <FaPhoneAlt size={14} className="text-white sm:hidden" />
                <FaPhoneAlt size={16} className="text-white hidden sm:block" />
              </Link>
              
              <Link
                to="mailto:info.lumenxo@gmail.com"
                className="p-2 sm:p-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
              >
                <FaEnvelope size={14} className="text-white sm:hidden" />
                <FaEnvelope size={16} className="text-white hidden sm:block" />
              </Link>
              <Link
                to="mailto:inc.lumenxo@gmail.com"
                className="p-2 sm:p-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors duration-200 shadow-sm hover:shadow-md active:scale-95"
              >
                <FaEnvelope size={14} className="text-white sm:hidden" />
                <FaEnvelope size={16} className="text-white hidden sm:block" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactLumenXo;
