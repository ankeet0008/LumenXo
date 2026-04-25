import React from 'react';

export default function WeWorkWith() {
  return (
    <section className="py-16 bg-white px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            We Work With
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Our dedicated development team leverages deep domain expertise and advanced technologies
            to build scalable and secure solutions tailored to your business needs.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base space-y-3">
            <li>Startups looking to develop MVPs quickly and affordably</li>
            <li>Enterprises needing scalable digital transformation solutions</li>
            <li>ISVs seeking dedicated software development partners</li>
            <li>Agencies that want to expand their technical capabilities</li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://www.valuecoders.com/wp-content/uploads/2025/02/work-01.webp"
            alt="We Work With"
            className="rounded-lg w-full max-w-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
