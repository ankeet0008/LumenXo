import React from 'react';
import { motion } from 'framer-motion';
import { BsWhatsapp } from 'react-icons/bs'; 
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ContactUs = () => {
  return (
    <motion.div
      className="contact-us"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants}>Contact Us</motion.h2>
      
      <motion.div className="contact-info" variants={itemVariants}>
        <p>Get in touch with us through any of these channels:</p>
        
        <div className="contact-methods">
          <motion.div className="contact-item" variants={itemVariants}>
            <BsWhatsapp className="contact-icon whatsapp" />
            <span>WhatsApp</span>
          </motion.div>
          
          <motion.div className="contact-item" variants={itemVariants}>
            <FaTwitter className="contact-icon twitter" />
            <span>Twitter</span>
          </motion.div>
          
          <motion.div className="contact-item" variants={itemVariants}>
            <FaInstagram className="contact-icon instagram" />
            <span>Instagram</span>
          </motion.div>
          
          <motion.div className="contact-item" variants={itemVariants}>
            <FaYoutube className="contact-icon youtube" />
            <span>YouTube</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;