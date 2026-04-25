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
    desc: "Responsive website design has become a necessity! The growth of Smartphones has given internet users a unique edge, so your business site must be mobile-ready.",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-green-600" />,
    title: "E-commerce Solutions",
    desc: "Start selling your products online with powerful, scalable, and secure e-commerce platforms tailored for your business growth.",
  },
  {
    icon: <Server className="w-10 h-10 text-purple-600" />,
    title: "Hosting Services",
    desc: "We provide reliable and secure hosting services to ensure your website is always online and performing optimally.",
  },
  {
    icon: <BadgePercent className="w-10 h-10 text-yellow-600" />,
    title: "SEO & Marketing",
    desc: "Boost your online presence with our SEO and marketing strategies that increase traffic and generate leads effectively.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-red-600" />,
    title: "Website Maintenance",
    desc: "Keep your website updated, fast, and secure with our comprehensive maintenance packages tailored for your needs.",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-indigo-600" />,
    title: "UI/UX Optimization",
    desc: "Enhance user satisfaction by improving the usability, accessibility, and visual aesthetics of your digital products.",
  },
];

const ServicesPage = () => {
  return (
    <div
      className="py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/services-bg.jpg')", // Place your image in /public folder
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-white/80 rounded-xl shadow-md backdrop-blur-md">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600">
            Explore our wide range of services designed to help you succeed online.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
