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

const duplicatePartners = [...partners, ...partners]; // for seamless loop

export default function ClientsSlider() {
  return (
    <section className="bg-[#E6F0FA] py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold">We're working with</h2>
        <p className="text-sm text-gray-600 mt-2">
          Building valuable collaborations with forward-thinking companies.
        </p>
      </div>

      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatePartners.map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 h-40 bg-white shadow-md flex items-center justify-center rounded-xl p-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
