import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {/* 1. Great Customer Support */}
          <div className="flex flex-col items-center">
            <i className="fas fa-headset text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Great Customer Support</h3>
            <p className="text-sm text-gray-600">
              We deliver excellent support to our clients.
            </p>
          </div>

          {/* 2. Excellent Team */}
          <div className="flex flex-col items-center">
            <i className="fas fa-users text-4xl text-green-600 mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Excellent Team</h3>
            <p className="text-sm text-gray-600">
              We have an excellent team of experts to help you.
            </p>
          </div>

          {/* 3. Latest Technologies */}
          <div className="flex flex-col items-center">
            <i className="fas fa-laptop-code text-4xl text-indigo-600 mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Latest Technologies</h3>
            <p className="text-sm text-gray-600">
              We work with the latest technologies for better results.
            </p>
          </div>

          {/* 4. Affordable Pricing */}
          <div className="flex flex-col items-center">
            <i className="fas fa-tags text-4xl text-pink-600 mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-sm text-gray-600">
              Get premium services at affordable prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
