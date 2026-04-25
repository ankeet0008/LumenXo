import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Target,
  Eye,
  Lightbulb,
  Users,
  Brain,
  ShieldCheck,
  Gem,
  Globe,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";


const services = [
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "Marketing Strategy",
    description:
      "Tailored marketing strategies that align with your brand’s vision and objectives.",
  },
  {
    icon: <Eye className="w-8 h-8 text-green-600" />,
    title: "Brand Identity",
    description:
      "Creating compelling brand identities that resonate with your audience.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "Creative Design",
    description:
      "Innovative and aesthetically pleasing designs that captivate and engage.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: "Social Media Management",
    description:
      "Effective social media strategies to grow your online presence.",
  },
  {
    icon: <Brain className="w-8 h-8 text-red-600" />,
    title: "Content Creation",
    description:
      "High-quality content that speaks to your brand’s message and audience.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-pink-600" />,
    title: "Campaign Management",
    description:
      "End-to-end management of marketing campaigns for maximum impact.",
  },
  {
    icon: <Gem className="w-8 h-8 text-indigo-600" />,
    title: "Influencer Marketing",
    description:
      "Leveraging influencer partnerships to boost brand visibility and credibility.",
  },
  {
    icon: <Globe className="w-8 h-8 text-teal-600" />,
    title: "SEO Optimization",
    description:
      "Improving your website’s visibility and ranking on search engines.",
  },
];

const LumenIntro = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20 xl:px-40">
      {/* Intro Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          What We Offer
        </h2>
        <p className="text-lg text-gray-600">
          Our comprehensive suite of services is designed to elevate your brand
          and drive results. Explore how we can bring your vision to life.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link href="/BookNow">
              <div className="inline-flex items-center space-x-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                <span>Get Started</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-24 bg-blue-50 p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Brand?
          </h3>
          <p className="text-gray-700 mb-6">
            Let’s discuss how our services can help you achieve your business
            goals. Reach out to us today and take the first step towards
            success.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-blue-600 font-medium">
              <Phone className="w-5 h-5" />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600 font-medium">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </div>
            <div className="flex items-center space-x-2 text-red-600 font-medium">
              <Mail className="w-5 h-5" />
              <span>hello@lumenmedia.com</span>
            </div>
          </div>
        </div>
        <Link href="/Contact">
          <div className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Start Your Project Today
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LumenIntro;
