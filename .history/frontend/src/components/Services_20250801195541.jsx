import React from "react";
import {
  FaMobileAlt,
  FaShoppingCart,
  FaDatabase,
  FaCog,
  FaLifeRing,
  FaThumbsUp,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt size={40} className="text-blue-600" />,
    title: "Responsive Design",
    description:
      "Responsive website design has become a necessity! The growth of Smartphones has given the internet users a...",
  },
  {
    icon: <FaShoppingCart size={40} className="text-blue-600" />,
    title: "eCommerce Solutions",
    description:
      "Reliable and secure eCommerce website design solutions. Let us work with you to create a valuable digital...",
  },
  {
    icon: <FaDatabase size={40} className="text-blue-600" />,
    title: "Web Applications",
    description:
      "We have the team of experts to design and set up the simplest to the most innovative and bespoke web based...",
  },
  {
    icon: <FaCog size={40} className="text-blue-600" />,
    title: "Digital Branding",
    description:
      "Now the digital world changes rapidly, with new opportunities and threats. TechTSS Digital Branding Services...",
  },
  {
    icon: <FaLifeRing size={40} className="text-blue-600" />,
    title: "Support & Maintenance",
    description:
      "Get efficient support and maintenance service. TechTSS Keeps your website Competitive & Stable with desired changes...",
  },
  {
    icon: <FaThumbsUp size={40} className="text-blue-600" />,
    title: "Social Media Marketing",
    description:
      "Social Media Optimization services are considered as a valuable part of online marketing nowadays and it includes...",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-4">Services We Offer</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        We are determined to help you reach your business goals. TechTSS is a creative
        digital agency, focused on linking your potential customers with your products/services
        through innovative digital solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border rounded-xl p-6 hover:shadow-md transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{service.description}</p>
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline text-sm"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
