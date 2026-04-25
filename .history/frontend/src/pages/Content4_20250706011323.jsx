import React, { useState } from 'react';
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

const FlipCard = ({ icon, title, desc }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-64 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full transform-style-preserve-3d relative"
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-indigo-100 rounded-xl shadow-md p-6 transform rotateY-180 flex items-center justify-center">
          <p className="text-gray-700 text-sm text-center">{desc}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg mb-12">
          Click on a service card to know more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <FlipCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
