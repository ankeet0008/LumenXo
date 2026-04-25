import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Navbar from '../pages/Navbar';

const ContactLumenXo = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-[calc(100vh-64px)]  bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/online-learning-design-concept-top-view-student-table-with-computer-headphone-stationeries-blue-table-background_315337-5769.jpg?semt=ais_hybrid&w=740&q=80')",
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
              <h1 className="text-sm sm:text-base md:text-lg font-semibold text-center text-black mb-2 sm:mb-3">
                Contact LumenXo Software Pvt. Ltd.
              </h1>
              <p className="text-center text-black text-xs sm:text-sm mb-3 sm:mb-4">
                Book our experts now
              </p>
              <p className="text-center text-black mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed px-1 sm:px-0">
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
