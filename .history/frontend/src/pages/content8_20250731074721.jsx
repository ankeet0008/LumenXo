import React from "react";
import photo1 from "../Assets/photo1.jpg";
import photo2 from "../Assets/photo2.jpg";
import photo3 from "../Assets/photo3.jpg";
import photo4 from "../Assets/photo4.png";

const partners = [
  { name: "AIRGON", logo: photo1 },
  { name: "Tech Mentees", logo: photo2 },
  { name: "Kaffeinn", logo: photo3 },
  { name: "Grow Gyan", logo: photo4 },
];

export default function GrowingWithUs() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Who is Growing With Us
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg mb-10">
          Discover the thriving network of partners, clients, and entrepreneurs
          who are achieving remarkable growth and progress through their
          collaboration with LumenXO.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
