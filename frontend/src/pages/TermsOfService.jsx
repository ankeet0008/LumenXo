import React, { useEffect, useRef } from 'react';
import GlobalNavbar from '../components/GlobalNavbar';
import GlobalFooter from '../components/GlobalFooter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TermsOfService = () => {
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
    "Acceptance of Terms",
    "Description of Services",
    "Accounts & Registration",
    "Subscriptions & Billing",
    "Acceptable Use",
    "Intellectual Property",
    "Your Content & Data",
    "Confidentiality",
    "Third-Party Services",
    "Warranties & Disclaimers",
    "Limitation of Liability",
    "Indemnification",
    "Termination",
    "Governing Law & Disputes",
    "General Provisions",
    "Contact"
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-white font-sans">
      <GlobalNavbar theme="dark" />
      
      {/* Hero Header */}
      <header ref={headerRef} className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center border-b border-white/10">
        <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
          Legal · Terms
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          Terms of <span className="text-gray-500">Service</span>
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
                  className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
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
            <p className="text-xl text-gray-400 leading-relaxed italic border-l-4 border-orange-500 pl-6">
              Please read these Terms carefully. By accessing or using any product, platform, API, or service offered by Lumenxo Software Private Limited, you agree to be legally bound by these Terms of Service. If you do not agree, please discontinue use immediately.
            </p>
          </section>

          {/* 01 Acceptance of Terms */}
          <section id="section-1" ref={el => sectionsRef.current[1] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">01</span>
            <h2 className="text-3xl font-bold mb-6">Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you (an individual user or a legal entity, collectively "you" or "User") and Lumenxo Software Private Limited ("Lumenxo", "Company", "we", "our", or "us"), governing your use of our software products, platforms, websites, APIs, and associated services (collectively, "Services").
              </p>
              <p>
                By clicking "I Agree", creating an account, accessing our Services, or executing an Order Form, you acknowledge that you have read, understood, and agreed to these Terms, our Privacy Policy, and our Cookie Policy, all of which are incorporated herein by reference.
              </p>
              <p>
                If you are entering into these Terms on behalf of an organization, you represent and warrant that you have the legal authority to bind that organization.
              </p>
            </div>
          </section>

          {/* 02 Description of Services */}
          <section id="section-2" ref={el => sectionsRef.current[2] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">02</span>
            <h2 className="text-3xl font-bold mb-6">Description of Services</h2>
            <p className="text-gray-300 mb-6">Lumenxo provides software-as-a-service (SaaS) platforms, enterprise software solutions, developer APIs, productivity tools, and related technical services. Our Services may include but are not limited to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400 text-sm">
              {[
                "Cloud-hosted software applications",
                "RESTful and GraphQL APIs",
                "Software Development Kits (SDKs)",
                "Data processing and analytics",
                "Technical support and services",
                "Documentation and training"
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/10 rounded-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  {service}
                </li>
              ))}
            </ul>
          </section>

          {/* 03 Accounts & Registration */}
          <section id="section-3" ref={el => sectionsRef.current[3] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">03</span>
            <h2 className="text-3xl font-bold mb-6">Accounts & Registration</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-3 text-white">3.1 Account Creation</h4>
                <p className="text-gray-400">To access most Services, you must register for an account by providing accurate, current, and complete information. You agree to keep this information updated.</p>
              </div>
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                <h4 className="text-xl font-bold mb-3 text-white">3.2 Account Security</h4>
                <p className="text-gray-400 mb-4">You are solely responsible for maintaining the confidentiality of your credentials. You must:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-400">
                  <li>Use a strong, unique password and enable multi-factor authentication (MFA)</li>
                  <li>Notify us immediately at security@lumenxo.com if you suspect unauthorized access</li>
                  <li>Not share credentials with third parties</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-white">3.3 Age Requirement</h4>
                <p className="text-gray-400">You must be at least 18 years of age to create an account or use our Services.</p>
              </div>
            </div>
          </section>

          {/* 04 Subscriptions & Billing */}
          <section id="section-4" ref={el => sectionsRef.current[4] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">04</span>
            <h2 className="text-3xl font-bold mb-6">Subscriptions & Billing</h2>
            <div className="space-y-6 text-gray-300">
              <p>Lumenxo offers free, paid, and enterprise subscription tiers. Paid subscriptions are billed in advance on a monthly or annual basis.</p>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-white/5 text-gray-200">
                    <tr>
                      <th className="p-4 border-b border-white/10">Scenario</th>
                      <th className="p-4 border-b border-white/10">Refund Policy</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400 text-sm">
                    <tr><td className="p-4 border-b border-white/5 font-bold text-white">Annual plan — cancelled within 14 days</td><td className="p-4 border-b border-white/5">Full refund for unused portion</td></tr>
                    <tr><td className="p-4 border-b border-white/5 font-bold text-white">Monthly plan — cancelled mid-cycle</td><td className="p-4 border-b border-white/5">No refund; access continues to period end</td></tr>
                    <tr><td className="p-4 border-b border-white/5 font-bold text-white">Billing error / duplicate charge</td><td className="p-4 border-b border-white/5">Full refund within 7 business days</td></tr>
                    <tr><td className="p-4 border-b border-white/5 font-bold text-white">Service outage > 24 hrs (SLA breach)</td><td className="p-4 border-b border-white/5">Credit per SLA agreement</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 05 Acceptable Use */}
          <section id="section-5" ref={el => sectionsRef.current[5] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">05</span>
            <h2 className="text-3xl font-bold mb-6">Acceptable Use</h2>
            <div className="space-y-6 text-gray-400">
              <p>You agree to use our Services only for lawful purposes. You must not:</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Violate any applicable law or regulation",
                  "Transmit illegal content, malware, or spam",
                  "Reverse-engineer or decompile any portion of the Services",
                  "Use automated means (bots, scrapers) to access the Services",
                  "Circumvent security mechanisms or authentication controls",
                  "Impersonate any person or entity"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                    <div className="w-1 h-1 rounded-full bg-red-500"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                <strong>⚠ Enforcement:</strong> Violation of these restrictions may result in immediate suspension or termination of your account without refund.
              </div>
            </div>
          </section>

          {/* 06 Intellectual Property */}
          <section id="section-6" ref={el => sectionsRef.current[6] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">06</span>
            <h2 className="text-3xl font-bold mb-6">Intellectual Property</h2>
            <div className="space-y-6 text-gray-300">
              <p>All software, code, algorithms, and logos are the exclusive intellectual property of Lumenxo Software Private Limited.</p>
              <p>Lumenxo grants you a limited, non-exclusive, non-transferable license to access and use the Services during your subscription term.</p>
            </div>
          </section>

          {/* 07-15 Remaining Sections */}
          <section id="section-7" ref={el => sectionsRef.current[7] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">07</span>
            <h2 className="text-3xl font-bold mb-6">Your Content & Data</h2>
            <p className="text-gray-300">You retain full ownership of all data and content you upload. By using the Services, you grant Lumenxo a limited license to process and store your content solely to deliver the Services.</p>
          </section>

          <section id="section-8" ref={el => sectionsRef.current[8] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">08</span>
            <h2 className="text-3xl font-bold mb-6">Confidentiality</h2>
            <p className="text-gray-300">Each party agrees to protect the other's confidential information using at least the same degree of care it uses for its own confidential information.</p>
          </section>

          <section id="section-9" ref={el => sectionsRef.current[9] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">09</span>
            <h2 className="text-3xl font-bold mb-6">Third-Party Services</h2>
            <p className="text-gray-300">Our Services may integrate with third-party applications. Lumenxo does not endorse or assume responsibility for the security of Third-Party Services.</p>
          </section>

          <section id="section-10" ref={el => sectionsRef.current[10] = el} className="scroll-mt-32 text-gray-300">
            <span className="text-4xl font-bold text-gray-800 block mb-4">10</span>
            <h2 className="text-3xl font-bold mb-6">Warranties & Disclaimers</h2>
            <p className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl italic text-sm text-gray-400">
              EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.
            </p>
          </section>

          <section id="section-11" ref={el => sectionsRef.current[11] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">11</span>
            <h2 className="text-3xl font-bold mb-6">Limitation of Liability</h2>
            <p className="text-gray-300">Our total cumulative liability to you shall not exceed the greater of the fees paid by you in the 12 months preceding the claim or INR 10,000.</p>
          </section>

          <section id="section-14" ref={el => sectionsRef.current[12] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">14</span>
            <h2 className="text-3xl font-bold mb-6">Governing Law & Disputes</h2>
            <p className="text-gray-300">These Terms are governed by the laws of India. Disputes shall be submitted to binding arbitration in Kolkata, West Bengal, India.</p>
          </section>

          <section id="section-16" ref={el => sectionsRef.current[13] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">16</span>
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-white/10 p-8 rounded-3xl">
              <p className="text-gray-300 mb-6">Legal & Compliance - Lumenxo Software Private Limited</p>
              <div className="space-y-2">
                <p className="text-orange-400 font-medium">📧 info@lumenxo.com</p>
                <p className="text-orange-400 font-medium">📧 support@lumenxo.com</p>
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

export default TermsOfService;
