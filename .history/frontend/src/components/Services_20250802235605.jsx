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
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ React Router Link
import Navbar from "../pages/Navbar";

// ... services array remains unchanged

// ... useIntersectionObserver remains unchanged

const ServiceCard = ({ service, index }) => {
  const [cardRef, isVisible] = useIntersectionObserver();
  const Icon = service.iconComponent;

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Floating Icon */}
        <div className="absolute bottom-4 left-6">
          <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
            <Icon size={24} className={service.accentColor} />
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 right-6">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-600 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Overview</h4>
          <p className="text-gray-600 leading-relaxed text-sm">
            {service.detailedContent.overview}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Features */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Key Features
            </h4>
            <ul className="space-y-3">
              {service.detailedContent.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Benefits
            </h4>
            <ul className="space-y-3">
              {service.detailedContent.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.detailedContent.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium border border-gray-100 hover:bg-gray-100 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex justify-end">
            <Link
              to="/BookNow"
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2 text-sm"
            >
              <span>Get Started</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DetailedServicesSection() {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <>
      <Navbar />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div ref={headerRef} className="text-center mb-20">
          <div
            className={`transform transition-all duration-700 ${
              headerVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Services We Offer
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are determined to help you reach your business goals. LumenXo
              is a creative digital agency, focused on linking your potential
              customers with your products and services through innovative
              digital solutions.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div
          className="text-center mt-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/006/852/804/original/abstract-blue-background-simple-design-for-your-website-free-vector.jpg')",
          }}
        >
          <div className="bg-opacity-90 rounded-2xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals.
              Get in touch for a free consultation and discover the
              possibilities.
            </p>
            <Link
              to="/BookNow"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
