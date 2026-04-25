import React from "react";
import {
  ShieldCheck,
  Rocket,
  Users,
  Code,
} from "lucide-react"; // Icon imports

const AboutCompany = () => {
  return (
    <div">
      {/* 1. About Company */}
      <section
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-cover bg-center bg-no-repeat text-white relative"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/02/95/46/25/360_F_295462565_ii654Qjx8mQCU8wz2WVBLtyE53Oh40vd.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div className="md:w-1/2 z-10 hidden md:block">
          <img
            src="https://t4.ftcdn.net/jpg/02/95/46/25/360_F_295462565_ii654Qjx8mQCU8wz2WVBLtyE53Oh40vd.jpg"
            alt="About"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 z-10 text-white md:pl-10">
          <h2 className="text-4xl font-bold text-indigo-300 mb-4">
            About Company
          </h2>
          <p className="text-lg mb-4">
            <strong>Empowering Businesses with Innovative Software Solutions</strong>
            <br />
            LumenXo Software Pvt. Ltd. is a forward-thinking IT company committed to delivering powerful and scalable digital solutions that drive business success.
          </p>
          <p className="text-lg mb-4">
            <strong>Seamless Business Operations:</strong> We build solutions that simplify and automate business operations—enabling companies to enhance productivity, reduce complexity, and focus on growth.
          </p>
          <p className="text-lg">
            <strong>Effortless Integration:</strong> Our technologies are designed for smooth and secure integration into your existing systems, ensuring minimal disruption and maximum efficiency.
          </p>
        </div>
      </section>

      {/* 2. Mission */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to empower startups, small businesses, and enterprises with cutting-edge, cost-effective digital solutions that accelerate growth, boost efficiency, and create lasting impact.
          </p>
          <p className="text-lg">
            We are committed to turning visionary ideas into innovative, user-friendly software products that exceed expectations and drive real-world results.
          </p>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327_1280.jpg"
            alt="Mission"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* 3. Vision */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gray-200">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/10/03/29/laptop-2618717_1280.jpg"
            alt="Vision"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Our Vision</h2>
          <p className="text-lg mb-4">
            To become a global leader in the digital transformation space by continuously delivering exceptional technology solutions that empower businesses and enrich lives.
          </p>
          <p className="text-lg">
            We envision a world where technology and creativity come together to build a smarter, more connected future.
          </p>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Why Choose Us</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Client-Centric Approach</li>
            <li>Experienced Team of Professionals</li>
            <li>Agile Development Methodology</li>
            <li>Transparent Communication</li>
            <li>End-to-End Service Delivery</li>
          </ul>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2016/12/28/09/36/meeting-1936111_1280.jpg"
            alt="Why Choose Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* 5. Core Strengths - 4 cards with icons */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-4xl font-bold text-indigo-600 mb-10 text-center">
          Our Core Strengths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
            <ShieldCheck className="w-10 h-10 mx-auto text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reliability</h3>
            <p className="text-gray-700">
              We ensure stable, long-term support and scalable systems for your business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
            <Rocket className="w-10 h-10 mx-auto text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-700">
              We build modern, future-ready products using latest technologies and frameworks.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
            <Users className="w-10 h-10 mx-auto text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-700">
              We partner with clients to understand needs and co-create tailored solutions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
            <Code className="w-10 h-10 mx-auto text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
            <p className="text-gray-700">
              We bring deep technical knowledge in web, mobile, cloud, and AI domains.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCompany;
