import React from 'react';
import { FaRocket, FaPaintBrush, FaHeadset, FaThumbsUp } from 'react-icons/fa';

const features = [
  {
    icon: <FaRocket className="text-indigo-600 text-2xl mb-2" />,
    title: 'Fast Performance',
    description: 'We develop lightning-fast websites optimized for speed and usability.',
  },
  {
    icon: <FaPaintBrush className="text-indigo-600 text-2xl mb-2" />,
    title: 'Creative Design',
    description: 'Designs that are not only stunning but also intuitive and user-friendly.',
  },
  {
    icon: <FaHeadset className="text-indigo-600 text-2xl mb-2" />,
    title: '24/7 Support',
    description: 'Our support team is available anytime to help you out.',
  },
  {
    icon: <FaThumbsUp className="text-indigo-600 text-2xl mb-2" />,
    title: 'Client Satisfaction',
    description: 'We prioritize your satisfaction with end-to-end project support.',
  },
];

export default function WhyEleCreative() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Image */}
        <div className="md:w-1/2">
          <img
            src="https://static.live.templately.com/woocommerce/2021/08/Illustration3-min.png"
            alt="Why EleCreative Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Features */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-md transition text-center"
            >
              {item.icon}
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
