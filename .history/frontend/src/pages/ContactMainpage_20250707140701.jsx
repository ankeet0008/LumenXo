import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  CheckCircle,
  MapPin,
  Clock,
  Globe
} from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ firstName:'', lastName:'', email:'', phone:'', company:'', subject:'', message:'', service:'' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'Cloud Solutions',
    'UI/UX Design',
    'Consulting Services',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ firstName:'', lastName:'', email:'', phone:'', company:'', subject:'', message:'', service:'' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    { icon: MapPin, title: 'Visit Our Office', details: ['123 Business District', 'San Francisco, CA 94105'], color: 'text-blue-600' },
    { icon: Phone, title: 'Call Us', details: ['+1 (555) 123-4567', '+1 (555) 987-6543'], color: 'text-green-600' },
    { icon: Mail, title: 'Email Us', details: ['hello@lumenxo.com', 'support@lumenxo.com'], color: 'text-purple-600' },
    { icon: Clock, title: 'Business Hours', details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'], color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">

      {/* Header Section with Full Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1684120269169-0ab71068e058?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==')`
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageSquare className="h-8 w-8 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Our team of experts is here to help you achieve your digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className={`p-3 rounded-lg bg-gray-50 ${info.color}`}><info.icon className="h-6 w-6" /></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((d,i) => <p key={i} className="text-gray-600 text-sm">{d}</p>)}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Why Choose LumenXo?</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {['24/7 Customer Support', 'Free Initial Consultation', 'Enterprise-Grade Security', 'Agile Development Process'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-medium">Message sent successfully! We'll be in touch soon.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* ... Include all form fields (same as your original code above) */}
                  {/* Submit Button */}
                  <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white flex items-center justify-center gap-3 transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and{' '}
                    <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* (Optional) FAQ section below ... */}
    </div>
  );
};

export default ContactForm;
