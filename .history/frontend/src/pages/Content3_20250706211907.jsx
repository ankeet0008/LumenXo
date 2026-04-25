import React from 'react';
import { FaRocket, FaWrench, FaBolt, FaShield, FaCode, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaRocket className="text-4xl mb-4" />,
    title: 'Core Features',
    description:
      'At LUMENXO, we craft powerful, tailor-made software built for real-world impact. Our solutions blend intuitive design, seamless scalability, enterprise-grade security, and dedicated support — all to drive your business forward.',
  },
  {
    icon: <FaWrench className="text-4xl mb-4" />,
    title: 'Easily Customizable',
    description:
      'Our flexible software solutions are built with adaptability in mind—tailored to evolve with your business. With intuitive interfaces and modular design, making changes is simple, fast, and seamless.',
  },
  {
    icon: <FaBolt className="text-4xl mb-4" />,
    title: 'Lightning-Fast Support',
    description:
      'Count on our always-on support team for swift, dependable assistance. We resolve issues quickly to keep your operations running smoothly—minimizing downtime and maximizing peace of mind.',
  },
  {
    icon: <FaShield className="text-4xl mb-4" />,
    title: 'Enterprise Security',
    description:
      'Built with bank-level security protocols and compliance standards. Your data is protected with advanced encryption, secure authentication, and regular security audits to ensure complete peace of mind.',
  },
  {
    icon: <FaCode className="text-4xl mb-4" />,
    title: 'Modern Technology',
    description:
      'Leveraging cutting-edge technologies and frameworks to deliver future-proof solutions. Our tech stack ensures optimal performance, scalability, and maintainability for long-term success.',
  },
  {
    icon: <FaUsers className="text-4xl mb-4" />,
    title: 'Expert Team',
    description:
      'Our seasoned developers and consultants bring years of industry experience. We understand your challenges and deliver solutions that exceed expectations while meeting deadlines.',
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
    y: 50,
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

const FloatingParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-600 rounded-full opacity-20"
    animate={{
      y: [-20, -100, -20],
      x: [-10, 10, -10],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

export default function TechnologiesSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-violet-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10">
          <FloatingParticle delay={0} />
        </div>
        <div className="absolute top-40 right-20">
          <FloatingParticle delay={1} />
        </div>
        <div className="absolute bottom-40 left-1/4">
          <FloatingParticle delay={2} />
        </div>
        <div className="absolute bottom-20 right-1/3">
          <FloatingParticle delay={3} />
        </div>
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-purple-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl"
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

      <div className="relative max-w-7xl mx-auto">
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
            <span className="px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 text-sm font-semibold rounded-full border border-violet-200">
              Why Choose LUMENXO
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-violet-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Our Core Offerings
          </h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge software solutions that drive innovation, 
            efficiency, and sustainable growth in the digital age.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              
              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon Container */}
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative p-4 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl group-hover:from-violet-200 group-hover:to-purple-200 transition-all duration-300">
                    <div className="text-violet-600 group-hover:text-violet-700 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    
                    {/* Animated Ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-violet-300 rounded-2xl opacity-0 group-hover:opacity-100"
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
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-violet-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
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
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get Started Today</span>
            
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
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}