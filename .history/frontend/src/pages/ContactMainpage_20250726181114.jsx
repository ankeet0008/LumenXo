import React from 'react';
import ContactForm from './ContactForm'; // separate form component

const ContactUs = () => {
  return (
    <section className="py-16 bg-[#003366] text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Company Info + Socials */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            It’s easier to reach your savings goals when you have the right savings account.
            Take a look and find the right one for you!
          </p>
          <p className="text-sm mb-6">
            <strong>LumenXo Software Pvt. Ltd.</strong> is a forward-thinking IT company
            committed to delivering powerful and scalable digital solutions that drive growth and innovation.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-white text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white text-black rounded-2xl p-8 max-w-md w-full mx-auto">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm mb-6">
            We list your menu online, help you process orders.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
