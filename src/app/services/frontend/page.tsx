"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FiMonitor, FiSmartphone, FiZap, FiSearch } from 'react-icons/fi';
import NetworkBackground from '@/components/NetworkBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const technologies = [
  {
    name: "React",
    icon: <SiReact className="w-16 h-16 text-[#61DAFB] group-hover:animate-spin transition-all duration-500" />,
    description: "Thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng tương tác",
    gradient: "from-[#61DAFB20] to-[#61DAFB10]"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-16 h-16 text-white group-hover:animate-pulse transition-all duration-500" />,
    description: "Framework React mạnh mẽ với SSR, SSG và tối ưu hiệu suất tích hợp",
    gradient: "from-gray-800 to-gray-900"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-16 h-16 text-[#3178C6] group-hover:animate-bounce transition-all duration-500" />,
    description: "Siêu tập hợp của JavaScript với kiểu dữ liệu tĩnh để code an toàn hơn",
    gradient: "from-[#3178C620] to-[#3178C610]"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-16 h-16 text-[#38B2AC] group-hover:animate-pulse transition-all duration-500" />,
    description: "Framework CSS tiện ích cho phép tùy chỉnh nhanh chóng và linh hoạt",
    gradient: "from-[#38B2AC20] to-[#38B2AC10]"
  }
];

const features = [
  {
    icon: <FiMonitor className="w-8 h-8" />,
    title: "Single Page Applications (SPA)",
    description: "Xây dựng ứng dụng web một trang với trải nghiệm người dùng mượt mà"
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: "Responsive Design",
    description: "Thiết kế thích ứng hoàn hảo trên mọi thiết bị và kích thước màn hình"
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Tối ưu hiệu suất trang web với các kỹ thuật lazy loading và code splitting"
  },
  {
    icon: <FiSearch className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Tối ưu hóa cho công cụ tìm kiếm với Server-side Rendering và Meta tags"
  }
];

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

export default function FrontendService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      <NetworkBackground />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <Header />

        {/* Content with adjusted padding for fixed header */}
        <div className="pt-24">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 space-y-6"
          >
            <div className="inline-block animate-float">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Frontend Development
              </h1>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Chuyên thiết kế và phát triển giao diện web hiện đại, tương tác cao và tối ưu hiệu suất
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Khám phá những giải pháp sáng tạo và hiệu quả cho doanh nghiệp của bạn
            </motion.p>
          </motion.div>

          {/* Technologies Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 
                           backdrop-blur-lg border border-gray-800 hover:border-gray-600
                           transform hover:-translate-y-2 transition-all duration-300
                           hover:shadow-2xl hover:shadow-${tech.name.toLowerCase()}-500/20"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gray-800/50 backdrop-blur-sm">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Dịch vụ của chúng tôi
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature) => (
                <motion.div 
                  key={feature.title}
                  variants={itemVariants}
                  className="group flex items-start space-x-6 p-6 rounded-xl
                             bg-gradient-to-br from-gray-900 to-gray-800
                             border border-gray-800 hover:border-gray-600
                             transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-4 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400 group-hover:text-blue-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block group">
              <Link href="/contact">
                <button className="px-12 py-6 text-xl font-bold rounded-full
                               bg-gradient-to-r from-blue-600 to-purple-600
                               hover:from-blue-500 hover:to-purple-500
                               transform hover:-translate-y-1 transition-all duration-300
                               shadow-lg hover:shadow-blue-500/25
                               flex items-center space-x-2">
                  <span>Liên hệ với chúng tôi</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>

          <Footer />
        </div>
      </div>
    </div>
  );
} 