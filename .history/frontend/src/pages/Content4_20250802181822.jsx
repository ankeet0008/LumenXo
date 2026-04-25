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
    desc: "Responsive website design has become a necessity! The growth of smartphones has given internet users a more convenient way to browse.",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-blue-600" />,
    title: "E-commerce",
    desc: "We provide complete E-commerce solutions including integration of secure payment gateways and shopping cart functionalities.",
  },
  {
    icon: <Server className="w-10 h-10 text-blue-600" />,
    title: "Web Hosting",
    desc: "We offer reliable and scalable hosting services ensuring your website remains accessible and fast at all times.",
  },
  {
    icon: <BadgePercent className="w-10 h-10 text-blue-600" />,
    title: "SEO Services",
    desc: "Our SEO experts optimize your website to rank higher in search engine results and drive organic traffic.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    title: "Website Maintenance",
    desc: "We offer ongoing maintenance and support services to ensure your website is always up-to-date and secure.",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-blue-600" />,
    title: "Social Media Integration",
    desc: "Boost your online presence by integrating popular social media platforms directly into your website.",
  },
];

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const Services = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://techtss.com/img/back5.png')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Services We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are determined to help you reach your business goals. LumenXo is a creative digital agency, focused on linking your potential customers with your products/services through innovative digital solutions.
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
    </div>
  );
};

export default Services;
