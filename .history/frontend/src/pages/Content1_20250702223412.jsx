import React from 'react';

export default function HeroSection() {
  return (
    <section className=" py-16 px-4 md:px-20">
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

        {/* Right Section */}
              assName="flex gap-6 mt-3">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=100&h=100&fit=crop&crop=center"
                      alt="Cloud"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-gray-600 text-center mt-2 leading-tight">Cloud-Native<br />Secure & Scalable</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center"
                      alt="AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-gray-600 text-center mt-2 leading-tight">AI & Data Intelligence<br />Actionable Insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
