import React from "react";

const sections = [
  {
    title: "Who We Are",
    content:
      "We are a passionate team committed to delivering exceptional services through cutting-edge technology and innovative solutions.",
    image:
      "https://t4.ftcdn.net/jpg/02/95/46/25/360_F_295462565_ii654Qjx8mQCU8wz2WVBLtyE53Oh40vd.jpg",
  },
  {
    title: "Our Mission",
    content:
      "Our mission is to empower businesses and individuals with reliable, scalable, and user-friendly digital tools.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "What We Do",
    content:
      "We design, develop, and deploy web and mobile applications tailored to our clients’ needs with a focus on performance and usability.",
    image:
      "https://images.unsplash.com/photo-1581092334504-33bcb0c8e7e6",
  },
];

const AboutPage = () => {
  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row w-full h-screen"
        >
          {/* Image Section */}
          <div
            className={`md:w-1/2 w-full h-64 md:h-full ${
              index % 2 === 0 ? "" : "md:order-2"
            }`}
          >
            <div
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${section.image})` }}
            />
          </div>

          {/* Text Section */}
          <div
            className={`md:w-1/2 w-full flex items-center justify-center p-8 bg-white ${
              index % 2 === 0 ? "" : "md:order-1"
            }`}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg text-gray-700">{section.content}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Last Row - 4 Cards */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            icon="💡"
            title="Innovation"
            description="We bring fresh ideas into reality."
          />
          <Card
            icon="⚙️"
            title="Technology"
            description="We use modern tools to build solid products."
          />
          <Card
            icon="🚀"
            title="Scalability"
            description="We create solutions that grow with your needs."
          />
          <Card
            icon="🎯"
            title="Precision"
            description="We focus on accuracy and reliability."
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, description }) => (
  <div className="bg-white shadow rounded-xl p-6 text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AboutPage;
