import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, readMoreLink, isHighlighted }) => {
  const navigate = useNavigate();

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
      <button onClick={() => navigate(readMoreLink)} className={readMoreClasses}>
        Read More
      </button>
    </div>
  );
};

const ServicesPage = () => {
  const servicesData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m0 0h-5m-5 0h-2m-2 0H5m5-16h4m-4 0h4m-4 0v4m0 0v16m4 0v-4" />
        </svg>
      ),
      title: 'Administration',
      description: 'We strategically integrate corporate responsibility into our core operations, ensuring our expertise supports sustainable and efficient business practices.',
      readMoreLink: '/services/administration',
      isHighlighted: true,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L12 21m0 0l2.25-4m-4.5 0l4.5 0M9 9h6m-3-3v8" />
        </svg>
      ),
      title: 'Application Development',
      description: 'Our skilled developers craft robust, scalable, and intuitive applications across platforms using modern technologies and standards.',
      readMoreLink: '/services/application-development',
      isHighlighted: false,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l3-5m0 0l3 5m-3-5v12M15 10l3-5m0 0l3 5m-3-5v12M12 15l-3 3m0 0l3 3m0-3h6m-6 0h6m0 0v-6m-6 0v6" />
        </svg>
      ),
      title: 'Web Design',
      description: 'We build modern, responsive, and user-centric websites with seamless navigation and brand-aligned interfaces.',
      readMoreLink: '/services/web-design',
      isHighlighted: false,
    },
    // Add other services below similarly
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Services We Offer</h2>
          <div className="w-16 h-1 mx-auto bg-blue-500 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are determined to help you reach your business goals. LumenXo is a creative digital agency, focused on linking your potential customers with your products/services through innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
