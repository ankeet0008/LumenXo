import React from "react";

export default function InvoicingHeroOverlay() {
  return (
    <section className="relative w-full min-h-screen bg-[#F8F7F4] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/demo.mp4" // ✅ Replace with your video
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F8F7F4]/60 backdrop-blur-md" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
          Say Hello to <br />
          <span className="text-[#6F4EF2]">Effortlessly Organized</span>{" "}
          Invoicing
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-700 max-w-xl">
          Designed for creators, consultants, and freelancers who want clarity
          without the clutter.
        </p>
      </div>
    </section>
  );
}
