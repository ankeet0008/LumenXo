import React, { useState, useEffect, useRef } from "react";

const services = [
  {
    img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
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
    img: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
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
    img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
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
    img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
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
    img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
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
    img: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
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

// Intersection Observer Hook
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  return [targetRef, isIntersecting];
};

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const [cardRef, isVisible] = useIntersectionObserver();
  const Icon = service.iconComponent;

  return (
    <div
      ref={cardRef}
      className={`relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Full Cover Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${service.img})`
        }}
      />
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Service Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4`}>
            <Icon size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            {service.shortDescription}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Overview */}
          <div className="lg:col-span-4 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Overview
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {service.detailedContent.overview}
            </p>
          </div>

          {/* Features */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Key Features
            </h4>
            <ul className="space-y-2">
              {service.detailedContent.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Benefits
            </h4>
            <ul className="space-y-2">
              {service.detailedContent.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.detailedContent.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="mt-6">
              <button className={`px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-medium rounded-lg hover:shadow-md transition-all duration-300`}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DetailedServicesSection() {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Header Section */}
      <div ref={headerRef} className="text-center mb-16">
        <div className={`transform transition-all duration-700 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Services We Offer
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are determined to help you reach your business goals. TechTSS is a
            creative digital agency, focused on linking your potential customers
            with your products/services through innovative digital solutions.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto space-y-12">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center mt-16">
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's discuss how our services can help you achieve your goals. Get in touch for a free consultation.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}