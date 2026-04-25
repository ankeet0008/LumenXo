import React from "react";

const About = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-end"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/02/95/46/25/360_F_295462565_ii654Qjx8mQCU8wz2WVBLtyE53Oh40vd.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-xl max-w-xl mr-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-4">
          We’re a team of developers, designers, and dreamers working together
          to build impactful digital products.
        </p>
        <p className="text-gray-600">
          With a passion for innovation and a dedication to quality, we aim to
          deliver solutions that transform ideas into reality.
        </p>
      </div>
    </section>
  );
};

export default About;
