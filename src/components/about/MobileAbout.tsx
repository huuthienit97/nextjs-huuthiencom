"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function MobileAbout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col">
      <Header />
      
      <main className="px-4 py-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
            Hữu Thiên
          </h1>
          <p className="text-center text-base text-gray-300 mb-8">
            Lập trình viên Fullstack | Đam mê xây dựng các trải nghiệm số có tác động
          </p>
          
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-[200px] flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-[180px] h-[180px]"
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  priority
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Về tôi
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Tôi là một lập trình viên Fullstack với hơn 3 năm kinh nghiệm trong việc tạo ra các ứng dụng web và di động. Tôi chuyên về React, Node.js và các công nghệ hiện đại để cung cấp các giải pháp phần mềm chất lượng cao.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-800/80 backdrop-blur rounded-full hover:bg-gray-700 transition group"
                >
                  <FaGithub className="w-5 h-5 group-hover:text-blue-400 transition" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600/80 backdrop-blur rounded-full hover:bg-blue-500 transition group"
                >
                  <FaLinkedin className="w-5 h-5 group-hover:text-white transition" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-600/80 backdrop-blur rounded-full hover:bg-red-500 transition group"
                >
                  <FaEnvelope className="w-5 h-5 group-hover:text-white transition" />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 mt-12"
          >
            <section>
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Kỹ năng & Công nghệ
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'React', 'Node.js', 'TypeScript', 'Next.js',
                  'MongoDB', 'PostgreSQL', 'AWS', 'Docker',
                  'TailwindCSS', 'GraphQL', 'Git', 'REST API'
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur rounded-xl text-center text-sm border border-gray-700/30 hover:border-blue-500/30 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Kinh nghiệm
              </h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-colors"
                >
                  <h4 className="text-xl font-bold text-blue-400">Lập trình viên cao cấp</h4>
                  <p className="text-sm text-gray-400 mt-1">Tên công ty • 2021 - Hiện tại</p>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    Dẫn dắt phát triển nhiều ứng dụng full-stack sử dụng công nghệ hiện đại. Tối ưu hóa hiệu suất và trải nghiệm người dùng cho các dự án lớn.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-colors"
                >
                  <h4 className="text-xl font-bold text-blue-400">Lập trình viên Full Stack</h4>
                  <p className="text-sm text-gray-400 mt-1">Công ty trước đây • 2019 - 2021</p>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    Phát triển và duy trì nhiều ứng dụng web và dịch vụ. Làm việc trực tiếp với khách hàng để đảm bảo sản phẩm đáp ứng yêu cầu.
                  </p>
                </motion.div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Dự án nổi bật
              </h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-colors"
                >
                  <h4 className="text-xl font-bold text-blue-400">Tên dự án</h4>
                  <p className="text-sm text-gray-400 mt-1">Mô tả dự án và tác động của nó.</p>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    Công nghệ sử dụng: React, Node.js, AWS
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-colors"
                >
                  <h4 className="text-xl font-bold text-blue-400">Dự án khác</h4>
                  <p className="text-sm text-gray-400 mt-1">Tổng quan ngắn gọn về dự án và ý nghĩa của nó.</p>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    Công nghệ sử dụng: Next.js, GraphQL, Docker
                  </p>
                </motion.div>
              </div>
            </section>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
} 