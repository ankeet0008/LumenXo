import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Globe,
  MessageCircle
} from 'lucide-react';
import imgInnovate from '../Assets/iovatewus.svg';

const GlobalFooter = ({ hrOnly = false }) => {
  return (
    <>
      <style>{`
        .innovate-section {
          padding: 80px 5%;
          background: #000;
        }

        .innovate-card {
          max-width: 1300px;
          margin: 0 auto;
          background: #141414;
          border-radius: 40px;
          padding: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .innovate-left {
          flex: 1;
          z-index: 2;
          max-width: 500px;
        }

        .innovate-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(48px, 6vw, 84px);
          font-weight: 800;
          line-height: 1;
          color: #fff;
          margin-bottom: 32px;
          letter-spacing: -0.04em;
        }

        .innovate-desc {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.5;
          margin-bottom: 48px;
          max-width: 400px;
        }

        .innovate-btns {
          display: flex;
          gap: 20px;
        }

        .btn-write {
          background: #FF5733;
          color: #fff;
          padding: 24px 48px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 18px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-write:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(255, 87, 51, 0.3);
        }

        .btn-book-dark {
          background: #2C2C2E;
          color: #fff;
          padding: 24px 48px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 18px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-book-dark:hover {
          background: #3C3C3E;
          transform: translateY(-5px);
        }

        .innovate-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          z-index: 1;
        }

        .innovate-svg {
          width: 100%;
          max-width: 700px;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 1024px) {
          .innovate-card {
            flex-direction: column;
            padding: 60px 40px;
            text-align: center;
          }
          .innovate-left {
            max-width: 100%;
            margin-bottom: 60px;
          }
          .innovate-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .innovate-btns {
            justify-content: center;
          }
          .innovate-right {
            width: 100%;
            justify-content: center;
          }
        }

        .agency-footer {
          background: #000;
          padding: 100px 5% 60px;
          color: #fff;
        }

        .footer-main {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 60px;
          padding-bottom: 80px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-cols {
          display: flex;
          gap: 100px;
        }

        .footer-col h4 {
          color: rgba(255, 255, 255, 0.4);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col ul li {
          margin-bottom: 16px;
        }

        .footer-col ul li a {
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .footer-col ul li a:hover {
          opacity: 1;
        }

        .footer-contact-large {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          flex: 1;
        }

        .footer-email-stack {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }

        .footer-email-large {
          font-family: 'Inter', sans-serif;
          font-size: clamp(24px, 3vw, 48px);
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          display: block;
          margin-bottom: 40px;
          letter-spacing: -0.02em;
          text-align: right;
        }

        .footer-social-row {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 20px;
        }

        .social-circle-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #1C1C1E;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-circle-btn:hover {
          background: #2C2C2E;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .footer-main {
            flex-direction: column;
            gap: 60px;
          }
          .footer-cols {
            gap: 40px;
            flex-wrap: wrap;
          }
          .footer-contact-large {
            align-items: flex-start;
          }
          .footer-email-stack {
            align-items: flex-start;
          }
          .footer-email-large {
            text-align: left;
            font-size: clamp(28px, 6vw, 48px);
          }
          .footer-social-row {
            justify-content: flex-start;
          }
        }
      `}</style>

      {/* INNOVATE WITH US SECTION */}
      <section className="innovate-section">
        <div className="innovate-card">
          <div className="innovate-left">
            <h2 className="innovate-title">Innovate<br />with us</h2>
            <p className="innovate-desc">
              Our creative solutions have helped clients raise $100+ mln and expand their reach.
            </p>
            <div className="innovate-btns">
              <Link to="/ContactUs" className="btn-write" style={{ display: 'inline-block', textDecoration: 'none' }}>Write us</Link>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText("+91 82605 69773");
                  alert("Phone number copied: +91 82605 69773");
                }} 
                className="btn-book-call" style={{
                background: '#2C2C2E',
                color: '#fff',
                padding: '24px 48px',
                borderRadius: '20px',
                fontWeight: '700',
                fontSize: '18px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}>Book a call</button>
            </div>
          </div>
          <div className="innovate-right">
            <img src={imgInnovate} alt="Graphics" className="innovate-svg" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="agency-footer">
        <div className="footer-main">
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/Careers">Careers</Link></li>
                <li><Link to="/Pricing">Blog</Link></li>
                <li><Link to="/ContactUs">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/service/administration">Administration</Link></li>
                <li><Link to="/service/application-development">Application Development</Link></li>
                <li><Link to="/service/web-design">Web Design</Link></li>
                <li><Link to="/service/digital-marketing">Digital Marketing</Link></li>
                <li><Link to="/service/wordpress">WordPress</Link></li>
                <li><Link to="/service/api-management">API Management</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                <li><Link to="/TermsOfService">Terms of Service</Link></li>
                <li><Link to="/CookiePolicy">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-contact-large">
            <div className="footer-email-stack">
              {hrOnly ? (
                <a href="mailto:hr@lumenxo.com" className="footer-email-large">hr@lumenxo.com</a>
              ) : (
                <>
                  <a href="mailto:info@lumenxo.com" className="footer-email-large">info@lumenxo.com</a>
                  <a href="mailto:support@lumenxo.com" className="footer-email-large">support@lumenxo.com</a>
                </>
              )}
            </div>
            <div className="footer-social-row">
              <a href="#" className="social-circle-btn"><Globe size={20} /></a>
              <a href="https://www.instagram.com/lumenxo__" target="_blank" rel="noopener noreferrer" className="social-circle-btn"><Instagram size={20} /></a>
              <a href="https://x.com/Lumenxoinc" target="_blank" rel="noopener noreferrer" className="social-circle-btn"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/company/lumenxo/" target="_blank" rel="noopener noreferrer" className="social-circle-btn"><Linkedin size={20} /></a>
              <a href="https://www.facebook.com/people/LumenXo-Inc/61573160147922/?rdid=Q108uaz8L7Wak14j&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19KfLtjtA2%2F" target="_blank" rel="noopener noreferrer" className="social-circle-btn"><Facebook size={20} /></a>
              <a href="https://www.whatsapp.com/channel/0029VaxwsYuJUM2jam4hDZ12" target="_blank" rel="noopener noreferrer" className="social-circle-btn"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ maxWidth: '1300px', margin: '40px auto 0' }}>
          <p>Copyright © 2025 LumenXo Inc. All rights reserved.</p>
          <p>Kuruda, Balasore, Odisha - India</p>
        </div>
      </footer>
    </>
  );
};

export default GlobalFooter;
