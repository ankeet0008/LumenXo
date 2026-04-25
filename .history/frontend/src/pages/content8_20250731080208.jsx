import React from "react";
import Slider from "react-slick";
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

export default function ClientsSlider() {
  const settings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#E6F0FA] py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold">We're working with</h2>
        <p className="text-sm text-gray-600 mt-2">
          Building valuable collaborations with forward-thinking companies.
        </p>
      </div>

      <div className="overflow-hidden px-4">
        <Slider {...settings}>
          {partners.map((partner, idx) => (
            <div key={idx} className="px-3">
              <div className="bg-white shadow-md rounded-xl p-4 flex items-center justify-center h-40">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
