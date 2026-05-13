import React, { useEffect, useRef } from 'react';
import GlobalNavbar from '../components/GlobalNavbar';
import GlobalFooter from '../components/GlobalFooter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CookiePolicy = () => {
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Hero Animation
    gsap.fromTo(
      headerRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" }
    );

    // Sections Scroll Animation
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            }
          }
        );
      }
    });
  }, []);

  const toc = [
    "What Are Cookies?",
    "Why We Use Cookies",
    "Types of Cookies We Use",
    "Specific Cookies We Set",
    "Third-Party Cookies",
    "Managing Your Preferences",
    "Cookie Duration",
    "Do Not Track",
    "Updates to This Policy",
    "Contact Us"
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-white font-sans">
      <GlobalNavbar theme="dark" />
      
      {/* Hero Header */}
      <header ref={headerRef} className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center border-b border-white/10">
        <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
          Legal · Cookies
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          Cookie <span className="text-gray-500">Policy</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <p>📅 Effective: April 25, 2026</p>
          <p>🏢 Lumenxo Software Private Limited</p>
          <p>🌐 India</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* Table of Contents - Sticky Sidebar */}
        <aside className="lg:w-1/4">
          <div className="sticky top-32 bg-white/[0.03] border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-200">Table of Contents</h3>
            <nav className="space-y-4">
              {toc.map((item, index) => (
                <a 
                  key={index} 
                  href={`#section-${index + 1}`}
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {String(index + 1).padStart(2, '0')}. {item}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Sections */}
        <div className="lg:w-3/4 space-y-24">
          
          <section ref={el => sectionsRef.current[0] = el} className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-400 leading-relaxed italic border-l-4 border-purple-500 pl-6">
              At a glance: Lumenxo uses cookies and similar tracking technologies to keep our Services secure, remember your preferences, understand how you use our products, and (optionally) show you relevant content. You control which non-essential cookies are active.
            </p>
          </section>

          {/* 01 What Are Cookies? */}
          <section id="section-1" ref={el => sectionsRef.current[1] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">01</span>
            <h2 className="text-3xl font-bold mb-6">What Are Cookies?</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Cookies are small text files placed on your device when you visit a website or use a web application. They are widely used to make websites work efficiently and provide information to owners.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  { name: "Web Beacons", desc: "Pixels used to track interactions and email openings." },
                  { name: "Local Storage", desc: "Browser-side storage for session state." },
                  { name: "Session Storage", desc: "Temporary data cleared when session ends." },
                  { name: "Fingerprinting", desc: "We do not use device fingerprinting for tracking." }
                ].map((tech, i) => (
                  <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                    <h4 className="font-bold text-white text-sm mb-1">{tech.name}</h4>
                    <p className="text-xs text-gray-500">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 02 Why We Use Cookies */}
          <section id="section-2" ref={el => sectionsRef.current[2] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">02</span>
            <h2 className="text-3xl font-bold mb-6">Why We Use Cookies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
              {[
                { title: "Auth & Security", desc: "To verify your identity and protect against CSRF attacks." },
                { title: "User Preferences", desc: "Remembering settings like theme, language, and layout." },
                { title: "Performance", desc: "Measuring page load times and error rates for reliability." },
                { title: "Analytics", desc: "Understanding how users navigate and find friction points." },
                { title: "Marketing", desc: "Measuring campaign effectiveness with your consent." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/[0.02] border-l-2 border-purple-500 rounded-r-xl">
                  <h4 className="font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 03 Types of Cookies We Use */}
          <section id="section-3" ref={el => sectionsRef.current[3] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">03</span>
            <h2 className="text-3xl font-bold mb-6">Types of Cookies We Use</h2>
            <div className="space-y-6">
              {[
                { icon: "🔒", title: "Strictly Necessary", status: "Always Active", desc: "Essential for core functionality: auth, session, security, and CSRF protection." },
                { icon: "📊", title: "Performance & Analytics", status: "Optional", desc: "Anonymized data to improve performance and user experience." },
                { icon: "⚙️", title: "Functional", status: "Optional", desc: "Remembering your preferences like UI theme and onboarding state." },
                { icon: "🎯", title: "Targeting & Marketing", status: "Optional", desc: "Used to measure marketing effectiveness and serve relevant ads." }
              ].map((type, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-2xl relative overflow-hidden group">
                  <div className="text-3xl">{type.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-white">{type.title}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${type.status === 'Always Active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                        {type.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 04 Specific Cookies We Set */}
          <section id="section-4" ref={el => sectionsRef.current[4] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">04</span>
            <h2 className="text-3xl font-bold mb-6">Specific Cookies We Set</h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-white/5 text-gray-200">
                  <tr>
                    <th className="p-4 border-b border-white/10 text-xs uppercase tracking-widest">Cookie Name</th>
                    <th className="p-4 border-b border-white/10 text-xs uppercase tracking-widest">Type</th>
                    <th className="p-4 border-b border-white/10 text-xs uppercase tracking-widest">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400 text-sm">
                  {[
                    ["lxo_session", "Essential", "Session"],
                    ["lxo_csrf", "Essential", "Session"],
                    ["lxo_auth", "Essential", "30 days"],
                    ["lxo_prefs", "Functional", "1 year"],
                    ["_ga", "Analytics", "2 years"],
                    ["lxo_cookie_consent", "Essential", "1 year"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 border-b border-white/5 font-mono text-xs text-white">{row[0]}</td>
                      <td className="p-4 border-b border-white/5">{row[1]}</td>
                      <td className="p-4 border-b border-white/5">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 05 Third-Party Cookies */}
          <section id="section-5" ref={el => sectionsRef.current[5] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">05</span>
            <h2 className="text-3xl font-bold mb-6">Third-Party Cookies</h2>
            <p className="text-gray-300 mb-6">We use some cookies placed by third-party services:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Google Analytics", "Intercom", "Meta Pixel", "Stripe"].map((service, i) => (
                <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between">
                  <span className="text-sm font-medium">{service}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">Third Party</span>
                </div>
              ))}
            </div>
          </section>

          {/* 06-10 Remaining Sections */}
          <section id="section-6" ref={el => sectionsRef.current[6] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">06</span>
            <h2 className="text-3xl font-bold mb-6">Managing Your Preferences</h2>
            <div className="space-y-6 text-gray-400">
              <p>You can manage your preferences via our consent banner or browser settings.</p>
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                <h4 className="text-white font-bold mb-4">Common Browser Instructions:</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div><strong>Chrome:</strong> Privacy → Cookies</div>
                  <div><strong>Firefox:</strong> Privacy → Cookies & Data</div>
                  <div><strong>Safari:</strong> Preferences → Privacy</div>
                  <div><strong>Edge:</strong> Cookies & Permissions</div>
                </div>
              </div>
            </div>
          </section>

          <section id="section-7" ref={el => sectionsRef.current[7] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">07</span>
            <h2 className="text-3xl font-bold mb-6">Cookie Duration</h2>
            <p className="text-gray-300">Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period (30 days to 2 years).</p>
          </section>

          <section id="section-8" ref={el => sectionsRef.current[8] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">08</span>
            <h2 className="text-3xl font-bold mb-6">Do Not Track</h2>
            <p className="text-gray-300">
              Our Services do not alter their behavior in response to DNT browser settings at this time. However, you can use our Cookie Consent Manager to opt out of all non-essential tracking.
            </p>
          </section>

          <section id="section-9" ref={el => sectionsRef.current[9] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">09</span>
            <h2 className="text-3xl font-bold mb-6">Updates to This Policy</h2>
            <p className="text-gray-300">
              We may update this Cookie Policy periodically. When material changes are made, we will update the "Effective Date" and notify registered users.
            </p>
          </section>

          <section id="section-10" ref={el => sectionsRef.current[10] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">10</span>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-white/10 p-8 rounded-3xl">
              <p className="text-gray-300 mb-6">Privacy & Cookie Inquiries - Lumenxo Software Private Limited</p>
              <div className="space-y-2">
                <p className="text-purple-400 font-medium">📧 info@lumenxo.com</p>
                <p className="text-purple-400 font-medium">📧 support@lumenxo.com</p>
              </div>
              <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
                © 2026 Lumenxo Software Private Limited. All rights reserved.
              </p>
            </div>
          </section>

        </div>
      </main>

      <GlobalFooter theme="dark" />
    </div>
  );
};

export default CookiePolicy;
