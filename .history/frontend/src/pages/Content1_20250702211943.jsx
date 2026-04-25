import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-[#f4f8ff] py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div>
          <p className="text-[#4f46e5] font-semibold mb-2">Engineering Excellence & Strategic Consulting</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Crafting Scalable, Secure & <br /> Intelligent Software Solutions
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            We engineer high-performing, AI-powered, cloud-native products—designed for rapid market launch,
            data-driven intelligence, and exceptional user experiences.
          </p>
          <button className="bg-[#0056ff] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-[#0046d4]">
            Talk to Our Experts
            <span className="text-xl">&rarr;</span>
          </button>
        </div>

        {/* Right Section - Single Image */}
        <div className="flex justify-center items-center">
          <img
            src="" // adjust path based on public folder location
            alt="Illustration"
            className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
