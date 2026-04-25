import React from 'react';
import heroImage from '../Assets/download.svg'; 

export default function HeroSection() {
  return (
    <section className="py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Crafting Scalable, Secure & <br /> Intelligent Software Solutions
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            We engineer high-performing, AI-powered, cloud-native products—designed for rapid market launch,
            data-driven intelligence, and exceptional user experiences.
          </p>
          <button onClick={() => window.location.href='/ContactUs'} className="bg-[#0056ff] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-[#0046d4]">
            Talk to Our Experts
            <span className="text-xl">&rarr;</span>
          </button>
        </div>

      
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
