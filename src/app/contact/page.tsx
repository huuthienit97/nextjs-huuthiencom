"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import NetworkBackground from '@/components/NetworkBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý logic gửi form ở đây
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      content: "contact@huuthien.com",
      link: "mailto:contact@huuthien.com"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Điện thoại",
      content: "+84 123 456 789",
      link: "tel:+84123456789"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Địa chỉ",
      content: "Thành phố Hồ Chí Minh, Việt Nam",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      <NetworkBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <Header />

        <div className="pt-24">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Liên Hệ
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất có thể
            </motion.p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                href={info.link}
                key={index}
                variants={itemVariants}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 
                         backdrop-blur-lg border border-gray-800 hover:border-gray-600
                         transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300">
                    {info.title}
                  </h3>
                  <p className="text-gray-400">
                    {info.content}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-2xl mx-auto mb-24"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-gray-700 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                           transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-gray-700 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                           transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Tiêu đề"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-gray-700 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                           transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <textarea
                  name="message"
                  placeholder="Nội dung tin nhắn"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-gray-700 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                           transition-all duration-300 resize-none"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <button
                  type="submit"
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600
                           hover:from-blue-500 hover:to-purple-500 transform hover:-translate-y-1 
                           transition-all duration-300 shadow-lg hover:shadow-blue-500/25
                           flex items-center space-x-2 mx-auto"
                >
                  <span>Gửi tin nhắn</span>
                  <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            </form>
          </motion.div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 