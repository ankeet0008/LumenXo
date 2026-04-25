import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Briefcase, 
  Star, 
  ArrowRight, 
  Search,
  Filter,
  Heart,
  Award,
  Coffee,
  Zap,
  Globe,
  TrendingUp,
  Code,
  Palette,
  Server,
  Megaphone,
  Shield,
  Headphones
} from 'lucide-react';
import Navbar from './Navbar';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleJobs, setVisibleJobs] = useState(new Set());

  const departments = [
    'All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Operations', 'HR'
  ];

  const locations = [
    'All', 'Remote', 'New York', 'San Francisco', 'London', 'Toronto'
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      experience: '5+ years',
      description: 'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.',
      requirements: [
        'Expert in React.js and Node.js',
        'Experience with AWS/Azure',
        'Strong problem-solving skills',
        'Team collaboration experience'
      ],
      benefits: ['Health Insurance', 'Remote Work', '401k', 'Stock Options'],
      icon: Code,
      gradient: 'from-blue-500 to-purple-600',
      urgent: true
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'New York',
      type: 'Full-time',
      salary: '$90k - $120k',
      experience: '3+ years',
      description: 'Create beautiful, user-centered designs for web and mobile applications.',
      requirements: [
        'Proficiency in Figma/Adobe XD',
        'Strong portfolio',
        'User research experience',
        'Prototyping skills'
      ],
      benefits: ['Health Insurance', 'Design Budget', 'Flexible Hours', 'Learning Budget'],
      icon: Palette,
      gradient: 'from-pink-500 to-rose-600',
      urgent: false
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco',
      type: 'Full-time',
      salary: '$130k - $170k',
      experience: '4+ years',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Kubernetes & Docker expertise',
        'CI/CD pipeline experience',
        'AWS/GCP knowledge',
        'Infrastructure as Code'
      ],
      benefits: ['Health Insurance', 'Stock Options', 'Conference Budget', 'Remote Work'],
      icon: Server,
      gradient: 'from-green-500 to-teal-600',
      urgent: true
    },
    {
      id: 4,
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80k - $110k',
      experience: '3+ years',
      description: 'Lead our digital marketing efforts across multiple channels and platforms.',
      requirements: [
        'SEO/SEM expertise',
        'Social media marketing',
        'Analytics & reporting',
        'Content strategy'
      ],
      benefits: ['Health Insurance', 'Marketing Budget', 'Remote Work', 'Flexible Hours'],
      icon: Megaphone,
      gradient: 'from-orange-500 to-red-600',
      urgent: false
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'Operations',
      location: 'London',
      type: 'Full-time',
      salary: '£70k - £95k',
      experience: '4+ years',
      description: 'Drive product strategy and work with cross-functional teams to deliver exceptional products.',
      requirements: [
        'Product management experience',
        'Agile/Scrum knowledge',
        'Data-driven decision making',
        'Stakeholder management'
      ],
      benefits: ['Health Insurance', 'Stock Options', 'Learning Budget', 'Flexible Hours'],
      icon: TrendingUp,
      gradient: 'from-indigo-500 to-blue-600',
      urgent: false
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      department: 'Sales',
      location: 'Toronto',
      type: 'Full-time',
      salary: 'CAD $75k - $95k',
      experience: '2+ years',
      description: 'Ensure customer satisfaction and drive growth through exceptional service.',
      requirements: [
        'Customer service experience',
        'CRM software knowledge',
        'Communication skills',
        'Problem-solving abilities'
      ],
      benefits: ['Health Insurance', 'Commission', 'Training Budget', 'Career Growth'],
      icon: Headphones,
      gradient: 'from-cyan-500 to-blue-600',
      urgent: false
    }
  ];

  const companyBenefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs',
      color: 'text-red-400'
    },
    {
      icon: Globe,
      title: 'Remote First',
      description: 'Work from anywhere with flexible hours and home office stipend',
      color: 'text-blue-400'
    },
    {
      icon: Award,
      title: 'Learning & Growth',
      description: 'Annual learning budget, conference attendance, and skill development',
      color: 'text-yellow-400'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO, flexible schedules, and team building activities',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'Innovation Time',
      description: '20% time for personal projects and innovation initiatives',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Financial Security',
      description: 'Competitive salary, stock options, and retirement planning',
      color: 'text-indigo-400'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      filteredJobs.forEach((_, index) => {
        setTimeout(() => {
          setVisibleJobs(prev => new Set([...prev, index]));
        }, index * 100);
      });
    }, 200);
    return () => clearTimeout(timer);
  }, [filteredJobs]);

  const JobCard = ({ job, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = job.icon;

    return (
      <div
        className={`group relative transition-all duration-500 transform ${
          visibleJobs.has(index)
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-8 opacity-0 scale-95'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${job.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`} />
        
        {/* Main card */}
        <div className={`relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-gray-700/50 text-white rounded-2xl p-6 overflow-hidden transition-all duration-500 transform ${
          isHovered ? 'scale-105 shadow-xl border-gray-600/70' : 'scale-100 shadow-lg'
        }`}>
          
          {/* Urgent badge */}
          {job.urgent && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              URGENT
            </div>
          )}

          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${job.gradient} rounded-xl flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'rotate-3 scale-110' : ''
            }`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Job title */}
          <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent`}>
            {job.title}
          </h3>

          {/* Job meta */}
          <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-1" />
              {job.department}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {job.type}
            </div>
          </div>

          {/* Salary & Experience */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center text-green-400 font-semibold">
              <DollarSign className="w-4 h-4 mr-1" />
              {job.salary}
            </div>
            <div className="flex items-center text-blue-400">
              <Users className="w-4 h-4 mr-1" />
              {job.experience}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {job.description}
          </p>

          {/* Requirements */}
          <div className="mb-4">
            <h4 className="text-white font-semibold text-sm mb-2">Key Requirements:</h4>
            <div className="grid grid-cols-1 gap-1">
              {job.requirements.slice(0, 3).map((req, idx) => (
                <div key={idx} className="flex items-center text-gray-300 text-xs">
                  <div className={`w-1 h-1 bg-gradient-to-r ${job.gradient} rounded-full mr-2`} />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h4 className="text-white font-semibold text-sm mb-2">Benefits:</h4>
            <div className="flex flex-wrap gap-1">
              {job.benefits.map((benefit, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800/60 text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-700/50"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          {/* Apply button */}
          <button className={`w-full bg-gradient-to-r ${job.gradient} text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/button relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Apply Now</span>
            <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/button:translate-x-1 relative z-10" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
