import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const socialLinks = [
  {
    icon: <FaFacebookF />,
    name: "Facebook",
    url: "https://www.facebook.com/people/LumenXo-Inc/61573160147922/?rdid=Q108uaz8L7Wak14j&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19KfLtjtA2%2F",
  },
  {
    icon: <FaTwitter />,
    name: "Twitter",
    url: "https://x.com/Lumenxoinc",
  },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    url: "https://www.instagram.com/lumenxo__/",
  },
  {
    icon: <FaYoutube />,
    name: "YouTube",
    url: "https://www.youtube.com/@Lumenxo",
  },
  {
    icon: <FaLinkedinIn />,
    name: "LinkedIn",
    url: "https://tr.ee/FsF_Mbaqy9",
  },
  {
    icon: <BsWhatsapp />,
    name: "WhatsApp",
    url: "https://www.whatsapp.com/channel/0029VaxwsYuJUM2jam4hDZ12",
  },
];

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <form noValidate validated={validated.toString()} onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className="min-h-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border rounded-xl w-full px-5"
          placeholder="Enter Name"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          className="min-h-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border rounded-xl w-full px-5"
          placeholder="Enter Email"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          className="min-h-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border rounded-xl w-full px-5"
          placeholder="Enter Message"
          rows="4"
        ></textarea>
      </div>
      <div className="text-start">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const InfoCard = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-[#162231] rounded-xl p-6 shadow-lg text-center">
    <div className="flex justify-center mb-4 text-blue-600 text-3xl">{icon}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const ContactFormCard = () => (
  <div className="bg-white dark:bg-[#162231] rounded-2xl border-[25px] dark:border-[#1C293A] border-[#F4F7FD] p-6 md:p-12">
    <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
      Contact Us
    </h2>
    <p className="text-lg mb-12">
      We're here to assist you! Reach out for inquiries, bookings, or support.
    </p>

    <ContactForm />
  </div>
);

const ContactUs = () => {
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
          <div className="grid grid-cols-12 gap-6 py-6">
            <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
              <h2 className="text-2xl leading-none font-bold md:text-[40px] mb-6 text-white">
                Get in Touch
              </h2>
              <p className="text-lg text-white mb-8">
                It’s easier to reach your goals when you have the right team. Contact LumenXo today!
              </p>

              <div className="space-y-4">
                <InfoCard
                  icon={<FaEnvelope />}
                  title="Email Us"
                  description="inc.lumenxo@gmail.com"
                />
                <InfoCard
                  icon={<FaPhoneAlt />}
                  title="Call Us"
                  description="+918260569773"
                />
                <InfoCard
                  icon={<FaMapMarkerAlt />}
                  title="Visit Us"
                  description="Balasore, Odisha, India"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full text-lg"
                      title={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
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

export default ContactUs;
