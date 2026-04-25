import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../Assets/download.svg';

export default function HeroSection() {
  return (
    <section className="py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <div>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-6"
          >
            Crafting Scalable, Secure & <br /> Intelligent Software Solutions
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-600 text-lg mb-6"
          >
            We engineer high-performing, AI-powered, cloud-native products—
            designed for rapid market launch, data-driven intelligence, and
            exceptional user experiences.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/ContactUs'}
            className="bg-[#0056ff] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-[#0046d4]"
          >
            Talk to Our Experts
            <span className="text-xl">&rarr;</span>
          </motion.button>
        </div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
