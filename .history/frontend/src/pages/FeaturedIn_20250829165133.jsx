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
    
  );
};

export default FeaturedIn;
