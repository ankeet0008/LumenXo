import React, { useState } from 'react';
import { FaReact, FaVuejs, FaAngular, FaHtml5, FaNodeJs, FaJava, FaPython, FaAws, FaMicrosoft, FaGoogle, FaBrain, FaChartLine, FaRobot } from 'react-icons/fa';

const techData = {
  Frontend: [
    { name: 'React', icon: <FaReact className="text-blue-500 text-3xl" /> },
    { name: 'Vue.js', icon: <FaVuejs className="text-green-500 text-3xl" /> },
    { name: 'Angular', icon: <FaAngular className="text-red-500 text-3xl" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" /> },
    { name: 'Java', icon: <FaJava className="text-red-600 text-3xl" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-500 text-3xl" /> },
  ],
  Cloud: [
    { name: 'AWS', icon: <FaAws className="text-yellow-600 text-3xl" /> },
    { name: 'Azure', icon: <FaMicrosoft className="text-blue-600 text-3xl" /> },
    { name: 'Google Cloud', icon: <FaGoogle className="text-red-500 text-3xl" /> },
  ],
  'AI & Data': [
    { name: 'Machine Learning', icon: <FaBrain className="text-purple-500 text-3xl" /> },
    { name: 'Data Analytics', icon: <FaChartLine className="text-indigo-500 text-3xl" /> },
    { name: 'Gen AI', icon: <FaRobot className="text-teal-500 text-3xl" /> },
  ],
};

const categories = Object.keys(techData);

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Technologies & Platforms We Use
        </h2>

        {/* Category Tabs as Underlined Text */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 border-b border-gray-300">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-base font-medium pb-2 transition-all ${
                activeCategory === cat
                  ? 'border-b-4 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {techData[activeCategory].map((tech) => (
            <div
              key={tech.name}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center hover:shadow-md transition"
            >
              <div className="mb-3">{tech.icon}</div>
              <p className="text-sm font-semibold text-gray-800">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
