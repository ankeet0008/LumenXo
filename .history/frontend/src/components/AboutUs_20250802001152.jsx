import React from "react";

const LumenxoCompanyPage = () => {
  return (
    <div className="font-sans">

      {/* Updated About Us Section */}
      <section className="py-16 px-4 md:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg mb-4">
            <strong>Empowering Businesses with Innovative Software Solutions</strong><br />
            LumenXo Software Pvt. Ltd. is a forward-thinking IT company committed to delivering powerful and scalable digital solutions that drive business success. With a passionate team of developers, designers, and strategists, we specialize in crafting tailored web, mobile, and software applications that help organizations thrive in a competitive digital landscape.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            <strong>Seamless Business Operations:</strong> We build solutions that simplify and automate business operations—enabling companies to enhance productivity, reduce complexity, and focus on growth.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            <strong>Effortless Integration:</strong> Our technologies are designed for smooth and secure integration into your existing systems, ensuring minimal disruption and maximum efficiency.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            <strong>Who We Are:</strong><br />
            LumenXo Software Pvt. Ltd. is a dynamic and innovative software company, officially incorporated on April 16, 2025. With a strong focus on delivering high-quality IT solutions, LumenXo has quickly emerged as a trusted name in the industry.
            We specialize in a wide range of digital services, including web development, mobile app development, custom software solutions, and automation tools. Our commitment to innovation, excellence, and client satisfaction drives everything we do—making us a reliable partner for businesses looking to grow and succeed in today’s digital era.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            <strong>Our Mission:</strong><br />
            At LumenXo Software Pvt. Ltd., our mission is to deliver innovative, efficient, and scalable software solutions that empower businesses to succeed in the digital era. We are equally dedicated to nurturing young talent by providing high-quality training and internship opportunities that prepare students for successful careers in the tech industry.
          </p>
          <p className="text-gray-600 text-lg">
            <strong>Our Vision:</strong><br />
            We envision becoming a leading software company recognized for driving digital transformation and building future-ready solutions. Through our commitment to client satisfaction and youth empowerment, LumenXo aims to be a beacon of innovation, excellence, and opportunity—both for businesses and aspiring professionals.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png"
            alt="About Us"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Existing Sections - untouched below */}

      <section className="py-16  flex flex-col lg:flex-row items-center px-4 md:px-20 gap-12">
        <div className="lg:w-1/2">
          <img src="https://wallpaperaccess.com/full/4391723.jpg" alt="Office View" className="rounded-xl shadow-xl w-full" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">A Leading Software Company</h2>
          <p className="text-gray-600 text-lg">
            With a focus on innovation and collaboration, we provide scalable software solutions tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white flex flex-col-reverse lg:flex-row items-center px-4 md:px-20 gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">As Being a Software Company</h2>
          <p className="text-gray-600 text-lg">
            We aim to build applications that make businesses smarter. From custom software development to robust cloud integrations, we help organizations navigate the digital world.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="https://wallpaperaccess.com/full/4391665.jpg" alt="Team Working" className="rounded-xl shadow-xl w-full" />
        </div>
      </section>

      <section className="py-16 bg-gray-50 flex flex-col lg:flex-row items-center px-4 md:px-20 gap-12">
        <div className="lg:w-1/2">
          <img src="https://png.pngtree.com/background/20220725/original/pngtree-business-analysis-and-communication-contemporary-marketing-and-software-for-development-picture-image_1759072.jpg" alt="Support and Growth" className="rounded-xl shadow-xl w-full" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">We Can Help You Succeed</h2>
          <p className="text-gray-600 text-lg mb-4">
            Whether you're a startup or an enterprise, we ensure a smooth digital transformation. Our services include product development, consulting, and technical support.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Custom Development</li>
            <li>End-to-End Support</li>
            <li>Result-Driven Strategies</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <i className="fas fa-headset text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Great Customer Support</h3>
            <p className="text-gray-600">We deliver excellent support to our clients.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <i className="fas fa-users text-4xl text-green-600 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Excellent Team</h3>
            <p className="text-gray-600">We have an excellent team of experts to help you.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <i className="fas fa-laptop-code text-4xl text-yellow-600 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Latest Technologies</h3>
            <p className="text-gray-600">We work with the latest technologies for better results.</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-lg shadow-md">
            <i className="fas fa-tags text-4xl text-pink-600 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">Get premium services at affordable prices.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LumenxoCompanyPage;
