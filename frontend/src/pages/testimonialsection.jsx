import React, { useCallback, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Real testimonials from people who trusted us
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          ref={sliderRef}
          slidesPerView={1}
          spaceBetween={30}
          loop
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <SingleTestimonial {...t} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 z-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 text-2xl font-bold text-gray-700 hover:text-black transition"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 text-2xl font-bold text-gray-700 hover:text-black transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

const SingleTestimonial = ({ image, name, position, details }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 border rounded-lg shadow-md bg-white">
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-violet-500">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="text-center md:text-left max-w-2xl">
        <p className="text-gray-600 italic text-lg mb-4">“{details}”</p>
        <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </div>
  );
};

const testimonials = [
  {
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    name: "Bikash Pradhan",
    position: "Founder & CEO, Winning Wavez",
    details:
      "What stood out was LUMENXO’s attention to detail and commitment to quality. They treated our project like their own, and it shows in the results.",
  },
  {
    image:
      "https://i.pinimg.com/originals/1b/b6/3a/1bb63a1052a5ee95a1a82787297a66f8.jpg",
    name: "Dr. Narayan Mohanty",
    position: "Founder, AYURSUCCESS",
    details:
      "From the first meeting to final delivery, LUMENXO exceeded our expectations. Their custom software streamlined our workflow and boosted productivity across departments.",
  },
  {
    image:
      "https://img.olympics.com/images/image/private/t_s_1_1_g_auto/t_s_w860/f_auto/primary/iprne933bcl02qhx4onq",
    name: "Smruti Suman Badjena",
    position: "Founder, ThreatArena",
    details:
      "LUMENXO transformed our vision into a sleek, high-performing digital platform. Their team is fast, communicative, and incredibly skilled. We've seen noticeable growth since launch.",
  },
  {
    image:
      "https://tse2.mm.bing.net/th/id/OIP.B1jh3bySevLJ1Zq7iOEDeQHaHa?cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Jai Bharat Verma",
    position: "Managing Director, PrepPright Ed-Tech Pvt. Ltd",
    details:
      "LUMENXO’s support team is incredibly responsive. Whenever we’ve had questions or issues, they’ve been there within minutes—true partners in every sense.",
  },
];

export default Testimonial;
