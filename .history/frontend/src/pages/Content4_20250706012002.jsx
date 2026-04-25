import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBuilding,
  FaLaptopCode,
  FaGlobe,
  FaChartLine,
  FaWordpressSimple,
  FaDatabase,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: <FaBuilding className="text-indigo-600 text-4xl" />,
    title: 'Administration',
    desc: 'We strategically integrate corporate responsibility into our core operations, ensuring our expertise supports sustainable and efficient business practices.',
  },
  {
    icon: <FaLaptopCode className="text-indigo-600 text-4xl" />,
    title: 'Application Development',
    desc: 'Our skilled developers craft robust, scalable, and intuitive applications across platforms using modern technologies and standards.',
  },
  {
    icon: <FaGlobe className="text-indigo-600 text-4xl" />,
    title: 'Web Design',
    desc: 'We build modern, responsive, and user-centric websites with seamless navigation and brand-aligned interfaces.',
  },
  {
    icon: <FaChartLine className="text-indigo-600 text-4xl" />,
    title: 'Digital Marketing',
    desc: 'Boost your brand online with SEO, social media, content marketing, paid ads, email outreach, and analytics.',
  },
  {
    icon: <FaWordpressSimple className="text-indigo-600 text-4xl" />,
    title: 'WordPress Development',
    desc: 'We deliver SEO-friendly, custom WordPress websites — from themes to plugins, aligned with your business goals.',
  },
  {
    icon: <FaDatabase className="text-indigo-600 text-4xl" />,
    title: 'Backend Development',
    desc: 'Ensure performance with secure APIs, optimized databases, smooth integrations, and scalable backend logic.',
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
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 text-center">{title}</h3>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-indigo-100 rounded-xl shadow-md p-6 transform rotateY-180 flex items-center justify-center">
          <p className="text-gray-700 text-sm text-center">{desc}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default function OurServices() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Services</h2>
        <p className="italic text-gray-500 mb-6">
          "The best way to find yourself is to lose yourself in the service of others." – Mahatma Gandhi
        </p>
        <p className="text-gray-600 text-lg mb-12">
          At LumenXo Software Pvt. Ltd., we blend innovation, strategy, and technology to deliver high-impact solutions. Our services are designed to empower brands, startups, and enterprises in their digital journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {services.map((service, idx) => (
            <FlipCard key={idx} {...service} />
          ))}
        </div>

        <button
          onClick={() => navigate('/Services')}
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Explore All Services →
        </button>
      </div>
    </section>
  );
}
