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
      {services.map((service, i) => (
        <div className="flip-card" key={i}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <span className="emoji">{service.emoji}</span>
              <p className="title">{service.title}</p>
              <p className="hint">Hover Me</p>
            </div>
            <div className="flip-card-back">
              <p className="desc">{service.desc}</p>
            </div>
            <button
  className="get-services-btn"
  onClick={() => window.location.href = '/ContactUs'}
>
  Get Services →
</button>

          </div>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 3rem 1rem;

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
    background: #4f46e5; /* Indigo-600 */
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

  .hint {
    font-size: 0.85rem;
    color: #666;
  }

  .desc {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export default ServicesFlipCards;
