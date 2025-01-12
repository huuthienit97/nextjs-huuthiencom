"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiNestjs, SiPython, SiPostgresql, SiDocker, SiTypescript, SiDjango, SiFastapi, SiExpress } from 'react-icons/si';
import { FiDatabase, FiServer, FiShield, FiCpu } from 'react-icons/fi';
import NetworkBackground from '@/components/NetworkBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const nestjsFeatures = [
  {
    name: "TypeScript Native",
    icon: <SiTypescript className="w-12 h-12 text-[#3178C6]" />,
    description: "Phát triển với TypeScript mang lại type-safety và IDE support tốt nhất"
  },
  {
    name: "Module Architecture",
    icon: <SiNestjs className="w-12 h-12 text-[#E0234E]" />,
    description: "Kiến trúc module mạnh mẽ cho phép tổ chức code rõ ràng và dễ bảo trì"
  },
  {
    name: "Enterprise Ready",
    icon: <SiExpress className="w-12 h-12 text-white" />,
    description: "Được xây dựng trên Express.js, phù hợp cho các ứng dụng doanh nghiệp lớn"
  }
];

const pythonFeatures = [
  {
    name: "Data Processing",
    icon: <SiPython className="w-12 h-12 text-[#3776AB]" />,
    description: "Xử lý dữ liệu hiệu quả với các thư viện như Pandas, NumPy"
  },
  {
    name: "FastAPI",
    icon: <SiFastapi className="w-12 h-12 text-[#009688]" />,
    description: "Framework hiện đại, nhanh nhất cho REST APIs với async support"
  },
  {
    name: "Django",
    icon: <SiDjango className="w-12 h-12 text-[#092E20]" />,
    description: "Framework full-stack với admin interface và ORM mạnh mẽ"
  }
];

const infrastructureTools = [
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-16 h-16 text-[#336791] group-hover:animate-pulse transition-all duration-500" />,
    description: "Hệ quản trị cơ sở dữ liệu quan hệ mạnh mẽ và đáng tin cậy",
    gradient: "from-[#33679120] to-[#33679110]"
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-16 h-16 text-[#2496ED] group-hover:animate-spin transition-all duration-500" />,
    description: "Containerization platform cho triển khai ứng dụng dễ dàng",
    gradient: "from-[#2496ED20] to-[#2496ED10]"
  }
];

const features = [
  {
    icon: <FiServer className="w-8 h-8" />,
    title: "RESTful APIs",
    description: "Thiết kế và phát triển API với kiến trúc REST chuẩn mực và dễ mở rộng"
  },
  {
    icon: <FiDatabase className="w-8 h-8" />,
    title: "Database Design",
    description: "Thiết kế cơ sở dữ liệu tối ưu với hiệu suất và bảo mật cao"
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Security",
    description: "Tích hợp các giải pháp bảo mật tiên tiến và xác thực người dùng"
  },
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: "Microservices",
    description: "Phát triển hệ thống phân tán với kiến trúc microservices linh hoạt"
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

export default function BackendService() {
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Backend Development
              </h1>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Xây dựng backend mạnh mẽ và có khả năng mở rộng với NestJS và Python
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Giải pháp backend toàn diện cho ứng dụng của bạn
            </motion.p>
          </motion.div>

          {/* NestJS Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#E0234E] to-[#FF4081] bg-clip-text text-transparent">
                NestJS Backend
              </h2>
              <p className="text-xl text-gray-400 mt-4">
                Framework Node.js hiện đại cho ứng dụng enterprise
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nestjsFeatures.map((feature) => (
                <motion.div
                  key={feature.name}
                  variants={itemVariants}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 
                             backdrop-blur-lg border border-gray-800 hover:border-[#E0234E]
                             transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#E0234E]">
                      {feature.name}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Python Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3776AB] to-[#2B5B84] bg-clip-text text-transparent">
                Python Backend
              </h2>
              <p className="text-xl text-gray-400 mt-4">
                Ngôn ngữ đa năng cho AI và xử lý dữ liệu
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pythonFeatures.map((feature) => (
                <motion.div
                  key={feature.name}
                  variants={itemVariants}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 
                             backdrop-blur-lg border border-gray-800 hover:border-[#3776AB]
                             transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#3776AB]">
                      {feature.name}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Infrastructure Tools */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                Công cụ Hỗ trợ
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureTools.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 
                             backdrop-blur-lg border border-gray-800 hover:border-gray-600
                             transform hover:-translate-y-2 transition-all duration-300"
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
            </div>
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
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent"
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
                  <div className="flex-shrink-0 p-4 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-red-400 group-hover:text-red-300">
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
                               bg-gradient-to-r from-red-600 to-blue-600
                               hover:from-red-500 hover:to-blue-500
                               transform hover:-translate-y-1 transition-all duration-300
                               shadow-lg hover:shadow-red-500/25
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