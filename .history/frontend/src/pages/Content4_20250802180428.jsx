import React from "react";
import {
  Smartphone,
  ShoppingCart,
  Server,
  BadgePercent,
  Wrench,
  ThumbsUp,
} from "lucide-react";

const servicesData = [
  {
    icon: <Smartphone className="w-10 h-10 text-blue-600" />,
    title: "Responsive Design",
    desc: "Responsive website design has become a necessity! The growth of Smartphones has given internet users a convenient way to access the web on the go.",
    features: ["Mobile-First", "Cross-Browser", "Touch Friendly"],
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-green-600" />,
    title: "E-Commerce Solutions",
    desc: "We build secure, scalable, and conversion-optimized online stores to take your business to the next level.",
    features: ["Product Catalog", "Payment Integration", "Order Management"],
  },
  {
    icon: <Server className="w-10 h-10 text-purple-600" />,
    title: "Web Hosting",
    desc: "Reliable web hosting services with guaranteed uptime and 24/7 support. Fast, secure, and optimized for performance.",
    features: ["Unlimited Bandwidth", "SSD Storage", "Free SSL"],
  },
  {
    icon: <BadgePercent className="w-10 h-10 text-pink-600" />,
    title: "Digital Marketing",
    desc: "Boost your online presence through SEO, social media, and performance marketing. Grow your leads and traffic!",
    features: ["SEO", "PPC", "Social Media"],
  },
  {
    icon: <Wrench className="w-10 h-10 text-yellow-600" />,
    title: "Website Maintenance",
    desc: "We provide round-the-clock maintenance and monitoring to ensure your website runs smoothly.",
    features: ["Security Updates", "Backup & Restore", "Bug Fixes"],
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-red-600" />,
    title: "UI/UX Design",
    desc: "Designs that not only look great but also provide a smooth user experience across all devices.",
    features: ["User Flows", "Wireframes", "Prototypes"],
  },
];

const ServiceCard = ({ icon, title, desc, features }) => (
  <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h3>
    <p className="text-gray-600 mb-4 text-sm">{desc}</p>
    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: "url(https://techtss.com/img/back5.png)" }}
    >
      <div className="bg-white/90 backdrop-blur-sm container mx-auto px-4 sm:px-6 lg:px-8 rounded-xl shadow-lg py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Services We Offer</h2>
          <div className="w-16 h-1 mx-auto bg-blue-500 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are determined to help you reach your business goals. TechTSS is a
            creative digital agency, focused on linking your potential customers
            with your products/services through innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
