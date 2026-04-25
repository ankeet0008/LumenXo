import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { 
  Code, 
  Sparkles, 
  Palette, 
  TrendingUp, 
  Wrench, 
  Server,
  ArrowRight,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Globe
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import iconAngular from '../Assets/Angular.svg';
import iconCSS3 from '../Assets/CSS3.svg';
import iconDjango from '../Assets/Django.svg';
import iconDocker from '../Assets/Docker.svg';
import iconJava from '../Assets/Java.svg';
import iconMySQL from '../Assets/MySQL.svg';
import iconNode from '../Assets/Node.js.svg';
import iconPython from '../Assets/Python.svg';
import iconTailwind from '../Assets/Tailwind CSS.svg';
import iconVue from '../Assets/Vue.js.svg';
import iconHtml from '../Assets/html-icon.svg';
import iconJs from '../Assets/js-svgrepo-com.svg';
import iconReact from '../Assets/react-svgrepo-com.svg';
import MaskRevealGallery from './MaskRevealGallery';
import imgNew1 from '../Assets/new1.jpg';
import imgForbes from '../Assets/forbs.png';
import imgHindustan from '../Assets/hindustan.jpeg';
import imgMumbai from '../Assets/mumbai.jpeg';
import imgTedx from '../Assets/tedx.png';
import imgTep from '../Assets/TEP.webp';
import logoLumenXo from '../Assets/logolumenxo.png';
import photo1 from '../Assets/photo1.jpg';
import photo2 from '../Assets/photo2.jpg';
import photo3 from '../Assets/photo3.jpg';
import photo4 from '../Assets/photo4.png';
import photo5 from '../Assets/photo5.png';
import photo6 from '../Assets/photo6.jpeg';
import photo7 from '../Assets/photo7.jpeg';
import imgInnovate from '../Assets/iovatewus.svg';
import GlobalFooter from './GlobalFooter';
import GlobalNavbar from './GlobalNavbar';



const SpringCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cx = 120, cy = 120, R = 90;
    let animationFrameId;

    function drawDarkCircle() {
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = '#1a1a1a';
      ctx.fill();
    }

    function drawSpring3D() {
      const coils = 7;
      const coilRx = 22, coilRy = 7, tilt = 0.38;
      const startX = 71, startY = 74; // Adjusted from 88, 95 to center perfectly inside the circle
      const stepX = 7.2, stepY = 7.5;
      const totalSteps = coils * 2;

      for (let pass = 0; pass < 2; pass++) {
        for (let i = 0; i < totalSteps; i++) {
          const segments = 32;
          for (let s = 0; s < segments; s++) {
            const a0 = (s / segments) * Math.PI * 2;
            const a1 = ((s + 1) / segments) * Math.PI * 2;
            const inBack0 = Math.sin(a0) < 0;
            const inBack1 = Math.sin(a1) < 0;
            if (pass === 0 && (!inBack0 && !inBack1)) continue;
            if (pass === 1 && (inBack0 && inBack1)) continue;

            const nx  = startX + (i + s / segments) * stepX;
            const ny  = startY + (i + s / segments) * stepY;
            const nx2 = startX + (i + (s + 1) / segments) * stepX;
            const ny2 = startY + (i + (s + 1) / segments) * stepY;

            const x0 = nx  + Math.cos(a0) * coilRx;
            const y0 = ny  + Math.sin(a0) * coilRy - Math.cos(a0) * coilRx * tilt;
            const x1 = nx2 + Math.cos(a1) * coilRx;
            const y1 = ny2 + Math.sin(a1) * coilRy - Math.cos(a1) * coilRx * tilt;

            const b = Math.round(200 + Math.cos(a0) * 40);
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            
            // Keeping lighting math but applying a blue tint to match the user's screenshot
            ctx.strokeStyle = `rgb(${Math.max(0, b - 150)}, ${Math.max(0, b - 100)}, 255)`;
            
            ctx.lineWidth = pass === 0 ? 5 : 6;
            ctx.lineCap = 'round';
            ctx.stroke();
          }
        }
      }

      // End caps
      [0, totalSteps].forEach(i => {
        const ex = startX + i * stepX, ey = startY + i * stepY;
        const g = ctx.createLinearGradient(ex - coilRx, ey, ex + coilRx, ey);
        g.addColorStop(0, '#aaa'); g.addColorStop(0.4, '#eee'); g.addColorStop(1, '#888');
        ctx.beginPath();
        ctx.ellipse(ex, ey, coilRx, coilRy + 2, 0, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
        ctx.strokeStyle = '#999'; ctx.lineWidth = 1; ctx.stroke();
      });
    }

    function drawOrbit(angle) {
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,60,20,0.25)';
      ctx.lineWidth = 2.5; ctx.stroke();

      const steps = 120;
      for (let i = steps; i >= 0; i--) {
        const a = angle - (i / steps) * Math.PI * 2 * 0.22;
        const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
        const r = 3 * (1 - i / steps);
        if (r < 0.3) continue;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,60,20,${(1 - i / steps) * 0.9})`;
        ctx.fill();
      }
      const hx = cx + R * Math.cos(angle), hy = cy + R * Math.sin(angle);
      ctx.beginPath(); ctx.arc(hx, hy, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#ff3c14';
      ctx.shadowColor = '#ff5500'; ctx.shadowBlur = 8;
      ctx.fill(); ctx.shadowBlur = 0;
    }

    let t = 0;
    function loop() {
      ctx.clearRect(0, 0, 240, 240);
      drawDarkCircle();
      drawOrbit(t);
      drawSpring3D();
      t += 0.010;
      animationFrameId = requestAnimationFrame(loop);
    }
    loop();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
      <canvas ref={canvasRef} width={240} height={240} style={{ width: '120px', height: '120px' }} />
    </div>
  );
};

const DigitalAgencyHome = () => {
  const containerRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const tickerAnimRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleTickerEnter = () => {
    if (tickerAnimRef.current) {
      gsap.to(tickerAnimRef.current, { timeScale: 0.5, duration: 0.3 });
    }
  };

  const handleTickerLeave = () => {
    if (tickerAnimRef.current) {
      gsap.to(tickerAnimRef.current, { timeScale: 1, duration: 0.3 });
    }
  };

  const techStack = [
    { name: 'React', icon: iconReact },
    { name: 'Angular', icon: iconAngular },
    { name: 'Vue.js', icon: iconVue },
    { name: 'JavaScript', icon: iconJs },
    { name: 'HTML5', icon: iconHtml },
    { name: 'CSS3', icon: iconCSS3 },
    { name: 'Tailwind CSS', icon: iconTailwind },
    { name: 'Node.js', icon: iconNode },
    { name: 'Python', icon: iconPython },
    { name: 'Django', icon: iconDjango },
    { name: 'Java', icon: iconJava },
    { name: 'MySQL', icon: iconMySQL },
    { name: 'Docker', icon: iconDocker },
  ];



  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", (context) => {
      const { conditions } = context;
      
      // Desktop-specific or shared animations
      gsap.from(".navbar", { y: -40, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6, delay: 0.3 });
      gsap.from(".hero-word", {
        clipPath: "inset(100% 0 0 0)",
        y: 40,
        opacity: 0,
        stagger: 0.06,
        duration: 0.9,
        ease: "power4.out",
        delay: 0.5,
      });

      gsap.from(".float-card", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.7,
      });

      tickerAnimRef.current = gsap.fromTo(".ticker-inner", 
        { x: "-50%" },
        {
          x: "0%",
          duration: 18,
          ease: "none",
          repeat: -1
        }
      );

      gsap.set(".tech-card", { y: 120, opacity: 0 });
      gsap.set(".center-headline", { opacity: 0, y: 20 });
      gsap.set(".ticker-bar-bg", { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        }
      });

      tl.to(".orange-pill", {
        top: 0,
        width: "100vw",
        maxWidth: "100vw",
        height: "100vh",
        borderRadius: "0px",
        background: "#F97316",
        duration: 4,
        ease: "power2.inOut"
      }, 0);

      tl.to(".dark-overlay", { opacity: 1, duration: 4 }, 0);
      tl.to(".ticker-item", { fontSize: "120px", fontWeight: 800, duration: 4 }, 0);
      tl.to(".ticker-sep", { color: "rgba(255,255,255,0.6)", fontSize: "60px", margin: "0 60px", duration: 4 }, 0);
      tl.to(".center-headline", { opacity: 1, y: 0, duration: 2 }, 3);

      gsap.set(".tech-card", { 
        y: "50vh",
        x: () => gsap.utils.random(-200, 200),
        rotation: () => gsap.utils.random(-180, 180),
        opacity: 0,
        scale: () => gsap.utils.random(0.4, 0.6)
      });
      
      tl.to(".tech-card", {
        y: () => gsap.utils.random(-40, 20) + "vh",
        x: () => gsap.utils.random(-40, 40) + "vw",
        rotation: () => gsap.utils.random(-90, 90),
        opacity: 1,
        scale: () => gsap.utils.random(0.8, 1.4),
        duration: 3,
        stagger: { each: 0.05, from: "random" },
        ease: "power3.out",
      }, 5);

      tl.to(".tech-card", {
        y: "60vh",
        x: () => gsap.utils.random(-45, 45) + "vw",
        rotation: () => gsap.utils.random(-180, 180),
        opacity: 0,
        duration: 2.5,
        stagger: { each: 0.05, from: "random" },
        ease: "power2.in",
      }, 9);
    });

    mm.add("(max-width: 768px)", (context) => {
      // Mobile-specific animations
      gsap.from(".navbar", { y: -20, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(".hero-badge", { y: 10, opacity: 0, duration: 0.6, delay: 0.3 });
      gsap.from(".hero-word", {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });

      tickerAnimRef.current = gsap.fromTo(".ticker-inner", 
        { x: "-50%" },
        {
          x: "0%",
          duration: 12,
          ease: "none",
          repeat: -1
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          start: "top top",
          end: "+=1500",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        }
      });

      tl.to(".orange-pill", {
        top: 0,
        width: "100vw",
        maxWidth: "100vw",
        height: "100vh",
        borderRadius: "0px",
        duration: 4,
        ease: "power2.inOut"
      }, 0);

      tl.to(".ticker-item", { fontSize: "48px", fontWeight: 800, duration: 4 }, 0);
      tl.to(".ticker-sep", { fontSize: "24px", margin: "0 20px", duration: 4 }, 0);
      tl.to(".center-headline", { opacity: 1, y: 0, duration: 2, fontSize: "32px" }, 3);
    });

    // Shared animations (outside matchMedia if they apply to all)
    const ctx = gsap.context(() => {
      // Productivity and Widget animations
      gsap.to(".float-card", {
        y: "-=8",
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
        stagger: 0.4,
      });

      gsap.to(".float-circle", {
        y: "-=12",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });

      const widgetTl = gsap.timeline({ repeat: -1 });
      widgetTl.set(".anim-bar", { scaleY: 0 });
      widgetTl.set(".anim-line", { strokeDasharray: "300", strokeDashoffset: "300" });
      widgetTl.set(".anim-dot", { opacity: 0, scale: 0 });
      widgetTl.set(".anim-badge", { opacity: 0, y: 10 });
      
      widgetTl.to(".anim-bar", { scaleY: 1, duration: 0.65, ease: "back.out(1.5)", stagger: 0.13 });
      widgetTl.to(".anim-line", { strokeDashoffset: 0, duration: 1.2, ease: "power1.inOut" }, "+=0.2");
      widgetTl.to(".anim-dot", { opacity: 1, scale: 1, duration: 0.3, stagger: 1.2 / 5 }, "<");
      widgetTl.to(".anim-badge", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
      widgetTl.to({}, { duration: 1.43 });

      gsap.to(".welcome-letter", {
        scrollTrigger: {
          trigger: ".welcome-text-top",
          start: "top 80%",
          end: "bottom 40%",
          scrub: 1,
        },
        color: "#FFFFFF",
        stagger: 0.1,
      });

      gsap.from(".card-left", {
        scrollTrigger: { trigger: ".welcome-bento-grid-wide", start: "top 60%" },
        x: -200, rotation: -15, opacity: 0, duration: 1.2, ease: "power3.out",
      });

      gsap.from(".card-right", {
        scrollTrigger: { trigger: ".welcome-bento-grid-wide", start: "top 60%" },
        x: 200, rotation: 15, opacity: 0, duration: 1.2, ease: "power3.out",
      });

      // FEATURED SECTION ANIMATION
      gsap.from(".featured-image-container", {
        scrollTrigger: {
          trigger: ".featured-section",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

    }, containerRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="agency-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        :root {
          --slate: #1C1C1E;
          --graphite: #2C2C2E;
          --ember: #FF5733;
          --coral: #FF8C69;
          --pearl: #F2F2F7;
        }

        .agency-container {
          background-color: var(--slate);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          color: var(--pearl);
          overflow-x: hidden;
          position: relative;
          margin: 0;
          padding: 0;
        }

        /* NAVBAR */
        .navbar-wrapper {
          position: fixed;
          top: 30px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 1000;
          transition: top 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-wrapper.scrolled {
          top: 15px;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(44, 44, 46, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0 12px 0 24px;
          border-radius: 12px;
          width: 90%;
          max-width: 900px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar.contracted {
          padding: 0 8px 0 20px;
          width: 80%;
          max-width: 700px;
          background: rgba(44, 44, 46, 0.8);
        }

        .nav-logo {
          display: flex;
          align-items: center;
        }

        .nav-links {
          display: flex;
          gap: 24px;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--pearl);
        }

        .nav-btn {
          background-color: var(--ember);
          color: var(--pearl);
          border: none;
          border-radius: 8px;
          padding: 12px 20px;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s, background-color 0.2s;
          font-family: 'Inter', sans-serif;
        }

        .nav-btn:hover {
          background-color: #ff5e33;
          transform: scale(1.02);
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 101;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #FFFFFF;
          margin: 5px 0;
          transition: 0.3s;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          height: 100vh;
          background: var(--slate);
          z-index: 99;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-left: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu a {
          color: var(--pearl);
          text-decoration: none;
          font-size: 24px;
          font-weight: 600;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* HERO SECTION */
        .hero-section {
          position: relative;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 15vh;
          z-index: 10;
        }

        .hero-glow {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(10,10,10,0) 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-badge {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 32px;
          position: relative;
          z-index: 2;
        }

        .hero-headline {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(48px, 8vw, 96px);
          line-height: 1.05;
          text-align: center;
          margin: 0;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-line {
          overflow: hidden;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-word {
          display: inline-block;
          white-space: nowrap;
        }

        /* FLOATING CARDS */
        .float-card {
          position: absolute;
          background: #131313;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          z-index: 5;
        }

        /* Card 1: Stats */
        .card-stats {
          top: 25vh;
          left: 10%;
          width: 220px;
        }

        .card-stats-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0A0A0A;
          font-size: 18px;
        }

        .card-stats-num {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 32px;
        }

        .mini-bar-chart {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 40px;
        }

        .mini-bar {
          width: 12px;
          background: rgba(255,255,255,0.15);
          border-radius: 4px;
        }

        /* Card 2: Widget Control (New Square) */
        .card-widget {
          top: 55vh;
          left: 10%;
          width: 300px;
          height: 300px;
          background: #151515;
          border-radius: 18px;
          padding: 22px 24px;
          overflow: hidden;
          position: absolute;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        .widget-title-new {
          font-weight: 500;
          font-size: 16px;
          color: var(--pearl);
          letter-spacing: -0.01em;
          margin: 0 0 20px 0;
        }

        .chart-container {
          position: relative;
          width: 252px;
          height: 120px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 60px;
        }

        .chart-bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          height: 100%;
          justify-content: flex-end;
          z-index: 1;
        }

        .anim-bar {
          width: 42px;
          background: #2A2A2A;
          border-radius: 5px 5px 0 0;
          position: relative;
          transform-origin: bottom;
        }
        
        .anim-bar-active {
          background: #2E2E2E;
        }

        .anim-bar::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          border-left: 1px dashed rgba(255,255,255,0.12);
        }

        .chart-label {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
        }

        .chart-svg {
          position: absolute;
          top: 20px;
          left: 0;
          width: 252px;
          height: 100px;
          pointer-events: none;
          z-index: 2;
        }

        .anim-badge {
          position: absolute;
          bottom: 18px;
          right: 20px;
          width: 130px;
          background: #2B7FFF;
          border-radius: 14px;
          padding: 10px 16px 12px 16px;
          z-index: 3;
          box-sizing: border-box;
        }

        .anim-badge-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .anim-badge-label {
          font-weight: 500;
          font-size: 13px;
          color: rgba(255,255,255,0.9);
        }

        .anim-badge-val {
          font-weight: 700;
          font-size: 28px;
          color: var(--pearl);
          letter-spacing: -0.02em;
          margin: 0;
        }

        /* Card 3: Installs */
        .card-installs {
          top: 22vh;
          right: 12%;
          width: 260px;
        }

        .install-chart {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          height: 80px;
          margin-top: 16px;
        }

        .install-bar-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .install-bar {
          width: 100%;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        
        .bar-label {
          font-size: 10px;
          color: rgba(255,255,255,0.3);
        }

        /* Circle 4: Productivity */
        .float-circle {
          position: absolute;
          top: 55vh;
          right: 15%;
          width: 180px;
          height: 180px;
          background: #3B82F6;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 5;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4);
        }

        .circle-num {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 42px;
          line-height: 1;
        }

        .circle-text {
          font-size: 12px;
          text-align: center;
          margin-top: 4px;
          max-width: 120px;
          line-height: 1.2;
        }

        /* Bottom Right Fixed Pill */
        .bottom-pill {
          position: fixed;
          bottom: 25px; 
          right: 90px; /* To the left of the chatbot icon */
          background: linear-gradient(135deg, #a855f7 0%, #FFFFFF 100%);
          color: #0A0A0A;
          padding: 12px 24px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 2000;
          box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
          transition: transform 0.3s ease;
        }
        
        .bottom-pill:hover {
          transform: scale(1.05);
        }

        /* DARK OVERLAY FOR PINNED SECTION */
        .dark-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.55);
          opacity: 0;
          pointer-events: none;
          z-index: 15;
        }

        .orange-pill {
          position: absolute;
          top: 65vh; /* Moved down below the SaaS startups headline */
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 480px; 
          height: 100px; /* Thick pill shape */
          border-radius: 200px;
          background: #fa8415ff;
          overflow: hidden;
          will-change: width, height, border-radius, transform, max-width, background, top;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        .ticker-bar-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 64px;
          background: rgba(0,0,0,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.15);
          opacity: 0;
          pointer-events: none;
          z-index: 3;
        }

        .ticker-wrap-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          z-index: 4;
          overflow: hidden;
        }

        .ticker-inner {
          display: inline-flex;
          align-items: center;
          width: max-content;
          gap: 0;
          flex-shrink: 0;
        }

        .ticker-group {
          display: flex;
          align-items: center;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          white-space: nowrap;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 36px; /* Scaled down so text is clearly visible */
          color: var(--pearl); /* White so it pops clearly against the orange */
          letter-spacing: -0.02em;
        }

        .ticker-sep {
          color: rgba(17, 17, 17, 0.4);
          font-size: 24px;
          margin: 0 40px;
        }

        .center-headline {
          position: absolute;
          top: 35%; /* Shifted up so tech cards can take the middle */
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 52px;
          color: var(--pearl);
          letter-spacing: -0.03em;
          opacity: 0;
          z-index: 5;
          text-align: center;
          white-space: nowrap;
        }

        .tech-stack-container {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .tech-card {
          position: absolute;
          background: rgba(44, 44, 46, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 24px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
          font-size: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          will-change: transform, opacity;
        }

        .tech-icon {
          width: 48px;
          height: 48px;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .tech-stack-container {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          .float-card, .float-circle, .bottom-pill {
            display: none;
          }
          .hero-headline {
            font-size: clamp(40px, 10vw, 64px);
          }
        }

        @media (max-width: 768px) {
          .navbar {
            width: 95%;
            padding: 8px 16px;
          }
          .nav-links, .nav-btn {
            display: none;
          }
          .hamburger {
            display: block;
          }
          .hero-section {
            padding-top: 12vh;
          }
          .hero-line {
            gap: 8px;
          }
          .hero-badge {
            font-size: 10px;
            padding: 6px 12px;
            margin-bottom: 24px;
          }
          .orange-pill {
            top: 75vh;
            height: 100px;
          }
          .ticker-item {
            font-size: 24px;
          }
          .ticker-sep {
            margin: 0 20px;
            font-size: 18px;
          }
          
          /* Adjusting welcome section for mobile */
          .lumenxo-welcome-section {
            padding: 60px 20px;
          }
          .welcome-content-container {
            gap: 40px;
          }
        }

        .lumenxo-welcome-section {
          background: var(--slate);
          padding: 80px 60px;
          min-height: 100vh;
          width: 100%;
          position: relative;
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden; /* CRITICAL - prevents scrollbar during cartwheel */
        }

        .welcome-content-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
        }

        .welcome-text-top {
          width: 100%;
          text-align: center;
        }

        .welcome-title-letters {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: clamp(36px, 5vw, 64px);
          color: var(--pearl);
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 auto;
          max-width: 100%;
        }
        
        .title-line {
          display: block;
        }

        /* WORKING WITH SECTION */
        .working-with-section {
          padding: 80px 0;
          background: var(--slate);
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .working-with-title {
          text-align: center;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 50px;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 50px;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .marquee-content {
          display: flex;
          flex-shrink: 0;
          gap: 50px;
          animation: scrollMarquee 25s linear infinite;
        }

        .marquee-item {
          width: 220px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .marquee-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--ember);
          transform: translateY(-5px);
        }

        .marquee-item img {
          max-width: 70%;
          max-height: 50%;
          object-fit: contain;
          opacity: 0.9;
          filter: none; /* No grayscale */
          transition: all 0.3s ease;
        }

        .marquee-item:hover img {
          opacity: 1;
        }

        @keyframes scrollMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 50px)); }
        }

        /* INNOVATE WITH US SECTION */
        .innovate-section {
          padding: 100px 5%;
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

        /* Updated Footer Styles */
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
          text-align: right;
        }

        .footer-email-large {
          font-family: 'Inter', sans-serif;
          font-size: clamp(32px, 4vw, 64px);
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          display: block;
          margin-bottom: 40px;
          letter-spacing: -0.02em;
        }

        .footer-social-row {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
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
            text-align: left;
          }
          .footer-social-row {
            justify-content: flex-start;
          }
        }

        .welcome-letter {
          color: rgba(255, 255, 255, 0.15);
          will-change: color;
        }

        .welcome-bento-grid-wide {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
        }

        .bento-card {
          background: #141414;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 20px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        /* Pills & Icons */
        .bento-pill {
          background: #1E1E1E;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          padding: 8px 16px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: var(--pearl);
        }
        .bento-pill-icon {
          width: 28px;
          height: 28px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          font-size: 14px;
        }

        /* Typo */
        .bento-number-large {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: clamp(64px, 8vw, 96px);
          color: var(--pearl);
          letter-spacing: -0.04em;
          margin: 28px 0 0 0;
          line-height: 1;
          text-align: left;
        }
        .bento-number-medium {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: clamp(56px, 7vw, 88px);
          color: var(--pearl);
          letter-spacing: -0.04em;
          margin: 0;
          line-height: 1;
          text-align: left;
        }
        .bento-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.6;
          margin: 20px 0 0 0;
        }
        .box-1 .bento-desc { max-width: 280px; }
        .box-2 .bento-desc { max-width: 220px; }
        .box-3 .bento-desc { max-width: 300px; }

        /* Floating decorations */
        .bento-floating-icon {
          position: absolute;
          top: 28px;
          right: 28px;
          width: 72px;
          height: 72px;
          background: #1E1E1E;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
        }
        .red-dot {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 12px;
          height: 12px;
          background: #EF4444;
          border-radius: 50%;
        }

        .bento-avatar-stack {
          display: inline-flex;
          align-items: center;
        }
        .avatar-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #141414;
          margin-left: -10px;
        }
        .avatar-rocket {
          margin-left: 0;
          margin-right: 10px;
          z-index: 10;
          border: none;
        }

        .bento-floating-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #1E1E1E;
          border-radius: 12px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .muscle-icon { font-size: 24px; }
        .mini-stat-chip {
          background: #1A2A1A;
          border-radius: 8px;
          padding: 4px 8px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 11px;
          color: #22C55E;
          display: flex;
          align-items: center;
        }
        .green-arrow { margin-right: 2px; }

        /* Slot Machine */
        .slot-wrapper {
          display: flex;
          align-items: baseline;
          height: clamp(56px, 7vw, 88px);
          overflow: hidden;
        }
        .slot-col {
          position: relative;
          height: clamp(56px, 7vw, 88px);
          overflow: hidden;
        }
        .digit-strip {
          display: flex;
          flex-direction: column;
          will-change: transform;
        }
        .digit-strip span {
          display: block;
          height: clamp(56px, 7vw, 88px);
          line-height: 1;
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: clamp(56px, 7vw, 88px);
          color: var(--pearl);
          letter-spacing: -0.04em;
          text-align: left;
        }
        .slot-suffix {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: clamp(56px, 7vw, 88px);
          color: var(--pearl);
          letter-spacing: -0.04em;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .welcome-bento-grid-wide {
            grid-template-columns: 1fr;
          }
          .bento-number-large, .bento-number-medium, .digit-strip span, .slot-col, .slot-wrapper, .slot-suffix {
            font-size: clamp(48px, 12vw, 64px);
            height: clamp(48px, 12vw, 64px);
          }
        }

        /* FEATURED SECTION */
        .featured-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: var(--slate);
          z-index: 100;
          padding: 20px 0; /* Reduced top and bottom padding */
          overflow: hidden; /* to contain margins */
        }

        .featured-image-container {
          position: relative;
          width: 90%;
          max-width: 1200px;
          height: auto;
          border-radius: 20px;
          overflow: hidden;
          opacity: 1;
          margin: 0 auto 120px auto; /* 120px bottom margin to ensure space */
        }

        .featured-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .featured-image-container:hover .featured-image {
          transform: scale(1.05);
        }

        .featured-blank-space {
          height: 50vh;
          width: 100%;
          background: transparent;
        }

        .featured-overlay-text {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(32px, 5vw, 64px);
          color: var(--pearl);
          text-transform: uppercase;
          letter-spacing: -2px;
          margin: 0 auto 40px auto;
          text-align: left;
          width: 90%;
          max-width: 1200px;
        }

        /* MARQUEE STYLES */
        .marquee-wrapper {
          width: 100%;
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 40px 0 0 0; /* Minimal bottom padding */
          overflow: hidden;
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
        }

        .marquee-content {
          display: flex;
          gap: 120px; /* Increased from 80px */
          padding: 20px 0;
          white-space: nowrap;
          animation: marquee-forward 30s linear infinite;
        }

        .marquee-reverse .marquee-content {
          animation: marquee-backward 30s linear infinite;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          min-width: 200px;
          opacity: 1;
          transition: all 0.3s ease;
          text-decoration: none;
          padding: 0 40px;
        }

        .marquee-item:hover {
          opacity: 1;
          filter: none; /* Show original on hover */
          transform: scale(1.1);
        }

        .marquee-content {
          display: flex;
          width: max-content; /* Critical for seamless looping */
          animation: marquee-forward 20s linear infinite;
        }

        .marquee-reverse .marquee-content {
          animation: marquee-backward 20s linear infinite;
        }

        .marquee-item img {
          height: auto;
          max-height: 100%;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          display: block;
        }

        .tep-logo {
          filter: brightness(0) invert(1);
          transform: scale(1.4);
        }

        @keyframes marquee-forward {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* SERVICES SECTION */
        .home-services-section {
          padding: 120px 5%;
          background: var(--slate);
          position: relative;
        }

        .services-masonry {
          column-count: 2;
          column-gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .services-masonry {
            column-count: 1;
          }
        }

        .service-bento-card {
          break-inside: avoid;
          margin-bottom: 24px;
          background: rgba(44, 44, 46, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          padding: 48px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .service-bento-card:hover {
          background: rgba(59, 130, 246, 0.05);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-8px);
        }

        .service-bento-card.tall {
          min-height: 450px;
        }

        .service-bento-card.short {
          min-height: 300px;
        }

        .service-icon-wrapper {
          width: 64px;
          height: 64px;
          background: rgba(255, 87, 51, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ember);
          margin-bottom: 32px;
          transition: all 0.5s ease;
        }

        .service-bento-card:hover .service-icon-wrapper {
          background: var(--ember);
          color: var(--pearl);
          transform: rotate(10deg);
        }

        .service-bento-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--pearl);
          margin-bottom: 16px;
        }

        .service-bento-card p {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 32px;
          flex-grow: 1;
        }

        .service-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--pearl);
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: gap 0.3s ease;
        }

        .service-bento-card:hover .service-link {
          gap: 16px;
          color: var(--ember);
        }

        @keyframes marquee-backward {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* TESTIMONIALS SECTION */
        .testimonials-section {
          padding: 40px 5% 160px 5%; /* Significantly reduced top padding */
          background: var(--slate);
          position: relative;
        }

        .testimonials-header {
          margin-bottom: 80px;
          text-align: center;
        }

        .testimonials-subtitle {
          font-family: 'Inter', sans-serif;
          color: var(--ember);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
          display: block;
        }

        .testimonials-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: var(--pearl);
          line-height: 1.1;
        }

        .masonry-wall {
          column-count: 3;
          column-gap: 24px;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .masonry-wall {
            column-count: 2;
          }
        }

        @media (max-width: 640px) {
          .masonry-wall {
            column-count: 1;
          }
        }

        .testimonial-box {
          break-inside: avoid;
          margin-bottom: 24px;
          background: rgba(44, 44, 46, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 32px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(10px);
          cursor: default;
        }

        .testimonial-box:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .quote-icon {
          color: var(--ember);
          font-size: 40px;
          font-family: serif;
          line-height: 1;
          margin-bottom: 20px;
          opacity: 0.5;
        }

        .testimonial-text {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
          color: #fbbf24;
          font-size: 16px;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #FFF;
          font-size: 14px;
        }

        .author-info h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--pearl);
          margin: 0;
        }

        .author-info p {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        /* FOOTER */
        .agency-footer {
          background: var(--slate);
          padding: 120px 5% 40px 5%;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 60px;
          margin-bottom: 80px;
        }

        .footer-cols {
          display: flex;
          gap: 80px;
          flex-wrap: wrap;
        }

        .footer-col h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--pearl);
          margin-bottom: 24px;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col ul li {
          margin-bottom: 12px;
        }

        .footer-col ul li a {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          font-size: 15px;
          transition: color 0.2s;
        }

        .footer-col ul li a:hover {
          color: var(--pearl);
        }

        .footer-contact {
          text-align: right;
        }

        .footer-email {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 700;
          color: var(--pearl);
          text-decoration: none;
          display: block;
          margin-bottom: 32px;
          transition: color 0.3s;
        }

        .footer-email:hover {
          color: var(--ember);
        }

        .footer-socials {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }

        .social-icon-btn {
          width: 48px;
          height: 48px;
          background: rgba(44, 44, 46, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pearl);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-icon-btn:hover {
          background: var(--ember);
          transform: translateY(-5px);
          color: var(--pearl);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.4);
          font-size: 14px;
        }

        @media (max-width: 992px) {
          .footer-main {
            flex-direction: column;
            gap: 40px;
          }
          .footer-contact {
            text-align: left;
            width: 100%;
          }
          .footer-socials {
            justify-content: flex-start;
          }
        }
      `}</style>

      <GlobalNavbar theme="dark" />

      {/* 2. HERO SECTION & SCROLL TRIGGER EXPANDING PILL SECTION */}
      <section className="hero-section" ref={scrollSectionRef}>
        <div className="hero-glow"></div>
        <div className="hero-badge">Tenacity || Transformation || Triumph</div>
        
        <h1 className="hero-headline">
          <div className="hero-line">
            <span className="hero-word">Design</span>
            <span className="hero-word">&</span>
            <span className="hero-word">Brand</span>
          </div>
          <div className="hero-line">
            <span className="hero-word">Acceleration</span>
          </div>
          <div className="hero-line">
            <span className="hero-word">for</span>
            <span className="hero-word">Enterprises</span>
          </div>
        </h1>

        <div className="dark-overlay"></div>
        
        <div className="orange-pill">
          <div className="ticker-bar-bg"></div>
          
          <div 
            className="ticker-wrap-inner"
            onMouseEnter={handleTickerEnter}
            onMouseLeave={handleTickerLeave}
          >
            <div className="ticker-inner">
              <div className="ticker-group">
                <span className="ticker-item">Web Development<span className="ticker-sep">✦</span></span>
                <span className="ticker-item">App Development<span className="ticker-sep">✦</span></span>
                <span className="ticker-item">Consultancy<span className="ticker-sep">✦</span></span>
                <span className="ticker-item">Web Development<span className="ticker-sep">✦</span></span>
                <span className="ticker-item">App Development<span className="ticker-sep">✦</span></span>
                <span className="ticker-item">Consultancy<span className="ticker-sep">✦</span></span>
              </div>
              <div className="ticker-group">
                <span className="ticker-item">Web Development<span className="ticker-sep">✦</span></span>
                <span className="ticker-item">App Development<span className="ticker-sep">✦</span></span>
                <span className="ticker-item">Consultancy<span className="ticker-sep">✦</span></span>
                <span className="ticker-item">Web Development<span className="ticker-sep">✦</span></span>
                <span className="ticker-item">App Development<span className="ticker-sep">✦</span></span>
                <span className="ticker-item">Consultancy<span className="ticker-sep">✦</span></span>
              </div>
            </div>
          </div>

          <h2 className="center-headline">Built with the best.</h2>

          <div className="tech-stack-container">
            {techStack.map(tech => (
              <div className="tech-card" key={tech.name}>
                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

        </div>

        {/* 3. FLOATING UI WIDGET CARDS */}
        
        {/* Left Side */}
        <div className="float-card card-stats">
          <div className="card-stats-header">
            <div className="icon-circle">🚀</div>
            <div className="card-stats-num">346+</div>
          </div>
          <div className="mini-bar-chart">
            <div className="mini-bar" style={{height: '40%'}}></div>
            <div className="mini-bar" style={{height: '70%'}}></div>
            <div className="mini-bar" style={{height: '100%', background: '#FFFFFF'}}></div>
            <div className="mini-bar" style={{height: '50%'}}></div>
          </div>
        </div>

        <div className="float-card card-widget">
          <h3 className="widget-title-new">Widget control</h3>
          
          <div className="chart-container">
            <svg className="chart-svg" viewBox="0 0 252 100" preserveAspectRatio="none">
              <path className="anim-line" d="M 21 68 C 47 68, 47 56, 73.5 56 C 100 56, 100 45, 126 45 C 152 45, 152 32, 178.5 32 C 205 32, 205 14, 231 14" fill="none" stroke="#2B7FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle className="anim-dot" cx="21" cy="68" r="3.5" fill="#2B7FFF" />
              <circle className="anim-dot" cx="73.5" cy="56" r="3.5" fill="#2B7FFF" />
              <circle className="anim-dot" cx="126" cy="45" r="3.5" fill="#2B7FFF" />
              <circle className="anim-dot" cx="178.5" cy="32" r="3.5" fill="#2B7FFF" />
              <circle className="anim-dot" cx="231" cy="14" r="3.5" fill="#2B7FFF" />
            </svg>

            <div className="chart-bar-group">
              <div className="anim-bar" style={{height: '32px'}}></div>
              <div className="chart-label">Jan</div>
            </div>
            <div className="chart-bar-group">
              <div className="anim-bar" style={{height: '44px'}}></div>
              <div className="chart-label">Feb</div>
            </div>
            <div className="chart-bar-group">
              <div className="anim-bar" style={{height: '55px'}}></div>
              <div className="chart-label">Mar</div>
            </div>
            <div className="chart-bar-group">
              <div className="anim-bar" style={{height: '68px'}}></div>
              <div className="chart-label">Apr</div>
            </div>
            <div className="chart-bar-group">
              <div className="anim-bar anim-bar-active" style={{height: '86px'}}></div>
              <div className="chart-label">May</div>
            </div>
          </div>

          <div className="anim-badge">
            <div className="anim-badge-top">
              <span className="anim-badge-label">Result</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
                <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" />
              </svg>
            </div>
            <p className="anim-badge-val">+ 58%</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="float-card card-installs">
          <div className="widget-title" style={{color: '#FFFFFF'}}>Installs</div>
          <div className="install-chart">
            <div className="install-bar-container"><div className="install-bar" style={{height: '30%'}}></div><span className="bar-label">M</span></div>
            <div className="install-bar-container"><div className="install-bar" style={{height: '45%'}}></div><span className="bar-label">T</span></div>
            <div className="install-bar-container"><div className="install-bar" style={{height: '60%'}}></div><span className="bar-label">W</span></div>
            <div className="install-bar-container"><div className="install-bar" style={{height: '40%'}}></div><span className="bar-label">T</span></div>
            <div className="install-bar-container">
              <div className="install-bar" style={{height: '100%', background: '#22C55E'}}></div>
              <span className="bar-label" style={{color: '#FFF'}}>562</span>
            </div>
            <div className="install-bar-container">
              <div className="install-bar" style={{height: '70%', background: '#FACC15'}}></div>
              <span className="bar-label" style={{color: '#FFF'}}>286</span>
            </div>
            <div className="install-bar-container"><div className="install-bar" style={{height: '50%'}}></div><span className="bar-label">S</span></div>
          </div>
        </div>

        <div className="float-circle">
          <div className="circle-num">+30%</div>
          <div className="circle-text">Speed up your productivity</div>
        </div>


      </section>

      {/* 4. OVERLAPPING NEW PAGE SECTION */}
      <section className="lumenxo-welcome-section">
        <div className="welcome-content-container">
          
          <div className="welcome-text-top">
            <h1 className="welcome-title-letters">
              <span className="title-line">
                {"Welcome To LumenXo."
                  .split("")
                  .map((char, index) => (
                    <span key={`l1-${index}`} className="welcome-letter">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
              </span>
              <span className="title-line" style={{ marginTop: '8px' }}>
                {"We provide business consulting and tech solutions."
                  .split("")
                  .map((char, index) => (
                    <span key={`l2-${index}`} className="welcome-letter">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
              </span>
            </h1>
          </div>

          <div className="welcome-bento-grid-wide">
            {/* Box 1 */}
            <div className="bento-card box-1 card-left">
              <div className="bento-pill">
                <div className="bento-pill-icon">⚡</div>
                <span>Business-driven UX</span>
              </div>
              <h3 className="bento-number-large">50+</h3>
              <p className="bento-desc">Project Finished</p>
            </div>

            {/* Box 2 */}
            <div className="bento-card box-2 card-right">
              <SpringCanvas />
              <h3 className="bento-number-medium">40+</h3>
              <p className="bento-desc">Happy Clients</p>
            </div>

            {/* Box 3 */}
            <div className="bento-card box-3 card-left">
              <div className="bento-avatar-stack">
                <div className="bento-pill-icon avatar-rocket">🚀</div>
                <div className="avatar-circle" style={{background: '#FF6B6B'}}></div>
                <div className="avatar-circle" style={{background: '#FFD93D'}}></div>
                <div className="avatar-circle" style={{background: '#6BCB77'}}></div>
                <div className="avatar-circle" style={{background: '#4D96FF'}}></div>
                <div className="avatar-circle" style={{background: '#C77DFF'}}></div>
              </div>
              <h3 className="bento-number-large">30+</h3>
              <p className="bento-desc">Team</p>
            </div>

            {/* Box 4 */}
            <div className="bento-card box-4 card-right">
              <div className="bento-floating-badge">
                <span className="muscle-icon">💪</span>
                <span className="mini-stat-chip">
                  <div className="green-dot"></div>
                  +18%
                </span>
              </div>
              <h3 className="bento-number-medium">3+</h3>
              <p className="bento-desc" style={{marginTop: '0'}}>Products</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* WORKING WITH SECTION */}
      <section className="working-with-section">
        <h3 className="working-with-title">We are working with</h3>
        <div className="marquee-container">
          <div className="marquee-content">
            {[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo1, photo2, photo3, photo4, photo5, photo6, photo7].map((img, idx) => (
              <div key={`m1-${idx}`} className="marquee-item">
                <img src={img} alt="Partner" />
              </div>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo1, photo2, photo3, photo4, photo5, photo6, photo7].map((img, idx) => (
              <div key={`m2-${idx}`} className="marquee-item">
                <img src={img} alt="Partner" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <MaskRevealGallery />

      {/* SERVICES SECTION */}
      <section className="home-services-section">
        <div className="testimonials-header" style={{ textAlign: 'left', maxWidth: '1300px', margin: '0 auto 80px' }}>
          <span className="testimonials-subtitle">Services</span>
          <h2 className="testimonials-title">Innovative Solutions for <br /> Modern Businesses</h2>
        </div>

        <div className="services-masonry">
          <div className="service-bento-card tall">
            <div className="service-icon-wrapper">
              <Code size={32} />
            </div>
            <h3>App Development</h3>
            <p>Our application development services focus on creating robust, scalable, and intuitive software tailored specifically to your unique business needs. From initial ideation and architecture to full-scale deployment and integration.</p>
            <Link to="/Services" className="service-link">
              Explore More <ArrowRight size={16} />
            </Link>
          </div>

          <div className="service-bento-card short">
            <div className="service-icon-wrapper">
              <Palette size={32} />
            </div>
            <h3>Web Design</h3>
            <p>Modern, responsive, and user-centric websites with seamless navigation and visual aesthetics.</p>
            <Link to="/Services" className="service-link">
              Explore More <ArrowRight size={16} />
            </Link>
          </div>

          <div className="service-bento-card short">
            <div className="service-icon-wrapper">
              <TrendingUp size={32} />
            </div>
            <h3>Digital Marketing</h3>
            <p>End-to-end digital marketing solutions — SEO, strategy, content, and analytics.</p>
            <Link to="/Services" className="service-link">
              Explore More <ArrowRight size={16} />
            </Link>
          </div>

          <div className="service-bento-card tall">
            <div className="service-icon-wrapper">
              <Sparkles size={32} />
            </div>
            <h3>Administration</h3>
            <p>We provide strategic integration of operations for sustainable and efficient business practices. Our approach focuses on optimizing internal workflows and enhancing corporate governance for long-term operational excellence.</p>
            <Link to="/Services" className="service-link">
              Explore More <ArrowRight size={16} />
            </Link>
          </div>

          <div className="service-bento-card tall">
            <div className="service-icon-wrapper">
              <Wrench size={32} />
            </div>
            <h3>Maintenance</h3>
            <p>LumenXo provides comprehensive regular updates, security monitoring, and priority technical support to ensure your digital assets stay perfect and secure around the clock.</p>
            <Link to="/Services" className="service-link">
              Explore More <ArrowRight size={16} />
            </Link>
          </div>

          <div className="service-bento-card short">
            <div className="service-icon-wrapper">
              <Server size={32} />
            </div>
            <h3>Hosting</h3>
            <p>Reliable, secure, and lightning-fast cloud hosting solutions for your applications.</p>
            <Link to="/Services" className="service-link">
              Explore More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW FEATURED SECTION AT LAST */}
      <section className="featured-section">
        <div className="featured-inner" style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="featured-overlay-text">Featured In</div>
          <div className="featured-image-container">
            <img src={imgNew1} alt="Featured" className="featured-image" />
          </div>
        </div>

        <div className="marquee-wrapper">
          {/* Row 1: Forward */}
          <div className="marquee-container">
            <div className="marquee-content">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} style={{ display: 'flex' }}>
                  <a href="https://forbesamerica.com/lumenxo-emerges-as-a-growing-saas-and-software-development-company-in-india/" target="_blank" rel="noopener noreferrer" className="marquee-item"><img src={imgForbes} alt="Forbes" /></a>
                  <a href="https://hindustanreporter.com/lumenxo-driving-innovation-in-custom-software-cloud-and-saas-solutions/" target="_blank" rel="noopener noreferrer" className="marquee-item"><img src={imgHindustan} alt="Hindustan Times" /></a>
                  <a href="https://mumbaiexclusive.com/lumenxo-strengthens-its-position-in-the-software-industry-with-scalable-tech-solutions/" target="_blank" rel="noopener noreferrer" className="marquee-item"><img src={imgMumbai} alt="Mumbai" /></a>
                  <a href="https://tedxmagazine.com/lumenxo-driving-innovation-in-the-software-industry-through-modern-digital-solutions/" target="_blank" rel="noopener noreferrer" className="marquee-item"><img src={imgTedx} alt="TedX" /></a>
                  <a href="https://theentrepreneurpost.com/lumenxo-powering-digital-transformation-through-saas-and-custom-software-solutions/" target="_blank" rel="noopener noreferrer" className="marquee-item"><img src={imgTep} alt="TEP" className="tep-logo" /></a>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Backward */}
          <div className="marquee-container marquee-reverse">
            <div className="marquee-content">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} style={{ display: 'flex' }}>
                  <a href="https://forbesamerica.com/lumenxo-emerges-as-a-growing-saas-and-software-development-company-in-india/" target="_blank" rel="noopener noreferrer" className="marquee-item"><img src={imgForbes} alt="Forbes" /></a>
                  <a href="https://hindustanreporter.com/lumenxo-driving-innovation-in-custom-software-cloud-and-saas-solutions/" target="_blank" rel="noopener noreferrer" className="marquee-item"><img src={imgHindustan} alt="Hindustan Times" /></a>
                  <a href="https://mumbaiexclusive.com/lumenxo-strengthens-its-position-in-the-software-industry-with-scalable-tech-solutions/" target="_blank" rel="noopener noreferrer" className="marquee-item"><img src={imgMumbai} alt="Mumbai" /></a>
                  <a href="https://tedxmagazine.com/lumenxo-driving-innovation-in-the-software-industry-through-modern-digital-solutions/" target="_blank" rel="noopener noreferrer" className="marquee-item"><img src={imgTedx} alt="TedX" /></a>
                  <a href="https://theentrepreneurpost.com/lumenxo-powering-digital-transformation-through-saas-and-custom-software-solutions/" target="_blank" rel="noopener noreferrer" className="marquee-item"><img src={imgTep} alt="TEP" className="tep-logo" /></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="testimonials-inner" style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="testimonials-header">
          <span className="testimonials-subtitle">Testimonials</span>
          <h2 className="testimonials-title">What Our Partners Say</h2>
        </div>

        <div className="masonry-wall">
          <div className="testimonial-box">
            <div className="quote-icon">“</div>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              From the first meeting to final delivery, LUMENXO exceeded our expectations. Their custom software streamlined our workflow and boosted productivity across departments. The ongoing support has been exceptional.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">NM</div>
              <div className="author-info">
                <h4>Dr. Narayan Mohanty</h4>
                <p>Founder, AYURSUCCESS</p>
              </div>
            </div>
          </div>

          <div className="testimonial-box" style={{ marginTop: '40px' }}>
            <div className="quote-icon">“</div>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              What stood out was LUMENXO's attention to detail and commitment to quality. They treated our project like their own, and it shows in the results. The team's professionalism and technical expertise exceeded our expectations.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">BP</div>
              <div className="author-info">
                <h4>Bikash Pradhan</h4>
                <p>Founder & CEO, Winning Wavez</p>
              </div>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="quote-icon">“</div>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              LUMENXO's support team is incredibly responsive. Whenever we've had questions or issues, they've been there within minutes-true partners in every sense. Their dedication to client success is unmatched in the industry.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">JV</div>
              <div className="author-info">
                <h4>Jai Bharat Verma</h4>
                <p>Managing Director, PrepPright Ed-Tech Pvt. Ltd</p>
              </div>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="quote-icon">“</div>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              Efficiency and elegance combined. The solutions delivered by LumenXo are not just functional; they are a joy to use.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">DV</div>
              <div className="author-info">
                <h4>David Varga</h4>
                <p>Product Head, NexaCore</p>
              </div>
            </div>
          </div>

          <div className="testimonial-box" style={{ marginTop: '20px' }}>
            <div className="quote-icon">“</div>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              Their proactive approach to problem-solving sets them apart. They don't just build what you ask; they build what you actually need to grow.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">EL</div>
              <div className="author-info">
                <h4>Elena Rodriguez</h4>
                <p>Director, FinTech Innovate</p>
              </div>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="quote-icon">“</div>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              A rare combination of technical depth and creative vision. LumenXo is our go-to partner for all things digital transformation.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">TB</div>
              <div className="author-info">
                <h4>Thomas Berg</h4>
                <p>VP Engineering, GlobalScale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <GlobalFooter />
    </div>
  );
};

export default DigitalAgencyHome;
