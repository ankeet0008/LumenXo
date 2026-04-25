import React from "react";
import Img1 from "../Assets/new1.jp"

const FeaturedIn = () => {
  const newspapers = [
    { name: "Sambad", logo: "/logos/sambad.png" },
   
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Featured In
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {newspapers.map((paper, index) => (
            <div
              key={index}
              className="flex justify-center items-center grayscale opacity-60 hover:opacity-100 transition"
            >
              {paper.logo ? (
                <img
                  src={paper.logo}
                  alt={paper.name}
                  className="h-12 object-contain"
                />
              ) : (
                <span className="text-lg font-semibold text-gray-500">
                  {paper.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
