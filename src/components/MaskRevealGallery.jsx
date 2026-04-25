import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assets
import imgC1 from '../../frontend/src/Assets/c1.jpg';
import imgC2 from '../../frontend/src/Assets/c2.jpg';
import imgTech from '../../frontend/src/Assets/techsprint.jpeg';
import imgHack from '../../frontend/src/Assets/hacknovation.jpg';

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
  {
    id: 1,
    src: imgC2,
    title: 'Cyber Awareness Programme (Part 1)',
    content: `On the auspicious occasion of Independence Day, a Cyber Awareness Programme was organized in an enthusiastic atmosphere at Gandhi Public School, Gunupur.

The main objective of this event was to create awareness about the increasing threats in the cyber world, cyber crimes, and online frauds, as well as to provide practical knowledge on how to stay safe in the digital space.

As special guests, Mr. Bibhash Ranjan Panda (Founder, LumenXo Software Pvt. Ltd.) and Mr. Kalyan Kumar Das (Co-Founder) attended the programme. Company officials Ayush Kumar Biswal, Shraddha Suman Nayak, and Ch. Arman were also present and played an active role in making the event successful.`,
    tag: 'Education',
  },
  {
    id: 2,
    src: imgC1,
    title: 'Cyber Awareness Programme (Part 2)',
    content: `The session was presided over by Founder Bibhash Ranjan Panda, who in his address said:
“LumenXo Software Pvt. Ltd. is always committed to organizing awareness programmes for society. If we begin awareness from schools, the upcoming generation will grow as responsible and safe digital citizens.”

As the keynote speaker, Co-Founder Kalyan Kumar Das shared his insights and experiences about cyber threats and security in the digital world.

At the conclusion, the Principal of Gandhi Public School expressed heartfelt gratitude to LumenXo Software Pvt. Ltd., appreciating their excellent and timely initiative. He stated, “In today’s times, education along with knowledge of cyber safety is equally important. This programme has been extremely informative for our teachers, students, and staff. We will always welcome such initiatives in the future.”`,
    tag: 'Community',
  },
  {
    id: 3,
    src: imgTech,
    title: 'TechSprint Hackathon - GDG on Campus',
    content: `LumenXo Software served as the title sponsor for TechSprint at GIET University Gunupur, fostering a culture of innovation among 550+ student developers.

Innovation Meets Collaboration:
• Title Sponsor: Providing complete funding and logistics.
• Hands-on Mentorship: Technical guidance and industry insights.
• Impact: 1,000+ students reached through our GDG partnership.

Strategic Partnership (MoU):
We have formalized a two-year commitment with GDG on Campus - GIET University to bridge the academia-industry gap through:
✓ Regular Technical Workshops & Industry Training
✓ Specialized Skill Development in Emerging Tech
✓ Career Pathways & Internship Opportunities

Building the Future: Our mission is to transform theoretical knowledge into job-ready skills through real-world problem solving and continuous industry-academia collaboration.`,
    tag: 'Innovation',
  },
  {
    id: 4,
    src: imgHack,
    title: 'Hacknovation 2025',
    content: `A premier initiative by LumenXo Software to foster a culture of rapid innovation and technical excellence. Hacknovation brings together the brightest minds to solve complex industry problems through collaborative engineering and creative thinking.

Key Focus:
• Advanced AI/ML Integration
• Scalable Cloud Architectures
• Next-Gen User Experiences

Building the bridge between academic excellence and industry-ready engineering.`,
    tag: 'Engineering',
  },
];

const MaskRevealGallery = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.reveal-item');
      
      items.forEach((item, i) => {
        const img = item.querySelector('.reveal-img');
        const content = item.querySelector('.reveal-content');
        
        // Wrap image in a timeline for smoother control
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
            invalidateOnRefresh: true,
          }
        });

        tl.fromTo(img, 
          { 
            clipPath: 'inset(100% 0 0 0)',
            scale: 1.2,
          },
          {
            clipPath: 'inset(0% 0 0 0)',
            scale: 1,
            duration: 1.4,
            ease: 'power3.inOut',
          }
        )
        .fromTo(content,
          { 
            opacity: 0, 
            y: 30,
            filter: 'blur(10px)'
          },
          {
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.8'
        );

        // Add a subtle parallax effect on scroll
        gsap.to(img, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mask-reveal-section" ref={sectionRef}>
      <style>{`
        .mask-reveal-section {
          background: #1C1C1E;
          padding: 120px 60px 20px 60px;
          color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .section-header {
          max-width: 1400px;
          margin: 0 auto 24px;
          text-align: left;
        }

        .section-tag {
          color: #FF5733;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 8px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 800;
          line-height: 0.9;
          margin: 0;
          letter-spacing: -0.04em;
        }

        .reveal-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px 60px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .reveal-item {
          display: flex;
          flex-direction: column;
          gap: 32px;
          will-change: transform;
        }

        .reveal-img-container {
          width: 100%;
          overflow: hidden;
          background: #1C1C1E;
          position: relative;
          border-radius: 12px;
          border: 3px solid #FF5733; /* Orange Frame */
        }

        .reveal-img {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          will-change: clip-path, transform;
        }

        .reveal-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 95%;
        }

        .reveal-meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .item-tag {
          font-size: 12px;
          font-weight: 700;
          color: #FF5733;
          padding: 4px 12px;
          background: rgba(255, 87, 51, 0.1);
          border-radius: 100px;
          text-transform: uppercase;
        }

        .item-title {
          font-family: 'Syne', sans-serif;
          font-size: 32px;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
          color: #FFF;
        }

        .item-description {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          white-space: pre-wrap;
          font-weight: 400;
        }

        @media (max-width: 1024px) {
          .mask-reveal-section {
            padding: 80px 30px;
          }
          .reveal-grid {
            grid-template-columns: 1fr;
            gap: 80px;
          }
        }
      `}</style>

      <div className="section-header">
        <span className="section-tag">Impact & Initiatives</span>
        <h2 className="section-title">Corporate Social Responsibility & Tech Events</h2>
      </div>

      <div className="reveal-grid" ref={gridRef}>
        {galleryData.map((item) => (
          <div key={item.id} className="reveal-item">
            <div className="reveal-img-container">
              <img src={item.src} alt={item.title} className="reveal-img" />
            </div>
            <div className="reveal-content">
              <div className="reveal-meta">
                <span className="item-tag">{item.tag}</span>
              </div>
              <h3 className="item-title">{item.title}</h3>
              <p className="item-description">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaskRevealGallery;
