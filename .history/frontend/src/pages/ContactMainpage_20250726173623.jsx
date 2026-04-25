import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-[#f7fbff] flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold text-center mb-2">HAVE SOME QUESTIONS?</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8 mt-4">
        {/* Left: Icon + Address */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-sm text-gray-600 flex items-center gap-2">
            🌐 <span>MOLDOVA</span>
            <span className="text-blue-500 underline cursor-pointer">UK</span>
            <span className="text-gray-700">: Strada 31 August 1989 78, Chisinau, MD-2012</span>
          </div>

          <div className="mt-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png" // optional: replace with the envelope image in your design
              alt="Envelope"
              className="w-52 md:w-64"
            />
          </div>
        </div>

        {/* Right: Form */}
        <form className="flex flex-col w-full md:w-1/2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-3 rounded-full border border-gray-300 outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 rounded-full border border-gray-300 outline-none"
          />
          <input
            type="email"
            placeholder="What's your email?"
            className="p-3 rounded-full border border-gray-300 outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your questions..."
            className="p-3 rounded-xl border border-gray-300 outline-none"
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
