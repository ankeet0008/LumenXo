import React from 'react';
import { 
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube 
} from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';  // WhatsApp icon from Bootstrap icons
import { motion } from 'framer-motion';
import Navbar from '../pages/Navbar';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};
const itemVariants = { hidden: { opacity: 0, y: 30, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25,0.46,0.45,0.94] } } };
const titleVariants = { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } };
const socialVariants = { hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } };

const socialLinks = [
  {
    icon: <FaFacebookF />,
    name: 'Facebook',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    url: 'https://tr.ee/jc-asK8gLf',
  },
  {
    icon: <BsWhatsapp />,  // Use BsWhatsapp here
    name: 'WhatsApp',
    color: 'from-green-500 to-green-600',
    hoverColor: 'hover:from-green-600 hover:to-green-700',
    url: 'https://tr.ee/j3X5gCHFIM',
  },
  {
    icon: <FaLinkedinIn />,
    name: 'LinkedIn',
    color: 'from-blue-700 to-blue-800',
    hoverColor: 'hover:from-blue-800 hover:to-blue-900',
    url: 'https://www.linkedin.com/company/lumenxo/',
  },
  {
    icon: <FaYoutube />,
    name: 'YouTube',
    color: 'from-red-600 to-red-700',
    hoverColor: 'hover:from-red-700 hover:to-red-800',
    url: 'https://tr.ee/Y9QrB5G1py',  // Assuming this is your Linktree URL, though FaYoutube icon is not correct for Linktree
  },
];

export default function ContactInfo() {
  return (
    <>
      <Navbar />
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background and curved SVG omitted for brevity */}

        <div className="relative max-w-6xl mx-auto">
          {/* Title and description */}

          {/* Contact cards */}
          {/* ... */}

          {/* Follow Us Section */}
          <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }}>
            <motion.h3 className="text-2xl md:text-3xl font-bold text-white mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.9 }}>
              Follow Us
            </motion.h3>

            <motion.div className="flex justify-center items-center gap-4 flex-wrap" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              {socialLinks.map((s, idx) => (
                <motion.a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-4 bg-gradient-to-r ${s.color} ${s.hoverColor} rounded-full shadow-lg transition duration-300 text-white`}
                  aria-label={s.name}
                >
                  <div className="text-xl">{s.icon}</div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {s.name}
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: [0.8, 1.2, 1], opacity: [0, 0.6, 0] }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
