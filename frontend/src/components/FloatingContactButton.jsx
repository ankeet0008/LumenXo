import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

const FloatingContactButton = () => {
  return (
    <Link
      to="/ContactUs"
      className="fixed bottom-8 right-8 z-[9999] bg-[#F05A28] hover:bg-[#e04e20] text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(240,90,40,0.4)] hover:shadow-[0_0_40px_rgba(240,90,40,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 group"
    >
      <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <span>Book a call</span>
    </Link>
  );
};

export default FloatingContactButton;
