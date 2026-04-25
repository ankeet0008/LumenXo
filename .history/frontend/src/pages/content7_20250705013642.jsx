import React from "react";

export default function InvoicingHero() {
  return (
    <section className="bg-[#F8F7F4] min-h-screen py-20 px-4 flex flex-col items-center text-center">
      {/* Hero Text */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
          Say Hello to <br />
          <span className="text-[#6F4EF2]">Effortlessly Organized</span>{" "}
          Invoicing
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600">
          Designed for creators, consultants, and freelancers who want clarity
          without the clutter.
        </p>
      </div>

      {/* Video Showcase */}
      <div className="rounded-2xl overflow-hidden shadow-xl max-w-5xl w-full">
        <video
          src="/demo.mp4" // 🟡 Replace this with your actual video path
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
