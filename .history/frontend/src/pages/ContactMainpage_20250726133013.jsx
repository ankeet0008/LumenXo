import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzzgnzez");

  return (
    <form
      className=""
      noValidate
      onSubmit={handleSubmit}
    >
      {state.succeeded && (
        <div className="text-green-700 bg-green-100 rounded px-4 py-2 mb-4">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          required
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Name"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          required
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          required
          rows="4"
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Message"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className="text-start">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
        >
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

const ContactFormCard = () => (
  <div className="bg-white dark:bg-[#162231] rounded-2xl border-[25px] dark:border-[#1C293A] border-[#F4F7FD] p-6 md:p-12">
    <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
      Contact Us
    </h2>
    <p className="text-lg mb-12">
      We list your menu online, help you process orders.
    </p>
    <ContactForm />
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
      <p className="mb-1 text-gray-600 dark:text-gray-300">
        <strong>Email:</strong>{" "}
        <a
          href="mailto:inc.lumenxo@gmail.com"
          className="text-blue-600 hover:underline"
        >
          inc.lumenxo@gmail.com
        </a>
      </p>
      <p className="mb-1 text-gray-600 dark:text-gray-300">
        <strong>Phone:</strong>{" "}
        <a
          href="tel:+918260569773"
          className="text-blue-600 hover:underline"
        >
          +91 82605 69773
        </a>
      </p>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        <strong>Location:</strong> Balasore, Odisha, India
      </p>

      <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
      <div className="flex gap-3 text-white">
        <a
          href="https://www.facebook.com/people/LumenXo-Inc/61573160147922"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full"
          title="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://x.com/Lumenxoinc"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full"
          title="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/lumenxo__/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@Lumenxo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 p-3 rounded-full"
          title="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://tr.ee/FsF_Mbaqy9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.whatsapp.com/channel/0029VaxwsYuJUM2jam4hDZ12"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-full"
          title="WhatsApp"
        >
          <BsWhatsapp />
        </a>
      </div>
    </div>
  </div>
);

const ContactUs11 = () => {
  return (
    <section className="ezy__contact11 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
      <div
        className="bg-no-repeat bg-left-bottom bg-cover py-14"
        style={{
          backgroundImage:
            "url(https://cdn.easyfrontend.com/pictures/contact/contact_11.png)",
        }}
      >
        <div className="container px-4">
          <div className="grid grid-cols-12 py-6">
            <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
              <h2 className="text-2xl leading-none font-bold md:text-[40px] mb-6 text-white">
                Get in Touch
              </h2>
              <p className="text-lg text-white">
                It’s easier to reach your savings goals when you have the right
                savings account. Take a look and find the right one for you!
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <ContactFormCard />
            </div>
          </div>
        </div>
      </div>
      <div className="ezy__contact11-blank-card"></div>
    </section>
  );
};

export default ContactUs11;
