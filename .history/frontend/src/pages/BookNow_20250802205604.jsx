import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const GetInTouchSection = () => {
  return (
    <section
      className="w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://weddingsathilton.com/wp-content/uploads/2021/04/getintouch.jpg')",
      }}
    >
      <div className="text-center px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h2>

        {/* ICONS BELOW TEXT */}
        <div className="flex justify-center gap-8 mt-6">
          <a href="tel:+1234567890" className="hover:text-blue-300 transition">
            <Phone className="w-8 h-8" />
          </a>
          <a href="mailto:hello@example.com" className="hover:text-blue-300 transition">
            <Mail className="w-8 h-8" />
          </a>
          <a href="#chat" className="hover:text-blue-300 transition">
            <MessageCircle className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
