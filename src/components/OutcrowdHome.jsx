import React from 'react';
import { ArrowRight, Sparkles, Layers, PenTool, Layout, ChevronRight } from 'lucide-react';
import '../outcrowd.css';

const OutcrowdHome = () => {
  return (
    <div className="outcrowd-theme">
      {/* Navbar */}
      <nav className="oc-navbar">
        <div className="oc-container oc-nav-inner">
          <a href="/" className="oc-logo">
            <div className="oc-logo-icon">
              <Sparkles size={18} color="#FFFFFF" />
            </div>
            outcrowd
          </a>
          <div className="oc-nav-links">
            <a href="#services" className="oc-nav-link">Services</a>
            <a href="#work" className="oc-nav-link">Work</a>
            <a href="#about" className="oc-nav-link">About Us</a>
            <a href="#careers" className="oc-nav-link">Careers</a>
          </div>
          <button 
            className="oc-btn-primary" 
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("+91 8260569773");
              alert("Phone number copied: +91 8260569773");
            }}
          >
            Book a call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="oc-hero">
        <div className="oc-hero-glow"></div>
        <div className="oc-container">
          <div className="oc-hero-content">
            <div className="oc-badge">
              <Sparkles size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
              Premium SaaS Design Agency
            </div>
            <h1 className="oc-h1">
              We design digital products that drive growth
            </h1>
            <p className="oc-body" style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              Transform your SaaS platform with world-class user interfaces and experiences. We build scalable design systems that convert and retain users.
            </p>
            <div className="oc-hero-actions">
              <button className="oc-btn-primary">
                View our work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </button>
              <button className="oc-btn-secondary">
                Our services
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="oc-stats">
            <div className="oc-stat-item">
              <div className="oc-stat-number">150+</div>
              <div className="oc-stat-label">Projects completed</div>
            </div>
            <div className="oc-stat-item">
              <div className="oc-stat-number">$2B+</div>
              <div className="oc-stat-label">Client valuation</div>
            </div>
            <div className="oc-stat-item">
              <div className="oc-stat-number">12M+</div>
              <div className="oc-stat-label">Users reached</div>
            </div>
            <div className="oc-stat-item">
              <div className="oc-stat-number">99%</div>
              <div className="oc-stat-label">Client satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="oc-section oc-container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="oc-label">Our Expertise</span>
          <h2 className="oc-h2">Design that scales your business</h2>
          <p className="oc-body" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We specialize in creating cohesive design ecosystems that elevate your product from MVP to industry leader.
          </p>
        </div>

        <div className="oc-services-grid">
          <div className="oc-card">
            <div className="oc-card-icon">
              <Layout size={24} />
            </div>
            <h3 className="oc-h3">UX/UI Design</h3>
            <p className="oc-body">
              Intuitive interfaces that solve complex problems. We focus on user journeys that maximize conversion and retention.
            </p>
            <ul className="oc-card-list">
              <li>User Research & Personas</li>
              <li>Wireframing & Prototyping</li>
              <li>High-fidelity Visual Design</li>
              <li>Usability Testing</li>
            </ul>
          </div>

          <div className="oc-card">
            <div className="oc-card-icon">
              <Layers size={24} />
            </div>
            <h3 className="oc-h3">Design Systems</h3>
            <p className="oc-body">
              Scalable component libraries that ensure consistency across your entire product suite and speed up development.
            </p>
            <ul className="oc-card-list">
              <li>Component Architecture</li>
              <li>Token Management</li>
              <li>Documentation & Guidelines</li>
              <li>Developer Handoff</li>
            </ul>
          </div>

          <div className="oc-card">
            <div className="oc-card-icon">
              <PenTool size={24} />
            </div>
            <h3 className="oc-h3">Brand Identity</h3>
            <p className="oc-body">
              Memorable brands that stand out in crowded markets. We create visual identities that resonate with your target audience.
            </p>
            <ul className="oc-card-list">
              <li>Logo & Wordmark</li>
              <li>Color & Typography Systems</li>
              <li>Illustration Guidelines</li>
              <li>Marketing Assets</li>
            </ul>
          </div>

          <div className="oc-card">
            <div className="oc-card-icon">
              <Sparkles size={24} />
            </div>
            <h3 className="oc-h3">Web Development</h3>
            <p className="oc-body">
              Pixel-perfect implementation of our designs using modern frameworks to ensure performance and accessibility.
            </p>
            <ul className="oc-card-list">
              <li>React / Next.js Development</li>
              <li>Creative Animations</li>
              <li>Performance Optimization</li>
              <li>CMS Integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="oc-section oc-container" style={{ paddingBottom: '120px' }}>
        <div className="oc-cta">
          <div className="oc-cta-glow"></div>
          <div className="oc-cta-content">
            <h2 className="oc-h2">Ready to transform your product?</h2>
            <p className="oc-body" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
              Let's discuss how our design expertise can help you achieve your business goals faster.
            </p>
            <a 
              href="https://alvo.chat/7ytu"
              target="_blank"
              rel="noopener noreferrer"
              className="oc-btn-primary" 
              style={{ padding: '16px 36px', fontSize: '16px', display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
            >
              Contact Us <ChevronRight size={20} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '40px 0' }}>
        <div className="oc-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="oc-logo" style={{ fontSize: '20px' }}>
            <div className="oc-logo-icon" style={{ width: '24px', height: '24px', borderRadius: '6px' }}>
              <Sparkles size={14} color="#FFFFFF" />
            </div>
            outcrowd
          </div>
          <p className="oc-body" style={{ fontSize: '14px' }}>
            © {new Date().getFullYear()} Outcrowd Replica. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OutcrowdHome;
