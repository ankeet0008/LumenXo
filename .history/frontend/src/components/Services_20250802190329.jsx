import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Code,
  Palette,
  TrendingUp,
  Wrench,
  Server,
  Check,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const services = [
  {
    img:"",
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
    img:"",
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
    img:"",
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
    img:"",
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
    img:"",
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
    img:"",
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

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const [cardRef, isVisible] = useIntersectionObserver();
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.iconComponent;

  return (
    <div
      ref={cardRef}
      className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-[1.02] ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 transition-opacity duration-500 ${isHovered ? 'opacity-10' : ''}`} />
      
      {/* Background Images */}
      {(service.title === "Administration" || service.title === "Application Development") && (
        <>
          <div 
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            style={{
              backgroundImage: `url(${
                service.title === "Administration" 
                  ? "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg"
                  : "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
              })`
            }}
          />
          <div className={`absolute inset-0 bg-white transition-opacity duration-500 ${isHovered ? 'bg-opacity-40' : 'bg-opacity-50'}`} />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 p-8 lg:p-12">
        {/* Service Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex p-5 rounded-3xl bg-gradient-to-r ${service.gradient} mb-8 transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-6' : ''} shadow-lg`}>
            <Icon size={48} className="text-white" />
          </div>
          <h3 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            {service.title}
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Overview */}
          <div className="lg:col-span-3 mb-10">
            <div className="relative">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 relative">
                Overview
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} transition-all duration-500 ${isVisible ? 'w-20' : 'w-0'}`} />
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.detailedContent.overview}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="group">
            <h4 className="text-2xl font-bold text-gray-800 mb-8 relative">
              Key Features
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} transition-all duration-500 delay-300 ${isVisible ? 'w-16' : 'w-0'}`} />
            </h4>
            <ul className="space-y-4">
              {service.detailedContent.features.map((feature, idx) => (
                <li 
                  key={idx} 
                  className={`flex items-start space-x-4 transform transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100 + 500}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-6 h-6 text-emerald-500 p-1 bg-emerald-50 rounded-full" />
                  </div>
                  <span className="text-gray-600 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="group">
            <h4 className="text-2xl font-bold text-gray-800 mb-8 relative">
              Benefits
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} transition-all duration-500 delay-400 ${isVisible ? 'w-16' : 'w-0'}`} />
            </h4>
            <ul className="space-y-4">
              {service.detailedContent.benefits.map((benefit, idx) => (
                <li 
                  key={idx} 
                  className={`flex items-start space-x-4 transform transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100 + 600}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <ArrowRight className="w-6 h-6 text-blue-500 p-1 bg-blue-50 rounded-full" />
                  </div>
                  <span className="text-gray-600 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="group">
            <h4 className="text-2xl font-bold text-gray-800 mb-8 relative">
              Technologies We Use
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} transition-all duration-500 delay-500 ${isVisible ? 'w-16' : 'w-0'}`} />
            </h4>
            <div className="flex flex-wrap gap-3 mb-10">
              {service.detailedContent.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-3 bg-gray-50 text-gray-700 rounded-2xl text-sm font-semibold border border-gray-200 hover:border-gray-300 transition-all duration-300 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  } hover:scale-105 hover:shadow-md`}
                  style={{ transitionDelay: `${idx * 50 + 700}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="mt-10">
              <button className={`group relative px-10 py-5 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden`}>
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Get Started with {service.title}</span>
                  <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className={`absolute inset-0 border-4 border-transparent bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}
           style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
    </div>
  );
};

export default function DetailedServicesSection() {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [statsRef, statsVisible] = useIntersectionObserver();

  return (
    <>
    <section className="relative py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div ref={headerRef} className="text-center mb-20 relative z-10">
        <div className={`transform transition-all duration-1000 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6 leading-tight">
            Services We Offer
          </h2>
          <div className="flex justify-center mb-8">
            <div className={`h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 delay-500 ${headerVisible ? 'w-32' : 'w-0'}`} />
          </div>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-700 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            We are determined to help you reach your business goals. TechTSS is a
            creative digital agency, focused on linking your potential customers
            with your products/services through innovative digital solutions.
          </p>
        </div>

      
        <div ref={statsRef} className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transform transition-all duration-1000 delay-1000 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center group">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              <AnimatedCounter end={150} suffix="+" />
            </div>
            <p className="text-gray-600 font-medium">Projects Completed</p>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <p className="text-gray-600 font-medium">Client Satisfaction</p>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <p className="text-gray-600 font-medium">Team Members</p>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-orange-600 mb-2">
              <AnimatedCounter end={5} suffix="+" />
            </div>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      <div className="text-center mt-24 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto border border-white/20 relative overflow-hidden group">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our services can help you achieve your goals. Get in touch for a free consultation and discover the possibilities.
            </p>
            <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
              <span className="relative z-10 flex items-center space-x-3">
                <span>Start Your Project Today</span>
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}}