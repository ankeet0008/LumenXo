// About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-blue-50 py-10">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="mb-8">
          We at AIONINNO Technologies Pvt Ltd provide customized and optimized 
          web solutions. Our Websites Design Services have proven their 
          utmost efficiency, quality and productivity to meet your needs. 
          We have a team of skilled Web Designers to manage your business needs.
        </p>

        {/* Company Title */}
        <h3 className="text-xl font-semibold mb-2">Leading Software Company - AIONINNO Technologies Pvt Ltd</h3>
        <p className="mb-8">
          AIONINNO Technologies is a leading software company in Bhubaneswar, 
          India. We provide solutions in areas like web design, SEO, mobile 
          app development, and custom software development. Our dedicated 
          team explores innovative ideas with passion.
        </p>

        {/* As Being A Software Company Section */}
        <h3 className="text-xl font-semibold mb-2">As Being An Software Company</h3>
        <p className="mb-8">
          A software program which majorly enhances the way businesses perform. 
          In this digital age, companies require tailored solutions. 
          AIONINNO Technologies specializes in such needs.
        </p>

        {/* Support Section */}
        <h3 className="text-xl font-semibold mb-2">We Can Help You Succeed</h3>
        <p className="mb-8">
          AIONINNO Technologies Pvt Ltd is the leading software company in 
          Bhubaneswar to assist the clientele with robust solutions to enhance 
          their businesses.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-5 shadow rounded-lg">
            <h4 className="font-bold mb-2">Excellent Support</h4>
            <p>We deliver excellent solutions to your customers.</p>
          </div>
          <div className="bg-white p-5 shadow rounded-lg">
            <h4 className="font-bold mb-2">Awesome Team</h4>
            <p>Privileged to work with the most passionate team in my business.</p>
          </div>
          <div className="bg-white p-5 shadow rounded-lg">
            <h4 className="font-bold mb-2">Faster Performance</h4>
            <p>Team members can deliver work at peak performance levels.</p>
          </div>
          <div className="bg-white p-5 shadow rounded-lg">
            <h4 className="font-bold mb-2">24/7 Hours Support</h4>
            <p>Team members can give 24/7 support for your better experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
