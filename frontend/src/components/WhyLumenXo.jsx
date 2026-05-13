import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyLumenXo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Badges continuous float
      gsap.to(".badge-1", { y: -8, duration: 2, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(".badge-2", { y: 6, duration: 2.5, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.5 });
      gsap.to(".badge-3", { y: -5, duration: 2.2, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.2 });

      // Left column slide in
      gsap.from(".why-left-col", {
        scrollTrigger: {
          trigger: ".why-lumenxo-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
      });

      // Right column heading stagger
      gsap.from(".why-heading-line", {
        scrollTrigger: {
          trigger: ".why-lumenxo-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
      });

      // 2x2 grid cards stagger
      gsap.from(".why-card", {
        scrollTrigger: {
          trigger: ".why-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        scale: 0.95,
        stagger: 0.1, // matches stagger nicely
        duration: 0.8,
        ease: "power3.out",
      });

      // Animated left edge line
      gsap.fromTo(".why-animated-line", 
        { height: 0 },
        {
          scrollTrigger: {
            trigger: ".why-right-col",
            start: "top 70%",
          },
          height: 60,
          duration: 1,
          ease: "power2.out"
        }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="why-lumenxo-section">
      <style>{`
        .why-lumenxo-section {
          background: #09090F;
          padding: 120px 80px;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          color: #FFFFFF;
        }

        /* Background enhancements */
        .why-glow-right {
          position: absolute;
          top: 50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(91,91,246,0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          transform: translateY(-50%);
        }
        .why-glow-left {
          position: absolute;
          top: 30%;
          left: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(91,91,246,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* Decorative */
        .why-separator {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
        }
        .why-dot-grid {
          position: absolute;
          top: 60px;
          right: 60px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          opacity: 0.5;
        }
        .why-dot {
          width: 2px;
          height: 2px;
          background: rgba(91,91,246,0.2);
          border-radius: 50%;
        }

        /* Layout */
        .why-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 60px;
          position: relative;
          z-index: 10;
        }
        .why-left-col {
          width: 45%;
          position: relative;
        }
        .why-right-col {
          width: 50%;
          position: relative;
        }

        /* Left Column - Illustration & Badges */
        .why-illustration-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          background: rgba(255,255,255,0.02);
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .why-illustration {
          width: 100%;
          height: 100%;
          object-fit: cover;
          mix-blend-mode: luminosity;
          opacity: 0.85;
        }
        
        .why-badge {
          position: absolute;
          border-radius: 100px;
          padding: 8px 16px;
          font-weight: 600;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(8px);
          will-change: transform;
        }
        .badge-1 {
          top: -20px;
          right: -20px;
          background: rgba(91,91,246,0.15);
          border: 1px solid rgba(91,91,246,0.3);
          color: #FFFFFF;
        }
        .badge-live-dot {
          width: 6px;
          height: 6px;
          background: #22C55E;
          border-radius: 50%;
          box-shadow: 0 0 10px #22C55E;
        }
        .badge-2 {
          bottom: -10px;
          left: -30px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.85);
        }
        .badge-3 {
          top: 40%;
          right: -40px;
          background: rgba(91,91,246,0.1);
          border: 1px solid rgba(91,91,246,0.2);
          color: rgba(255,255,255,0.85);
        }

        /* Right Column Typography */
        .why-animated-line {
          position: absolute;
          left: -24px;
          top: 0;
          width: 2px;
          background: linear-gradient(180deg, #5B5BF6, transparent);
        }
        .why-eyebrow {
          font-weight: 500;
          font-size: 12px;
          color: #5B5BF6;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .why-eyebrow::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #5B5BF6;
        }
        .why-heading-line {
          font-weight: 800;
          font-size: clamp(36px, 4vw, 52px);
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0;
        }
        .why-heading-wrap {
          margin-bottom: 20px;
        }
        .lumenxo-gradient {
          background: linear-gradient(135deg, #5B5BF6 0%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .why-subtext {
          font-weight: 400;
          font-size: 16px;
          color: rgba(160,160,184,0.85);
          line-height: 1.7;
          max-width: 460px;
          margin-bottom: 44px;
        }

        /* Grid & Cards */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          width: 100%;
        }
        .why-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 28px 24px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          will-change: transform;
        }
        .why-card:hover {
          border-color: rgba(91,91,246,0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(91,91,246,0.15);
        }
        .why-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%);
          border-radius: 20px 20px 0 0;
          pointer-events: none;
        }
        .why-card::after {
          content: '';
          position: absolute;
          top: -30px;
          right: -30px;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(91,91,246,0.25) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .why-card:hover::after {
          opacity: 1;
        }

        .why-card-icon-wrap {
          width: 40px;
          height: 40px;
          background: rgba(91,91,246,0.12);
          border: 1px solid rgba(91,91,246,0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          color: #5B5BF6;
        }
        .why-card-title {
          font-weight: 600;
          font-size: 16px;
          letter-spacing: -0.01em;
          margin: 0 0 10px 0;
          color: #FFFFFF;
        }
        .why-card-desc {
          font-weight: 400;
          font-size: 14px;
          color: rgba(160,160,184,0.7);
          line-height: 1.65;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .why-container {
            flex-direction: column;
          }
          .why-left-col, .why-right-col {
            width: 100%;
          }
        }
        @media (max-width: 768px) {
          .why-lumenxo-section {
            padding: 60px 24px;
          }
          .why-left-col {
            display: none;
          }
          .why-grid {
            grid-template-columns: 1fr;
          }
          .why-animated-line {
            display: none;
          }
        }
      `}</style>

      <div className="why-separator"></div>
      
      <div className="why-dot-grid">
        {[...Array(9)].map((_, i) => <div key={i} className="why-dot"></div>)}
      </div>

      <div className="why-glow-right"></div>
      <div className="why-glow-left"></div>

      <div className="why-container">
        
        <div className="why-left-col">
          <div className="why-illustration-wrap">
            {/* Placeholder for illustration */}
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          
          <div className="why-badge badge-1">
            <div className="badge-live-dot"></div>
            Project Live ✓
          </div>
          <div className="why-badge badge-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#5B5BF6">
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
            </svg>
            100% Satisfaction
          </div>
          <div className="why-badge badge-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#5B5BF6">
              <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"/>
            </svg>
            24/7 Support
          </div>
        </div>

        <div className="why-right-col">
          <div className="why-animated-line"></div>
          
          <div className="why-eyebrow">WHY LUMENXO</div>
          
          <div className="why-heading-wrap">
            <p className="why-heading-line">Why teams choose</p>
            <p className="why-heading-line"><span className="lumenxo-gradient">LumenXo.</span></p>
          </div>
          
          <p className="why-subtext why-heading-line">
            At LumenXo, we combine innovation, creativity, and technology to deliver solutions that exceed expectations.
          </p>

          <div className="why-grid">
            
            {/* Card 1 */}
            <div className="why-card">
              <div className="why-card-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#5B5BF6">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h4 className="why-card-title">Fast Performance</h4>
              <p className="why-card-desc">We develop lightning-fast websites optimized for speed and usability.</p>
            </div>

            {/* Card 2 */}
            <div className="why-card">
              <div className="why-card-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#5B5BF6">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              <h4 className="why-card-title">Creative Design</h4>
              <p className="why-card-desc">Designs that are not only stunning but also intuitive and user-friendly.</p>
            </div>

            {/* Card 3 */}
            <div className="why-card">
              <div className="why-card-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#5B5BF6">
                  <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"/>
                </svg>
              </div>
              <h4 className="why-card-title">24/7 Support</h4>
              <p className="why-card-desc">Our support team is available anytime to help you out.</p>
            </div>

            {/* Card 4 */}
            <div className="why-card">
              <div className="why-card-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#5B5BF6">
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                </svg>
              </div>
              <h4 className="why-card-title">Client Satisfaction</h4>
              <p className="why-card-desc">We prioritize your satisfaction with end-to-end project support.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyLumenXo;
