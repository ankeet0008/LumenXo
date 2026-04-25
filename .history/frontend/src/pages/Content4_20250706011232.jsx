import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode className="text-indigo-600 text-4xl" />,
    title: 'Web Development',
    desc: 'We build responsive, fast, and scalable websites tailored to your business.',
  },
  {
    icon: <FaPaintBrush className="text-indigo-600 text-4xl" />,
    title: 'UI/UX Design',
    desc: 'Crafting intuitive and visually stunning designs to enhance user experience.',
  },
  {
    icon: <FaMobileAlt className="text-indigo-600 text-4xl" />,
    title: 'Mobile App Development',
    desc: 'Creating smooth, feature-rich apps for iOS and Android platforms.',
  },
  {
    icon: <FaChartLine className="text-indigo-600 text-4xl" />,
    title: 'Digital Marketing',
    desc: 'Grow your online presence through SEO, social media, and content marketing.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg mb-12">
          From ideation to execution, we deliver exceptional digital solutions that elevate your brand.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
