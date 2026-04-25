import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles, Code, Palette, TrendingUp, Wrench, Server, Check, ArrowRight, ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import GlobalNavbar from "./GlobalNavbar";
import GlobalFooter from "./GlobalFooter";
import gsap from "gsap";

// ─── Service Data ────────────────────────────────────────────────────────────
export const services = [
  {
    id: "administration",
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Administration",
    shortDescription: "Strategic integration of corporate responsibility into core operations for sustainable business practices.",
    iconComponent: Sparkles,
    accentColor: "text-blue-600",
    detailedContent: {
      overview: "Our Administration services focus on streamlining your business operations through strategic planning, process optimization, and corporate governance. We help organizations build sustainable frameworks that drive long-term success.",
      features: ["Strategic Business Planning & Analysis","Corporate Governance & Compliance","Process Optimization & Automation","Risk Management & Assessment","Performance Monitoring & KPI Development","Change Management & Implementation"],
      benefits: ["Increased operational efficiency by up to 40%","Enhanced regulatory compliance and risk mitigation","Streamlined workflows and reduced redundancies","Improved decision-making through data-driven insights"],
      technologies: ["ERP Systems","Business Intelligence Tools","Workflow Automation","Compliance Management Software"],
    },
  },
  {
    id: "application-development",
    img: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Application Development",
    shortDescription: "Robust, scalable, and intuitive applications across platforms from ideation to deployment.",
    iconComponent: Code,
    accentColor: "text-purple-600",
    detailedContent: {
      overview: "We develop cutting-edge applications that transform your business ideas into powerful digital solutions. Our full-stack development approach ensures scalable, secure, and user-friendly applications across all platforms.",
      features: ["Custom Web Application Development","Mobile App Development (iOS & Android)","Progressive Web Apps (PWA)","API Development & Integration","Database Design & Management","Cloud Deployment & DevOps"],
      benefits: ["Faster time-to-market with agile development","Cross-platform compatibility and reach","Scalable architecture for future growth","Enhanced user experience and engagement"],
      technologies: ["React","Node.js","Python","Flutter","AWS","Docker","MongoDB","PostgreSQL"],
    },
  },
  {
    id: "web-design",
    img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Web Design",
    shortDescription: "Modern, responsive, and user-centric websites with seamless navigation and visual aesthetics.",
    iconComponent: Palette,
    accentColor: "text-cyan-600",
    detailedContent: {
      overview: "Our web design services combine aesthetic excellence with functional design principles. We create visually stunning, responsive websites that not only look great but also drive conversions and enhance user experience.",
      features: ["Responsive Web Design & Development","UI/UX Research & Prototyping","Brand Identity & Visual Design","Conversion Rate Optimization","Accessibility & Performance Optimization","Design System Creation"],
      benefits: ["40% increase in user engagement","Improved brand perception and credibility","Higher conversion rates","Reduced bounce rates through better UX"],
      technologies: ["Figma","Adobe XD","React","GSAP","CSS3","WebGL"],
    },
  },
  {
    id: "digital-marketing",
    img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Digital Marketing",
    shortDescription: "Data-driven marketing strategies to amplify your brand's digital presence and reach.",
    iconComponent: TrendingUp,
    accentColor: "text-green-600",
    detailedContent: {
      overview: "Our digital marketing services leverage the power of data analytics and creative content to maximize your online visibility. We craft targeted campaigns that resonate with your audience and deliver measurable results.",
      features: ["Search Engine Optimization (SEO)","Pay-Per-Click Advertising (PPC)","Social Media Marketing & Management","Content Marketing & Strategy","Email Marketing Campaigns","Analytics & Performance Reporting"],
      benefits: ["3x increase in organic traffic","Improved ROI on marketing spend","Enhanced brand awareness and reach","Better customer acquisition and retention"],
      technologies: ["Google Analytics","SEMrush","HubSpot","Mailchimp","Facebook Ads","Google Ads"],
    },
  },
  {
    id: "wordpress",
    img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "WordPress",
    shortDescription: "Dynamic, SEO-friendly, and fully customized WordPress websites tailored to your business goals.",
    iconComponent: Wrench,
    accentColor: "text-orange-600",
    detailedContent: {
      overview: "We specialize in creating powerful, flexible WordPress solutions that grow with your business. From custom themes to complex plugins, we deliver WordPress websites that are both beautiful and functional.",
      features: ["Custom WordPress Theme Development","Plugin Development & Customization","WooCommerce E-commerce Solutions","WordPress Migration & Optimization","Maintenance & Security Updates","Multi-site Management & Setup"],
      benefits: ["Easy content management and updates","SEO-optimized structure and performance","Scalable and flexible architecture","Cost-effective long-term solution"],
      technologies: ["WordPress","PHP","MySQL","WooCommerce","ACF","Elementor","Gutenberg"],
    },
  },
  {
    id: "api-management",
    img: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "API Management",
    shortDescription: "Secure, scalable, and high-performance API design and integration for seamless data exchange.",
    iconComponent: Server,
    accentColor: "text-indigo-600",
    detailedContent: {
      overview: "Our API Management services enable secure and efficient data exchange across your digital ecosystem. We design, build, and maintain robust APIs that connect your applications, streamline workflows, and unlock new business capabilities.",
      features: ["RESTful & GraphQL API Design","API Security & Authentication (OAuth, JWT)","Third-Party API Integration","API Gateway Setup & Configuration","Rate Limiting & Traffic Management","Comprehensive API Documentation"],
      benefits: ["Seamless integration between disparate systems","Enhanced security and data protection","Improved scalability for high-traffic applications","Faster development cycles for new integrations"],
      technologies: ["Node.js","Python","GraphQL","REST","Kong","AWS API Gateway","Swagger/OpenAPI","Postman"],
    },
  },
];

// ─── Intersection Observer Hook ───────────────────────────────────────────────
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.1, rootMargin: "50px", ...options });
    const current = targetRef.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);
  return [targetRef, isIntersecting];
};

// ─── Service Card ─────────────────────────────────────────────────────────────
const ServiceCard = ({ service, index }) => {
  const [cardRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={cardRef}
      className={`py-24 border-t border-gray-800 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
    >
      {/* Title & Subtitle */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {service.title}
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {service.shortDescription}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Visual Asset */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 shadow-2xl">
          <img 
            src={service.img} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
          />
        </div>

        {/* Right: Details & Lists */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {/* Features List */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">
                Key Features
              </h4>
              <ul className="space-y-4">
                {service.detailedContent.features.slice(0, 5).map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F05A28] flex-shrink-0"></div>
                    <span className="text-sm text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits List */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">
                Benefits
              </h4>
              <ul className="space-y-4">
                {service.detailedContent.benefits.slice(0, 5).map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F05A28] flex-shrink-0"></div>
                    <span className="text-sm text-gray-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <Link
            to={`/service/${service.id}`}
            className="inline-block bg-[#F05A28] hover:bg-[#e04e20] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
const ServicesHero = () => {
  const navbarRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    // ── GSAP entrance animations ──
    gsap.fromTo(navbarRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
    gsap.fromTo(heroTextRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" });
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden", background: "#000000" }}>
      
      <div ref={navbarRef} style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}>
        <GlobalNavbar theme="dark" />
      </div>

      {/* Hero text — massive uncropped "Services" stretching edge-to-edge */}
      <div ref={heroTextRef} style={{
        position: "absolute", bottom: 20, left: 0, width: "100%",
        zIndex: 5, textAlign: "center", pointerEvents: "none",
        display: "flex", justifyContent: "center", alignItems: "flex-end",
      }}>
        <h1 style={{
          fontFamily: "'Inter', 'DM Sans', sans-serif",
          fontSize: "21vw",
          fontWeight: 900, color: "#ffffff",
          margin: 0, lineHeight: 0.85,
          letterSpacing: "-0.02em",
          userSelect: "none",
          width: "100%",
          textTransform: "uppercase",
        }}>Services</h1>
      </div>
    </div>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function DetailedServicesSection() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <ServicesHero />
      <section className="px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>
      <GlobalFooter theme="dark" />
    </div>
  );
}

