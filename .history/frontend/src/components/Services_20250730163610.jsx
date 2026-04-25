import React from "react";
import {
  Code,
  Palette,
  Server,
  Sparkles,
  TrendingUp,
  Wrench,
} from "lucide-react";
import Navbar from "../pages/Navbar";

const services = [
  {
    title: "Administration",
    description: `Strategic integration of corporate responsibility into core operations for sustainable business practices.`,
    features: [
      "Strategic Planning",
      "Process Optimization",
      "Corporate Governance",
      "Risk Management",
    ],
    technologies: [
      { name: "Salesforce", icon: "SF", color: "bg-blue-500" },
      { name: "SAP", icon: "S", color: "bg-blue-600" },
      { name: "Oracle", icon: "O", color: "bg-red-500" },
      { name: "Microsoft", icon: "M", color: "bg-blue-600" },
    ],
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
    iconComponent: Sparkles,
    accentColor: "blue",
  },
  {
    title: "Application Development",
    description: `Robust, scalable, and intuitive applications across platforms from ideation to deployment.`,
    features: [
      "Custom Software Development",
      "Mobile Applications",
      "Web Applications",
      "API Development",
    ],
    technologies: [
      { name: "React", icon: "R", color: "bg-blue-500" },
      { name: "Node.js", icon: "N", color: "bg-green-500" },
      { name: "Python", icon: "P", color: "bg-blue-600" },
      { name: "Java", icon: "J", color: "bg-red-500" },
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-600",
    iconComponent: Code,
    accentColor: "purple",
  },
  {
    title: "Web Design",
    description: `Modern, responsive, and user-centric websites with seamless navigation and visual aesthetics.`,
    features: ["UI/UX Design", "Responsive Design", "Brand Identity", "User Research"],
    technologies: [
      { name: "Figma", icon: "F", color: "bg-purple-600" },
      { name: "Adobe XD", icon: "A", color: "bg-pink-500" },
      { name: "Sketch", icon: "S", color: "bg-orange-500" },
      { name: "Webflow", icon: "W", color: "bg-blue-600" },
    ],
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    iconComponent: Palette,
    accentColor: "cyan",
  },
  {
    title: "Digital Marketing",
    description: `End-to-end digital marketing solutions — SEO, social media strategy, content marketing, and analytics.`,
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Strategy",
      "PPC Campaigns",
    ],
    technologies: [
      { name: "Google Ads", icon: "G", color: "bg-green-500" },
      { name: "Facebook", icon: "F", color: "bg-blue-600" },
      { name: "HubSpot", icon: "H", color: "bg-orange-500" },
      { name: "Mailchimp", icon: "M", color: "bg-yellow-500" },
    ],
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    iconComponent: TrendingUp,
    accentColor: "emerald",
  },
  {
    title: "WordPress Development",
    description: `Dynamic, SEO-friendly, and fully customized WordPress websites tailored to your business goals.`,
    features: [
      "Custom Theme Development",
      "Plugin Development",
      "E-commerce Solutions",
      "SEO Optimization",
    ],
    technologies: [
      { name: "WordPress", icon: "W", color: "bg-blue-600" },
      { name: "PHP", icon: "P", color: "bg-purple-600" },
      { name: "MySQL", icon: "M", color: "bg-blue-500" },
      { name: "WooCommerce", icon: "W", color: "bg-purple-500" },
    ],
    gradient: "from-orange-400 via-red-500 to-pink-600",
    iconComponent: Wrench,
    accentColor: "orange",
  },
  {
    title: "Backend Development",
    description: `Secure APIs, optimized databases, and scalable server-side logic for smooth application performance.`,
    features: [
      "API Development",
      "Database Design",
      "Server Architecture",
      "Cloud Integration",
    ],
    technologies: [
      { name: "Node.js", icon: "N", color: "bg-green-500" },
      { name: "Python", icon: "P", color: "bg-blue-600" },
      { name: "MongoDB", icon: "M", color: "bg-green-600" },
      { name: "AWS", icon: "A", color: "bg-orange-500" },
    ],
    gradient: "from-slate-600 via-gray-700 to-zinc-800",
    iconComponent: Server,
    accentColor: "slate",
  },
];

const ServiceCard = ({
  title,
  description,
  features,
  technologies,
  gradient,
  iconComponent: Icon,
}) => (
  <div className="bg-[#121212] p-6 rounded-xl shadow-xl flex flex-col justify-between w-full max-w-md text-white">
    <div>
      <div className={`w-10 h-10 mb-4 rounded-md flex items-center justify-center bg-white/10`}>
        <Icon className="text-white w-5 h-5" />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <h3 className="font-semibold mb-2">Key Features:</h3>
      <ul className="text-sm list-disc list-inside text-gray-300 space-y-1">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <h3 className="font-semibold mt-4 mb-2">Technologies:</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <div
            key={i}
            className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm text-white ${tech.color}`}
          >
            <span>{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
    <button
      className={`mt-6 bg-gradient-to-r ${gradient} py-2 rounded-md text-white hover:opacity-90 transition-all w-full`}
    >
      → Get Started
    </button>
  </div>
);

const Services = () => {
  return (
    <Navbar/>
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
