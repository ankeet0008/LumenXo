import React from 'react';
import social_media from '../components/social_media'; // Adjust the import path as necessary
export default function AboutUs() {
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto py-16 px-6">
      {/* Image Section */}
      <div className="sm:w-1/2 p-10">
        <div className="text-center">
          <img
            src="https://i.imgur.com/WbQnbas.png"
            alt="About Us"
            className="mx-auto"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="sm:w-1/2 p-5 space-y-5">
        <div>
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase tracking-wide text-sm">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            Empowering Businesses with <span className="text-indigo-600">Innovative Software Solutions</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            <strong>LumenXo Software Pvt. Ltd.</strong> is a forward-thinking IT company committed to delivering powerful and scalable digital solutions that drive business success. With a passionate team of developers, designers, and strategists, we specialize in crafting tailored web, mobile, and software applications that help organizations thrive in a competitive digital landscape.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            <strong>Seamless Business Operations:</strong> At LumenXo, we build solutions that simplify and automate business operations—enabling companies to enhance productivity, reduce complexity, and focus on growth.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            <strong>Effortless Integration:</strong> Our technologies are designed for smooth and secure integration into your existing systems, ensuring minimal disruption and maximum efficiency.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-indigo-600 mt-6 mb-2">Who We Are</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            LumenXo Software Pvt. Ltd. is a dynamic and innovative software company, officially incorporated on <strong>April 16, 2025</strong>. With a strong focus on delivering high-quality IT solutions, LumenXo has quickly emerged as a trusted name in the industry.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            We specialize in a wide range of digital services, including web development, mobile app development, custom software solutions, and automation tools. Our commitment to innovation, excellence, and client satisfaction drives everything we do—making us a reliable partner for businesses looking to grow and succeed in today’s digital era.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-indigo-600 mt-6 mb-2">Our Mission</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            At LumenXo Software Pvt. Ltd., our mission is to deliver innovative, efficient, and scalable software solutions that empower businesses to succeed in the digital era. We are equally dedicated to nurturing young talent by providing high-quality training and internship opportunities that prepare students for successful careers in the tech industry.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-indigo-600 mt-6 mb-2">Our Vision</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            We envision becoming a leading software company recognized for driving digital transformation and building future-ready solutions. Through our commitment to client satisfaction and youth empowerment, LumenXo aims to be a beacon of innovation, excellence, and opportunity—both for businesses and aspiring professionals.
          </p>
        </div>
      </div>
      <social_media/>
    </div>
  );
}
