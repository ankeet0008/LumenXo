// GallerySlider.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // arrow icons

const galleryItems = [
  {
    img: "https://source.unsplash.com/random/800x600?nature,water",
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
    <section className="py-12 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">📸 Special Gallery</h2>

      <div className="relative flex flex-col md:flex-row items-center gap-8">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={galleryItems[currentIndex].img}
            alt={galleryItems[currentIndex].title}
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-3">{galleryItems[currentIndex].title}</h3>
          <p className="text-gray-600 leading-relaxed">
            {galleryItems[currentIndex].description}
          </p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
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
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default GallerySlider;
