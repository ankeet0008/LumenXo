import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Award, Calendar, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Passionate developers, designers, and strategists"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tailored Solutions",
      description: "Custom web, mobile, and software applications"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Driven",
      description: "High-quality IT solutions with client satisfaction"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Cutting-edge technologies and methodologies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
              About LumenXo
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Businesses with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Innovative Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A forward-thinking IT company committed to delivering powerful and scalable digital solutions that drive business success.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Section */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-60" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-100 rounded-full opacity-40" />
                
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <img
                    src="https://i.imgur.com/WbQnbas.png"
                    alt="About LumenXo Software"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Building the Future of{' '}
                  <span className="text-blue-600">Digital Innovation</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>LumenXo Software Pvt. Ltd.</strong> specializes in crafting tailored web, mobile, and software applications that help organizations thrive in a competitive digital landscape.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Business Operations</h3>
                    <p className="text-gray-700">
                      We build solutions that simplify and automate business operations—enabling companies to enhance productivity, reduce complexity, and focus on growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Effortless Integration</h3>
                    <p className="text-gray-700">
                      Our technologies are designed for smooth and secure integration into your existing systems, ensuring minimal disruption and maximum efficiency.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Info Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Who We Are */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Incorporated: April 16, 2025</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  LumenXo Software Pvt. Ltd. is a dynamic and innovative software company that has quickly emerged as a trusted name in the industry.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We specialize in web development, mobile app development, custom software solutions, and automation tools—making us a reliable partner for businesses looking to grow and succeed.
                </p>
              </div>
            </motion.div>

            {/* Our Mission */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To deliver innovative, efficient, and scalable software solutions that empower businesses to succeed in the digital era. We are equally dedicated to nurturing young talent by providing high-quality training and internship opportunities.
              </p>
            </motion.div>

            {/* Our Vision */}
            <motion.div 
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 border border-indigo-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become a leading software company recognized for driving digital transformation and building future-ready solutions. Through our commitment to client satisfaction and youth empowerment, LumenXo aims to be a beacon of innovation and excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how LumenXo can help you achieve your digital transformation goals with our innovative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              onClick={() => window.location.href = '/ContactUs'}
            >
              Get Started Today
              <span className="text-xl">→</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;