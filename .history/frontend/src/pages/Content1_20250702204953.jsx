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
              src='https://src.n-ix.com/uploads/2022/04/27/45e44a0e-36eb-4476-baf4-9049bd06f3fa.png' 
              alt="Technology Solutions"
              className="w-full h-32 object-cover rounded-md"
            />
            <h4 className="text-sm font-semibold text-gray-800 mt-3">Enterprise Solutions</h4>
          </div>

          {/* Top Right Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <img 
              src='https://www.aeccglobal.my/images/2022/11/08/study-information--technology-abroad.webp' 
              alt="Information Technology"
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
            <h4 className="font-semibold text-gray-800 mb-4">Built for Growth</h4>
            <div className="h-32 flex justify-center items-center bg-gray-50 rounded-md">
              <img
                src="https://img.freepik.com/free-vector/business-stock-market-background-with-shiny-growth-arrow_1017-53572.jpg"
                alt="Performance Graph"
                className="w-full h-full object-cover rounded-md"
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
                src='https://miro.medium.com/v2/resize:fit:1024/1*9OS-8JDVk3Drwmw9Ygtchw.png' 
                alt="Technology Stack"
                className="w-full h-16 object-contain mb-3"
              />
              <div className="flex gap-6 mt-3">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600 text-center mt-2 leading-tight">Cloud-Native<br />Secure & Scalable</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
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
