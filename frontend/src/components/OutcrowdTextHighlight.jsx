import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OutcrowdTextHighlight = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Split text animation without SplitText plugin (vanilla JS approach)
      const words = document.querySelectorAll(".highlight-word");
      
      gsap.fromTo(words, 
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".text-highlight-section",
            start: "top 60%",
            end: "bottom 70%",
            scrub: 1,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const text = "We transform ambitious ideas into powerful digital experiences. By blending strategic thinking with cutting-edge design, we build brands that don't just stand out—they lead.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="text-highlight-section">
      <style>{`
        .text-highlight-section {
          background: #09090F;
          padding: 160px 80px;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .highlight-container {
          max-width: 1000px;
          text-align: center;
        }
        .highlight-word {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: clamp(32px, 5vw, 64px);
          line-height: 1.2;
          color: #FFFFFF;
          margin-right: 12px;
          display: inline-block;
          will-change: opacity;
        }
        @media (max-width: 768px) {
          .text-highlight-section { padding: 80px 24px; }
          .highlight-word { margin-right: 8px; }
        }
      `}</style>
      <div className="highlight-container">
        {words.map((word, i) => (
          <span key={i} className="highlight-word">{word}</span>
        ))}
      </div>
    </section>
  );
};

export default OutcrowdTextHighlight;
