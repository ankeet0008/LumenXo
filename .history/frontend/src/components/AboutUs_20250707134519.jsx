import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Target, 
  Eye, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin
} from 'lucide-react';
import SocialMedia from './SocialMedia';

const AboutUs = () => {
  const stats = [
    { number: '2025', label: 'Founded', icon: Calendar },
    { number: '50+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '25+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Award }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security protocols in every solution we deliver'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technologies and forward-thinking approaches'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our primary measure of achievement'
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Solutions designed to grow with your business needs'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">About LumenXo</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Transformation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              LumenXo Software Pvt. Ltd. delivers enterprise-grade software solutions that drive innovation, 
              enhance operational efficiency, and accelerate business growth in the digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="LumenXo Team"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">2025</div>
                  <div className="text-sm">Established</div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Leading Software Innovation Since 2025
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>LumenXo Software Pvt. Ltd.</strong> stands at the forefront of digital innovation, 
                  delivering cutting-edge software solutions that transform businesses and drive sustainable growth. 
                  Our expertise spans across web development, mobile applications, cloud solutions, and enterprise software.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded on <strong>April 16, 2025</strong>, we combine technical excellence with strategic thinking 
                  to create solutions that not only meet today's challenges but anticipate tomorrow\'s opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Seamless Integration</h3>
                  <p className="text-gray-700 text-sm">
                    Our solutions integrate effortlessly with existing systems, ensuring minimal disruption and maximum efficiency.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h3 className="font-semibold text-gray-900 mb-2">Operational Excellence</h3>
                  <p className="text-gray-700 text-sm">
                    We streamline business operations through automation and intelligent process optimization.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on strong principles and driven by clear vision, we create lasting value for our clients and communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-2xl">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To deliver innovative, efficient, and scalable software solutions that empower businesses 
                to succeed in the digital era while nurturing young talent through high-quality training 
                and internship opportunities that prepare students for successful tech careers.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-2xl">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become a leading software company recognized for driving digital transformation 
                and building future-ready solutions. Through client satisfaction and youth empowerment, 
                LumenXo aims to be a beacon of innovation, excellence, and opportunity.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <p className="text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-2xl w-fit mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Partner with LumenXo to unlock your organization's digital potential and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Headquarters</h3>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
            <div>
              <Building2 className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Incorporated</h3>
              <p className="text-gray-400">April 16, 2025</p>
            </div>
            <div>
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Team Size</h3>
              <p className="text-gray-400">25+ Professionals</p>
            </div>
          </div>
        </div>
      </section>

      <SocialMedia />
    </div>
  );
};

export default AboutUs;