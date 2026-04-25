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
  // ... your existing service objects ...
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
      <div className="w-10 h-10 mb-4 rounded-md flex items-center justify-center bg-white/10">
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

// 👇 New ProcessSection Component
const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, requirements, and challenges.",
      icon: "🔍",
    },
    {
      id: "02",
      title: "Planning",
      description: "We create a detailed project plan with timelines, milestones, and deliverables.",
      icon: "📝",
    },
    {
      id: "03",
      title: "Development",
      description: "Our team builds your solution using agile methodologies and best practices.",
      icon: "💻",
    },
    {
      id: "04",
      title: "Deployment",
      description: "We deploy your solution and provide ongoing support and maintenance.",
      icon: "🚀",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-black via-[#0a0a0a] to-black py-20 px-4 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Our <span className="text-blue-400">Process</span>
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-12">
        We follow a proven methodology to ensure successful project delivery and client satisfaction.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <div className="text-4xl mb-2">{step.icon}</div>
            <span className="text-sm text-green-400 font-semibold mb-1">{step.id}</span>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Start Your <span className="text-blue-400">Project?</span>
        </h3>
        <p className="text-gray-400 mb-6 max-w-lg">
          Let's discuss your requirements and create a custom solution that drives your business forward.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full text-white text-sm font-medium">
            → Get Free Consultation
          </button>
          <button className="bg-white text-black hover:bg-gray-200 transition px-6 py-2 rounded-full text-sm font-medium">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>

      {/* Inject the Process Section Below */}
      <ProcessSection />
    </>
  );
};

export default Services;
