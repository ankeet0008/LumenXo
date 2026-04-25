// GallerySlider.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "../Assets/c1.jpg"

const galleryItems = [
  {
    img:{Img1},
    title: "Peaceful Lake",
    description: "This image captures the calmness of nature, reminding us to slow down and breathe.",
  },
  {
    img: "https://source.unsplash.com/random/800x600?mountain",
    title: "Majestic Mountain",
    description: "Symbol of strength and endurance, mountains teach us to rise above challenges.",
  },
  {
    img: "https://source.unsplash.com/random/800x600?forest",
    title: "Enchanted Forest",
    description: "A forest full of mystery and life, showing how nature thrives in harmony.",
  },
];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('')",
      }}
    >
      <section className="bg-white/50 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center mb-12"> Gallery</h2>

        <div className="relative flex flex-col md:flex-row items-center gap-8">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image with animation */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={galleryItems[currentIndex].img}
                src={galleryItems[currentIndex].img}
                alt={galleryItems[currentIndex].title}
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Text with animation */}
          <div className="w-full md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={galleryItems[currentIndex].title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-3">{galleryItems[currentIndex].title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {galleryItems[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots (indicators) */}
        <div className="flex justify-center mt-6 space-x-2">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? "bg-blue-500 scale-110" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GallerySlider;
