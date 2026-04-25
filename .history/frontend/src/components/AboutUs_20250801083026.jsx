import React from "react";

const LumenxoCompanyPage = () => {
  return (
    <div className="font-sans">
      {/* Section 1: About Us with Image */}
      <section className="bg-[#F3F9FF] py-16 px-4 md:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg">
            We at 'AIONINNO Technologies Pvt Ltd promises to deliver customized and optimized
            cost-effective Website Design Services to our clients. Our team assures to efficiency,
            quality and speed to any type of project. We have a team of skilled Web Designer to
            manage your business need.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png" alt="About Us" className="w-full h-auto" />
        </div>
      </section>

      {/* Section 2: About Us */}
      <section className="py-16 bg-white text-center px-4 md:px-32">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
        <p className="text-gray-600 text-lg">
          LumenXo Software Pvt. Ltd. is a leading software company based in Balasore, Odisha. Our mission is to empower businesses with cutting-edge digital solutions and a passionate team committed to excellence.
        </p>
      </section>

      {/* Section 3: Leading Software Company */}
      <section className="py-16 bg-gray-100 flex flex-col lg:flex-row items-center px-4 md:px-20 gap-12">
        <div className="lg:w-1/2">
          <img src="/images/office1.jpg" alt="Office View" className="rounded-xl shadow-xl w-full" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">A Leading Software Company</h2>
          <p className="text-gray-600 text-lg">
            With a focus on innovation and collaboration, we provide scalable software solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Section 4: Software Company Description */}
      <section className="py-16 bg-white flex flex-col-reverse lg:flex-row items-center px-4 md:px-20 gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">As Being a Software Company</h2>
          <p className="text-gray-600 text-lg">
            We aim to build applications that make businesses smarter. From custom software development to robust cloud integrations, we help organizations navigate the digital world.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="/images/office2.jpg" alt="Team Working" className="rounded-xl shadow-xl w-full" />
        </div>
      </section>

      {/* Section 5: We Can Help You Succeed */}
      <section className="py-16 bg-gray-50 flex flex-col lg:flex-row items-center px-4 md:px-20 gap-12">
        <div className="lg:w-1/2">
          <img src="/images/help-success.jpg" alt="Support and Growth" className="rounded-xl shadow-xl w-full" />
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

      {/* Section 6: Info Cards */}
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

