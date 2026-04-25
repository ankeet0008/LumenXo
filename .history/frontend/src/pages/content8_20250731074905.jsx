import React from "react";
import "../App.css"; // For custom keyframes

const partners = [
  // Replace with your real logo URLs
  { name: "AIRGON", logo: "https://techtss.com/img/client1.png" },
  { name: "Tech Mentees", logo: "https://techtss.com/img/client2.png" },
  { name: "Kaffeinn", logo: "https://techtss.com/img/client3.png" },
  { name: "Grow Gyan", logo: "https://techtss.com/img/client4.png" },
];

export default function WorkingWith() {
  return (
    <section className="py-12 bg-[#f6f3ff] text-center">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
        We’re working with
      </h2>
      <div className="overflow-hidden relative">
        <div className="animate-marquee flex w-max gap-12 px-4">
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover shadow-md bg-white p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
