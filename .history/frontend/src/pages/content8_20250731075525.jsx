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
  // Duplicate the array for seamless looping
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-[#002347] to-[#3b82f6] text-white overflow-hidden">
      <div className="text-center mb-10">
        <span className="text-sm font-semibold tracking-widest bg-blue-600 px-4 py-1 rounded-full uppercase">
          Working with
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold mt-3">
          We're working with
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-black via-cyan-400 to-yellow-400 mx-auto mt-2"></div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-white mx-4 p-4 rounded shadow-md w-40 h-24 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
