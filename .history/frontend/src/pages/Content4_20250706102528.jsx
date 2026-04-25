import React from 'react';
import styled from 'styled-components';

const services = [
  {
    emoji: '🏢',
    title: 'Administration',
    desc: 'We strategically integrate corporate responsibility into our core operations, ensuring our expertise supports sustainable and efficient business practices.',
  },
  {
    emoji: '💻',
    title: 'Application Development',
    desc: 'Our skilled developers craft robust, scalable, and intuitive applications across platforms using modern technologies and standards.',
  },
  {
    emoji: '🌐',
    title: 'Web Design',
    desc: 'We build modern, responsive, and user-centric websites with seamless navigation and brand-aligned interfaces.',
  },
  {
    emoji: '📈',
    title: 'Digital Marketing',
    desc: 'Boost your brand online with SEO, social media, content marketing, paid ads, email outreach, and analytics.',
  },
  {
    emoji: '🧩',
    title: 'WordPress Development',
    desc: 'We deliver SEO-friendly, custom WordPress websites — from themes to plugins, aligned with your business goals.',
  },
  {
    emoji: '⚙️',
    title: 'Backend Development',
    desc: 'Ensure performance with secure APIs, optimized databases, smooth integrations, and scalable backend logic.',
  },
];

const ServicesFlipCards = () => {
  return (
    <Wrapper>
      <div className="header">
        <h2>Our Services</h2>
        <p>
          At LumenXo Software Pvt. Ltd., we blend innovation, strategy, and technology to deliver high-impact solutions.
          Our services are designed to empower brands, startups, and enterprises in their digital journey.
        </p>
      </div>

      <div className="cards">
        {services.map((service, i) => (
          <div className="flip-card" key={i}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <span className="emoji">{service.emoji}</span>
                <p className="title">{service.title}</p>
              </div>
              <div className="flip-card-back">
                <p className="desc">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="get-services-btn"
        onClick={() => window.location.href = '/ContactUs'}
      >
        Get Services →
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 1rem;
  text-align: center;

  .header {
    max-width: 700px;
    margin: 0 auto 3rem auto;
  }

  .header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.75rem;
  }

  .header p {
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.6;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  .flip-card {
    background-color: transparent;
    width: 220px;
    height: 280px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s ease-in-out;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1rem;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background: white;
    color: black;
  }

  .flip-card-back {
    background: #4f46e5;
    color: white;
    transform: rotateY(180deg);
  }

  .emoji {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  .desc {
    font-size: 0.9rem;
    line-height: 1.4;
    padding: 0 0.5rem;
  }

  .get-services-btn {
    margin-top: 3rem;
    background-color: black;
    color: white;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .get-services-btn:hover {
    background-color: #1f1f1f;
    transform: scale(1.05);
  }
`;

export default ServicesFlipCards;
