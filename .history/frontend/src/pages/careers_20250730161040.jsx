import React from 'react';
import {
  Code,
  Palette,
  Play,
  Shield,
  Heart,
  Coffee,
  Globe,
  Calendar,
  Clock,
  BookOpen,
  Award,
  TrendingUp,
  DollarSign,
  Star,
  Building,
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Full Stack Developer Intern',
    department: 'Engineering',
    location: 'Remote',
    salary: 'Unpaid',
    type: 'Internship',
    experience: 'Fresher',
    description:
      'Join our engineering team as a Full Stack Developer Intern to gain hands-on experience building scalable web applications using modern technologies. Work alongside experienced developers and contribute to real-world projects over a 60-day internship program.',
    requirements: [
      "Currently pursuing Bachelor's degree in Computer Science or related field",
      'Basic understanding of web development concepts',
      'Familiarity with HTML, CSS, and JavaScript',
      'Some exposure to React or other frontend frameworks',
      'Basic knowledge of backend technologies (Node.js, Python, or similar)',
      'Eagerness to learn and strong problem-solving mindset',
      'Good communication skills and ability to work in a team',
    ],
    responsibilities: [
      'Assist in developing and maintaining web applications',
      'Write clean, well-documented code under supervision',
      'Participate in code reviews and learn from feedback',
      'Collaborate with team members on assigned projects',
      'Learn and apply best practices in software development',
      'Contribute to testing and debugging of applications',
      'Participate in team meetings and agile development processes',
    ],
    benefits: [
      'Mentorship from experienced developers',
      'Hands-on experience with modern tech stack',
      'Flexible remote work environment',
      'Opportunity for full-time conversion',
      'Learning and development opportunities',
      'Certificate of completion',
    ],
    icon: Code,
    color: 'blue',
    urgent: true,
    team: 'Platform Engineering',
    duration: '60 days',
  },
  {
    id: 2,
    title: 'UI/UX Designer Intern',
    department: 'Design',
    location: 'Remote',
    salary: 'Unpaid',
    type: 'Internship',
    experience: 'Fresher',
    description:
      'Learn UI/UX design fundamentals while working on real projects during our 60-day internship program. Gain hands-on experience in user research, wireframing, and interface design under mentorship of senior designers.',
    requirements: [
      'Currently pursuing degree in Design, HCI, or related field',
      'Basic knowledge of design principles and color theory',
      'Familiarity with Figma, Adobe XD, or Sketch',
      'Portfolio showing design projects (academic or personal)',
      'Strong visual communication skills',
      'Eagerness to learn and receive constructive feedback',
      'Understanding of user-centered design principles',
    ],
    responsibilities: [
      'Assist in creating wireframes, mockups, and prototypes',
      'Support user research activities and usability testing',
      'Learn and apply design system guidelines',
      'Participate in design reviews and critiques',
      'Create design documentation under supervision',
      'Collaborate with developers on design implementation',
      'Contribute to design team projects and initiatives',
    ],
    benefits: [
      'Mentorship from senior designers',
      'Access to professional design tools',
      'Portfolio development opportunities',
      'Creative work environment',
      'Potential for full-time conversion',
      'Design workshop participation',
      'Certificate of completion',
    ],
    icon: Palette,
    color: 'purple',
    urgent: false,
    team: 'Product Design',
    duration: '60 days',
  },
  {
    id: 3,
    title: 'Graphics Designer Intern',
    department: 'Marketing',
    location: 'Remote',
    type: 'Internship',
    salary: 'Unpaid',
    experience: 'Fresher',
    description:
      'Develop graphic design skills while creating visual content for marketing campaigns during our 60-day internship program. Learn brand guidelines and design best practices in a professional environment.',
    requirements: [
      'Currently pursuing degree in Graphic Design, Visual Arts, or related field',
      'Basic proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)',
      'Understanding of design fundamentals and typography',
      'Creative portfolio (academic projects acceptable)',
      'Attention to detail and willingness to learn',
      'Knowledge of current design trends',
      'Basic understanding of print and digital design principles',
    ],
    responsibilities: [
      'Create social media graphics and digital assets under guidance',
      'Assist with marketing material design and branding',
      'Learn brand guidelines and style standards',
      'Support design team with various creative projects',
      'Participate in creative brainstorming sessions',
      'Help maintain brand consistency across materials',
      'Contribute to campaign visual development',
    ],
    benefits: [
      'Access to Adobe Creative Suite',
      'Diverse project experience across mediums',
      'Brand design learning opportunities',
      'Creative team collaboration',
      'Professional portfolio building',
      'Marketing design exposure',
      'Certificate of completion',
    ],
    icon: Palette,
    color: 'orange',
    urgent: false,
    team: 'Creative Marketing',
    duration: '60 days',
  },
  {
    id: 4,
    title: 'Video Editor Intern',
    department: 'Content',
    location: 'Remote',
    salary: 'Unpaid',
    type: 'Internship',
    experience: 'Fresher',
    description:
      'Learn video editing and post-production techniques while working on content projects during our 60-day internship program. Gain experience with professional editing software and video production workflows.',
    requirements: [
      'Currently pursuing degree in Film, Media Production, or related field',
      'Basic knowledge of video editing software (Adobe Premiere, Final Cut Pro, or DaVinci Resolve)',
      'Understanding of video production concepts and storytelling',
      'Creative mindset and interest in visual storytelling',
      'Portfolio of video projects (academic or personal)',
      'Basic knowledge of motion graphics and animation',
      'Familiarity with audio editing principles',
    ],
    responsibilities: [
      'Assist with basic video editing and post-production tasks',
      'Learn color correction, audio editing, and visual effects',
      'Support content creation projects and campaigns',
      'Organize and manage video assets and project files',
      'Learn professional video production workflows',
      'Collaborate with content team on video concepts',
      'Participate in video planning and storyboarding sessions',
    ],
    benefits: [
      'Professional video editing software access',
      'Hands-on production experience',
      'Creative storytelling opportunities',
      'Industry-standard workflow training',
      'Content creation skill development',
      'Video production mentorship',
      'Certificate of completion',
    ],
    icon: Play,
    color: 'indigo',
    urgent: false,
    team: 'Content Production',
    duration: '60 days',
  },
];

const benefits = [
  {
    category: 'Health & Wellness',
    items: [
      { icon: Shield, title: 'Comprehensive Health Insurance', description: '100% premium coverage for employees and families' },
      { icon: Heart, title: 'Mental Health Support', description: 'Counseling services and wellness programs' },
      { icon: Coffee, title: 'Wellness Stipend', description: '$500 annual budget for fitness and wellness' },
    ],
  },
  {
    category: 'Work-Life Balance',
    items: [
      { icon: Globe, title: 'Remote-First Culture', description: 'Work from anywhere with flexible schedules' },
      { icon: Calendar, title: 'Unlimited PTO', description: 'Take the time you need to recharge' },
      { icon: Clock, title: 'Flexible Hours', description: 'Core hours with flexible start and end times' },
    ],
  },
  {
    category: 'Growth & Development',
    items: [
      { icon: BookOpen, title: 'Learning Budget', description: '$3,000 annual budget for courses and conferences' },
      { icon: Award, title: 'Career Development', description: 'Mentorship programs and growth planning' },
      { icon: TrendingUp, title: 'Internal Mobility', description: 'Opportunities to explore different roles and teams' },
    ],
  },
  {
    category: 'Financial Benefits',
    items: [
      { icon: DollarSign, title: 'Competitive Salary', description: 'Market-leading compensation packages' },
      { icon: Star, title: 'Equity Package', description: 'Stock options for all full-time employees' },
      { icon: Building, title: '401(k) Matching', description: 'Up to 6% company matching contribution' },
    ],
  },
];

export default function CareersSection() {
  return (
    <div className="bg-black text-white px-6 py-16 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-4">
        Open <span className="text-violet-500">Positions</span>
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Find your next opportunity and join our mission to build amazing software.
      </p>

      <div className="space-y-6 max-w-4xl mx-auto">
        {jobOpenings.map((job) => (
          <div key={job.id} className="p-6 bg-zinc-900 rounded-lg shadow-sm border border-zinc-800">
            <div className="flex items-center gap-4 mb-4">
              <job.icon className={`w-6 h-6 text-${job.color}-500`} />
              <h3 className="text-xl font-semibold">{job.title}</h3>
            </div>
            <p className="text-gray-400 mb-2">{job.description}</p>
            <div className="text-sm text-gray-500 space-x-3">
              <span>{job.type}</span>
              <span>• {job.location}</span>
              <span>• {job.duration}</span>
              {job.urgent && <span className="text-red-500 font-semibold">• Urgent</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-10">Benefits & Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((group, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold mb-4 text-violet-400">{group.category}</h4>
              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 mt-1 text-violet-500" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-24">
        <h2 className="text-3xl font-bold mb-4">
          Don&apos;t See a Perfect <span className="text-violet-400">Match?</span>
        </h2>
        <p className="text-gray-400 mb-8">
          We&apos;re always looking for talented individuals. Send us your resume and let us know how you&apos;d like to contribute to our mission.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-violet-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90">
            → Send Your Resume
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
}
