import React from 'react';

const ServiceCard = ({ icon, title, description, readMoreLink, isHighlighted }) => {
  const cardClasses = `p-8 border border-gray-200 rounded-md transition-all duration-300 ease-in-out ${
    isHighlighted ? 'bg-gray-700 text-white shadow-xl' : 'bg-white text-gray-800 hover:shadow-lg'
  }`;

  const titleClasses = `font-semibold text-xl mb-2 ${isHighlighted ? 'text-white' : 'text-gray-900'}`;
  const descriptionClasses = `text-sm mb-4 ${isHighlighted ? 'text-gray-300' : 'text-gray-600'}`;
  const readMoreClasses = `text-sm font-medium ${isHighlighted ? 'text-white' : 'text-blue-500 hover:underline'}`;

  return (
    <div className={cardClasses}>
      <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full bg-gray-100">
        {icon}
      </div>
      <h3 className={titleClasses}>{title}</h3>
      <p className={descriptionClasses}>{description}</p>
      <a href={readMoreLink} className={readMoreClasses}>
        Read More
      </a>
    </div>
  );
};

const ServicesPage = () => {
  const servicesData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Responsive Design",
      description: "Responsive website design has become a necessity. The growth of Smartphones have given the internet users a...",
      readMoreLink: "#",
      isHighlighted: true,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "eCommerce Solutions",
      description: "Reliable and secure eCommerce website design solutions. Let us work with you to create a valuable digital...",
      readMoreLink: "#",
      isHighlighted: false,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
          />
        </svg>
      ),
      title: "Web Applications",
      description: "We have the team of experts to design and set up the simplest to the most innovative and bespoke web based...",
      readMoreLink: "#",
      isHighlighted: false,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Digital Branding",
      description: "Now the digital world changes rapidly, with new opportunities and threats. TechTSS Digital Branding Services...",
      readMoreLink: "#",
      isHighlighted: false,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Support & Maintenance",
      description: "Get efficient support and maintenance service. TechTSS Keeps your website Competitive & Stable with desired changes...",
      readMoreLink: "#",
      isHighlighted: false,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10H4v2h10v-2zm0 4H4v2h10v-2zm-2-8h6a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h4V2a2 2 0 012-2zM4 6h16M4 22h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Social Media Marketing",
      description: "Social Media Optimization services are considered as a valuable part of online marketing nowadays and it includes...",
      readMoreLink: "#",
      isHighlighted: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Services We Offer</h2>
          <div className="w-16 h-1 mx-auto bg-blue-500 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are determined to help you reach your business goals. TechTSS is a creative digital agency, focused on linking your potential customers with your products/services through innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;