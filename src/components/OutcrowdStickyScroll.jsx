import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OutcrowdStickyScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Highlight active menu item based on scroll position of cards
      const cards = gsap.utils.toArray(".sticky-card");
      const menuItems = gsap.utils.toArray(".sticky-menu-item");

      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => {
            if (self.isActive) {
              // Deactivate all
              gsap.to(menuItems, { color: "rgba(255,255,255,0.3)", scale: 1, originX: 0, duration: 0.3 });
              gsap.to(menuItems.map(m => m.querySelector('.sticky-dot')), { scale: 0, duration: 0.3 });
              
              // Activate current
              gsap.to(menuItems[i], { color: "#FFFFFF", scale: 1.05, duration: 0.3 });
              gsap.to(menuItems[i].querySelector('.sticky-dot'), { scale: 1, duration: 0.3, ease: "back.out" });
            }
          }
        });
      });
      
      // Entrance animation for the whole section
      gsap.from(".sticky-card", {
        scrollTrigger: {
          trigger: ".sticky-section",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const stages = [
    { id: "01", title: "Discovery", desc: "We dive deep into your brand, market, and audience to uncover the core insights that will drive our strategy." },
    { id: "02", title: "Strategy", desc: "Crafting a comprehensive roadmap that aligns your business goals with user needs and market opportunities." },
    { id: "03", title: "Design", desc: "Translating strategy into stunning, user-centric interfaces that captivate and convert." },
    { id: "04", title: "Development", desc: "Bringing designs to life with clean, scalable, and high-performance code." }
  ];

  return (
    <section ref={containerRef} className="sticky-section">
      <style>{`
        .sticky-section {
          background: #09090F;
          padding: 120px 80px;
          font-family: 'Inter', sans-serif;
          position: relative;
        }
        .sticky-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          gap: 100px;
          position: relative;
        }
        
        /* Left Sticky Column */
        .sticky-left {
          width: 35%;
          position: sticky;
          top: 200px;
          height: fit-content;
        }
        .sticky-eyebrow {
          font-size: 12px;
          color: #5B5BF6;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .sticky-title {
          font-size: 48px;
          font-weight: 800;
          color: #FFF;
          margin: 0 0 40px 0;
          line-height: 1.1;
        }
        .sticky-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          border-left: 1px solid rgba(255,255,255,0.1);
          padding-left: 30px;
          position: relative;
        }
        .sticky-menu-item {
          font-size: 20px;
          font-weight: 600;
          color: rgba(255,255,255,0.3);
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          position: relative;
          will-change: transform, color;
          cursor: default;
        }
        .sticky-menu-item:last-child {
          margin-bottom: 0;
        }
        .sticky-dot {
          position: absolute;
          left: -35px; /* 30px padding + 5px radius */
          width: 10px;
          height: 10px;
          background: #5B5BF6;
          border-radius: 50%;
          transform: scale(0);
          box-shadow: 0 0 10px rgba(91,91,246,0.5);
        }

        /* Right Scrolling Column */
        .sticky-right {
          width: 65%;
          display: flex;
          flex-direction: column;
          gap: 80px;
          padding-bottom: 100px; 
        }
        .sticky-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 30px;
          padding: 60px;
          display: flex;
          gap: 40px;
          align-items: flex-start;
          backdrop-filter: blur(20px);
          transition: border-color 0.3s;
        }
        .sticky-card:hover {
          border-color: rgba(91,91,246,0.3);
        }
        .card-number {
          font-size: 72px;
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          line-height: 0.8;
        }
        .card-content h3 {
          font-size: 32px;
          font-weight: 700;
          color: #FFF;
          margin: 0 0 20px 0;
        }
        .card-content p {
          font-size: 18px;
          color: rgba(160,160,184,0.85);
          line-height: 1.6;
          margin: 0;
        }
        
        @media (max-width: 1024px) {
          .sticky-container { flex-direction: column; gap: 60px; }
          .sticky-left { width: 100%; position: static; }
          .sticky-right { width: 100%; padding-bottom: 80px; gap: 40px; }
          .sticky-card { padding: 40px; flex-direction: column; gap: 20px; }
          .card-number { font-size: 48px; }
        }
        @media (max-width: 768px) {
          .sticky-section { padding: 60px 24px; }
          .sticky-card { padding: 30px; }
        }
      `}</style>
      
      <div className="sticky-container">
        <div className="sticky-left">
          <div className="sticky-eyebrow">OUR PROCESS</div>
          <h2 className="sticky-title">How we bring ideas to life.</h2>
          <ul className="sticky-menu">
            {stages.map((stage, i) => (
              <li key={i} className="sticky-menu-item">
                <div className="sticky-dot"></div>
                {stage.id} — {stage.title}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="sticky-right">
          {stages.map((stage, i) => (
            <div key={i} className="sticky-card">
              <div className="card-number">{stage.id}</div>
              <div className="card-content">
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcrowdStickyScroll;
