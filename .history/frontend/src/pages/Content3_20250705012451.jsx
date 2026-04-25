import React from 'react';
import { FaRocket, FaWrench, FaBolt } from 'react-icons/fa';

const features = [
  {
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', // Example avatar
    icon: <FaRocket className="text-violet-600 text-3xl" />,
    title: 'Core Features',
    description:
      'At LUMENXO, we craft powerful, tailor-made software built for real-world impact. Our solutions blend intuitive design, seamless scalability, enterprise-grade security, and dedicated support — all to drive your business forward.',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg', // Replace with your real image if any
    icon: <FaWrench className="text-violet-600 text-3xl" />,
    title: 'Easily Customizable',
    description:
      'Our flexible software solutions are built with adaptability in mind—tailored to evolve with your business. With intuitive interfaces and modular design, making changes is simple, fast, and seamless.',
  },
  {
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    icon: <FaBolt className="text-violet-600 text-3xl" />,
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
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              {/* Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-violet-500"
              />

              {/* Icon + Text */}
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
