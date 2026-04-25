import React from "react";

const LumenxoCompanyPage = () => {
  return (
    <div className="font-sans">

      <section className="relative wifull h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png')` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold text-center px-4">
            Welcome to LumenXo Software Pvt. Ltd.
          </h1>
        </div>
      </section>

  
      <section className="py-16 bg-white text-center px-4 md:px-32">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
        <p className="text-gray-600 text-lg">
          LumenXo Software Pvt. Ltd. is a leading software company based in Balasore, Odisha. Our mission is to empower businesses with cutting-edge digital solutions and a passionate team committed to excellence.
        </p>
      </section>

 
      <section className="py-16 bg-gray-100 flex flex-col lg:flex-row items-center px-4 md:px-20 gap-12">
        <div className="lg:w-1/2">
          <img src="https://cdn.pixabay.com/photo/2022/07/08/05/38/freelance-work-7308505_1280.png" alt="Office View" className="rounded-xl shadow-xl w-full" />
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
          <img src="https://www.designcluster.co.in/wp-content/uploads/2020/10/IOT-Development-1.jpg" alt="Team Working" className="rounded-xl shadow-xl w-full" />
        </div>
      </section>

    
      <section className="py-16 bg-gray-50 flex flex-col lg:flex-row items-center px-4 md:px-20 gap-12">
        <div className="lg:w-1/2">
          <img src="https://tse3.mm.bing.net/th/id/OIP.BypP2yDpDqsGEPfcbYER4gHaEh?w=900&h=550&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Support and Growth" className="rounded-xl shadow-xl w-full" />
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
            <img src="/icons/support.png" alt="Support" className="h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellent Support</h3>
            <p className="text-gray-600">Always available to help our clients grow.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <img src="/icons/team.png" alt="Team" className="h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Awesome Team</h3>
            <p className="text-gray-600">Skilled professionals dedicated to your success.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <img src="/icons/performance.png" alt="Performance" className="h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Faster Performance</h3>
            <p className="text-gray-600">Solutions that optimize speed and productivity.</p>
          </div>
          <div className="bg-red-100 p-6 rounded-lg shadow-md">
            <img src="/icons/247.png" alt="24/7" className="h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">We’re with you around the clock.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LumenxoCompanyPage;
