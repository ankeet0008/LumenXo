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
        <div className="absolute inset-0 bg-black/60"></div>
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
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
              Get In Touch
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We're here to assist you!
          </h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <p className="text-lg text-white/90 mt-6 max-w-3xl mx-auto leading-relaxed">
            Reach out for inquiries, bookings, or support. Our team is ready to help you achieve your goals.
          </p>
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
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group relative"
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
            
            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 text-center h-full">
              {/* Icon Container */}
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
                  <FaEnvelope className="text-white text-3xl" />
                  
                  {/* Animated Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-2xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ 
                      scale: [0.8, 1.1, 1],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors duration-300">
                Email Us
              </h4>
              
              <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                inc.lumenxo@gmail.com
              </p>

              {/* Hover Accent Line */}
              <motion.div
                className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                whileHover={{ 
                  width: "80%",
                  x: "-50%",
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group relative"
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
            
            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 text-center h-full">
              {/* Icon Container */}
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                  <FaPhoneAlt className="text-white text-3xl" />
                  
                  {/* Animated Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-2xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ 
                      scale: [0.8, 1.1, 1],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-200 transition-colors duration-300">
                Call Us
              </h4>
              
              <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                +918260569773
              </p>

              {/* Hover Accent Line */}
              <motion.div
                className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                whileHover={{ 
                  width: "80%",
                  x: "-50%",
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group relative"
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
            
            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 text-center h-full">
              {/* Icon Container */}
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg">
                  <FaMapMarkerAlt className="text-white text-3xl" />
                  
                  {/* Animated Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-2xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ 
                      scale: [0.8, 1.1, 1],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">
                Visit Us
              </h4>
              
              <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                Balasore, Odisha, India
              </p>

              {/* Hover Accent Line */}
              <motion.div
                className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                whileHover={{ 
                  width: "80%",
                  x: "-50%",
                }}
                transition={{ duration: 0.3 }}
              />
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
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get In Touch Today</span>
            
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}