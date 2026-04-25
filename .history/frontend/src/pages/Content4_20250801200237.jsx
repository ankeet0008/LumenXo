import React from "react";
import {
  Smartphone,
  ShoppingCart,
  Server,
  BadgePercent,
  Wrench,
  ThumbsUp,
} from "lucide-react";

const services = [
  {
    icon: <Smartphone className="w-10 h-10 text-blue-600" />,
    title: "Responsive Design",
    desc: "Responsive website design has become a necessity! The growth of Smartphones have given the internet users a ..",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-blue-600" />,
    title: "eCommerce Solutions",
    desc: "Reliable and secure eCommerce website design solutions. Let us work with you to create a valuable digital..",
  },
  {
    icon: <Server className="w-10 h-10 text-blue-600" />,
    title: "Web Applications",
    desc: "We have the team of experts to design and set up the simplest to the most innovative and bespoke web based..",
  },
  {
    icon: <BadgePercent className="w-10 h-10 text-blue-600" />,
    title: "Digital Branding",
    desc: "Now the digital world changes rapidly, with new opportunities and threats. TechTSS Digital Branding Services..",
  },
  {
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    title: "Support & Maintenance",
    desc: "Get efficient support and maintenance service. TechTSS keeps your website Competitive & Stable with desired changes..",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-blue-600" />,
    title: "Social Media Marketing",
    desc: "Social Media Optimization services are considered as a valuable part of online marketing nowadays and it includes..",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#f8f8f8] text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Services We Offer</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 mb-12">
          We are determined to help you reach your business goals. TechTSS is a
          creative digital agency, focused on linking your potential customers
          with your products/services through innovative digital solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-sm rounded-md px-6 py-8 text-center hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
