import React from "react";
import {
  Code,
  Palette,
  Server,
  Sparkles,
  TrendingUp,
  Wrench,
  Search,
  ClipboardList,
  UploadCloud,
} from "lucide-react";

const services = [/* your same array as before — keep this unchanged */];

// 👇 Steps for "Our Process"
const processSteps = [
  {
    id: "01",
    title: "Discovery",
    icon: <Search className="w-5 h-5 text-white" />,
    description:
      "We start by understanding your business goals, requirements, and challenges.",
  },
  {
    id: "02",
    title: "Planning",
    icon: <ClipboardList className="w-5 h-5 text-white" />,
    description:
      "We create a detailed project plan with timelines, milestones, and deliverables.",
  },
  {
    id: "03",
    title: "Development",
    icon: <Code className="w-5 h-5 text-white" />,
    description:
      "Our team builds your solution using agile methodologies and best practices.",
  },
  {
    id: "04",
    title: "Deployment",
    icon: <UploadCloud className="w-5 h-5 text-white" />,
    description:
      "We deploy your solution and provide ongoing support and maintenance.",
  },
];

// 👇 Individual Service Card Component
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

// 👇 "Our Process" Component
const OurProcess = () => (
  <section className="w-full py-20 bg-gradient-to-r from-[#0a0a12] to-[#0b0b1a] text-white text-center px-4">
    <h2 className="text-3xl font-bold mb-2">
      Our <span className="text-blue-400">Process</span>
    </h2>
    <p className="text-gray-400 mb-10">
      We follow a proven methodology to ensure successful project delivery and client satisfaction.
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
      {processSteps.map((step) => (
        <div key={step.id} className="flex flex-col items-center max-w-[180px]">
          <div className="relative mb-3">
            <div className="w-14 h-14 rounded-md bg-indigo-600 flex items-center justify-center">
              {step.icon}
            </div>
            <span className="absolute -top-2 -right-2 bg-green-400 text-black text-xs font-bold rounded px-1">
              {step.id}
            </span>
          </div>
          <h4 className="font-semibold">{step.title}</h4>
          <p className="text-xs text-gray-400 mt-1">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

// 👇 Main Page Component
const Services = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10 space-y-24">
      {/* Our Process Section */}
      <OurProcess />

      {/* Services Grid */}
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>

      {/* CTA Footer */}
      <div className="text-white text-center mt-20">
        <h3 className="text-2xl font-bold">
          Ready to Start Your <span className="text-purple-400">Project?</span>
        </h3>
        <p className="text-gray-400 mt-2">
          Let’s discuss your requirements and create a custom solution that drives your business forward.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium">
            → Get Free Consultation
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium">
            View Our Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
