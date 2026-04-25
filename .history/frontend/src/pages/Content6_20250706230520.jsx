import React from 'react';
import { FaRocket, FaPaintBrush, FaHeadset, FaThumbsUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaRocket className="text-2xl mb-2" />,
    title: 'Fast Performance',
    description: 'We develop lightning-fast websites optimized for speed and usability.',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50',
  },
  {
    icon: <FaPaintBrush className="text-2xl mb-2" />,
    title: 'Creative Design',
    description: 'Designs that are not only stunning but also intuitive and user-friendly.',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50',
  },
  {
    icon: <FaHeadset className="text-2xl mb-2" />,
    title: '24/7 Support',
    description: 'Our support team is available anytime to help you out.',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50',
  },
  {
    icon: <FaThumbsUp className="text-2xl mb-2" />,
    title: 'Client Satisfaction',
    description: 'We prioritize your satisfaction with end-to-end project support.',
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50',
  },
];

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
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { 
    opacity: 0, 
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FloatingElement = ({ delay = 0, className = "" }) => (
  <motion.div
    className={`absolute w-3 h-3  rounded-full opacity-20 ${className}`}
    animate={{
      y: [-10, -30, -10],
      x: [-5, 5, -5],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

export default function WhyLumenXo() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement delay={0} className="top-20 left-10" />
        <FloatingElement delay={1} className="top-40 right-20" />
        <FloatingElement delay={2} className="bottom-40 left-1/4" />
        <FloatingElement delay={3} className="bottom-20 right-1/3" />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80  rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Image */}
        <motion.div 
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.img
              src="https://static.live.templately.com/woocommerce/2021/08/Illustration3-min.png"
              alt="Why LumenXo Illustration"
              className="relative w-full h-auto object-contain rounded-2xl"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Floating Icons Around Image */}
            <motion.div
              className="absolute top-10 -right-5 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaRocket className="text-white text-lg" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-10 -left-5 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [5, -5, 5],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <FaPaintBrush className="text-white text-lg" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div 
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          {/* Heading Section */}
          <motion.div
            className="mb-8"
            variants={textVariants}
          >
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold rounded-full border border-indigo-200">
                Why Choose Us
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why LumenXo
            </motion.h2>
            
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At LumenXo, we combine innovation, creativity, and technology to deliver solutions that exceed expectations.
            </motion.p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                
                {/* Main Card */}
                <div className={`relative bg-gradient-to-br ${item.bgColor} backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-500 text-center h-full`}>
                  {/* Icon Container */}
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`relative p-3 bg-gradient-to-r ${item.color} rounded-xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      {item.icon}
                      
                      {/* Animated Ring */}
                      <motion.div
                        className="absolute inset-0 border-2 border-white/30 rounded-xl opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ 
                          scale: [0.8, 1.2, 1],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Hover Accent Line */}
                  <motion.div
                    className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                    whileHover={{ 
                      width: "80%",
                      x: "-50%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-10"
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
              <span className="relative z-10">Learn More About Us</span>
              
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
        </motion.div>
      </div>
    </section>
  );
}