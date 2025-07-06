import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-white text-black relative z-50"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <img
              src="https://bing.com/th/id/OIP.3pHyhWedLbR9iGYTQq76EgAAAA?o=7&cb=thvnextc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="logo"
              className="h-8 w-8 rounded-full mr-3"
            />
            <span className="text-xl font-bold">LumenXo</span>
          </div>

          {/* Mobile toggle bar */}
          <div className="md:hidden">
            <button
              onClick={() => setVisible(!visible)}
              className="text-#3a176bfe hover:text-gray-200 focus:outline-none relative p-2"
              aria-label="Toggle navigation"
              aria-expanded={visible}
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`block absolute h-0.5 w-6 bg-[#2d1154] transform transition duration-300 ease-in-out ${
                    visible ? 'rotate-45 translate-y-[10px]' : 'translate-y-[0px]'
                  }`}
                ></span>
                <span
                  className={`block absolute bg-[#2d1154] h-0.5 w-6 transform transition duration-300 ease-in-out ${
                    visible ? 'opacity-0' : 'opacity-100'
                  } top-[10px]`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-[#2d1154] transform transition duration-300 ease-in-out ${
                    visible ? '-rotate-45 translate-y-[10px]' : 'translate-y-[20px]'
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden text-lg md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-[#3a176bfe] px-3 py-2 rounded-md font-bold transition hover:text-[#2d1154]"
              >
                Home
              </Link>
              <Link
                to="/AboutUs"
                className="text-[#3a176bfe] px-3 py-2 rounded-md font-bold transition hover:text-[#2d1154]"
              >
                About Us
              </Link>
              <Link
                to="/Services"
                className="text-[#3a176bfe] px-3 py-2 rounded-md font-bold flex items-center transition hover:text-[#2d1154]"
              >
                Services
              </Link>
              <Link
                to="/ContactUs"
                className="text-[#3a176bfe] px-3 py-2 rounded-md font-bold transition hover:text-[#2d1154]"
              >
                Contact Us
              </Link>
              <Link
                to="/Pricing"
                className="text-[#3a176bfe] px-3 py-2 rounded-md font-bold transition hover:text-[#2d1154]"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu with animation */}
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 text-lg space-y-1 sm:px-3">
                {[
                  { name: 'Home', to: '/' },
                  { name: 'About Us', to: '/AboutUs' },
                  { name: 'Services', to: '/Services' },
                  { name: 'Contact Us', to: '/ContactUs' },
                  { name: 'Blog', to: '/Pricing' },
                ].map(({ name, to }) => (
                  <Link
                    key={name}
                    to={to}
                    onClick={() => setVisible(false)}
                    className="block text-[#3a176bfe] px-3 py-2 rounded-md text-base font-medium transition duration-200 hover:text-[#2d1154]"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
