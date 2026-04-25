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

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Left Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src='https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center' 
              alt="Technology Solutions"
              className="w-full h-32 object-cover rounded-md"
            />
            <h4 className="text-sm font-semibold text-gray-800 mt-3">Enterprise Solutions</h4>
          </div>

          {/* Top Right Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <img 
              src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop&crop=center' 
              alt="Digital Innovation"
              className="w-full h-24 object-cover rounded-md mb-3"
            />
            <span className="bg-black text-white text-xs px-2 py-1 rounded w-fit mb-2">INNOVATION</span>
            <p className="text-sm text-gray-700 mb-3">Smart Architecture | Agile Systems</p>
            <button className="text-[#6d28d9] font-semibold text-sm border border-[#6d28d9] px-3 py-1 rounded hover:bg-[#6d28d9] hover:text-white transition-colors">
              Faster GTM | Digital Edge
            </button>
          </div>

          {/* Bottom Full Width Card */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
           
            <div className="h-32 flex justify-center items-center bg-gray-50 rounded-md overflow-hidden">
              <img
                src="https://img.freepik.com/free-vector/business-stock-market-background-with-shiny-growth-arrow_1017-53572.jpg"
                alt="Growth Analytics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Experience Card */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-2 flex gap-6 items-center">
            <div className="bg-[#6d28d9] text-white text-xs font-bold rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
              <div className="text-center">
                <p className="text-lg">25</p>
                <p className="text-[10px] font-normal">years</p>
              </div>
            </div>
            
            <div className="flex-1">
              <img 
                src='https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=150&fit=crop&crop=center' 
                alt="Technology Infrastructure"
                className="w-full h-16 object-cover rounded-md mb-3"
              />
              <div className="flex gap-6 mt-3">
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
