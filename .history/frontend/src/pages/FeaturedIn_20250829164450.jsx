import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img1 from "../assets/new1.jpg";

const FeaturedIn = () => {
  const newspapers = [
    { name: "Sambad", logo: "" },
   
  ];

  const [index, setIndex] = useState(0);

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

        {/* Newspaper Display */}
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
                className="h-32 w-auto mx-auto"
              />
            ) : (
              <span className="text-xl font-semibold">{newspapers[index].name}</span>
            )}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 p-2 rounded-full hover:bg-gray-200"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
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
    </section>
  );
};

export default FeaturedIn;
