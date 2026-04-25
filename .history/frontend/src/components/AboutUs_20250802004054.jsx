import React from "react";
import {
  Code,
  Palette,
  Server,
  Sparkles,
  TrendingUp,
  Wrench,
  Smartphone,
} from "lucide-react";

const AboutPage = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: "Custom Software Development",
      description:
        "Tailored software to meet unique business requirements, ensuring scalability and performance.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: "Mobile App Development",
      description:
        "High-performance mobile applications for Android and iOS platforms with modern UI/UX.",
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-600" />,
      title: "Cloud Services",
      description:
        "Robust and secure cloud infrastructure for seamless deployment and data management.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      title: "Digital Transformation",
      description:
        "Modernize your business with smart digital tools and automation solutions.",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Section 1 - About Company */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/1385382.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 py-20 px-4 md:px-20 max-w-7xl mx-auto">
          <div className="lg:w-3/4">
            <h2 className="text-4xl font-bold text-indigo-300 mb-6">
              About Company
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              <strong>Empowering Businesses with Innovative Software
                Solutions</strong>
              <br />
              LumenXo Software Pvt. Ltd. is a forward-thinking IT company
              committed to delivering powerful and scalable digital solutions
              that drive business success. With a passionate team of
              developers, designers, and strategists, we specialize in crafting
              tailored web, mobile, and software applications that help
              organizations thrive in a competitive digital landscape.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              <strong>Seamless Business Operations:</strong> We build solutions
              that simplify and automate business operations—enabling companies
              to enhance productivity, reduce complexity, and focus on growth.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Effortless Integration:</strong> Our technologies are
              designed for smooth and secure integration into your existing
              systems, ensuring minimal disruption and maximum efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Mission (Image Left) */}
      <section className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 md:px-20 gap-10">
        <img
          src="https://cdn.pixabay.com/photo/2018/01/08/22/41/laptop-3076957_1280.jpg"
          alt="Mission"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-700">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            To empower businesses through cutting-edge technology solutions that
            streamline operations, improve customer engagement, and foster
            innovation.
          </p>
        </div>
      </section>

      {/* Section 3 - Vision (Image Right) */}
      <section className="flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto px-4 md:px-20 gap-10">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-700">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700">
            To become a globally recognized technology partner that businesses
            trust to bring their digital goals to life.
          </p>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2016/10/27/22/52/office-1779134_1280.jpg"
          alt="Vision"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
      </section>

      {/* Section 4 - Core Values (Image Left) */}
      <section className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 md:px-20 gap-10">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327_1280.jpg"
          alt="Core Values"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-700">
            Our Core Values
          </h2>
          <ul className="list-disc pl-5 text-gray-700 text-lg">
            <li>Integrity & Transparency</li>
            <li>Innovation & Quality</li>
            <li>Customer-Centric Approach</li>
            <li>Teamwork & Accountability</li>
          </ul>
        </div>
      </section>

      {/* Section 5 - Services (4 Cards) */}
      <section className="bg-gray-50 py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
