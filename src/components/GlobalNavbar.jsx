import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoLumenXo from '../Assets/logolumenxo.png';

const GlobalNavbar = ({ theme = 'dark' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavContracted, setIsNavContracted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavContracted(true);
      } else {
        setIsNavContracted(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isDark = theme === 'dark';

  return (
    <>
      <style>{`
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

        .navbar-wrapper.scrolled {
          top: 15px;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: ${isDark ? 'rgba(44, 44, 46, 0.5)' : 'rgba(255, 255, 255, 0.8)'};
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0 12px 0 24px;
          border-radius: 12px;
          width: 90%;
          max-width: 900px;
          border: 1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
          box-shadow: ${isDark ? 'none' : '0 4px 30px rgba(0, 0, 0, 0.03)'};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar.contracted {
          padding: 0 8px 0 20px;
          width: 80%;
          max-width: 700px;
          background: ${isDark ? 'rgba(44, 44, 46, 0.8)' : 'rgba(255, 255, 255, 0.95)'};
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
          color: ${isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)'};
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: ${isDark ? '#fff' : '#000'};
        }

        .nav-btn {
          position: relative;
          background-color: #F2F2F7;
          color: #000;
          border: none;
          border-radius: 8px;
          padding: 12px 24px;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .btn-fill {
          position: absolute;
          width: 100px;
          height: 100px;
          background: #7C4DFF;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        .btn-text {
          position: relative;
          z-index: 1;
          transition: color 0.4s;
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1011;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: ${isDark ? '#FFFFFF' : '#000000'};
          margin: 5px 0;
          transition: 0.3s;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          height: 100vh;
          background: ${isDark ? '#1C1C1E' : '#FFFFFF'};
          z-index: 1010;
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
          color: ${isDark ? '#F2F2F7' : '#1C1C1E'};
          text-decoration: none;
          font-size: 24px;
          font-weight: 600;
          font-family: 'Space Grotesk', sans-serif;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .nav-btn:not(.mobile-menu .nav-btn) {
             display: none;
          }
          .hamburger {
            display: block;
          }
        }
      `}</style>

      <div className={`navbar-wrapper ${!isAtTop ? 'scrolled' : ''}`}>
        <nav className={`navbar ${isNavContracted ? 'contracted' : ''}`}>
          <div className="nav-logo">
            <Link to="/">
              <img src={logoLumenXo} alt="LumenXo" style={{ width: '80px', height: 'auto', filter: isDark ? 'none' : 'brightness(0)' }} />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/AboutUs">About Us</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Careers">Careers</Link>
            <Link to="/Blog">Blog</Link>
          </div>
          <Link to="/ContactUs" className="nav-btn">Contact</Link>
          
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
            <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </button>
        </nav>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/AboutUs" onClick={toggleMenu}>About Us</Link>
        <Link to="/Services" onClick={toggleMenu}>Services</Link>
        <Link to="/Careers" onClick={toggleMenu}>Careers</Link>
        <Link to="/Blog" onClick={toggleMenu}>Blog</Link>
        <Link 
          to="/ContactUs" 
          className="nav-btn" 
          style={{ display: 'flex', marginTop: '20px', textAlign: 'center' }} 
          onClick={toggleMenu}
          onMouseEnter={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const fill = e.currentTarget.querySelector('.btn-fill');
            const text = e.currentTarget.querySelector('.btn-text');
            gsap.set(fill, { x, y, scale: 0, opacity: 1 });
            gsap.to(fill, { scale: 5, duration: 0.8, ease: "power2.out" });
            gsap.to(text, { color: "#ffffff", duration: 0.4 });
          }}
          onMouseLeave={(e) => {
            const fill = e.currentTarget.querySelector('.btn-fill');
            const text = e.currentTarget.querySelector('.btn-text');
            gsap.to(fill, { opacity: 0, duration: 0.5, ease: "power2.in" });
            gsap.to(text, { color: "#000000", duration: 0.4 });
          }}
        >
          <span className="btn-text">Contact</span>
          <div className="btn-fill" />
        </Link>
      </div>
    </>
  );
};

export default GlobalNavbar;
