import React from "react";

const CompanyPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* About Us */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">About Us</h2>
        <p className="mb-8">
          We at <strong>VICKINDIA Technologies Pvt Ltd</strong> provide cost-effective customized and optimized web-centric Website Design Services to our clients. Our team ensures efficiency, quality, and precise results for all project sizes. With a team of skilled Web Designers, we manage your business needs.
        </p>

        {/* Image Placeholder */}
        <div className="w-full h-60 bg-gray-200 rounded mb-12">Image Placeholder</div>

        <h3 className="text-2xl font-semibold mb-2 text-blue-800">
          Leading Software Company – <span className="text-sky-600">AIOINNO Technologies Pvt Ltd</span>
        </h3>
        <p className="mb-8">
          AIOINNO Technologies is a Leading Software company in Bhubaneswar, India. We specialize in Software development, Web design, SEO, Mobile App development, Digital marketing, and UI/UX designing. From web designing to SEO, we offer services for startups and growing businesses alike.
        </p>

        {/* Image Placeholder */}
        <div className="w-full h-60 bg-gray-200 rounded mb-12">Image Placeholder</div>

        <h3 className="text-xl font-semibold mb-2 text-blue-800">As Being An Software Company</h3>
        <p className="mb-4">
          A software program under major mechanisms contains a huge assortment of methods, design aspects, and program functionality. With diverse programming technology, distribution, and operation mechanisms, we develop cutting-edge applications. AIOINNO Technologies Pvt Ltd has a team of experts delivering top-tier software development services in Bhubaneswar (Odisha).
        </p>
        <p className="mb-8">
          All the different web pages will be stacked into one single website, designed in a user-friendly structure. The interface will be clean and simple, containing limited menu items, headings, and intuitive page transitions. The website includes a content-rich dashboard using React.js and Bootstrap. The web app includes a contact and query module for dynamic messaging and easy access. This system is made mobile-optimized using CSS and JavaScript to make the website load faster.
        </p>

        {/* Image Placeholder */}
        <div className="w-full h-60 bg-gray-200 rounded mb-12">Image Placeholder</div>

        <h2 className="text-2xl font-bold mb-4 text-blue-800">We Can Help You <span className="text-sky-600">Succeed</span></h2>
        <p className="mb-8">
          AIOINNO Technologies Pvt Ltd is the Leading Software Company in Bhubaneswar to attain the maximum client desires to enhance their business at the same time. We use web-based tools to simplify information systems and ensure real-time data flow for business processes. From basic services like website design to SEO and graphics, we script the idea to "Represent Your Goal" into a firm developing product.
        </p>

        {/* Image Placeholder */}
        <div className="w-full h-60 bg-gray-200 rounded mb-12">Image Placeholder</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="p-4 shadow rounded bg-gray-100 text-center">
            <h4 className="font-semibold mb-2">Excellent Support</h4>
            <p className="text-sm">We deliver excellent support to your customers.</p>
          </div>
          <div className="p-4 shadow rounded bg-gray-100 text-center">
            <h4 className="font-semibold mb-2">Awesome Team</h4>
            <p className="text-sm">Privileged to work with the most awesome team making IT part of your business.</p>
          </div>
          <div className="p-4 shadow rounded bg-gray-100 text-center">
            <h4 className="font-semibold mb-2">Faster Performance</h4>
            <p className="text-sm">Team members are best and work at faster performance across the globe.</p>
          </div>
          <div className="p-4 shadow rounded bg-gray-100 text-center">
            <h4 className="font-semibold mb-2">24/7 Hours Support</h4>
            <p className="text-sm">Team members can give you 24/7 hours support to ensure better experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
