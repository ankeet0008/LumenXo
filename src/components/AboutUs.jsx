import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, 
  Lightbulb, 
  ShieldCheck, 
  Gem,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Globe2
} from 'lucide-react';

import logoLumenXo from '../Assets/logolumenxo.png';
import GlobalFooter from './GlobalFooter';
import GlobalNavbar from './GlobalNavbar';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);



  useEffect(() => {
    // Reveal animations for content
    const reveals = gsap.utils.toArray('.reveal');
    reveals.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });

    // Timeline card animations
    const cards = gsap.utils.toArray('.year-card-wrapper');
    cards.forEach((card) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          }
        }
      );
    });

    // Mission Line-by-Line Masked Reveal
    gsap.fromTo(".mission-line", 
      { y: "100%", rotation: 5, opacity: 0 },
      {
        y: "0%",
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".black-mission-section",
          start: "top 75%",
        }
      }
    );

    // Stacked Pill Vision Animation
    const visionCtx = gsap.context(() => {
      const pills = gsap.utils.toArray('.vision-pill').reverse(); // 1 to 5
      const descs = gsap.utils.toArray('.vision-desc');

      // Initial State: All pills at bottom
      gsap.set(pills, { y: 200, opacity: 0, scale: 0.9 });
      gsap.set(descs, { opacity: 0, y: 20 });
      gsap.set(descs[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vision-section",
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // 1. STACK UP FIRST (Arrival)
      // We'll use the first 20% of the timeline for all pills to arrive and stack
      pills.forEach((pill, i) => {
        tl.to(pill, {
          y: -i * 20, // Stack effect
          opacity: 1,
          scale: 1 - i * 0.05,
          duration: 1,
          ease: "power2.out"
        }, 0.1 * i); // Staggered entry at the start
      });

      // 2. DISPERSE ONE BY ONE UP (Scroll)
      // As we scroll further, each pill goes up and out
      pills.forEach((pill, i) => {
        // Start dispersing after they've all arrived (around time 1.5)
        const startTime = 1.5 + i * 1.5;
        
        tl.to(pill, {
          y: -800, // Natural move UP
          rotate: i % 2 === 0 ? 10 : -10, // Subtle natural rotation on exit
          scale: 1.05,
          duration: 2,
          ease: "power2.in"
        }, startTime);

        // Description Swap tied to dispersal
        if (i < descs.length - 1) {
          tl.to(descs[i], { opacity: 0, y: -20, duration: 0.5 }, startTime + 0.5);
          tl.to(descs[i + 1], { opacity: 1, y: 0, duration: 0.5 }, startTime + 1);
        }
      });
    }, containerRef);

    return () => visionCtx.revert();
  }, []);

  return (
    <div ref={containerRef} className="about-white-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .about-white-container {
          background-color: #FFFFFF;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          color: #1C1C1E;
          overflow-x: hidden;
        }

        /* NAVBAR (Adjusted for white theme) */
        .navbar-wrapper {
          position: fixed;
          top: 30px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-wrapper.scrolled { top: 15px; }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0 12px 0 24px;
          border-radius: 12px;
          width: 90%;
          max-width: 900px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar.contracted {
          padding: 0 8px 0 20px;
          width: 80%;
          max-width: 700px;
        }

        .nav-links { display: flex; gap: 24px; }
        .nav-links a {
          color: rgba(0, 0, 0, 0.6);
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #000; }

        .nav-btn {
          background-color: #FF5733;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 12px 20px;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
        }

        /* HERO */
        .hero-section {
          padding: 160px 10% 80px 10%;
          text-align: center;
        }

        .hero-section h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 700;
          line-height: 1.1;
          color: #000;
          max-width: 900px;
          margin: 0 auto 60px auto;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1000px;
          margin: 0 auto;
          text-align: left;
        }

        .hero-text {
          font-size: 17px;
          line-height: 1.6;
          color: rgba(0, 0, 0, 0.5);
        }

        /* TIMELINE CARDS */
        .timeline-section {
          padding: 100px 10%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .year-card-wrapper {
          display: flex;
          align-items: center;
          gap: 60px;
          margin-bottom: 100px;
        }

        .year-card-wrapper.reverse {
          flex-direction: row-reverse;
        }

        .year-card {
          width: 380px;
          height: 260px;
          background: #F2F2F7;
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-shrink: 0;
        }

        .year-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 100px;
          font-weight: 700;
          color: #000;
        }

        .year-badge {
          position: absolute;
          right: 30px;
          top: 45%;
          transform: translateY(-50%) rotate(270deg);
          background: #7C4DFF;
          color: #fff;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          white-space: nowrap;
        }

        .year-desc {
          max-width: 450px;
        }

        .year-desc h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px;
          line-height: 1.3;
          color: #000;
        }

        /* BLACK MISSION SECTION */
        .black-mission-section {
          background-color: #000;
          padding: 160px 10%;
          text-align: center;
          color: #fff;
        }

        .mission-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 40px;
          display: block;
          color: rgba(255, 255, 255, 0.6);
        }

        .mission-text-reveal {
          font-family: 'Inter', sans-serif;
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 500;
          line-height: 1.5;
          max-width: 800px;
          margin: 0 auto;
          color: #fff;
        }

        /* WHY CHOOSE US */
        .why-us {
          padding: 100px 10%;
          background: #F9F9FB;
        }

        .section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 42px;
          text-align: center;
          margin-bottom: 60px;
          color: #000;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 30px;
        }

        .why-card {
          padding: 40px;
          background: #fff;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: transform 0.3s ease;
        }

        .why-card:hover { transform: translateY(-10px); }

        .why-card h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          margin: 20px 0 12px 0;
        }

        .why-card p {
          font-size: 14px;
          color: rgba(0,0,0,0.5);
          line-height: 1.6;
        }

        .text-ember { color: #FF5733; }

        /* FOOTER */
        .agency-footer {
          padding: 100px 10% 40px 10%;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .footer-main { display: flex; justify-content: space-between; margin-bottom: 60px; flex-wrap: wrap; gap: 40px; }
        .footer-email {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 700;
          color: #000;
          text-decoration: none;
        }

        .social-icon-btn {
          width: 44px; height: 44px;
          background: #F2F2F7;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: #000; transition: all 0.3s;
          text-decoration: none;
        }
        .social-icon-btn:hover { background: #FF5733; color: #fff; transform: translateY(-5px); }

        .footer-bottom {
          display: flex; justify-content: space-between;
          padding-top: 40px; border-top: 1px solid rgba(0, 0, 0, 0.05);
          color: rgba(0, 0, 0, 0.4); font-size: 14px;
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; gap: 30px; }
          .year-card-wrapper { flex-direction: column; gap: 30px; text-align: center; }
          .year-card { width: 100%; max-width: 380px; margin: 0 auto; }
          .year-desc { text-align: center; }
          .footer-contact { text-align: left; }
        }
        /* VISION SECTION */
        .vision-section {
          background: #000;
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vision-container {
          width: 90%;
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 120px;
        }

        .vision-left {
          flex: 0 0 auto;
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pill-stack {
          position: relative;
          width: 550px;
          height: 90px;
        }

        .vision-pill {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 120px;
          background: #A855F7;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: clamp(24px, 3vw, 40px);
          letter-spacing: -0.02em;
          box-shadow: 0 20px 50px rgba(168, 85, 247, 0.2);
          transform-origin: center;
          will-change: transform, opacity;
          padding: 0 40px;
          text-align: center;
        }

        /* Echo layers for depth */
        .vision-pill::before, .vision-pill::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(168, 85, 247, 0.4);
          border-radius: 999px;
          z-index: -1;
        }
        .vision-pill::before { transform: translateY(8px) scale(0.98); }
        .vision-pill::after { transform: translateY(16px) scale(0.96); opacity: 0.5; }

        .vision-right {
          flex: 0 0 auto;
          width: 380px;
          text-align: left;
          color: #fff;
        }

        .vision-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 20px;
          display: block;
        }

        .desc-wrapper {
          position: relative;
          height: 120px;
        }

        .vision-desc {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          opacity: 0;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .vision-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }
          .vision-right {
            text-align: center;
            width: 100%;
            max-width: 100%;
          }
          .vision-left {
            flex: 0 0 100%;
            height: 300px;
          }
          .pill-stack {
            width: 90vw;
            max-width: 450px;
          }
          .vision-pill {
            width: 100%;
            font-size: 20px;
            height: 80px;
            padding: 0 20px;
          }
          .desc-wrapper {
            height: 150px; 
          }
          .vision-desc {
            max-width: 320px;
            margin: 0 auto;
            left: 0;
            right: 0;
          }
        }
      `}</style>

      <GlobalNavbar theme="light" />

      {/* HERO */}
      <section className="hero-section">
        <h1 className="reveal">About Us</h1>
        <div className="hero-grid reveal">
          <div className="hero-text">
            Two founders saw technology as more than just lines of code. They were tired of the industry's outdated approach, which treated digital solutions as a mere "nice-to-have" rather than a powerful business catalyst.
            <br /><br />
            United by a shared vision, we created a technology powerhouse to bridge the gap between business goals and the digital world. We believe strategic engineering is the key to game-changing results for our clients.
          </div>
          <div className="hero-text">
            It was an ambitious goal, but once we set our sights on it, there was no turning back. All we needed was a faithful commitment to hard work and a relentless drive to redefine the role of technology in the business landscape.
            <br /><br />
            Today, we proudly announce that LumenXo has gathered a diverse team of designers, engineers, and strategists who are passionate about using technology to drive change in modern businesses worldwide.
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        {[
          { year: "2024", desc: "Born from a vision of two passionate founders who wanted to change the perception of technology in the business world." },
          { year: "2025", desc: "Scaled our operations globally, delivering enterprise-grade solutions to 50+ partners across three continents.", reverse: true },
          { year: "2026", desc: "Driving the future of AI and SaaS, empowering the next generation of digital leaders through innovation and mentorship." }
        ].map((item, idx) => (
          <div key={idx} className={`year-card-wrapper ${item.reverse ? 'reverse' : ''} reveal`}>
            <div 
              className="year-card"
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const fill = e.currentTarget.querySelector('.card-fill');
                const number = e.currentTarget.querySelector('.year-number');
                const badge = e.currentTarget.querySelector('.year-badge');
                
                gsap.set(fill, { x, y, scale: 0, opacity: 1 });
                gsap.to(fill, { scale: 10, duration: 0.8, ease: "power2.out" });
                gsap.to(number, { color: "#fff", duration: 0.4 });
                gsap.to(badge, { background: "#fff", color: "#7C4DFF", duration: 0.4 });
              }}
              onMouseLeave={(e) => {
                const fill = e.currentTarget.querySelector('.card-fill');
                const number = e.currentTarget.querySelector('.year-number');
                const badge = e.currentTarget.querySelector('.year-badge');
                
                gsap.to(fill, { opacity: 0, duration: 0.5, ease: "power2.in" });
                gsap.to(number, { color: "#000", duration: 0.4 });
                gsap.to(badge, { background: "#7C4DFF", color: "#fff", duration: 0.4 });
              }}
              style={{ overflow: 'hidden', cursor: 'pointer' }}
            >
              <div className="card-fill" style={{
                position: 'absolute',
                width: '100px',
                height: '100px',
                background: '#7C4DFF',
                borderRadius: '50%',
                pointerEvents: 'none',
                opacity: 0,
                transform: 'translate(-50%, -50%)',
                zIndex: 0
              }} />
              <div className="year-number" style={{ position: 'relative', zIndex: 1, fontSize: '80px' }}>{item.year}</div>
              <div className="year-badge" style={{ position: 'relative', zIndex: 1 }}>year</div>
            </div>
            <div className="year-desc">
              <h2>{item.desc}</h2>
            </div>
          </div>
        ))}
      </section>

      {/* BLACK MISSION SECTION */}
      <section className="black-mission-section">
        <span className="mission-label">Our mission</span>
        <h2 className="mission-text-reveal">
          {["We’re focused on transforming", "brands through emotional design", "and good usability in the most", "effective way on the market."].map((line, lineIdx) => (
            <div key={lineIdx} style={{ overflow: 'hidden', display: 'block', paddingBottom: '5px' }}>
              <span className="mission-line" style={{ display: 'block', transformOrigin: 'left top', willChange: 'transform, opacity' }}>
                {line}
              </span>
            </div>
          ))}
        </h2>
      </section>

      {/* VISION SECTION */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-left">
            <div className="pill-stack">
              <div className="vision-pill pill-5">Create Lasting Impact</div>
              <div className="vision-pill pill-4">Think Beyond Limits</div>
              <div className="vision-pill pill-3">Build for Humans</div>
              <div className="vision-pill pill-2">Design with Purpose</div>
              <div className="vision-pill pill-1">Innovate Boldly</div>
            </div>
          </div>

          <div className="vision-right">
            <span className="vision-label">Our Vision</span>
            <div className="desc-wrapper">
              <p className="vision-desc desc-1">
                We challenge conventions and push boundaries,<br />
                turning bold ideas into transformative realities.
              </p>
              <p className="vision-desc desc-2">
                Every pixel and interaction is crafted with intention,<br />
                creating experiences that truly resonate.
              </p>
              <p className="vision-desc desc-3">
                Technology exists to serve people,<br />
                so we center empathy in every decision we make.
              </p>
              <p className="vision-desc desc-4">
                We refuse the constraints of conventional thinking,<br />
                exploring uncharted creative and technical territory.
              </p>
              <p className="vision-desc desc-5">
                Our work outlives the moment —<br />
                built to leave a meaningful mark on the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2 className="section-title reveal">Why Choose Us?</h2>
        <div className="why-grid reveal">
          <div className="why-card">
            <Users className="text-ember" size={32} />
            <h4>Teamwork</h4>
            <p>Collaboration drives our success. We work as one unit with clients and internally to build powerful results.</p>
          </div>
          <div className="why-card">
            <Lightbulb className="text-ember" size={32} />
            <h4>Innovation</h4>
            <p>We thrive on solving complex problems with smart, scalable, and cutting-edge solutions tailored to client needs.</p>
          </div>
          <div className="why-card">
            <ShieldCheck className="text-ember" size={32} />
            <h4>Trust</h4>
            <p>Integrity is at the heart of everything we do—ensuring secure and reliable software delivery every time.</p>
          </div>
          <div className="why-card">
            <Gem className="text-ember" size={32} />
            <h4>Quality</h4>
            <p>We deliver top-tier solutions that meet global standards, ensuring performance, usability, and reliability.</p>
          </div>
        </div>
      </section>
      <GlobalFooter />
    </div>
  );
};

export default AboutUs;
