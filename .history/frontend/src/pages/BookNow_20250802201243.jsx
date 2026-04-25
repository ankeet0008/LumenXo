import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const GetInTouchSection = () => {
  return (
    <section
      className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage:
          "url('https://weddingsathilton.com/wp-content/uploads/2021/04/getintouch.jpg')",
      }}
    >
      <div className="text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8">
          Let's discuss how we can collaborate. Reach out today and make your ideas a reality.
        </p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300">
          Start Your Project Today
        </button>

        {/* ICONS BELOW TEXT */}
        <div className="flex justify-center gap-8 mt-10">
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
