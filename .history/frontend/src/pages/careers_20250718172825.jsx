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
  Headphones,
  Building,
  Target,
  Rocket,
  CheckCircle,
  Play,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import Navbar from './Navbar';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('positions');
  const [expandedJob, setExpandedJob] = useState(null);

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
      color: 'blue',
      urgent: true,
      team: 'Platform Engineering',
      posted: '2 days ago'
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
      color: 'pink',
      urgent: false,
      team: 'Product Design',
      posted: '1 week ago'
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
      color: 'green',
      urgent: true,
      team: 'Infrastructure',
      posted: '3 days ago'
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
      color: 'orange',
      urgent: false,
      team: 'Growth Marketing',
      posted: '5 days ago'
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
      color: 'indigo',
      urgent: false,
      team: 'Product Strategy',
      posted: '1 week ago'
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
      color: 'cyan',
      urgent: false,
      team: 'Customer Experience',
      posted: '4 days ago'
    }
  ];

  const companyValues = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We push boundaries and embrace new technologies',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for quality in everything we do',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We care deeply about our users and each other',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const perks = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible hours',
      highlight: 'Global Team'
    },
    {
      icon: Award,
      title: 'Learning & Development',
      description: '$3,000 annual budget for courses, conferences, and books',
      highlight: '$3K Budget'
    },
    {
      icon: Shield,
      title: 'Comprehensive Benefits',
      description: 'Health, dental, vision, and mental health coverage',
      highlight: '100% Covered'
    },
    {
      icon: Coffee,
      title: 'Unlimited PTO',
      description: 'Take the time you need to recharge and stay productive',
      highlight: 'No Limits'
    },
    {
      icon: Zap,
      title: 'Innovation Time',
      description: '20% of your time dedicated to personal projects',
      highlight: '20% Time'
    },
    {
      icon: TrendingUp,
      title: 'Equity Package',
      description: 'Share in our success with competitive stock options',
      highlight: 'Ownership'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700'
    };
    return colors[color] || colors.blue;
  };

  const JobCard = ({ job }) => {
    const IconComponent = job.icon;
    const isExpanded = expandedJob === job.id;

    return (
      <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Job Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(job.color)} rounded-xl flex items-center justify-center shadow-lg`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              {job.urgent && (
                <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">
                  Urgent
                </span>
              )}
              <span className="text-xs text-gray-500">{job.posted}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>

          <div className="flex items-center text-sm text-gray-600 mb-3">
            <Building className="w-4 h-4 mr-1" />
            <span className="mr-4">{job.team}</span>
            <MapPin className="w-4 h-4 mr-1" />
            <span>{job.location}</span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {job.description}
          </p>

          {/* Job Meta */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full text-sm">
              <Clock className="w-3 h-3 mr-1 text-gray-500" />
              <span className="text-gray-700">{job.type}</span>
            </div>
            <div className="flex items-center bg-green-50 px-3 py-1 rounded-full text-sm">
              <DollarSign className="w-3 h-3 mr-1 text-green-600" />
              <span className="text-green-700 font-medium">{job.salary}</span>
            </div>
            <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full text-sm">
              <Users className="w-3 h-3 mr-1 text-blue-600" />
              <span className="text-blue-700">{job.experience}</span>
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="px-6 pb-4 border-t border-gray-100 pt-4">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                <ul className="space-y-1">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                <div className="flex flex-wrap gap-1">
                  {job.benefits.map((benefit, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="px-6 pb-6 flex items-center justify-between">
          <button
            onClick={() => setExpandedJob(isExpanded ? null : job.id)}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          <button className={`bg-gradient-to-r ${getColorClasses(job.color)} text-white px-6 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}>
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          
          <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Briefcase className="w-4 h-4 text-white mr-2" />
                <span className="text-white text-sm font-medium">We're Hiring</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Join the Future of
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                Build extraordinary products with a team that values creativity, growth, and making a real impact. 
                Your next career adventure starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button 
                  onClick={() => setActiveTab('positions')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl"
                >
                  View Open Positions
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Watch Our Story
                  <Play className="w-5 h-5 ml-2 inline" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">150+</div>
                  <div className="text-blue-200 text-sm">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">25+</div>
                  <div className="text-blue-200 text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-blue-200 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">4.9★</div>
                  <div className="text-blue-200 text-sm">Employee Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex space-x-8">
              {[
                { id: 'positions', label: 'Open Positions', count: filteredJobs.length },
                { id: 'culture', label: 'Our Culture' },
                { id: 'benefits', label: 'Benefits & Perks' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  {tab.count && (
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Open Positions Tab */}
          {activeTab === 'positions' && (
            <div>
              {/* Search and Filters */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search positions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center justify-center bg-gray-50 rounded-xl px-4 py-3">
                    <span className="text-gray-600 text-sm font-medium">
                      {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Job Listings */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              {/* No Results */}
              {filteredJobs.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search criteria or check back later for new opportunities.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedDepartment('All');
                      setSelectedLocation('All');
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Culture Tab */}
          {activeTab === 'culture' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  These core values guide everything we do and shape the culture we're building together.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>

              {/* Team Photo Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Amazing Team</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  We're a diverse group of creators, thinkers, and problem-solvers from around the world, 
                  united by our passion for building exceptional products.
                </p>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                  View Team Gallery
                  <ExternalLink className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We believe in taking care of our team so they can do their best work and live their best lives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {perks.map((perk, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <perk.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                        {perk.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{perk.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{perk.description}</p>
                  </div>
                ))}
              </div>

              {/* Additional Benefits */}
              <div className="bg-gray-900 rounded-3xl p-12 text-white">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">And Much More...</h3>
                  <p className="text-gray-300 text-lg">
                    We're constantly adding new benefits based on what our team values most.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400 mb-2">$5,000</div>
                    <div className="text-gray-300 text-sm">Home Office Setup</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-2">4 Weeks</div>
                    <div className="text-gray-300 text-sm">Sabbatical Leave</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-2">Monthly</div>
                    <div className="text-gray-300 text-sm">Team Events</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400 mb-2">24/7</div>
                    <div className="text-gray-300 text-sm">Support Access</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Don't see the perfect role? We're always looking for exceptional talent. 
              Send us your resume and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl">
                Submit Your Resume
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Schedule a Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;