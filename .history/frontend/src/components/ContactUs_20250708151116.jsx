import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '../pages/Navbar';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};
const itemVariants = { hidden: { opacity: 0, y: 30, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25,0.46,0.45,0.94] } } };
const titleVariants = { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } };
const socialVariants = { hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } };

// Extracted links from https://linktr.ee/LumenXo (current as of today)
const socialLinks = [
  { icon: <FaFacebookF />, name: 'Facebook', color: 'from-blue-600 to-blue-700', hoverColor: 'hover:from-blue-700 hover:to-blue-800', url: 'https://www.facebook.com/lumenxo' },
  { icon: <FaTwitter />, name: 'Twitter', color: 'from-sky-500 to-sky-600', hoverColor: 'hover:from-sky-600 hover:to-sky-700', url: 'https://twitter.com/lumenxo' },
  { icon: <FaInstagram />, name: 'Instagram', color: 'from-pink-500 to-rose-600', hoverColor: 'hover:from-pink-600 hover:to-rose-700', url: 'https://instagram.com/lumenxo' },
  { icon: <FaLinkedinIn />, name: 'LinkedIn', color: 'from-blue-700 to-blue-800', hoverColor: 'hover:from-blue-800 hover:to-blue-900', url: 'https://www.linkedin.com/company/lumenxo' },
  { icon: <FaYoutube />, name: 'YouTube', color: 'from-red-600 to-red-700', hoverColor: 'hover:from-red-700 hover:to-red-800', url: 'https://www.youtube.com/@LumenXo' },
];

export default function ContactInfo() {
  return (
    <>
      <Navbar />
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://tse2.mm.bing.net/th/id/OIP.ereU3u30vDuTpuSKAIRt4AAAAA?cb=thvnextc2&w=474&h=316&rs=1&pid=ImgDetMain&o=7&rm=3')` }}>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,0 L1200,0 L1200,600 Q600,800 0,600 Z" fill="rgba(99, 102, 241, 0.1)" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={titleVariants}>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</motion.h2>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mb-6" initial={{ width: 0 }} whileInView={{ width: 96 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} />
            <motion.p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              We're here to assist you! Reach out for inquiries, bookings, or support.
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
            {[
              { Icon: FaEnvelope, title: 'Email Us', info: 'inc.lumenxo@gmail.com', bg: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
              { Icon: FaPhoneAlt, title: 'Call Us', info: '+91 82605 69773', bg: 'bg-gradient-to-br from-green-500 to-emerald-600' },
              { Icon: FaMapMarkerAlt, title: 'Visit Us', info: 'Balasore, Odisha, India', bg: 'bg-gradient-to-br from-orange-500 to-red-600' },
            ].map((c, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 text-center h-full">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 ${c.bg} rounded-xl shadow-lg`}>
                      <c.Icon className="text-white text-2xl" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{c.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{c.info}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }}>
            <motion.h3 className="text-2xl md:text-3xl font-bold text-white mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.9 }}>
              Follow Us
            </motion.h3>

            <motion.div className="flex justify-center items-center gap-4 flex-wrap" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              {socialLinks.map((s, idx) => (
                <motion.a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" variants={socialVariants} whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}
                  className={`group relative p-4 bg-gradient-to-r ${s.color} ${s.hoverColor} rounded-full shadow-lg transition duration-300 text-white`} aria-label={s.name}>
                  <div className="text-xl">{s.icon}</div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">{s.name}</div>
                  <motion.div className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100" initial={{ scale: 0.8, opacity: 0 }} whileHover={{ scale: [0.8,1.2,1], opacity: [0,0.6,0] }} transition={{ duration: 0.6 }} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
