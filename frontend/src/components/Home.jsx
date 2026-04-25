import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logoLumenxo from '../Assets/logolumenxo.png';
import Content1 from '../pages/Content1';
import Content2 from '../pages/Content2';
import Content3 from '../pages/Content3';
import Content4 from '../pages/Content4';
import Content5 from '../pages/Content5';
import Content6 from '../pages/Content6';
import Content8 from '../pages/content8.jsx';
import FeatureIn from '../pages/FeaturedIn.jsx';
import GallerySlider from '../pages/Gallery.jsx';
import Footer from '../pages/footer';
import Testimonial from '../pages/testimonialsection';
import ContactUs from '../components/ContactUs';
import LumenIntro from './LumenIntro.jsx';

const Home = () => {
  const mainContentRef = React.useRef(null);
  const pageRef = React.useRef(null);

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.setAttribute('data-landing', 'digital-brand');
    styleTag.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@500;600;700&family=Roboto+Mono:wght@500&family=Syne:wght@700;800&display=swap');

      :root {
        color-scheme: dark;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        background: #0A0A0A;
        color: #FFFFFF;
        font-family: 'DM Sans', sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .page-root {
        min-height: 100vh;
        background: #0A0A0A;
        overflow: hidden;
        position: relative;
      }

      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 50;
        background: #0A0A0A;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .navbar-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 12px min(6vw, 40px);
        max-width: 1400px;
        margin: 0 auto;
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .logo-icon {
        display: flex;
        align-items: center;
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 24px;
        font-size: 14px;
        letter-spacing: 0.04em;
      }

      .nav-item {
        color: rgba(255, 255, 255, 0.7);
        font-weight: 500;
        transition: color 0.2s ease;
      }

      .nav-item:hover {
        color: #FFFFFF;
      }

      .contact-btn {
        background: #FF4D1C;
        color: #FFFFFF;
        border: none;
        border-radius: 999px;
        padding: 10px 20px;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
      }

      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 140px 6vw 80px;
        position: relative;
      }

      .hero::before {
        content: '';
        position: absolute;
        width: 720px;
        height: 420px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
        top: 160px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 0;
        pointer-events: none;
      }

      .hero-inner {
        max-width: 960px;
        text-align: center;
        position: relative;
        z-index: 2;
      }

      .hero-badge {
        display: inline-flex;
        align-items: center;
        padding: 8px 18px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.12);
        font-size: 12px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 28px;
      }

      .hero-title {
        font-family: 'Roboto Mono', monospace;
        font-size: clamp(36px, 5.6vw, 68px);
        font-weight: 500;
        line-height: 1.02;
        letter-spacing: -0.02em;
        color: #FFFFFF;
      }

      .hero-line {
        display: block;
        overflow: hidden;
      }

      .hero-word {
        display: inline-block;
        margin-right: 12px;
      }

      .hero-subtitle {
        margin-top: 22px;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.45);
        max-width: 640px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
      }

      .float-card {
        position: absolute;
        background: linear-gradient(160deg, #111111, #161616);
        border: 1px solid rgba(255, 255, 255, 0.07);
        border-radius: 24px;
        padding: 18px 20px;
        color: #FFFFFF;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      }

      .stats-card {
        top: 170px;
        left: 6vw;
        width: 200px;
      }

      .stats-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 14px;
      }

      .stats-value {
        font-size: 32px;
        font-weight: 700;
      }

      .icon-circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.12);
        display: grid;
        place-items: center;
        font-size: 18px;
      }

      .bar-chart {
        display: flex;
        gap: 8px;
        align-items: flex-end;
        height: 60px;
      }

      .bar {
        width: 18px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.2);
      }

      .pulse-circle {
        position: absolute;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.9);
        left: -18px;
        top: -18px;
        display: grid;
        place-items: center;
      }

      .widget-control {
        position: absolute;
        bottom: 200px;
        left: 200px;
        width: 260px;
        height: 260px;
        background: #151515;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 18px;
        padding: 22px 24px;
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
        font-family: 'Inter', sans-serif;
        z-index: 10;
        overflow: hidden;
      }

      .widget-title {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.01em;
        color: #FFFFFF;
        margin-bottom: 18px;
      }

      .widget-bars {
        display: flex;
        align-items: flex-end;
        gap: 10px;
        height: 110px;
        position: relative;
      }

      .widget-bar-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }

      .widget-bar {
        width: 34px;
        background: #2A2A2A;
        border-radius: 5px 5px 0 0;
        position: relative;
        transform: scaleY(0);
        transform-origin: bottom;
      }

      .widget-bar.active {
        background: #2E2E2E;
      }

      .widget-bar::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 1px;
        transform: translateX(-50%);
        border-left: 1px dashed rgba(255, 255, 255, 0.12);
      }

      .widget-bar-label {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.55);
      }

      .widget-bar-dots {
        width: 32px;
        border-top: 1px dashed rgba(255, 255, 255, 0.2);
      }

      .widget-line {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 110px;
        pointer-events: none;
      }

      .widget-line path {
        stroke: #2B7FFF;
        stroke-width: 2px;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 240;
        stroke-dashoffset: 240;
      }

      .widget-dot {
        fill: #2B7FFF;
        opacity: 0;
        transform-origin: center;
      }

      .widget-badge {
        position: absolute;
        bottom: 18px;
        right: 18px;
        width: 130px;
        background: #2B7FFF;
        border-radius: 14px;
        padding: 10px 16px 12px;
        color: #FFFFFF;
        opacity: 0;
        transform: translateY(10px);
      }

      .widget-badge-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 500;
      }

      .widget-badge-value {
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-top: 6px;
      }

      .installs-card {
        top: 170px;
        right: 6vw;
        width: 240px;
      }

      .installs-title {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 16px;
      }

      .week-bars {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 6px;
      }

      .week-bar {
        width: 20px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.15);
        position: relative;
      }

      .week-bar span {
        position: absolute;
        top: -18px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 10px;
        color: rgba(255, 255, 255, 0.55);
      }

      .week-labels {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        font-size: 10px;
        color: rgba(255, 255, 255, 0.45);
      }

      .productivity-card {
        bottom: 200px;
        right: 10vw;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background: #3B82F6;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 16px;
      }

      .productivity-value {
        font-size: 32px;
        font-weight: 700;
      }

      .productivity-text {
        font-size: 12px;
        margin-top: 6px;
        color: rgba(255, 255, 255, 0.9);
      }

      .center-mockup {
        width: min(680px, 90vw);
        margin: 120px auto 0;
        background: #111111;
        border-radius: 32px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        padding: 30px;
        position: relative;
        z-index: 2;
      }

      .mockup-title {
        font-family: Georgia, 'Times New Roman', serif;
        font-style: italic;
        font-size: 26px;
        margin-bottom: 20px;
      }

      .mockup-dashboard {
        background: #0F0F0F;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.06);
        padding: 24px;
        display: grid;
        gap: 16px;
      }

      .dashboard-row {
        display: flex;
        gap: 16px;
      }

      .dashboard-card {
        flex: 1;
        background: #151515;
        border-radius: 16px;
        padding: 16px;
        border: 1px solid rgba(255, 255, 255, 0.05);
      }

      .dashboard-bars {
        display: flex;
        gap: 8px;
        align-items: flex-end;
        height: 80px;
        margin-top: 12px;
      }

      .dashboard-bars div {
        width: 18px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.2);
      }

      .tag {
        position: absolute;
        padding: 8px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
      }

      .tag-green {
        background: #22C55E;
        color: #0A0A0A;
        top: 28px;
        left: 24px;
      }

      .tag-purple {
        background: #6D28D9;
        color: #FFFFFF;
        bottom: 26px;
        right: 28px;
      }


      .sticky-actions {
        position: absolute;
        right: 6vw;
        bottom: 80px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }

      .book-pill {
        padding: 10px 18px;
        border-radius: 999px;
        background: linear-gradient(120deg, #7C3AED, #FFFFFF);
        color: #0A0A0A;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
      }

      .key-features {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
        max-width: 120px;
        overflow: hidden;
        white-space: nowrap;
      }

      .lightning {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #FF4D1C;
        display: grid;
        place-items: center;
        color: #0A0A0A;
        font-weight: 700;
      }

      @media (max-width: 920px) {
        .nav-links { display: none; }
        .stats-card, .installs-card, .productivity-card, .sticky-actions { display: none; }
        .hero-title { font-size: clamp(32px, 8vw, 56px); }
      }

      @media (max-width: 768px) {
        .hero { padding: 100px 5% 60px; }
        .hero-title { font-size: 36px; }
        .hero-subtitle { font-size: 16px; }
        .center-mockup { width: 95%; margin-top: 60px; padding: 20px; }
        .mockup-title { font-size: 20px; }
        .dashboard-row { flex-direction: column; }
        .widget-control { display: none; }
      }

      @media (max-width: 480px) {
        .hero-title { font-size: 28px; }
        .hero-badge { font-size: 10px; padding: 6px 14px; }
        .mockup-dashboard { padding: 12px; }
      }
    `;
    document.head.appendChild(styleTag);

    const ctx = gsap.context(() => {
      gsap.from('.navbar', { y: -40, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, delay: 0.3 });
      gsap.from('.hero-word', {
        clipPath: 'inset(100% 0 0 0)',
        y: 40,
        opacity: 0,
        stagger: 0.06,
        duration: 0.9,
        ease: 'power4.out',
        delay: 0.5,
      });
      gsap.from('.float-card', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.7,
      });
      gsap.from('.widget-control', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.5,
      });
      gsap.from('.center-mockup', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.9,
      });
      gsap.to('.float-card', {
        y: '-=8',
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: 'sine.inOut',
        stagger: 0.4,
      });

      const widgetTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.1 });
      widgetTimeline.set(['.widget-bar', '.widget-line path', '.widget-dot', '.widget-badge'], {
        clearProps: 'all',
      });
      widgetTimeline.set('.widget-bar', { scaleY: 0 });
      widgetTimeline.set('.widget-line path', { strokeDashoffset: 240 });
      widgetTimeline.set('.widget-dot', { opacity: 0, scale: 0 });
      widgetTimeline.set('.widget-badge', { opacity: 0, y: 10 });
      widgetTimeline.to('.widget-bar', {
        scaleY: 1,
        duration: 0.65,
        ease: 'cubic-bezier(0.34, 1.3, 0.64, 1)',
        stagger: 0.13,
      });
      widgetTimeline.to('.widget-line path', {
        strokeDashoffset: 0,
        duration: 1.35,
        ease: 'power1.inOut',
      }, '>-0.05');
      widgetTimeline.to('.widget-dot', {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        stagger: 0.2,
      }, '<');
      widgetTimeline.to('.widget-badge', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, '>-0.1');
    });

    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      const widgetShift = Math.min(28, scrollY * 0.2);
      const bodyShift = Math.min(80, Math.max(0, scrollY - 180) * 0.12);
      gsap.to('.scroll-widget', { y: -widgetShift, duration: 0.25, ease: 'power2.out' });
      gsap.to('.scroll-body', { y: -bodyShift, duration: 0.25, ease: 'power2.out' });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', onScroll);
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="page-root" ref={pageRef}>
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            <a href="/" className="logo-icon">
              <img src={logoLumenxo} alt="LumenXo" style={{ height: '40px' }} />
            </a>
          </div>
          <div className="nav-links">
            <a href="#cases" className="nav-item">Cases</a>
            <a href="#service" className="nav-item">Service</a>
            <a href="#blog" className="nav-item">Blog</a>
            <a href="#about" className="nav-item">About us</a>
          </div>
          <button className="contact-btn">Contact</button>
        </div>
      </nav>

      <main className="main-content" ref={mainContentRef}>
        <section className="hero" ref={heroRef}>
          <div className="hero-inner scroll-body">
            <div className="hero-badge">Digital brand design agency</div>
            <h1 className="hero-title">
              <span className="hero-line">
                <span className="hero-word">Design,</span>
                <span className="hero-word">Development</span>
                <span className="hero-word">&</span>
                <span className="hero-word">Brand</span>
              </span>
              <span className="hero-line">
                <span className="hero-word">Acceleration</span>
                <span className="hero-word">for</span>
                <span className="hero-word">Enterprises</span>
              </span>
            </h1>
            <p className="hero-subtitle">
              We build high-velocity brand systems, product interfaces, and launch-ready
              storytelling tailored for modern SaaS teams.
            </p>

            <div className="center-mockup">
              <span className="tag tag-green">Analyze the market</span>
              <span className="tag tag-purple">payments</span>
              <div className="mockup-title">Crypto platform for smart loans</div>
              <div className="mockup-dashboard">
                <div className="dashboard-row">
                  <div className="dashboard-card">
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Wallet balance</div>
                    <div style={{ fontSize: '20px', fontWeight: 700, marginTop: '6px' }}>$42,890</div>
                    <div className="dashboard-bars">
                      <div style={{ height: '35px' }}></div>
                      <div style={{ height: '60px', background: '#22C55E' }}></div>
                      <div style={{ height: '48px' }}></div>
                      <div style={{ height: '72px', background: '#FACC15' }}></div>
                    </div>
                  </div>
                  <div className="dashboard-card">
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Active loans</div>
                    <div style={{ fontSize: '20px', fontWeight: 700, marginTop: '6px' }}>1,248</div>
                    <div className="dashboard-bars">
                      <div style={{ height: '45px' }}></div>
                      <div style={{ height: '62px' }}></div>
                      <div style={{ height: '32px' }}></div>
                      <div style={{ height: '74px', background: '#3B82F6' }}></div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                    <span>Transactions</span>
                    <span>+18%</span>
                  </div>
                  <div className="dashboard-bars" style={{ marginTop: '18px' }}>
                    <div style={{ height: '38px' }}></div>
                    <div style={{ height: '54px' }}></div>
                    <div style={{ height: '70px', background: '#22C55E' }}></div>
                    <div style={{ height: '42px' }}></div>
                    <div style={{ height: '60px', background: '#FACC15' }}></div>
                    <div style={{ height: '48px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="float-card stats-card scroll-widget">
            <div className="pulse-circle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 13h3l2.5-5 3 10 2.5-6H20"
                  stroke="#FF4D1C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="stats-header">
              <div className="stats-value">346+</div>
              <div className="icon-circle">🚀</div>
            </div>
            <div className="bar-chart">
              <div className="bar" style={{ height: '28px' }}></div>
              <div className="bar" style={{ height: '42px' }}></div>
              <div className="bar" style={{ height: '54px' }}></div>
            </div>
          </div>

          <div className="widget-control scroll-widget">
            <div className="widget-title">Widget control</div>
            <div className="widget-bars">
              <div className="widget-bar-col">
                <div className="widget-bar" style={{ height: '32px' }}></div>
                <div className="widget-bar-dots"></div>
                <div className="widget-bar-label">Jan</div>
              </div>
              <div className="widget-bar-col">
                <div className="widget-bar" style={{ height: '44px' }}></div>
                <div className="widget-bar-dots"></div>
                <div className="widget-bar-label">Feb</div>
              </div>
              <div className="widget-bar-col">
                <div className="widget-bar" style={{ height: '55px' }}></div>
                <div className="widget-bar-dots"></div>
                <div className="widget-bar-label">Mar</div>
              </div>
              <div className="widget-bar-col">
                <div className="widget-bar" style={{ height: '68px' }}></div>
                <div className="widget-bar-dots"></div>
                <div className="widget-bar-label">Apr</div>
              </div>
              <div className="widget-bar-col">
                <div className="widget-bar active" style={{ height: '86px' }}></div>
                <div className="widget-bar-dots"></div>
                <div className="widget-bar-label">May</div>
              </div>
              <svg className="widget-line" viewBox="0 0 260 110" preserveAspectRatio="none">
                <path d="M26 82 C 56 72, 84 66, 112 54 C 140 42, 168 38, 198 26 C 220 18, 238 14, 252 10" />
                <circle className="widget-dot" cx="26" cy="82" r="3.5" />
                <circle className="widget-dot" cx="78" cy="68" r="3.5" />
                <circle className="widget-dot" cx="124" cy="54" r="3.5" />
                <circle className="widget-dot" cx="178" cy="32" r="3.5" />
                <circle className="widget-dot" cx="232" cy="14" r="3.5" />
              </svg>
            </div>
            <div className="widget-badge">
              <div className="widget-badge-top">
                <span>Result</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <polygon
                    points="12 3 19.5 7.5 19.5 16.5 12 21 4.5 16.5 4.5 7.5"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="widget-badge-value">+ 58%</div>
            </div>
          </div>

          <div className="float-card installs-card scroll-widget">
            <div className="installs-title">Installs</div>
            <div className="week-bars">
              <div className="week-bar" style={{ height: '28px' }}></div>
              <div className="week-bar" style={{ height: '36px' }}></div>
              <div className="week-bar" style={{ height: '30px' }}></div>
              <div className="week-bar" style={{ height: '44px' }}></div>
              <div className="week-bar" style={{ height: '70px', background: '#22C55E' }}>
                <span>562</span>
              </div>
              <div className="week-bar" style={{ height: '52px', background: '#FACC15' }}>
                <span>286</span>
              </div>
              <div className="week-bar" style={{ height: '36px' }}></div>
            </div>
            <div className="week-labels">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          <div className="float-card productivity-card scroll-widget">
            <div className="productivity-value">+30%</div>
            <div className="productivity-text">Speed up your productivity</div>
          </div>

          <div className="sticky-actions">
            <div className="book-pill">Book a call →</div>
            <div className="key-features">
              <span className="lightning">⚡</span>
              Key features
            </div>
          </div>

        </section>

        <div className="legacy-sections scroll-body">
          <Content1 />
          <LumenIntro />
          <Content3 />
          <Content5 />
          <Content2 />
          <Content6 />
          <Content4 />
          <FeatureIn />
          <GallerySlider />
          <Content8 />
          <Testimonial />
          <ContactUs />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
