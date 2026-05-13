import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalNavbar from './GlobalNavbar';
import GlobalFooter from './GlobalFooter';

const MEDIUM_URL = 'https://medium.com/@inc.lumenxo';

const CATEGORIES = ['All', 'Branding', 'Design', 'Success Story', 'Leadership'];

// Helper to strip HTML tags from Medium description
function stripHtml(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
}

// Helper to extract first image from Medium post content
function extractImage(content) {
  const match = content && content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}

const FALLBACK_POSTS = [
  {
    title: 'How to Prepare for a Successful Design Project',
    category: 'Design',
    dateStr: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    link: MEDIUM_URL,
    excerpt: 'Discover the key steps to set up your design project for success from day one.',
  },
  {
    title: 'Fintech Design Trends 2026',
    category: 'Branding',
    dateStr: 'March 5, 2026',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80',
    link: MEDIUM_URL,
    excerpt: 'The top design and UX patterns shaping the future of fintech products this year.',
  },
  {
    title: '2026 Design Trends for AI-first SaaS Products',
    category: 'Design',
    dateStr: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    link: MEDIUM_URL,
    excerpt: 'AI-first products demand new design thinking. Here is what leading teams are doing differently.',
  },
];

export default function Pricing() {
  const [posts, setPosts] = useState(FALLBACK_POSTS);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@inc.lumenxo')
      .then((res) => res.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const categoryMap = ['Design', 'Branding', 'Success Story'];
          const enriched = data.items.slice(0, 3).map((post, i) => ({
            title: post.title,
            category: post.categories?.[0] || categoryMap[i % categoryMap.length],
            dateStr: new Date(post.pubDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            image: post.thumbnail || extractImage(post.content) || `https://picsum.photos/seed/blog${i}/600/400`,
            link: post.link,
            excerpt: stripHtml(post.description).slice(0, 120) + '…',
          }));
          setPosts(enriched);
        }
      })
      .catch(() => {});
  }, []);

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  const [small1, small2, featured] = filtered.length >= 3
    ? [filtered[0], filtered[1], filtered[2]]
    : [filtered[0], filtered[1] || null, null];

  return (
    <>
      <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden", background: "#000000" }}>
        <GlobalNavbar theme="dark" />
        <div style={{
          position: "absolute", bottom: 20, left: 0, width: "100%",
          zIndex: 5, textAlign: "center", pointerEvents: "none",
          display: "flex", justifyContent: "center", alignItems: "flex-end",
        }}>
          <h1 style={{
            fontFamily: "'Inter', 'DM Sans', sans-serif",
            fontSize: "32vw",
            fontWeight: 900, color: "#ffffff",
            margin: 0, lineHeight: 0.85,
            letterSpacing: "-0.05em",
            userSelect: "none",
            width: "100%",
            textTransform: "uppercase",
          }}>BLOG</h1>
        </div>
      </div>

      <div className="blog-page">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .blog-page {
          background: #fff;
          min-height: 100vh;
          padding: 100px 5% 100px;
          font-family: 'Inter', sans-serif;
        }

        .blog-filters {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 24px;
          border-radius: 999px;
          border: 1px solid #e0e0e0;
          background: #fff;
          font-size: 15px;
          font-weight: 500;
          color: #555;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: 'Inter', sans-serif;
        }

        .filter-btn:hover {
          border-color: #000;
          color: #000;
        }

        .filter-btn.active {
          background: #fff;
          border: 2px solid #F05A28;
          color: #F05A28;
          font-weight: 700;
        }

        .blog-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 20px;
          align-items: start;
        }

        .blog-left-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .blog-card-small {
          background: #f8f8f8;
          border-radius: 20px;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          overflow: hidden;
        }

        .blog-card-small:hover {
          background: #f0f0f0;
          border-color: #e0e0e0;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        .blog-card-small-content {
          flex: 1;
        }

        .blog-meta {
          font-size: 13px;
          color: #888;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .blog-meta .cat {
          color: #F05A28;
          font-weight: 600;
        }

        .blog-card-small h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0a0a0a;
          line-height: 1.3;
          margin: 0;
        }

        .blog-card-small-img {
          width: 100px;
          height: 80px;
          border-radius: 12px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .blog-card-featured {
          background: #eef3ff;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          display: block;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .blog-card-featured:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: #d0daff;
        }

        .blog-card-featured-top {
          padding: 28px 28px 20px;
        }

        .blog-card-featured h2 {
          font-size: 26px;
          font-weight: 800;
          color: #0a0a0a;
          line-height: 1.3;
          margin: 10px 0 0;
        }

        .blog-card-featured-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 0 0 8px 8px;
        }

        .blog-view-more {
          text-align: center;
          margin-top: 56px;
        }

        .view-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0a0a0a;
          color: #fff;
          padding: 18px 48px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .view-more-btn:hover {
          background: #F05A28;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(240, 90, 40, 0.25);
        }

        .blog-loading {
          text-align: center;
          padding: 80px 20px;
          font-size: 18px;
          color: #999;
        }

        .blog-empty {
          text-align: center;
          grid-column: 1 / -1;
          padding: 60px 20px;
          color: #999;
          font-size: 16px;
        }

        @media (max-width: 900px) {
          .blog-hero-section {
            grid-template-columns: 1fr;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .blog-card-featured {
            order: -1;
          }
        }

        @media (max-width: 480px) {
          .blog-page {
            padding-top: 110px;
          }
          .blog-card-small {
            flex-direction: column;
            align-items: flex-start;
          }
          .blog-card-small-img {
            width: 100%;
            height: 160px;
          }
        }
      `}</style>

        <div className="blog-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-grid">
              {/* Left: 2 small cards */}
              <div className="blog-left-stack">
                {small1 ? (
                  <a href={small1.link} target="_blank" rel="noopener noreferrer" className="blog-card-small">
                    <div className="blog-card-small-content">
                      <div className="blog-meta">
                        <span>{small1.dateStr}</span>
                        <span>•</span>
                        <span className="cat">{small1.category}</span>
                      </div>
                      <h3>{small1.title}</h3>
                    </div>
                    <img src={small1.image} alt={small1.title} className="blog-card-small-img" />
                  </a>
                ) : null}

                {small2 ? (
                  <a href={small2.link} target="_blank" rel="noopener noreferrer" className="blog-card-small">
                    <div className="blog-card-small-content">
                      <div className="blog-meta">
                        <span>{small2.dateStr}</span>
                        <span>•</span>
                        <span className="cat">{small2.category}</span>
                      </div>
                      <h3>{small2.title}</h3>
                    </div>
                    <img src={small2.image} alt={small2.title} className="blog-card-small-img" />
                  </a>
                ) : null}

                {!small1 && !small2 && (
                  <p className="blog-empty">No posts found in this category.</p>
                )}
              </div>

              {/* Right: 1 large featured card */}
              {filtered.length === 0 ? null : featured ? (
                <a href={featured.link} target="_blank" rel="noopener noreferrer" className="blog-card-featured">
                  <div className="blog-card-featured-top">
                    <div className="blog-meta">
                      <span>{featured.dateStr}</span>
                      <span>•</span>
                      <span className="cat">{featured.category}</span>
                    </div>
                    <h2>{featured.title}</h2>
                  </div>
                  <img src={featured.image} alt={featured.title} className="blog-card-featured-img" />
                </a>
              ) : null}
            </div>

            <div className="blog-view-more">
              <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer" className="view-more-btn">
                View More on Medium
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
      </div>

      <GlobalFooter />
    </>
  );
}
