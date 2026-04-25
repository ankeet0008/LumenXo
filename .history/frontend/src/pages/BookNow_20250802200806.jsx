import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const GetInTouchSection = () => {
  return (
    <div
      className="text-center mt-20 bg-cover bg-center py-32 px-4"
      style={{
        backgroundImage:
          "url('https://weddingsathilton.com/wp-content/uploads/2021/04/getintouch.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl p-10 shadow-lg border border-gray-200 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
          Let's discuss how our services can help you achieve your goals. Get in
          touch for a free consultation and discover the possibilities.
        </p>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
          Start Your Project Today
        </button>

        {/* Icons below */}
        <div className="flex justify-center gap-8 mt-10 text-blue-600">
          <a href="tel:+1234567890" className="hover:text-blue-800">
            <Phone className="w-8 h-8" />
          </a>
          <a href="mailto:hello@example.com" className="hover:text-blue-800">
            <Mail className="w-8 h-8" />
          </a>
          <a href="#chat" className="hover:text-blue-800">
            <MessageCircle className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
