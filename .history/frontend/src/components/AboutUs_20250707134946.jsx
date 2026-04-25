import React from 'react';
import SocialMedia from '../components/social_media'; // Adjust path as needed

export default function AboutUs() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1677228571702-36ad21bb8180?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
        <div className="space-y-8">
          <div>
            <span className="text-indigo-400 border-b-2 border-indigo-500 uppercase tracking-wide text-sm">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-5xl">
              Empowering Businesses with{' '}
              <span className="text-indigo-500">Innovative Software Solutions</span>
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>LumenXo Software Pvt. Ltd.</strong> is a forward-thinking IT company committed to delivering powerful and scalable digital solutions that drive business success. With a passionate team of developers, designers, and strategists, we specialize in crafting tailored web, mobile, and software applications that help organizations thrive in a competitive digital landscape.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Seamless Business Operations:</strong> We build solutions that simplify and automate business operations—enhancing productivity, reducing complexity, and focusing on growth.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Effortless Integration:</strong> Our technologies integrate smoothly and securely into your systems, ensuring maximum efficiency with minimal disruption.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-indigo-400 mt-6 mb-2">Who We Are</h3>
            <p className="text-lg leading-relaxed">
              Officially incorporated on <strong>April 16, 2025</strong>, LumenXo Software Pvt. Ltd. specializes in web development, mobile app development, custom software, and automation tools. We are driven by innovation and a deep commitment to client satisfaction.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-indigo-400 mt-6 mb-2">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              Our mission is to deliver innovative, efficient, and scalable solutions to empower businesses—and nurture future tech leaders through quality training and internships.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-indigo-400 mt-6 mb-2">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              We aim to be a leading software company recognized for driving digital transformation and empowering youth. LumenXo is a beacon of innovation and opportunity.
            </p>
          </div>

          {/* Social media icons */}
          <div className="pt-8">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}
