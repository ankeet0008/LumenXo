import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Email */}
        <div className="flex flex-col items-center">
          <div className="text-indigo-600 text-3xl mb-4">
            <FaEnvelope />
          </div>
          <h4 className="text-xl font-semibold mb-1">Email Us</h4>
          <p className="text-gray-600 text-sm">support@lumenxo.com</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center">
          <div className="text-indigo-600 text-3xl mb-4">
            <FaPhoneAlt />
          </div>
          <h4 className="text-xl font-semibold mb-1">Call Us</h4>
          <p className="text-gray-600 text-sm">+91 98765 43210</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center">
          <div className="text-indigo-600 text-3xl mb-4">
            <FaMapMarkerAlt />
          </div>
          <h4 className="text-xl font-semibold mb-1">Visit Us</h4>
          <p className="text-gray-600 text-sm">Bales, Odisha, India</p>
        </div>
      </div>
    </section>
  );
}
