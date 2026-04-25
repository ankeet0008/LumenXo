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
  // ... your state & handlers unchanged

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">

      {/* Header Section with smaller, professional fonts */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1684120269169-0ab71068e058?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==')`
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="h-6 w-6 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wide uppercase text-xs">Contact Us</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
              Let's Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Amazing Together
              </span>
            </h1>
            <p className="text-md md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? Our team of experts is here to help you achieve your digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The rest of your component unchanged, or you can reduce other font sizes similarly */}
