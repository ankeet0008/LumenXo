import React from "react";
import {
  Target,
  Eye,
  Lightbulb,
  Users,
  Brain,
  ShieldCheck,
  Gem,
  Globe,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex flex-col">

      {/* ABOUT SECTION */}
      <section
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-cover bg-center bg-no-repeat text-white relative"
        style={{ backgroundImage: `url('https://th.bing.com/th/id/R.21e1789c1f92ff51e1ff6c5bec5795c0?rik=i52jsepjEH4RaA&riu=http%3a%2f%2fwonderpillars.com%2fimages%2fslider101.png&ehk=1HLGLy3sDVwpwJkA62s4MPLkgZ23EYw9OcPvvTF4Lms%3d&risl=&pid=ImgRaw&r=0')` }}
      >
        <div className="absolute inset-0   z-0" />
        <div className="md:w-1/2 z-10">
          <h2 className="text-4xl font-bold text-indigo-800 mb-4">About Company</h2>
          <p className="text-lg mb-4">
            <strong>Empowering Businesses with Innovative Software Solutions</strong><br />
            LumenXo Software Pvt. Ltd. is a forward-thinking IT company committed to delivering powerful and scalable digital solutions that drive business success. With a passionate team of developers, designers, and strategists, we specialize in crafting tailored web, mobile, and software applications that help organizations thrive in a competitive digital landscape.
          </p>
          <p className="text-lg mb-4">
            <strong>Seamless Business Operations:</strong> We build solutions that simplify and automate business operations—enabling companies to enhance productivity, reduce complexity, and focus on growth.
          </p>
          <p className="text-lg">
            <strong>Effortless Integration:</strong> Our technologies are designed for smooth and secure integration into your existing systems, ensuring minimal disruption and maximum efficiency.
          </p>
        </div>
        <div className="md:w-1/2 z-10 hidden md:block">
       
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-center gap-10 px-6 md:px-20 py-16">
        <img
          src="https://aioninnotech.com/aionpanel/uploads/we_can/1636954539.png"
          alt="Mission"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-800" /> Our Mission
          </h2>
          <p className="text-lg">
            To be the catalyst for digital transformation by delivering cutting-edge software solutions that exceed client expectations and empower businesses to lead in their industries.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 py-16 ">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.p9F0Ju2MIvYD5oDFcTjFeQHaEC?w=1024&h=559&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Vision"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-indigo-800" /> Our Vision
          </h2>
          <p className="text-lg">
            To become a globally recognized software company known for innovation, excellence, and a client-centric approach that drives business growth and digital empowerment.
          </p>
        </div>
      </section>

      
      <section className="flex flex-col md:flex-row-reverse items-center gap-10 px-6 md:px-20 py-16">
        <img
          src="https://aioninnotech.com/img/abtg1.png"
          alt="Why Choose Us"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-indigo-800" /> Why Choose Us?
          </h2>
          <p className="text-lg mb-2">
            <strong>Client-Centric Approach:</strong> We believe in building long-term partnerships through trust, transparency, and exceptional service.
          </p>
          <p className="text-lg mb-2">
            <strong>Skilled Team:</strong> Our team is our greatest asset—comprising experts in UI/UX, development, DevOps, and project management.
          </p>
          <p className="text-lg">
            <strong>Agile & Adaptive:</strong> We follow agile methodologies to ensure rapid delivery, flexibility, and continuous improvement.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 bg-indigo-50">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">Our Core Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
            <Users className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
            <p className="text-gray-600 text-sm">Collaboration drives our success. We work as one unit with clients and internally to build powerful results.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
            <Brain className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">We thrive on solving complex problems with smart, scalable, and cutting-edge solutions tailored to client needs.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
            <ShieldCheck className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trust</h3>
            <p className="text-gray-600 text-sm">Integrity is at the heart of everything we do—ensuring secure and reliable software delivery every time.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
            <Gem className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600 text-sm">We deliver top-tier solutions that meet global standards, ensuring performance, usability, and reliability.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
