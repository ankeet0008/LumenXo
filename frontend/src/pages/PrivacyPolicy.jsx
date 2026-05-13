import React, { useEffect, useRef } from 'react';
import GlobalNavbar from '../components/GlobalNavbar';
import GlobalFooter from '../components/GlobalFooter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const containerRef = useRef(null);
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
    "Who We Are",
    "Information We Collect",
    "How We Use Your Information",
    "Legal Basis for Processing",
    "Sharing & Disclosure",
    "Data Retention",
    "Your Rights",
    "Data Security",
    "International Transfers",
    "Children's Privacy",
    "Changes to This Policy",
    "Contact Us"
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-white font-sans">
      <GlobalNavbar theme="dark" />
      
      {/* Hero Header */}
      <header ref={headerRef} className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center border-b border-white/10">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
          Legal · Privacy
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          Privacy <span className="text-gray-500">Policy</span>
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
                  className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
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
            <p className="text-xl text-gray-400 leading-relaxed italic">
              Summary: Lumenxo Software Private Limited is committed to protecting your personal data. This Privacy Policy explains what we collect, why we collect it, how we use it, and your rights regarding your information when you use our software products, platforms, APIs, and related services.
            </p>
          </section>

          {/* 01 Who We Are */}
          <section id="section-1" ref={el => sectionsRef.current[1] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">01</span>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Lumenxo Software Private Limited ("Lumenxo", "we", "our", or "us") is a software technology company incorporated under the Companies Act, 2013, and registered in India. We develop and deliver cloud-based software solutions, SaaS platforms, enterprise tools, APIs, and developer services to businesses and individuals worldwide.
              </p>
              <p>
                For the purposes of applicable data protection laws, Lumenxo Software Private Limited is the Data Controller responsible for your personal information.
              </p>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mt-8">
                <h4 className="font-bold mb-2">Registered Office:</h4>
                <p>Lumenxo Software Private Limited</p>
                <p>India</p>
                <p>CIN: [Registered CIN]</p>
                <p className="mt-4">Email: info@lumenxo.com</p>
              </div>
            </div>
          </section>

          {/* 02 Information We Collect */}
          <section id="section-2" ref={el => sectionsRef.current[2] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">02</span>
            <h2 className="text-3xl font-bold mb-6">Information We Collect</h2>
            <p className="text-gray-300 mb-8">We collect information in the following ways when you interact with our products and services:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-blue-400">2.1 Information You Provide Directly</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><strong>Account Information:</strong> Name, email address, username, password (hashed), and profile details.</li>
                  <li><strong>Billing Information:</strong> Payment card details (processed securely), billing address, GST/tax identification numbers.</li>
                  <li><strong>Communications:</strong> Messages, support tickets, feedback, survey responses.</li>
                  <li><strong>Business Information:</strong> Organization name, industry, team size, and role.</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-purple-400">2.2 Information Collected Automatically</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><strong>Usage Data:</strong> Features used, pages visited, clicks, session duration, API calls.</li>
                  <li><strong>Device & Technical Data:</strong> IP address, browser type, operating system, device identifiers.</li>
                  <li><strong>Log Data:</strong> Server logs including timestamps, error reports, and request metadata.</li>
                  <li><strong>Cookies & Tracking:</strong> As described in our Cookie Policy.</li>
                </ul>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left border-collapse">
                <thead className="bg-white/5 text-gray-200">
                  <tr>
                    <th className="p-4 border-b border-white/10">Category</th>
                    <th className="p-4 border-b border-white/10">Examples</th>
                    <th className="p-4 border-b border-white/10">Mandatory?</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400 text-sm">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Identity</td>
                    <td className="p-4 border-b border-white/5">Name, username, email</td>
                    <td className="p-4 border-b border-white/5">Yes (for account)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Financial</td>
                    <td className="p-4 border-b border-white/5">Billing address, payment method</td>
                    <td className="p-4 border-b border-white/5">Yes (for paid plans)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Technical</td>
                    <td className="p-4 border-b border-white/5">IP address, device ID, browser</td>
                    <td className="p-4 border-b border-white/5">Automatic</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Usage</td>
                    <td className="p-4 border-b border-white/5">Feature usage, session logs</td>
                    <td className="p-4 border-b border-white/5">Automatic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 03 How We Use Your Information */}
          <section id="section-3" ref={el => sectionsRef.current[3] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">03</span>
            <h2 className="text-3xl font-bold mb-6">How We Use Your Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
              {[
                { title: "Providing Services", desc: "Creating and managing your account, delivering features, processing transactions." },
                { title: "Product Improvement", desc: "Analyzing usage patterns to fix bugs, improve UX, and optimize performance." },
                { title: "Security", desc: "Detecting, investigating, and preventing unauthorized access and abuse." },
                { title: "Communications", desc: "Sending transactional emails, product updates, and marketing (with consent)." },
                { title: "Legal Compliance", desc: "Meeting obligations under IT Act, 2000 and DPDP Act, 2023." },
                { title: "Operations", desc: "Internal analytics, financial reporting, and audit trails." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/[0.02] border-l-2 border-blue-500 rounded-r-xl">
                  <h4 className="font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 04 Legal Basis */}
          <section id="section-4" ref={el => sectionsRef.current[4] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">04</span>
            <h2 className="text-3xl font-bold mb-6">Legal Basis for Processing</h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong>Contract Performance:</strong> Processing necessary to deliver the services you've contracted for.</li>
              <li><strong>Legitimate Interests:</strong> Improving our products and maintaining security.</li>
              <li><strong>Consent:</strong> Marketing emails and optional analytics cookies.</li>
              <li><strong>Legal Obligation:</strong> Compliance with tax laws and regulatory requirements.</li>
            </ul>
          </section>

          {/* 05 Sharing & Disclosure */}
          <section id="section-5" ref={el => sectionsRef.current[5] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">05</span>
            <h2 className="text-3xl font-bold mb-6">Sharing & Disclosure</h2>
            <p className="text-gray-300 mb-6 font-bold text-lg">We do not sell your personal data.</p>
            <div className="space-y-6 text-gray-300">
              <p>We share information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Service Providers:</strong> Trusted vendors (cloud hosting, payment, email) under strict agreements.</li>
                <li><strong>Business Transfers:</strong> Mergers or acquisitions, subject to equivalent protections.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety.</li>
                <li><strong>With Your Consent:</strong> For any other purpose with your explicit prior consent.</li>
              </ul>
            </div>
          </section>

          {/* 06 Data Retention */}
          <section id="section-6" ref={el => sectionsRef.current[6] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">06</span>
            <h2 className="text-3xl font-bold mb-6">Data Retention</h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left border-collapse">
                <thead className="bg-white/5 text-gray-200">
                  <tr>
                    <th className="p-4 border-b border-white/10">Data Type</th>
                    <th className="p-4 border-b border-white/10">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400 text-sm">
                  <tr><td className="p-4 border-b border-white/5 font-bold text-white">Account data</td><td className="p-4 border-b border-white/5">Duration of account + 3 years</td></tr>
                  <tr><td className="p-4 border-b border-white/5 font-bold text-white">Financial records</td><td className="p-4 border-b border-white/5">7 years</td></tr>
                  <tr><td className="p-4 border-b border-white/5 font-bold text-white">Usage logs</td><td className="p-4 border-b border-white/5">12 months rolling</td></tr>
                  <tr><td className="p-4 border-b border-white/5 font-bold text-white">Marketing consent</td><td className="p-4 border-b border-white/5">Until withdrawn + 1 year</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 07 Your Rights */}
          <section id="section-7" ref={el => sectionsRef.current[7] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">07</span>
            <h2 className="text-3xl font-bold mb-6">Your Rights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
              {["Access", "Correction", "Deletion", "Portability", "Objection", "Restriction", "Withdraw Consent"].map((right, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/[0.03] rounded-xl border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>{right}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-400 italic">
              To exercise any of these rights, please email us at <a href="mailto:info@lumenxo.com" className="text-blue-400 underline">info@lumenxo.com</a>. We will respond within 30 days.
            </p>
          </section>

          {/* 08 Data Security */}
          <section id="section-8" ref={el => sectionsRef.current[8] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">08</span>
            <h2 className="text-3xl font-bold mb-6">Data Security</h2>
            <p className="text-gray-300 mb-6">We implement industry-standard technical and organizational measures to protect your personal data, including:</p>
            <div className="space-y-4">
              {[
                "AES-256 encryption at rest and TLS 1.2+ encryption in transit",
                "Role-based access controls (RBAC) and least-privilege principles",
                "Regular penetration testing and vulnerability assessments",
                "Multi-factor authentication (MFA) for internal systems",
                "SOC 2-aligned security policies and incident response",
                "Audit logging for all privileged data access"
              ].map((measure, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="mt-1 text-blue-500">✓</div>
                  <span className="text-gray-300 text-sm">{measure}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 09-12 Remaining Sections */}
          <section id="section-9" ref={el => sectionsRef.current[9] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">09</span>
            <h2 className="text-3xl font-bold mb-6">International Data Transfers</h2>
            <p className="text-gray-300">
              Lumenxo is headquartered in India. If you access our services from outside India, your data may be transferred to and processed in India. We ensure appropriate safeguards are in place for all international transfers.
            </p>
          </section>

          <section id="section-10" ref={el => sectionsRef.current[10] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">10</span>
            <h2 className="text-3xl font-bold mb-6">Children's Privacy</h2>
            <p className="text-gray-300">
              Our services are intended for users aged 18 years and above. We do not knowingly collect personal data from children under 18.
            </p>
          </section>

          <section id="section-11" ref={el => sectionsRef.current[11] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">11</span>
            <h2 className="text-3xl font-bold mb-6">Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. When we make material changes, we will update the "Effective Date", notify users via email, and display a notice within our platform.
            </p>
          </section>

          <section id="section-12" ref={el => sectionsRef.current[12] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">12</span>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 p-8 rounded-3xl">
              <p className="text-gray-300 mb-6">For any privacy-related questions or concerns, please contact our Data Protection Officer:</p>
              <div className="space-y-2">
                <p className="font-bold">Data Protection Officer</p>
                <p>Lumenxo Software Private Limited</p>
                <p className="text-blue-400">📧 info@lumenxo.com</p>
                <p className="text-blue-400">📧 support@lumenxo.com</p>
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

export default PrivacyPolicy;
