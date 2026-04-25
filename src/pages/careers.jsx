import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Award, 
  Zap, 
  Heart, 
  Coffee, 
  GraduationCap, 
  Briefcase,
  MapPin,
  Clock,
  Banknote,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import GlobalNavbar from "../components/GlobalNavbar";
import GlobalFooter from "../components/GlobalFooter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const jobListings = [
  {
    title: "Full Stack Developer Intern",
    category: "Engineering",
    location: "Remote",
    type: "Internship",
    salary: "Unpaid",
    description:
      "Join our engineering team as a Full Stack Developer Intern to gain hands-on experience building scalable web applications using modern technologies. Work alongside experienced developers and contribute to real-world projects over a 60-day internship program.",
    categoryColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
  {
    title: "UI/UX Designer Intern",
    category: "Design",
    location: "Remote",
    type: "Internship",
    salary: "Unpaid",
    description:
      "Learn UI/UX design fundamentals while working on real projects during our 60-day internship program. Gain hands-on experience in user research, wireframing, and interface design under mentorship of senior designers.",
    categoryColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  },
  {
    title: "Graphics Designer Intern",
    category: "Marketing",
    location: "Remote",
    type: "Internship",
    salary: "Unpaid",
    description:
      "Develop graphic design skills while creating visual content for marketing campaigns during our 60-day internship program. Learn brand guidelines and design best practices in a professional environment.",
    categoryColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  },
  {
    title: "Video Editor Intern",
    category: "Content",
    location: "Remote",
    type: "Internship",
    salary: "Unpaid",
    description:
      "Learn video editing and post-production techniques while working on content projects during our 60-day internship program. Gain experience with professional editing software and video production workflows.",
    categoryColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  },
];

const CareersSection = () => {
  const heroTextRef = useRef(null);
  const statsRef = useRef(null);
  const benefitsRef = useRef(null);
  const jobsRef = useRef(null);

  useEffect(() => {
    // Hero Animation
    gsap.fromTo(
      heroTextRef.current.children,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
    );

    // Scroll Animations
    const sections = [statsRef.current, benefitsRef.current, jobsRef.current];
    sections.forEach((section) => {
      if (section && section.children) {
        gsap.fromTo(
          section.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="bg-[#000000] min-h-screen font-sans text-white selection:bg-[#F05A28] selection:text-white">
      {/* ── Edge-to-edge 100vh Hero Section ── */}
      <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden", background: "#000000" }}>
        <GlobalNavbar theme="dark" />
        <div ref={heroTextRef} style={{
          position: "absolute", bottom: 20, left: 0, width: "100%",
          zIndex: 5, textAlign: "center", pointerEvents: "none",
          display: "flex", justifyContent: "center", alignItems: "flex-end",
        }}>
          <h1 style={{
            fontFamily: "'Inter', 'DM Sans', sans-serif",
            fontSize: "23vw",
            fontWeight: 900, color: "#ffffff",
            margin: 0, lineHeight: 0.85,
            letterSpacing: "-0.04em",
            userSelect: "none",
            width: "100%",
            textTransform: "uppercase",
          }}>CAREERS</h1>
        </div>
      </div>

      {/* ── Stats / Core Value Section ── */}
      <section className="px-6 md:px-12 py-20 border-t border-gray-900 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
              <Users className="w-10 h-10 text-[#F05A28] mb-6" />
              <h3 className="text-3xl font-bold mb-3">15+ Team Members</h3>
              <p className="text-gray-400 leading-relaxed">Diverse, talented professionals from across India collaborating daily.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
              <Award className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-3xl font-bold mb-3">Great Culture</h3>
              <p className="text-gray-400 leading-relaxed">Recognized as a great place to work, learn, and grow your career.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
              <Zap className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-3xl font-bold mb-3">Fast-Growing</h3>
              <p className="text-gray-400 leading-relaxed">Expanding rapidly with exciting opportunities and challenging projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits Section ── */}
      <section className="px-6 md:px-12 py-32 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Why Work <span className="text-gray-500">With Us?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer competitive benefits and a supportive environment where you can do your best work.
            </p>
          </div>

          <div ref={benefitsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 hover:border-gray-600 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Health & Wellness</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Comprehensive health insurance, mental health support, and wellness programs.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 hover:border-gray-600 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Work</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Remote-first culture with flexible hours and a strong focus on work-life balance.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 hover:border-gray-600 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Growth & Learning</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Professional development budget, conferences, and continuous skill enhancement.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 hover:border-gray-600 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Coffee className="w-5 h-5 text-[#F05A28]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Great Goodies</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Free company swag, team outings, the latest tech equipment, and a fun vibe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Job Openings Section ── */}
      <section className="px-6 md:px-12 py-32 bg-[#050505] border-t border-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                Open <span className="text-gray-500">Positions</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-xl">
                Find your next opportunity and join our mission to build amazing software.
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm font-medium text-gray-500 uppercase tracking-widest mt-6">
              <span>{jobListings.length} Positions Available</span>
            </div>
          </div>

          <div ref={jobsRef} className="flex flex-col">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="group relative border-t border-gray-800 py-10 hover:bg-white/[0.02] transition-colors px-6 -mx-6 rounded-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#F05A28] transition-colors">{job.title}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${job.categoryColor}`}>
                        {job.category}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4 font-medium">
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.type}</span>
                      <span className="flex items-center gap-1.5"><Banknote className="w-4 h-4" /> {job.salary}</span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                      {job.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 min-w-[140px]">
                    <Link
                      to="/ApplyNow"
                      className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#F05A28] hover:text-white transition-all w-full text-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-800"></div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="px-6 md:px-12 py-32 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-gray-900/40 to-black border border-gray-800 p-12 md:p-20 rounded-[40px]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Don't See a Perfect Match?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="https://forms.gle/SBdjJmp2Zn5KCxwv9"
              className="bg-[#F05A28] hover:bg-[#e04e20] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-transform hover:scale-105"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/AboutUs"
              className="bg-transparent border border-gray-600 hover:border-white text-white px-8 py-4 rounded-full font-bold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter theme="dark" />
    </div>
  );
};

export default CareersSection;
