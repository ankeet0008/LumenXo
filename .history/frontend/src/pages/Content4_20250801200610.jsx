```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    emoji: '🏢',
    title: 'Administration',
    desc: 'We strategically integrate corporate responsibility into our core operations, ensuring our expertise supports sustainable and efficient business practices.',
    bgImage: 'https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    emoji: '💻',
    title: 'Application Development',
    desc: 'Our skilled developers craft robust, scalable, and intuitive applications across platforms using modern technologies and standards.',
    bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    emoji: '🌐',
    title: 'Web Design',
    desc: 'We build modern, responsive, and user-centric websites with seamless navigation and brand-aligned interfaces.',
    bgImage: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    emoji: '📈',
    title: 'Digital Marketing',
    desc: 'Boost your brand online with SEO, social media, content marketing, paid ads, email outreach, and analytics.',
    bgImage: 'https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    emoji: '🧩',
    title: 'WordPress Development',
    desc: 'We deliver SEO-friendly, custom WordPress websites — from themes to plugins, aligned with your business goals.',
    bgImage: 'https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    emoji: '⚙️',
    title: 'Backend Development',
    desc: 'Ensure performance with secure APIs, optimized databases, smooth integrations, and scalable backend logic.',
    bgImage: 'https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

const ServicesFlipCardsWithBackground = () => {
  return (
    <div className="bg-gray-100 py-16 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Our Services</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At LumenXo Software Pvt. Ltd., we blend innovation, strategy, and technology to deliver high-impact solutions.
            Our services are designed to empower brands, startups, and enterprises in their digital journey.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group w-72 h-80 [perspective:1000px] md:w-64 md:h-72"
            >
              <div className="relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Card Front */}
                <div
                  className="absolute inset-0 p-8 flex flex-col justify-center items-center rounded-3xl bg-cover bg-center bg-no-repeat shadow-xl text-white [backface-visibility:hidden] border-2 border-white/10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${service.bgImage})`
                  }}
                >
                  <span className="text-5xl mb-4 animate-[float_3s_ease-in-out_infinite]">{service.emoji}</span>
                  <p className="text-2xl font-bold text-center mt-2">{service.title}</p>
                </div>
                
                {/* Card Back */}
                <div
                  className="absolute inset-0 p-8 flex flex-col justify-center items-center rounded-3xl bg-cover bg-center bg-no-repeat shadow-xl text-white [backface-visibility:hidden] [transform:rotateY(180deg)] border-2 border-white/10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${service.bgImage})`
                  }}
                >
                  <p className="text-base leading-relaxed text-white/95 text-center font-normal">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link
          to="/Services"
          className="mt-12 inline-block px-10 py-4 font-semibold text-lg text-white rounded-full transition-all duration-300 transform
          bg-gradient-to-r from-[#667eea] to-[#764ba2]
          shadow-lg hover:shadow-2xl hover:scale-105 active:scale-100"
        >
          Get Services →
        </Link>
      </div>
    </div>
  );
};

export default ServicesFlipCardsWithBackground;
