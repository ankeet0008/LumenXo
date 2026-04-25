import React from "react";

const VideoShowcase = () => {
  return (
    <section className="bg-[#F8F7F4] py-12 px-6 flex justify-center">
      <div className="rounded-2xl overflow-hidden shadow-xl max-w-5xl w-full">
        <video
          src="/demo-video.mp4" // 🔁 replace with your actual video path
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default VideoShowcase;
