import React from 'react';
import { FaRocket, FaWrench, FaBolt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaRocket className="text-violet-600 text-4xl mb-4" />,
    title: 'Core Features',
    description:
      'At LUMENXO, we craft powerful, tailor-made software built for real-world impact. Our solutions blend intuitive design, seamless scalability, enterprise-grade security, and dedicated support — all to drive your business forward. Count on us for reliable innovation that grows with you.',
  },
  {
    icon: <FaWrench className="text-violet-600 text-4xl mb-4" />,
    title: 'Easily Customizable',
    description:
      'Our flexible software solutions are built with adaptability in mind—tailored to evolve with your business. With intuitive interfaces and modular design, making changes is simple, fast, and seamless—ensuring smooth growth and long-term efficiency.',
  },
  {
    icon: <FaBolt className="text-violet-600 text-4xl mb-4" />,
    title: 'Lightning-Fast Support',
    description:
      'Count on our always-on support team for swift, dependable assistance. We resolve issues quickly to keep your operations running smoothly—minimizing downtime and maximizing peace of mind.',
  },
];

export default function TechnologiesSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Our Core Offerings
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition text-left bg-white"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
can u animate and design this page ..basically i am making a website that is software company ..u can