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
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" }
      );
    }

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
    "Introduction and Acceptance of Terms",
    "Definitions",
    "Services and Scope of Work",
    "Client Responsibilities",
    "Payment Terms",
    "Project Timelines and Delivery",
    "Intellectual Property Rights",
    "Confidentiality",
    "Warranties and Disclaimers",
    "Limitation of Liability",
    "Indemnification",
    "Support and Maintenance",
    "Termination",
    "Hosting and Third-Party Services",
    "Data Protection and Privacy",
    "Acceptable Use Policy",
    "Force Majeure",
    "Dispute Resolution",
    "General Provisions",
    "International Clients",
    "Website Use Terms",
    "Refund and Cancellation Policy",
    "Communication and Feedback",
    "Testimonials and Reviews",
    "Contact Information"
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-white font-sans">
      <GlobalNavbar theme="dark" />
      
      {/* Hero Header */}
      <header ref={headerRef} className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center border-b border-white/10">
        <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
          Legal · Agreement
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight uppercase">
          Terms and <span className="text-gray-500">Conditions</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <p>📅 Last Updated: April 26, 2026</p>
          <p>🏢 LumenXo Software Private Limited</p>
          <p>📍 Balasore, Odisha, India</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* Table of Contents - Sticky Sidebar */}
        <aside className="lg:w-1/4">
          <div className="sticky top-32 bg-white/[0.03] border border-white/10 rounded-3xl p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
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
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl mb-12">
              <h3 className="text-xl font-bold mb-4 text-white">Contact Information:</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• <strong>Company Name:</strong> LumenXo Software Private Limited</li>
                <li>• <strong>Address:</strong> Balasore, Odisha, India</li>
                <li>• <strong>Email:</strong> info@lumenxo.com</li>
                <li>• <strong>Phone:</strong> +91 7656918304</li>
                <li>• <strong>Website:</strong> <a href="https://www.lumenxo.com" className="text-orange-400">www.lumenxo.com</a></li>
              </ul>
            </div>
          </section>

          {/* 01 INTRODUCTION AND ACCEPTANCE OF TERMS */}
          <section id="section-1" ref={el => sectionsRef.current[1] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">01</span>
            <h2 className="text-3xl font-bold mb-6">Introduction and Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>Welcome to LumenXo Software Private Limited ("LumenXo," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of our website (www.lumenxo.com), services, and products.</p>
              <p>By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.</p>
              <p>These Terms constitute a legally binding agreement between you (the "Client," "User," or "you") and LumenXo Software Private Limited, a company registered under the Companies Act, 2013, with the Ministry of Corporate Affairs, India.</p>
            </div>
          </section>

          {/* 02 DEFINITIONS */}
          <section id="section-2" ref={el => sectionsRef.current[2] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">02</span>
            <h2 className="text-3xl font-bold mb-6">Definitions</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p><strong>2.1. "Services"</strong> means all software development, web design, application development, digital marketing, WordPress development, backend development, administration services, and any other services provided by LumenXo.</p>
              <p><strong>2.2. "Website"</strong> refers to www.lumenxo.com and all associated web pages, subdomains, and applications.</p>
              <p><strong>2.3. "Deliverables"</strong> means the final work product, code, designs, documentation, or other materials provided by LumenXo to the Client as part of the Services.</p>
              <p><strong>2.4. "Agreement"</strong> means the binding contract between LumenXo and the Client, which includes these Terms, any Statement of Work (SOW), proposal, quotation, or project agreement.</p>
              <p><strong>2.5. "Confidential Information"</strong> means any proprietary or confidential information disclosed by either party during the course of engagement.</p>
              <p><strong>2.6. "Intellectual Property"</strong> means all patents, trademarks, service marks, copyrights, trade secrets, and other intellectual property rights.</p>
            </div>
          </section>

          {/* 03 SERVICES AND SCOPE OF WORK */}
          <section id="section-3" ref={el => sectionsRef.current[3] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">03</span>
            <h2 className="text-3xl font-bold mb-6">Services and Scope of Work</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-bold mb-3 text-white">3.1 Service Offerings</h4>
                <p className="mb-4">LumenXo provides the following services:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400 text-sm">
                  {[
                    "Custom software and application development",
                    "Web design and development",
                    "Mobile application development",
                    "Digital marketing and SEO services",
                    "WordPress development and customization",
                    "Backend development and API integration",
                    "Administration and business process optimization",
                    "UI/UX design and prototyping",
                    "Cloud deployment and DevOps services"
                  ].map((service, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/10 rounded-xl">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <p><strong>3.2. Scope Definition:</strong> The specific scope of work, deliverables, timelines, and pricing for each project will be outlined in a separate Statement of Work (SOW), proposal, or quotation, which shall form an integral part of the Agreement.</p>
              <p><strong>3.3. Changes to Scope:</strong> Any changes to the agreed scope of work must be documented in writing and approved by both parties. Changes may result in adjustments to timelines and fees.</p>
            </div>
          </section>

          {/* 04 CLIENT RESPONSIBILITIES */}
          <section id="section-4" ref={el => sectionsRef.current[4] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">04</span>
            <h2 className="text-3xl font-bold mb-6">Client Responsibilities</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>4.1. The Client agrees to provide timely access to necessary information, materials, resources, and personnel required for LumenXo to perform the Services.</p>
              <p>4.2. The Client is responsible for providing accurate and complete information, including but not limited to business requirements, content, images, logos, and brand guidelines.</p>
              <p>4.3. The Client shall respond to requests for feedback, approvals, and clarifications within reasonable timeframes as specified in the project timeline.</p>
              <p>4.4. Delays caused by the Client's failure to provide necessary information or approvals may result in project timeline extensions and potential additional charges.</p>
              <p>4.5. The Client warrants that all materials provided to LumenXo do not infringe upon any third-party intellectual property rights.</p>
            </div>
          </section>

          {/* 05 PAYMENT TERMS */}
          <section id="section-5" ref={el => sectionsRef.current[5] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">05</span>
            <h2 className="text-3xl font-bold mb-6">Payment Terms</h2>
            <div className="space-y-6 text-gray-300">
              <p><strong>5.1. Pricing and Quotations:</strong> All prices are quoted in Indian Rupees (INR) unless otherwise specified. Quotations are valid for 30 days from the date of issue unless otherwise stated.</p>
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                <h4 className="text-xl font-bold mb-3 text-white">5.2 Payment Schedule</h4>
                <p className="text-gray-400 mb-4">Unless otherwise agreed in writing:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-400">
                  <li>Projects under ₹50,000: 50% advance, 50% upon completion</li>
                  <li>Projects between ₹50,000 - ₹2,00,000: 40% advance, 30% at milestone, 30% upon completion</li>
                  <li>Projects above ₹2,00,000: Payment schedule as defined in the SOW</li>
                </ul>
              </div>
              <p><strong>5.3. Payment Methods:</strong> Payments shall be made via bank transfer, UPI, online payment gateways, or other methods as communicated by LumenXo.</p>
              <p><strong>5.4. Late Payments:</strong> Invoices are due within 15 days of the invoice date unless otherwise specified. Late payments may incur interest at the rate of 1.5% per month.</p>
              <p><strong>5.5. Taxes:</strong> All fees are exclusive of applicable taxes including Goods and Services Tax (GST). The Client is responsible for payment of all applicable taxes.</p>
              <p><strong>5.6. Non-Payment and Suspension:</strong> LumenXo reserves the right to suspend or terminate services in the event of non-payment.</p>
            </div>
          </section>

          {/* 06 PROJECT TIMELINES AND DELIVERY */}
          <section id="section-6" ref={el => sectionsRef.current[6] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">06</span>
            <h2 className="text-3xl font-bold mb-6">Project Timelines and Delivery</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>6.1. Project timelines are estimates and are contingent upon timely receipt of all required materials and approvals from the Client.</p>
              <p>6.2. LumenXo will make reasonable efforts to meet agreed deadlines but shall not be held liable for delays caused by circumstances beyond our reasonable control.</p>
              <p>6.3. Acceptance of deliverables must be communicated within 7 business days of delivery. Failure to provide feedback within this period will constitute acceptance of the deliverables.</p>
            </div>
          </section>

          {/* 07 INTELLECTUAL PROPERTY RIGHTS */}
          <section id="section-7" ref={el => sectionsRef.current[7] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">07</span>
            <h2 className="text-3xl font-bold mb-6">Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p><strong>7.1. Ownership of Deliverables:</strong> Upon full payment of all fees, the Client shall own the final deliverables specifically created for the Client.</p>
              <p><strong>7.2. Pre-existing Materials:</strong> LumenXo retains all rights to pre-existing materials, templates, frameworks, libraries, and tools.</p>
              <p><strong>7.3. Third-Party Components:</strong> Deliverables may include third-party open-source software subject to their respective licenses.</p>
              <p><strong>7.4. LumenXo Intellectual Property:</strong> All trademarks, service marks, logos, and branding materials of LumenXo remain the exclusive property of LumenXo.</p>
              <p><strong>7.5. Portfolio and Marketing Rights:</strong> LumenXo reserves the right to display completed work in our portfolio unless requested otherwise in writing.</p>
              <p><strong>7.6. Retention of Rights Before Payment:</strong> Until full payment is received, LumenXo retains all rights, title, and interest in the deliverables.</p>
            </div>
          </section>

          {/* 08 CONFIDENTIALITY */}
          <section id="section-8" ref={el => sectionsRef.current[8] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">08</span>
            <h2 className="text-3xl font-bold mb-6">Confidentiality</h2>
            <p className="text-gray-300 leading-relaxed">8.1. Both parties agree to maintain the confidentiality of all Confidential Information disclosed during the course of the engagement. This obligation shall survive for a period of 3 years after termination of the Agreement.</p>
          </section>

          {/* 09 WARRANTIES AND DISCLAIMERS */}
          <section id="section-9" ref={el => sectionsRef.current[9] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">09</span>
            <h2 className="text-3xl font-bold mb-6">Warranties and Disclaimers</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p><strong>9.1. LumenXo Warranties:</strong> Services will be performed in a professional manner and conform to agreed specifications.</p>
              <p><strong>9.2. Warranty Period:</strong> LumenXo provides a warranty period of 30 days from the date of final delivery for bug fixes related to specifications.</p>
              <p className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl italic text-sm text-gray-400">
                9.3. EXCEPT AS EXPRESSLY PROVIDED, LUMENXO MAKES NO OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
              </p>
            </div>
          </section>

          {/* 10 LIMITATION OF LIABILITY */}
          <section id="section-10" ref={el => sectionsRef.current[10] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">10</span>
            <h2 className="text-3xl font-bold mb-6">Limitation of Liability</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>10.1. LUMENXO'S TOTAL LIABILITY SHALL NOT EXCEED THE TOTAL FEES PAID BY THE CLIENT IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.</p>
              <p>10.2. IN NO EVENT SHALL LUMENXO BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFITS OR DATA.</p>
            </div>
          </section>

          {/* 11 INDEMNIFICATION */}
          <section id="section-11" ref={el => sectionsRef.current[11] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">11</span>
            <h2 className="text-3xl font-bold mb-6">Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">11.1. The Client agrees to indemnify, defend, and hold harmless LumenXo from any claims arising from Client's breach of these Terms or use of the deliverables.</p>
          </section>

          {/* 12 SUPPORT AND MAINTENANCE */}
          <section id="section-12" ref={el => sectionsRef.current[12] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">12</span>
            <h2 className="text-3xl font-bold mb-6">Support and Maintenance</h2>
            <p className="text-gray-300 leading-relaxed">12.1. Post-delivery support and maintenance services are not included in the initial project fee unless explicitly stated. Optional maintenance packages are available separately.</p>
          </section>

          {/* 13 TERMINATION */}
          <section id="section-13" ref={el => sectionsRef.current[13] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">13</span>
            <h2 className="text-3xl font-bold mb-6">Termination</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>13.1. Termination by Client: The Client may terminate by providing 15 days written notice, paying for all work completed up to that date.</p>
              <p>13.2. Termination by LumenXo: LumenXo may terminate immediately for non-payment or material breach of Agreement.</p>
            </div>
          </section>

          {/* 14 HOSTING AND THIRD-PARTY SERVICES */}
          <section id="section-14" ref={el => sectionsRef.current[14] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">14</span>
            <h2 className="text-3xl font-bold mb-6">Hosting and Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">14.1. Third-party services are subject to the terms of the respective providers. LumenXo is not responsible for downtime or data loss caused by third-party hosting providers.</p>
          </section>

          {/* 15 DATA PROTECTION AND PRIVACY */}
          <section id="section-15" ref={el => sectionsRef.current[15] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">15</span>
            <h2 className="text-3xl font-bold mb-6">Data Protection and Privacy</h2>
            <p className="text-gray-300 leading-relaxed">15.1. LumenXo complies with the Information Technology Act, 2000. Our collection and use of personal information is governed by our Privacy Policy.</p>
          </section>

          {/* 16 ACCEPTABLE USE POLICY */}
          <section id="section-16" ref={el => sectionsRef.current[16] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">16</span>
            <h2 className="text-3xl font-bold mb-6">Acceptable Use Policy</h2>
            <p className="text-gray-300 leading-relaxed">16.1. Clients agree not to use Services for illegal activities, distribution of malware, spamming, or infringement of intellectual property rights.</p>
          </section>

          {/* 17 FORCE MAJEURE */}
          <section id="section-17" ref={el => sectionsRef.current[17] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">17</span>
            <h2 className="text-3xl font-bold mb-6">Force Majeure</h2>
            <p className="text-gray-300 leading-relaxed">17.1. Neither party shall be liable for failure or delay in performance due to events beyond their reasonable control, such as acts of God, war, or pandemics.</p>
          </section>

          {/* 18 DISPUTE RESOLUTION */}
          <section id="section-18" ref={el => sectionsRef.current[18] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">18</span>
            <h2 className="text-3xl font-bold mb-6">Dispute Resolution</h2>
            <p className="text-gray-300 leading-relaxed">18.1. These Terms are governed by the laws of India. The courts of Balasore, Odisha, India shall have exclusive jurisdiction.</p>
          </section>

          {/* 19 GENERAL PROVISIONS */}
          <section id="section-19" ref={el => sectionsRef.current[19] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">19</span>
            <h2 className="text-3xl font-bold mb-6">General Provisions</h2>
            <p className="text-gray-300 leading-relaxed">19.1. Entire Agreement: These Terms constitute the entire agreement between the parties. LumenXo reserves the right to modify these Terms at any time.</p>
          </section>

          {/* 20 INTERNATIONAL CLIENTS */}
          <section id="section-20" ref={el => sectionsRef.current[20] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">20</span>
            <h2 className="text-3xl font-bold mb-6">International Clients</h2>
            <p className="text-gray-300 leading-relaxed">20.1. For international clients, payments may be accepted in USD or EUR. International clients are responsible for compliance with local tax laws.</p>
          </section>

          {/* 21 WEBSITE USE TERMS */}
          <section id="section-21" ref={el => sectionsRef.current[21] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">21</span>
            <h2 className="text-3xl font-bold mb-6">Website Use Terms</h2>
            <p className="text-gray-300 leading-relaxed">21.1. Subject to these Terms, LumenXo grants you a limited license to access and use our website for lawful purposes.</p>
          </section>

          {/* 22 REFUND AND CANCELLATION POLICY */}
          <section id="section-22" ref={el => sectionsRef.current[22] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">22</span>
            <h2 className="text-3xl font-bold mb-6">Refund and Cancellation Policy</h2>
            <p className="text-gray-300 leading-relaxed">22.1. Advance payments are generally non-refundable once work has commenced. Refunds may be considered on a case-by-case basis.</p>
          </section>

          {/* 23 COMMUNICATION AND FEEDBACK */}
          <section id="section-23" ref={el => sectionsRef.current[23] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">23</span>
            <h2 className="text-3xl font-bold mb-6">Communication and Feedback</h2>
            <p className="text-gray-300 leading-relaxed">23.1. LumenXo may communicate via email, phone, or WhatsApp regarding project updates and service-related matters.</p>
          </section>

          {/* 24 TESTIMONIALS AND REVIEWS */}
          <section id="section-24" ref={el => sectionsRef.current[24] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">24</span>
            <h2 className="text-3xl font-bold mb-6">Testimonials and Reviews</h2>
            <p className="text-gray-300 leading-relaxed">24.1. With Client permission, LumenXo may use testimonials and reviews in marketing materials.</p>
          </section>

          {/* 25 CONTACT INFORMATION */}
          <section id="section-25" ref={el => sectionsRef.current[25] = el} className="scroll-mt-32">
            <span className="text-4xl font-bold text-gray-800 block mb-4">25</span>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-white/10 p-8 rounded-3xl">
              <p className="text-gray-200 font-bold mb-2">LumenXo Software Private Limited</p>
              <p className="text-gray-400 text-sm mb-6">Balasore, Odisha, India</p>
              <div className="space-y-2">
                <p className="text-orange-400 font-medium">📧 info.lumenxo@gmail.com</p>
                <p className="text-orange-400 font-medium">📞 +91 7656918304</p>
                <p className="text-orange-400 font-medium">🌐 www.lumenxo.com</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  CIN: U62013OD2025PTC048859
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                  © 2026 LumenXo Software Private Limited. All rights reserved.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.3);
        }
      `}</style>

      <GlobalFooter theme="dark" />
    </div>
  );
};

export default TermsOfService;
