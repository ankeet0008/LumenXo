import React from "react";
import {
  Sparkles,
  Code,
  Palette,
  TrendingUp,
  Wrench,
  Server,
} from "lucide-react";

const services = [
  {
    title: "Administration",
    description:
      "Strategic integration of corporate responsibility into core operations for sustainable business practices.",
    iconComponent: Sparkles,
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
  },
  {
    title: "Application Development",
    description:
      "Robust, scalable, and intuitive applications across platforms from ideation to deployment.",
    iconComponent: Code,
    gradient: "from-purple-500 via-pink-500 to-rose-600",
  },
  {
    title: "Web Design",
    description:
      "Modern, responsive, and user-centric websites with seamless navigation and visual aesthetics.",
    iconComponent: Palette,
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
  },
  {
    title: "Digital Marketing",
    description:
      "End-to-end digital marketing solutions — SEO, social media strategy, content marketing, and analytics.",
    iconComponent: TrendingUp,
    gradient: "from-emerald-400 via-green-500 to-teal-600",
  },
  {
    title: "WordPress Development",
    description:
      "Dynamic, SEO-friendly, and fully customized WordPress websites tailored to your business goals.",
    iconComponent: Wrench,
    gradient: "from-orange-400 via-red-500 to-pink-600",
  },
  {
    title: "Backend Development",
    description:
      "Secure APIs, optimized databases, and scalable server-side logic for smooth application performance.",
    iconComponent: Server,
    gradient: "from-slate-600 via-gray-700 to-zinc-800",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-50 bg-no-repeat bg-top"
      style={{
        backgroundImage: 'url(https://aioninnotech.com/img/New/shape.png)',
        backgroundSize: 'cover',
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Services We Offer
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are determined to help you reach your business goals. TechTSS is a
          creative digital agency, focused on linking your potential customers
          with your products/services through innovative digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.iconComponent;
          return (
            <div
              key={index}
              className="border rounded-lg p-6 bg-white hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              <div
                className={`text-white p-4 rounded-full bg-gradient-to-r ${service.gradient} mb-4`}
              >
                <Icon size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                {service.description}
              </p>
              <span className="text-sm font-semibold text-blue-600 cursor-pointer hover:underline">
                Read More
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
