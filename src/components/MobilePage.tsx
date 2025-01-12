"use client";

import React, { useState, useEffect } from 'react';
import { SiReact, SiNodedotjs, SiFlutter, SiGooglemarketingplatform } from 'react-icons/si';
import Image from "next/image";
import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import Loading from '@/components/Loading';

const services = [
  { 
    name: "Frontend", 
    icon: <SiReact size={24} className="text-[#61DAFB]" />, 
    description: "Phát triển giao diện web hiện đại với React, Next.js và các công nghệ mới nhất",
    link: "/services/frontend",
  },
  { 
    name: "Backend", 
    icon: <SiNodedotjs size={24} className="text-[#339933]" />, 
    description: "Xây dựng API và hệ thống máy chủ mạnh mẽ, bảo mật và có khả năng mở rộng",
    link: "/services/backend",
  },
  { 
    name: "Mobile", 
    icon: <SiFlutter size={24} className="text-[#02569B]" />, 
    description: "Phát triển ứng dụng di động đa nền tảng với React Native và Flutter",
    link: "/services/mobile",
  },
  { 
    name: "Landing", 
    icon: <SiGooglemarketingplatform size={24} className="text-[#FF6B6B]" />, 
    description: "Thiết kế landing page chuyên nghiệp, tối ưu chuyển đổi và SEO",
    link: "/services/landing",
  },
];

export default function MobilePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="min-h-screen flex flex-col">
        <NetworkBackground />
        
        {/* Header */}
        <header className="p-4 flex flex-col items-center bg-black/20">
          <Image
            src="/logo.svg"
            alt="HT Logo"
            width={40}
            height={40}
            priority
          />
          <div className="w-full h-[2px] mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div className="absolute inset-0 blur-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute inset-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          </div>
        </header>

        {/* Hero Section with Animation */}
        <section className="relative w-full h-[200px] overflow-hidden">
          <Image
            src="/hero-animation.svg"
            alt="Hero Animation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 px-4">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                Công Nghệ Tạo Nên Sự Khác Biệt
              </h2>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="flex-grow p-4 space-y-8">
          {/* Intro Section */}
          <section className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-4">Giải Pháp Công Nghệ Toàn Diện</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Chuyên gia phát triển web & mobile với hơn 5 năm kinh nghiệm. Cung cấp giải pháp công nghệ toàn diện, 
              từ thiết kế đến triển khai và bảo trì.
            </p>
          </section>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <Link 
                href={service.link} 
                key={service.name}
                className="p-4 border border-white/20 rounded-lg bg-black/20 hover:bg-black/30 transition-colors"
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="font-medium">{service.name}</h3>
                  <p className="text-xs text-white/60 mb-2">{service.description}</p>
                  <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors">
                    Xem thêm
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Projects */}
          <section className="py-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Dự Án Tiêu Biểu</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/20 rounded-lg">
                <div className="h-32 bg-white/5 rounded-lg mb-3"></div>
                <h3 className="font-medium mb-2">E-commerce Platform</h3>
                <p className="text-sm text-white/60">Nền tảng thương mại điện tử với React & Node.js</p>
              </div>
              <div className="p-4 bg-black/20 rounded-lg">
                <div className="h-32 bg-white/5 rounded-lg mb-3"></div>
                <h3 className="font-medium mb-2">Fitness App</h3>
                <p className="text-sm text-white/60">Ứng dụng mobile theo dõi sức khỏe với Flutter</p>
              </div>
            </div>
          </section>

          {/* Quick Contact */}
          <section className="py-8">
            <div className="max-w-md mx-auto p-6 bg-black/20 rounded-lg text-center">
              <h2 className="text-xl font-semibold mb-4">Bắt Đầu Dự Án?</h2>
              <p className="text-sm text-white/80 mb-4">Liên hệ ngay để được tư vấn miễn phí về giải pháp phù hợp nhất cho dự án của bạn</p>
              <Link href="/contact" className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                Liên hệ ngay
              </Link>
            </div>
          </section>
        </main>

        {/* Line above footer */}
        <div className="w-full h-[2px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          <div className="absolute inset-0 blur-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
        </div>

        {/* Footer */}
        <footer className="w-full p-2 bg-black/20">
          <div className="container mx-auto px-4 flex justify-between items-center text-xs">
            <div className="flex gap-4">
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                Giới thiệu
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                Liên hệ
              </Link>
            </div>
            <div className="text-white/60">
              © 2025 by huuthien.com
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 