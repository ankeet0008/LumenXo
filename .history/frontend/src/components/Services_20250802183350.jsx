import React, { useState } from "react";
import {
  Sparkles,
  Code,
  Palette,
  TrendingUp,
  Wrench,
  Server,
  ChevronDown,
  ChevronUp,
  Check,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Administration",
    shortDescription: "Strategic integration of corporate responsibility into core operations for sustainable business practices.",
    iconComponent: Sparkles,
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
    detailedContent: {
      overview: "Our Administration services focus on streamlining your business operations through strategic planning, process optimization, and corporate governance. We help organizations build sustainable frameworks that drive long-term success.",
      features: [
        "Strategic Business Planning & Analysis",
        "Corporate Governance & Compliance",
        "Process Optimization & Automation",
        "Risk Management & Assessment",
        "Performance Monitoring & KPI Development",
        "Change Management & Implementation"
      ],
      benefits: [
        "Increased operational efficiency by up to 40%",
        "Enhanced regulatory compliance and risk mitigation",
        "Streamlined workflows and reduced redundancies",
        "Improved decision-making through data-driven insights"
      ],
      technologies: ["ERP Systems", "Business Intelligence Tools", "Workflow Automation", "Compliance Management Software"]
    }
  },
  {
    title: "Application Development",
    shortDescription: "Robust, scalable, and intuitive applications across platforms from ideation to deployment.",
    iconComponent: Code,
    gradient: "from-purple-500 via-pink-500 to-rose-600",
    detailedContent: {
      overview: "We develop cutting-edge applications that transform your business ideas into powerful digital solutions. Our full-stack development approach ensures scalable, secure, and user-friendly applications across all platforms.",
      features: [
        "Custom Web Application Development",
        "Mobile App Development (iOS & Android)",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
        "Database Design & Management",
        "Cloud Deployment & DevOps"
      ],
      benefits: [
        "Faster time-to-market with agile development",
        "Cross-platform compatibility and reach",
        "Scalable architecture for future growth",
        "Enhanced user experience and engagement"
      ],
      technologies: ["React", "Node.js", "Python", "Flutter", "AWS", "Docker", "MongoDB", "PostgreSQL"]
    }
  },
  {
    title: "Web Design",
    shortDescription: "Modern, responsive, and user-centric websites with seamless navigation and visual aesthetics.",
    iconComponent: Palette,
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    detailedContent: {
      overview: "Our web design services combine aesthetic excellence with functional design principles. We create visually stunning, responsive websites that not only look great but also drive conversions and enhance user experience.",
      features: [
        "Responsive Web Design & Development",
        "UI/UX Design & Prototyping",
        "E-commerce Website Development",
        "Landing Page Optimization",
        "Website Redesign & Migration",
        "Performance Optimization & SEO"
      ],
      benefits: [
        "Improved user engagement and retention",
        "Higher conversion rates and ROI",
        "Better search engine rankings",
        "Mobile-first responsive design"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Figma", "Adobe Creative Suite", "Webflow"]
    }
  },
  {
    title: "Digital Marketing",
    shortDescription: "End-to-end digital marketing solutions — SEO, social media strategy, content marketing, and analytics.",
    iconComponent: TrendingUp,
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    detailedContent: {
      overview: "Our comprehensive digital marketing strategies help businesses establish a strong online presence, reach their target audience, and drive measurable growth through data-driven campaigns and innovative marketing techniques.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Social Media Marketing & Management",
        "Content Marketing & Strategy",
        "Email Marketing Campaigns",
        "Analytics & Performance Tracking"
      ],
      benefits: [
        "Increased brand visibility and awareness",
        "Higher quality leads and conversions",
        "Improved customer engagement and loyalty",
        "Measurable ROI and performance metrics"
      ],
      technologies: ["Google Analytics", "Google Ads", "Facebook Ads Manager", "SEMrush", "Mailchimp", "Hootsuite"]
    }
  },
  {
    title: "WordPress Development",
    shortDescription: "Dynamic, SEO-friendly, and fully customized WordPress websites tailored to your business goals.",
    iconComponent: Wrench,
    gradient: "from-orange-400 via-red-500 to-pink-600",
    detailedContent: {
      overview: "We specialize in creating powerful, flexible WordPress solutions that grow with your business. From custom themes to complex plugins, we deliver WordPress websites that are both beautiful and functional.",
      features: [
        "Custom WordPress Theme Development",
        "Plugin Development & Customization",
        "WooCommerce E-commerce Solutions",
        "WordPress Migration & Optimization",
        "Maintenance & Security Updates",
        "Multi-site Management & Setup"
      ],
      benefits: [
        "Easy content management and updates",
        "SEO-optimized structure and performance",
        "Scalable and flexible architecture",
        "Cost-effective long-term solution"
      ],
      technologies: ["WordPress", "PHP", "MySQL", "WooCommerce", "ACF", "Elementor", "Gutenberg"]
    }
  },
  {
    title: "Backend Development",
    shortDescription: "Secure APIs, optimized databases, and scalable server-side logic for smooth application performance.",
    iconComponent: Server,
    gradient: "from-slate-600 via-gray-700 to-zinc-800",
    detailedContent: {
      overview: "Our backend development services provide the robust foundation your applications need. We build secure, scalable, and high-performance server-side solutions that handle complex business logic and data management efficiently.",
      features: [
        "RESTful API Development",
        "Database Design & Optimization",
        "Server Architecture & Setup",
        "Authentication & Security Implementation",
        "Performance Monitoring & Optimization",
        "Third-party Integration & Services"
      ],
      benefits: [
        "Enhanced security and data protection",
        "Improved application performance and speed",
        "Seamless third-party service integration",
        "Scalable infrastructure for growth"
      ],
      technologies: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker"]
    }
  }
];

export default function DetailedServicesSection() {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-50 bg-no-repeat bg-top"
      style={{
        backgroundImage: 'url(https://aioninnotech.com/img/New/shape.png)',
        backgroundSize: 'cover',
      }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Services We Offer
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We are determined to help you reach your business goals. TechTSS is a
          creative digital agency, focused on linking your potential customers
          with your products/services through innovative digital solutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {services.map((service, index) => {
          const Icon = service.iconComponent;
          const isExpanded = expandedService === index;
          
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Service Header */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleService(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${service.gradient}`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-blue-600">
                      {isExpanded ? 'Show Less' : 'Learn More'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6 grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Overview */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          Overview
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {service.detailedContent.overview}
                        </p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.detailedContent.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.detailedContent.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          Technologies We Use
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.detailedContent.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                          Get Started with {service.title}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center mt-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's discuss how our services can help you achieve your goals. Get in touch for a free consultation.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}