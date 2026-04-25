import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Img1 from "../assets/new1.jpg";

const FeaturedIn = () => {
  const newspapers = [
    { name: "Sambad", logo: Img1 },
    // add more newspapers here
  ];

  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false); // for zoom mode

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? newspapers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === newspapers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured In</h2>

        <div className="relative flex justify-center items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 p-2 rounded-full hover:bg-gray-200"
          >
            <ChevronLeft />
          </button>

          <div className="flex justify-center items-center w-full">
            {newspapers[index].logo ? (
              <img
                src={newspapers[index].logo}
                alt={newspapers[index].name}
                className="h-52 w-auto mx-auto cursor-pointer"
                onClick={() => setZoomed(true)} // open zoom on click
              />
            ) : (
              <span className="text-xl font-semibold">
                {newspapers[index].name}
              </span>
            )}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 p-2 rounded-full hover:bg-gray-200"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {newspapers.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full ${
                i === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Zoomed Image Modal */}
      {zoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            onClick={() => setZoomed(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <X size={32} />
          </button>
          <img
            src={newspapers[index].logo}
            alt={newspapers[index].name}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default FeaturedIn;
