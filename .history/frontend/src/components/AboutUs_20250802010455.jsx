import React from "react";
import {
  Brain,
  ShieldCheck,
  Puzzle,
  Users,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex flex-col">

      {/* ABOUT SECTION */}
      <section className="flex flex-col md:flex-row h-screen">
  
      <div className="md:w-1/2 w-full h-full">
  <div
    className="w-full h-full bg-center bg-cover"
    style={{
      backgroundImage:
        "url('https://t4.ftcdn.net/jpg/02/95/46/25/360_F_295462565_ii654Qjx8mQCU8wz2WVBLtyE53Oh40vd.jpg')",
    }}
  />
</div>

        {/* Right Content */}
        <div className="md:w-1/2  text-black p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-indigo-300 mb-4">About Company</h2>
          <p className="text-lg mb-4">
            <strong>Empowering Businesses with Innovative Software Solutions</strong><br />
            LumenXo Software Pvt. Ltd. delivers powerful and scalable digital solutions
            that help businesses grow. We specialize in web, mobile, and software apps
            tailored to our clients’ needs.
          </p>
          <p className="text-lg mb-4">
            <strong>Seamless Business Operations:</strong> Automate and simplify
            workflows to enhance productivity.
          </p>
          <p className="text-lg">
            <strong>Effortless Integration:</strong> Our tools integrate smoothly into
            existing systems for minimal disruption.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="flex flex-col md:flex-row-reverse items-center py-16 bg-white">
        {/* Right Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://img.freepik.com/free-vector/business-vision-concept-illustration_114360-5175.jpg"
            alt="Mission"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Left Content */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To empower businesses with cutting-edge technology that enhances
            productivity, efficiency, and growth. We are dedicated to creating digital
            tools that make a difference.
          </p>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="flex flex-col md:flex-row items-center py-16 bg-gray-100">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7485.jpg"
            alt="Vision"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Content */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            To become a globally recognized software company, known for innovation,
            integrity, and impact. We envision a future where businesses rely on our
            tools to lead their industries.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="flex flex-col md:flex-row-reverse items-center py-16 bg-white">
        {/* Right Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://img.freepik.com/free-vector/why-choose-us-concept-illustration_114360-8090.jpg"
            alt="Why Choose Us"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Left Content */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Why Choose Us</h2>
          <p className="text-gray-700 text-lg">
            We prioritize client satisfaction, product quality, and continuous
            innovation. Our agile team ensures that every solution we deliver is
            user-focused and future-ready.
          </p>
        </div>
      </section>

      {/* CORE STRENGTHS SECTION */}
      <section className="bg-gray-900 text-white py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-300">Our Core Strengths</h2>
          <p className="text-lg text-gray-300 mt-2">What makes us stand out</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-20">
          {/* Innovation */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <Brain className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-300 text-sm">We think ahead and build next-gen solutions that lead the market.</p>
          </div>
          {/* Security */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <ShieldCheck className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Security</h3>
            <p className="text-gray-300 text-sm">Your data is protected with industry-grade security protocols.</p>
          </div>
          {/* Flexibility */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <Puzzle className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Flexibility</h3>
            <p className="text-gray-300 text-sm">Custom-tailored solutions that fit your unique business needs.</p>
          </div>
          {/* Collaboration */}
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <Users className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-300 text-sm">We work closely with clients to ensure a seamless development process.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
