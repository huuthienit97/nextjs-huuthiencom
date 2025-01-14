"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SiSwift, SiKotlin, SiFlutter, SiReact, SiFirebase, SiAndroid, SiApple } from 'react-icons/si';
import { FiSmartphone, FiLayout, FiCloud, FiZap } from 'react-icons/fi';
import NetworkBackground from '@/components/NetworkBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const technologies = [
  {
    name: "iOS Native",
    icon: <SiSwift className="w-16 h-16 text-[#FA7343] group-hover:animate-bounce transition-all duration-500" />,
    description: "Phát triển ứng dụng iOS native với Swift và SwiftUI cho trải nghiệm tối ưu",
    gradient: "from-[#FA734320] to-[#FA734310]"
  },
  {
    name: "Android Native",
    icon: <SiKotlin className="w-16 h-16 text-[#7F52FF] group-hover:animate-pulse transition-all duration-500" />,
    description: "Xây dựng ứng dụng Android với Kotlin và Jetpack Compose hiện đại",
    gradient: "from-[#7F52FF20] to-[#7F52FF10]"
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="w-16 h-16 text-[#02569B] group-hover:animate-spin transition-all duration-500" />,
    description: "Framework đa nền tảng cho phép phát triển ứng dụng iOS và Android từ một codebase",
    gradient: "from-[#02569B20] to-[#02569B10]"
  },
  {
    name: "React Native",
    icon: <SiReact className="w-16 h-16 text-[#61DAFB] group-hover:animate-spin transition-all duration-500" />,
    description: "Phát triển ứng dụng di động với JavaScript/TypeScript và React Native",
    gradient: "from-[#61DAFB20] to-[#61DAFB10]"
  }
];

const features = [
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: "Native Performance",
    description: "Tối ưu hiệu suất với các công nghệ native cho từng nền tảng"
  },
  {
    icon: <FiLayout className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Thiết kế giao diện người dùng đẹp mắt và trải nghiệm mượt mà"
  },
  {
    icon: <FiCloud className="w-8 h-8" />,
    title: "Cloud Integration",
    description: "Tích hợp với các dịch vụ đám mây và backend APIs"
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    title: "App Store Ready",
    description: "Hỗ trợ đưa ứng dụng lên App Store và Google Play Store"
  }
];

const platforms = [
  {
    name: "iOS",
    icon: <SiApple className="w-16 h-16 text-white group-hover:animate-pulse transition-all duration-500" />,
    description: "Phát triển cho iPhone và iPad với các tính năng mới nhất của iOS",
    gradient: "from-gray-800 to-gray-900"
  },
  {
    name: "Android",
    icon: <SiAndroid className="w-16 h-16 text-[#3DDC84] group-hover:animate-bounce transition-all duration-500" />,
    description: "Phát triển cho đa dạng thiết bị Android với Material Design 3",
    gradient: "from-[#3DDC8420] to-[#3DDC8410]"
  },
  {
    name: "Backend",
    icon: <SiFirebase className="w-16 h-16 text-[#FFCA28] group-hover:animate-pulse transition-all duration-500" />,
    description: "Tích hợp Firebase và các dịch vụ backend cho ứng dụng di động",
    gradient: "from-[#FFCA2820] to-[#FFCA2810]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
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
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function MobileService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      <NetworkBackground />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <Header />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="pt-24"
        >
          {/* Header Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12 space-y-6"
          >
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mobile Development
              </h1>
            </div>
            <motion.p 
              variants={itemVariants}
              className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Phát triển ứng dụng di động chất lượng cao cho iOS và Android
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Từ ý tưởng đến ứng dụng hoàn chỉnh trên App Store và Google Play
            </motion.p>
          </motion.div>

          {/* Technologies Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 
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
          </motion.div>

          {/* Platforms Section */}
          <motion.div 
            variants={containerVariants}
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Nền tảng Hỗ trợ
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform) => (
                <motion.div
                  key={platform.name}
                  variants={itemVariants}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 
                             backdrop-blur-lg border border-gray-800 hover:border-gray-600
                             transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-gray-800/50 backdrop-blur-sm">
                      {platform.icon}
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {platform.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div 
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
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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

          <Footer />
        </motion.div>
      </div>
    </div>
  );
} 