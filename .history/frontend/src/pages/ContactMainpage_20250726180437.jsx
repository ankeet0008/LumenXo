import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  User,
  Mail,
  MessageSquare,
} from "lucide-react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzzgnzez");

  return (
    <>
      {state.succeeded && (
        <div className="mb-6 flex items-center gap-2 text-green-600 bg-green-100 p-4 rounded">
          <span>✅ Thank you! Your message has been sent successfully.</span>
        </div>
      )}

      {!state.succeeded && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <div className="mb-3">
            <label className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <User className="w-4 h-4 text-gray-500" /> Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter Name"
              className="min-h-[44px] text-sm bg-[#F2F6FD] border border-transparent rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-4"
            />
          </div>

          <div className="mb-3">
            <label className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Mail className="w-4 h-4 text-gray-500" /> Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter Email"
              className="min-h-[44px] text-sm bg-[#F2F6FD] border border-transparent rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-4"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="mb-3">
            <label className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <MessageSquare className="w-4 h-4 text-gray-500" /> Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              placeholder="Enter Message"
              className="text-sm bg-[#F2F6FD] border border-transparent rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-4 py-2 resize-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-blue-600 hover:bg-opacity-90 text-white text-sm font-medium px-6 py-2 rounded transition"
            >
              {state.submitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

const ContactFormCard = () => (
  <div className="bg-white text-black rounded-2xl border-[20px] border-[#F4F7FD] p-6 md:p-10 shadow-md">
    <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
    <p className="text-base mb-6">
      We list your menu online, help you process orders.
    </p>
    <ContactForm />
  </div>
);

const ContactUs11 = () => {
  return (
    <section className="ezy__contact11 light bg-white text-zinc-900 overflow-hidden">
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
              <h2 className="text-2xl font-bold md:text-[36px] mb-4 text-white">
                Get in Touch
              </h2>
              <p className="text-base text-white">
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
    </section>
  );
};

export default ContactUs11;
