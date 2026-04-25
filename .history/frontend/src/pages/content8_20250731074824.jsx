import React from "react";
import photo1 from "../Assets/photo1.jpg";
import photo2 from "../Assets/photo2.jpg";
import photo3 from "../Assets/photo3.jpg";
import photo4 from "../Assets/photo4.png";
import "../App.css"; // we'll add keyframes here

const partners = [
  { name: "AIRGON", logo: photo1 },
  { name: "Tech Mentees", logo: photo2 },
  { name: "Kaffeinn", logo: photo3 },
  { name: "Grow Gyan", logo: photo4 },
];

export default function GrowingWithUs() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 uppercase text-gray-700">
        We're working with
      </h2>

      <div className="overflow-hidden w-full relative bg-purple-100 py-6">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-12">
          {[...partners, ...partners].map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-2 border-white shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
