import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import GlobalNavbar from "../components/GlobalNavbar";
import GlobalFooter from "../components/GlobalFooter";
import balasoreImg from "../Assets/balasore.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactUs11 = () => {
  const [state, handleSubmit] = useForm("mldlbald");
  const shutterRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const shutter = shutterRef.current;
    const wrapper = wrapperRef.current;
    if (!shutter || !wrapper) return;

    // Animate the shutter panel sliding up to reveal location section
    gsap.to(shutter, {
      yPercent: -100,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: () => `+=${window.innerHeight}`,
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <GlobalNavbar theme="light" />
      <style>{`
        /* SHUTTER LAYOUT */
        .contact-page-wrapper {
          position: relative;
          height: 200vh;
          overflow: visible;
        }

        .shutter-panel {
          position: sticky;
          top: 0;
          height: 100vh;
          z-index: 10;
          will-change: transform;
          overflow: hidden;
        }

        /* CONTACT FORM INNER */
        .contact-container {
          background-color: #ffffff;
          height: 100vh;
          padding: 160px 20px 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(64px, 10vw, 120px);
          font-weight: 800;
          color: #000;
          margin: 0;
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .contact-header p {
          font-size: 20px;
          color: #666;
          margin-top: 24px;
          font-weight: 500;
          line-height: 1.4;
        }

        .contact-header a {
          color: #6366f1;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: opacity 0.3s;
        }

        .contact-header a:hover {
          opacity: 0.7;
        }

        .contact-form {
          width: 100%;
          max-width: 520px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .input-field {
          background: #f4f4f7;
          border: none;
          border-radius: 20px;
          padding: 24px 28px;
          font-size: 18px;
          font-weight: 500;
          color: #000;
          width: 100%;
          outline: none;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .input-field::placeholder {
          color: #a0a0a0;
        }

        .input-field:focus {
          background: #efeff3;
          box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
        }

        select.input-field {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a0a0a0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 24px center;
          background-size: 18px;
          cursor: pointer;
        }

        textarea.input-field {
          min-height: 140px;
          resize: none;
        }

        .captcha-area {
          background: #333;
          border-radius: 4px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
          color: #fff;
          font-size: 12px;
        }

        .captcha-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .captcha-success-icon {
          width: 24px;
          height: 24px;
          background: #22c55e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submit-btn {
          background: #000;
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 20px 60px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          align-self: center;
          margin-top: 40px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .success-msg {
          text-align: center;
          padding: 60px 20px;
          background: #f0fdf4;
          border-radius: 30px;
          width: 100%;
          max-width: 520px;
        }

        .success-msg h2 {
          color: #166534;
          font-size: 32px;
          margin-bottom: 16px;
        }

        .success-msg p {
          color: #15803d;
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .contact-container {
            padding-top: 120px;
          }
          .contact-header h1 {
            font-size: 56px;
          }
          .contact-header p {
            font-size: 17px;
          }
          .input-field {
            padding: 20px 24px;
            font-size: 16px;
          }
        }
        .location-section {
          height: 100vh;
          width: 100%;
          display: flex;
          background: #efefef;
          overflow: hidden;
          position: sticky;
          top: 0;
          z-index: 1;
          margin-top: -100vh;
          font-family: 'Inter', sans-serif;
        }


        .left-panel {
          width: 55%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #efefef;
        }

        .location-content {
          text-align: center;
        }

        .location-city {
          font-family: 'Inter', sans-serif;
          font-size: clamp(60px, 8vw, 84px);
          font-weight: 700;
          color: #111;
          margin: 0 0 12px;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .location-address {
          font-size: 18px;
          color: #999;
          line-height: 1.6;
          margin-bottom: 40px;
          font-weight: 400;
        }

        .location-phone-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .phone-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          text-decoration: none;
          transition: all 0.3s;
        }

        .phone-icon-btn:hover {
          background: #000;
          color: #fff;
          transform: rotate(45deg);
        }

        .phone-number {
          font-size: 19px;
          font-weight: 500;
          color: #111;
        }

        .right-panel {
          width: 45%;
          height: 100%;
          border-radius: 24px 0 0 24px;
          overflow: hidden;
        }

        .right-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .location-section {
            flex-direction: column;
            height: auto;
            min-height: 100vh;
          }
          .right-panel {
            width: 100%;
            height: 40vh;
            border-radius: 0 0 24px 24px;
          }
          .left-panel {
            width: 100%;
            height: 60vh;
            padding: 80px 20px;
          }
          .location-city {
            font-size: 48px;
          }
          .location-navbar {
             width: 90%;
             gap: 10px;
          }
        }
      `}</style>

      <div ref={wrapperRef} className="contact-page-wrapper">
        <div ref={shutterRef} className="shutter-panel">
          <main className="contact-container">
        <div className="contact-header">
          <h1>Let's talk!</h1>
          <p>
            Got a project in mind? Fill in the form <br className="hidden md:block" />
            or send us a <a href="mailto:hello@lumenxo.io">direct email</a>
          </p>
        </div>

        {state.succeeded ? (
          <div className="success-msg">
            <h2>Success!</h2>
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input-field"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              name="message"
              placeholder="Message"
              className="input-field"
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting} className="submit-btn">
              {state.submitting ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
          </main>
        </div>

        <section className="location-section">
        <div className="left-panel">
          <div className="location-content">
            <h2 className="location-city">Balasore</h2>
            <div className="location-address">
              16192 Coastal Highway<br />
              Odisha 756001, India
            </div>
            <div className="location-phone-row">
              <a href="tel:+91 82605 69773" className="phone-icon-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <span className="phone-number">+91 8260569773</span>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Lewes Cityscape" />
        </div>
        </section>
      </div>

      <GlobalFooter />
    </>
  );
};

export default ContactUs11;

