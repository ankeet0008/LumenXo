import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ContactInfo() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://tse2.mm.bing.net/th/id/OIP.ereU3u30vDuTpuSKAIRt4AAAAA?cb=thvnextc2&w=474&h=316&rs=1&pid=ImgDetMain&o=7&rm=3')`
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Curved Design Element */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1200,0 L1200,600 Q600,800 0,600 Z"
            fill="rgba(99, 102, 241, 0.1)"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're here to assist you! Reach out for inquiries, bookings, or support.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Email */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Email Us
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                inc.lumenxo@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                  <FaPhoneAlt className="text-white text-2xl" />
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Call Us
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                +918260569773
              </p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Visit Us
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                Balasore, Odisha, India
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}