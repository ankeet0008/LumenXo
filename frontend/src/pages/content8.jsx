import React from "react";
import photo1 from "../Assets/photo1.jpg";
import photo2 from "../Assets/photo2.jpg";
import photo3 from "../Assets/photo3.jpg";

const partners = [
  { name: "AIRGON", logo: photo1 },
  { name: "Tech Mentees", logo: photo2 },
  { name: "Kaffeinn", logo: photo3 },
];

export default function GrowingWithUs() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold  mb-3">
        Who is growing with Us
      </h2>
      <p className=" mb-12 max-w-2xl mx-auto">
        Discover the thriving network of partners, clients, and entrepreneurs
        who are achieving remarkable growth and progress through their
        collaboration with us.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10 px-6">
        {partners.map((partner, index) => (
          <img
  key={index}
  src={partner.logo}
  alt={partner.name}
  className="w-32 h-32 rounded-full object-cover  hover:grayscale-0 transition duration-300"
/>

        ))}
      </div>
    </section>
  );
}
