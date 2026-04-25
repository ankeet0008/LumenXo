import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from './Services';
import GlobalNavbar from './GlobalNavbar';
import GlobalFooter from './GlobalFooter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  const heroImageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentSectionRef = useRef(null);
  const featuresRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    if (!service) return; // Wait for redirect if not found

    window.scrollTo(0, 0);

    const tl = gsap.timeline();

    // ── Hero Entrance ──
    tl.fromTo(heroImageRef.current, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 0.6, duration: 1.5, ease: "power3.out" })
      .fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "back.out(1.2)" }, "-=1")
      .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.6");

    // ── Scroll Parallax on Hero Image ──
    gsap.to(heroImageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroImageRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // ── Staggered Content Reveal ──
    const contentElems = contentSectionRef.current?.children;
    if (contentElems) {
      gsap.fromTo(contentElems, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out",
          scrollTrigger: {
            trigger: contentSectionRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // ── Features & Benefits Stagger ──
    const lists = [featuresRef.current?.children, featuresRef.current?.nextSibling?.children];
    lists.forEach((list) => {
      if (list) {
        gsap.fromTo(list, 
          { x: -30, opacity: 0 }, 
          { 
            x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
            scrollTrigger: {
              trigger: list[0]?.parentElement,
              start: "top 85%",
            }
          }
        );
      }
    });

    // ── Tech Badges Pop ──
    if (techRef.current?.children) {
      gsap.fromTo(techRef.current.children,
        { scale: 0.5, opacity: 0 },
        { 
          scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 90%",
          }
        }
      );
    }

  }, [service]);

  if (!service) {
    navigate('/Services');
    return null;
  }

  const Icon = service.iconComponent;

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-50">
        <GlobalNavbar theme="dark" />
      </div>

      {/* ── Hero Section ── */}
      <div className="relative h-[80vh] flex items-end pb-20 justify-center overflow-hidden">
        {/* Parallax Image */}
        <div 
          ref={heroImageRef} 
          className="absolute inset-0 z-0 w-full h-[120%]"
          style={{ 
            backgroundImage: `url(${service.img})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
        
        {/* Back button */}
        <Link 
          to="/Services" 
          className="absolute top-32 left-8 md:left-16 z-20 flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
        >
          <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="font-medium text-sm tracking-wider uppercase">Back to Services</span>
        </Link>

        {/* Title Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <div className="inline-flex items-center justify-center space-x-4 mb-6">
            <div className={`p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${service.accentColor}`}>
              <Icon size={40} />
            </div>
          </div>
          <h1 ref={titleRef} className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            {service.title}
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* ── Content Section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div ref={contentSectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Overview (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-[#F05A28] uppercase mb-4">Overview</h2>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Transforming ideas into <span className="text-gray-500">digital reality.</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.detailedContent.overview}
              </p>
            </div>
            
            <div className="pt-8 border-t border-gray-800">
              <h2 className="text-sm font-bold tracking-widest text-white uppercase mb-6">Powered By</h2>
              <div ref={techRef} className="flex flex-wrap gap-3">
                {service.detailedContent.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-gray-900/80 border border-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:border-[#F05A28] hover:text-[#F05A28] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Details & Features (Right Column) */}
          <div className="lg:col-span-7 bg-gray-900/30 border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-white mb-8 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#F05A28] mr-3"></div>
                  Key Capabilities
                </h4>
                <ul ref={featuresRef} className="space-y-6">
                  {service.detailedContent.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-4">
                      <div className="p-1 rounded bg-[#F05A28]/20 mt-1">
                        <Check className="w-4 h-4 text-[#F05A28]" />
                      </div>
                      <span className="text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-bold text-white mb-8 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                  Business Impact
                </h4>
                <ul className="space-y-6">
                  {service.detailedContent.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-4">
                      <div className="p-1 rounded bg-blue-500/20 mt-1">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-300 leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-black/40 rounded-2xl border border-gray-800 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Ready to scale?</h4>
                <p className="text-gray-400 text-sm">Let's integrate this solution into your business.</p>
              </div>
              <a 
                href="https://alvo.chat/7ytu" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 sm:mt-0 px-8 py-4 bg-[#F05A28] hover:bg-[#e04e20] text-white rounded-xl font-bold transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </div>

      <GlobalFooter theme="dark" />
    </div>
  );
}
