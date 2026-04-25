import React from "react";

const partners = [
  {
    name: "AIRGON",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Airgon.svg/512px-Airgon.svg.png", // Replace with actual logo
  },
  {
    name: "TECHMENTEE",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Techmentee_Logo.svg/512px-Techmentee_Logo.svg.png", // Replace with actual logo
  },
  {
    name: "Kaffeinn",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kaffeinn.svg/512px-Kaffeinn.svg.png",
  },
  {
    name: "World Research",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/WorldResearchLogo.svg/512px-WorldResearchLogo.svg.png",
  },
  {
    name: "ASSAVIO",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Assavio.svg/512px-Assavio.svg.png",
  },
  {
    name: "BBSR Services",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/BBSR_Services_Logo.svg/512px-BBSR_Services_Logo.svg.png",
  },
];

const PartnerSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Who is growing with Us</h2>
        <p className="mt-2 text-gray-500 max-w-xl mx-auto">
          Discover the thriving network of partners, clients, and entrepreneurs
          who are achieving remarkable growth and progress through their collaboration with us.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {partners.map((partner, index) => (
          <div key={index} className="w-36 h-24 flex items-center justify-center">
            <img
              src={partner.src}
              alt={partner.name}
              className="max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerSection;
