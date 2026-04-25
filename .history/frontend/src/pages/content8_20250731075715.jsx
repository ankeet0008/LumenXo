import React from "react";
import { motion } from "framer-motion";
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
    <section className="py-12 px-4 bg-gradient-to-r from-[#002347] to-[#3b82f6] text-white">
      <div className="text-center mb-10">
        <span className="text-sm font-semibold tracking-widest bg-blue-600 px-4 py-1 rounded-full uppercase">
          Working with
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold mt-3">
          We're working with
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-black via-cyan-400 to-yellow-400 mx-auto mt-2"></div>
      </div>

      {/* Animated logos */}
      <div className="overflow-hidden w-full h-32 relative">
        {partners.map((partner, index) => (
          <motion.img
            key={index}
            src={partner.logo}
            alt={partner.name}
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain absolute top-1/2 transform -translate-y-1/2 shadow-md rounded bg-white p-2"
            initial={{ x: "100vw" }}
            animate={{ x: "-200px" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: index * 2,
              ease: "linear",
            }}
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
            }}
          />
        ))}
      </div>
    </section>
  );
}
