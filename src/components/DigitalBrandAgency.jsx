import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function DigitalBrandAgency() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Nav entrance
      gsap.from(".nav-wrap", { y: -30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
      
      // Hero Headline
      gsap.from(".hero-word", {
        clipPath: "inset(100% 0 0 0)",
        y: 40,
        opacity: 0,
        stagger: 0.06,
        ease: "power4.out",
        duration: 1.2,
        delay: 0.5
      });

      // Cartwheel Left Cards
      gsap.from(".card-left", {
        x: -300,
        rotation: -120,
        opacity: 0,
        transformOrigin: "center center",
        stagger: 0.2,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.8,
      });

      // Cartwheel Right Cards
      gsap.from(".card-right", {
        x: 300,
        rotation: 120,
        opacity: 0,
        transformOrigin: "center center",
        stagger: 0.2,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.8,
      });

      // Continuous float
      gsap.to(".float-card", {
        y: "-=10",
        repeat: -1,
        yoyo: true,
        duration: 2.8,
        ease: "sine.inOut",
        stagger: { each: 0.5, from: "random" },
        delay: 2.0 // wait for entrance to finish
      });

      // Card A Rocket Rings
      gsap.to(".rocket-ring-1", { scale: 1.4, opacity: 0, repeat: -1, duration: 1.6, ease: "power2.out" });
      gsap.to(".rocket-ring-2", { scale: 1.8, opacity: 0, repeat: -1, duration: 1.6, delay: 0.6, ease: "power2.out" });
      gsap.to(".rocket-emoji", { y: -5, repeat: -1, yoyo: true, duration: 1.0, ease: "sine.inOut" });

      // Card B Line Animation
      if (lineRef.current) {
        const path = lineRef.current;
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, { strokeDashoffset: 0, duration: 2.0, ease: "power2.inOut", delay: 1.2 });
      }
      
      const obj = { val: 0 };
      gsap.to(obj, {
        val: 58,
        duration: 1.5,
        delay: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          if (percentRef.current) percentRef.current.textContent = `Result ↗ +${Math.round(obj.val)}%`;
        },
      });

      gsap.to(".line-dot", { scale: 1.5, opacity: 0.4, repeat: -1, yoyo: true, duration: 0.8, delay: 3.2 });

      // Card C Bars
      gsap.from(".bar", { scaleY: 0, transformOrigin: "bottom", stagger: 0.07, duration: 0.6, ease: "back.out(1.4)", delay: 1.4 });

      // Card D Circle
      gsap.from(".blue-circle-card", { scale: 0.5, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.5)", delay: 1.0 });
      gsap.to(".circle-ring", { rotation: 360, repeat: -1, duration: 4, ease: "none", transformOrigin: "center center" });

      // Center Mockup
      gsap.from(".center-mockup", { y: 80, opacity: 0, duration: 1.0, ease: "power4.out", delay: 1.0 });

      // Curved Arrow
      gsap.from(".curved-arrow-path", { strokeDashoffset: 300, strokeDasharray: 300, duration: 1.5, ease: "power2.inOut", delay: 1.5 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="dba-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@400;500;600&display=swap');
        
        .dba-container {
          background-color: #0A0A0A;
          min-height: 100vh;
          width: 100%;
          font-family: 'Outfit', sans-serif;
          color: #FFFFFF;
          overflow: hidden;
          position: relative;
        }

        /* --- NAVBAR --- */
        .nav-wrap {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 8px 12px 8px 24px;
          border-radius: 100px;
          width: 90%;
          max-width: 800px;
          z-index: 100;
        }
        .nav-logo { font-size: 24px; font-weight: 800; font-family: 'Syne', sans-serif; }
        .nav-links { display: flex; gap: 32px; font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.7); }
        .nav-links a { color: inherit; text-decoration: none; transition: color 0.2s; cursor: pointer; }
        .nav-links a:hover { color: #fff; }
        .nav-contact-btn {
          background: #FF4D1C;
          color: #fff;
          border-radius: 100px;
          padding: 10px 24px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          border: none;
        }

        /* --- HERO --- */
        .hero-section {
          padding-top: 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 10;
        }
        .hero-badge {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 32px;
          display: inline-block;
        }
        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0;
        }
        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(10,10,10,0) 70%);
          pointer-events: none;
          z-index: -1;
        }
        .hero-word {
          display: inline-block;
          margin-right: 14px;
          clip-path: inset(0 0 0 0); /* animated */
        }
        
        /* --- MAIN CONTENT AREA --- */
        .content-area {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 60px auto 100px;
          min-height: 600px;
        }

        /* --- CARDS BASE --- */
        .float-card {
          position: absolute;
          background: #121212;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          z-index: 20;
        }

        /* CARD A: Stats */
        .card-a { top: 0px; left: 0px; padding: 24px; width: 220px; }
        .card-a h2 { font-family: 'Syne', sans-serif; font-size: 48px; margin: 0; }
        .rocket-container { position: relative; width: 64px; height: 64px; margin-top: 16px; }
        .rocket-bg { position: absolute; width: 100%; height: 100%; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; z-index: 2; color: #000; }
        .rocket-ring { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; border: 2px solid rgba(255,77,28,0.6); z-index: 1; opacity: 0.5; }
        .mini-bars { display: flex; gap: 4px; margin-top: 20px; }
        .m-bar { width: 12px; border-radius: 4px; background: rgba(255,255,255,0.1); }

        /* CARD B: Widget */
        .card-b { bottom: 0px; left: 50px; padding: 24px; width: 280px; }
        .card-b-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .bicep { font-size: 24px; }
        .card-b-title { font-size: 14px; color: rgba(255,255,255,0.45); font-weight: 500; }
        .chart-svg { width: 100%; height: 60px; overflow: visible; }
        .result-pill { background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.3); color: #3B82F6; padding: 6px 12px; border-radius: 100px; font-size: 13px; font-weight: 600; display: inline-block; margin-top: 16px; }

        /* CARD C: Installs */
        .card-c { top: -20px; right: 0px; padding: 24px; width: 260px; }
        .card-c-title { font-size: 16px; font-weight: 600; margin: 0 0 20px 0; }
        .bars-container { display: flex; align-items: flex-end; gap: 8px; height: 100px; }
        .bar-col { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; }
        .bar-label { font-size: 11px; color: rgba(255,255,255,0.4); }
        .bar-track { width: 100%; background: rgba(255,255,255,0.05); border-radius: 4px; height: 100%; position: relative; display: flex; align-items: flex-end; }
        .bar { width: 100%; border-radius: 4px; }
        .bar-val { font-size: 12px; font-weight: 600; margin-bottom: 4px; }

        /* CARD D: Blue Circle */
        .card-d { bottom: 20px; right: 50px; background: transparent; border: none; box-shadow: none; width: 180px; height: 180px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .blue-circle-card { position: relative; width: 140px; height: 140px; background: #3B82F6; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; z-index: 2; box-shadow: 0 10px 30px rgba(59,130,246,0.4); }
        .bc-title { font-family: 'Syne', sans-serif; font-size: 32px; font-weight: 800; margin: 0; }
        .bc-sub { font-size: 10px; opacity: 0.8; max-width: 80px; line-height: 1.2; margin-top: 4px; }
        .circle-ring { position: absolute; top: -10px; left: -10px; width: 160px; height: 160px; border-radius: 50%; border: 1px dashed rgba(255,255,255,0.3); z-index: 1; border-top-color: transparent; }

        /* CENTER MOCKUP */
        .center-mockup {
          position: absolute;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          width: 580px;
          height: 400px;
          background: #141414;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          z-index: 10;
          padding: 32px;
          display: flex;
          flex-direction: column;
        }
        .cm-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .cm-title { font-family: 'Syne', sans-serif; font-style: italic; font-size: 22px; font-weight: 700; margin: 0; }
        .cm-dots { display: flex; gap: 6px; }
        .cm-dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.2); }
        
        .cm-body { display: flex; gap: 20px; flex: 1; }
        .cm-left { flex: 1; display: flex; flex-direction: column; gap: 12px; }
        .cm-row { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 16px; border-radius: 16px; display: flex; justify-content: space-between; align-items: center; }
        .cm-row-l { display: flex; gap: 12px; align-items: center; }
        .cm-icon { width: 32px; height: 32px; background: rgba(255,255,255,0.1); border-radius: 50%; }
        .cm-text-1 { width: 80px; height: 8px; background: rgba(255,255,255,0.4); border-radius: 4px; margin-bottom: 6px;}
        .cm-text-2 { width: 50px; height: 6px; background: rgba(255,255,255,0.1); border-radius: 4px; }
        .cm-val { font-weight: 600; font-size: 14px; }
        
        .cm-right { width: 140px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 16px; display: flex; flex-direction: column; justify-content: flex-end; gap: 8px; position: relative; }
        .cm-bar-p { width: 100%; height: 60%; background: #A855F7; border-radius: 8px; }
        .cm-bar-y { width: 100%; height: 40%; background: #FACC15; border-radius: 8px; }

        /* Floating Tags */
        .tag-green { position: absolute; top: -15px; right: -20px; background: #22C55E; color: #000; padding: 6px 12px; border-radius: 8px; font-size: 11px; font-weight: 700; transform: rotate(5deg); }
        .tag-purple { position: absolute; bottom: -15px; left: -20px; background: #A855F7; color: #fff; padding: 6px 12px; border-radius: 8px; font-size: 11px; font-weight: 700; transform: rotate(-5deg); }

        /* Curved Arrow */
        .arrow-svg { position: absolute; top: 180px; left: 240px; width: 100px; height: 60px; overflow: visible; z-index: 15; pointer-events: none; }

      `}</style>

      {/* 1. NAVBAR */}
      <nav className="nav-wrap">
        <div className="nav-logo">∞</div>
        <div className="nav-links">
          <a href="#">Cases</a>
          <a href="#">Service</a>
          <a href="#">Blog</a>
          <a href="#">About us</a>
        </div>
        <button className="nav-contact-btn">Contact</button>
      </nav>

      {/* 2. HERO HEADLINE */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        <div className="hero-badge">Digital brand design agency</div>
        <h1 className="hero-title">
          <div>
            {"Design & Brand".split(" ").map((word, i) => (
              <span key={i} className="hero-word">{word}</span>
            ))}
          </div>
          <div>
            {"Acceleration".split(" ").map((word, i) => (
              <span key={i} className="hero-word">{word}</span>
            ))}
          </div>
          <div>
            {"for SaaS Startups".split(" ").map((word, i) => (
              <span key={i} className="hero-word">{word}</span>
            ))}
          </div>
        </h1>
      </section>

      {/* 3 & 4. FLOATING CARDS & CENTER MOCKUP */}
      <div className="content-area">
        
        {/* CENTER MOCKUP */}
        <div className="center-mockup">
          <div className="cm-header">
            <h3 className="cm-title">Crypto platform for smart loans</h3>
            <div className="cm-dots">
              <div className="cm-dot"></div>
              <div className="cm-dot"></div>
              <div className="cm-dot"></div>
            </div>
          </div>
          <div className="cm-body">
            <div className="cm-left">
              <div className="cm-row">
                <div className="cm-row-l">
                  <div className="cm-icon"></div>
                  <div><div className="cm-text-1"></div><div className="cm-text-2"></div></div>
                </div>
                <div className="cm-val">$4,250</div>
              </div>
              <div className="cm-row">
                <div className="cm-row-l">
                  <div className="cm-icon"></div>
                  <div><div className="cm-text-1" style={{width: '60px'}}></div><div className="cm-text-2"></div></div>
                </div>
                <div className="cm-val">$1,100</div>
              </div>
              <div className="cm-row">
                <div className="cm-row-l">
                  <div className="cm-icon"></div>
                  <div><div className="cm-text-1" style={{width: '90px'}}></div><div className="cm-text-2"></div></div>
                </div>
                <div className="cm-val">$8,430</div>
              </div>
            </div>
            <div className="cm-right">
              <div className="tag-green">Analyze the market</div>
              <div className="tag-purple">payments</div>
              <div className="cm-bar-p"></div>
              <div className="cm-bar-y"></div>
            </div>
          </div>
        </div>

        {/* CARD A - Stats */}
        <div className="float-card card-left card-a">
          <h2>346+</h2>
          <div className="rocket-container">
            <div className="rocket-ring rocket-ring-2"></div>
            <div className="rocket-ring rocket-ring-1"></div>
            <div className="rocket-bg rocket-emoji">🚀</div>
          </div>
          <div className="mini-bars">
            <div className="m-bar" style={{height: '24px'}}></div>
            <div className="m-bar" style={{height: '40px', background: '#FF4D1C'}}></div>
            <div className="m-bar" style={{height: '16px'}}></div>
          </div>
        </div>

        {/* CARD B - Widget Control */}
        <div className="float-card card-left card-b">
          <div className="card-b-header">
            <span className="bicep">💪</span>
            <span className="card-b-title">Widget control</span>
          </div>
          <svg className="chart-svg" viewBox="0 0 180 60">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(34,197,94,0.4)" />
                <stop offset="100%" stopColor="rgba(34,197,94,0)" />
              </linearGradient>
            </defs>
            <polygon points="10,60 10,55 40,45 70,38 100,25 130,18 160,8 180,5 180,60" fill="url(#lineGrad)" opacity="0.5" />
            <path ref={lineRef} d="M10,55 L40,45 L70,38 L100,25 L130,18 L160,8 L180,5" stroke="#22C55E" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle className="line-dot" cx="180" cy="5" r="4" fill="#22C55E" />
          </svg>
          <div ref={percentRef} className="result-pill">Result ↗ 0%</div>
        </div>

        {/* CARD C - Installs */}
        <div className="float-card card-right card-c">
          <h4 className="card-c-title">Installs</h4>
          <div className="bars-container">
            {[
              {day: 'Mon', h: '30%', v: ''},
              {day: 'Tue', h: '50%', v: ''},
              {day: 'Wed', h: '40%', v: ''},
              {day: 'Thu', h: '60%', v: ''},
              {day: 'Fri', h: '100%', v: '562', color: '#22C55E'},
              {day: 'Sat', h: '75%', v: '286', color: '#FACC15'},
              {day: 'Sun', h: '45%', v: ''},
            ].map((b, i) => (
              <div key={i} className="bar-col">
                <span className="bar-val" style={{color: b.color || '#fff', opacity: b.v ? 1 : 0}}>{b.v || '0'}</span>
                <div className="bar-track">
                  <div className="bar" style={{height: b.h, background: b.color || 'rgba(255,255,255,0.2)'}}></div>
                </div>
                <span className="bar-label">{b.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CARD D - Blue Circle */}
        <div className="float-card card-right card-d">
          <div className="circle-ring"></div>
          <div className="blue-circle-card">
            <h2 className="bc-title">+30%</h2>
            <div className="bc-sub">Speed up your productivity</div>
          </div>
        </div>

        {/* Curved Arrow Decoration */}
        <svg className="arrow-svg" viewBox="0 0 100 60">
          <path className="curved-arrow-path" d="M10,50 Q40,10 90,30" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <polygon points="85,25 92,31 83,35" fill="rgba(255,255,255,0.4)" />
        </svg>

      </div>
    </div>
  );
}
