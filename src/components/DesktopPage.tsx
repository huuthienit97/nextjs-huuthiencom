"use client";

import React from 'react';
import { SiReact, SiNodedotjs, SiFlutter, SiGooglemarketingplatform } from 'react-icons/si';
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import NetworkBackground from '@/components/NetworkBackground';
import Tooltip from '@/components/Tooltip';
import Loading from '@/components/Loading';
import Link from 'next/link';

const services = [
  { 
    name: "Frontend", 
    icon: <SiReact size={24} className="text-[#61DAFB]" />, 
    description: "Phát triển giao diện web hiện đại với React, Next.js và các công nghệ mới nhất",
    link: "/services/frontend",
    position: 270
  },
  { 
    name: "Backend", 
    icon: <SiNodedotjs size={24} className="text-[#339933]" />, 
    description: "Xây dựng API và hệ thống máy chủ mạnh mẽ, bảo mật và có khả năng mở rộng",
    link: "/services/backend",
    position: 0
  },
  { 
    name: "Mobile", 
    icon: <SiFlutter size={24} className="text-[#02569B]" />, 
    description: "Phát triển ứng dụng di động đa nền tảng với React Native và Flutter",
    link: "/services/mobile",
    position: 90
  },
  { 
    name: "Landing", 
    icon: <SiGooglemarketingplatform size={24} className="text-[#FF6B6B]" />, 
    description: "Thiết kế landing page chuyên nghiệp, tối ưu chuyển đổi và SEO",
    link: "/services/landing",
    position: 180
  },
];

interface Service {
  name: string;
  icon: React.ReactElement;
  description: string;
  link: string;
  position: number;
}

interface HomeContentProps {
  services: Service[];
  hoveredService: string | null;
  setHoveredService: (name: string | null) => void;
  getCurrentPosition: (position: number) => number;
  getTooltipPosition: (service: Service) => 'left' | 'right';
  getTooltipStyle: (position: number) => React.CSSProperties;
  getTooltipStyles: (service: Service) => React.CSSProperties;
  setIconRef: (name: string) => (el: HTMLDivElement | null) => void;
}

export default function DesktopPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const startTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const iconRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const setIconRef = useCallback((name: string) => (el: HTMLDivElement | null) => {
    iconRefs.current[name] = el;
  }, []);

  useEffect(() => {
    startTimeRef.current = Date.now();
    
    const updateTime = () => {
      setCurrentTime(Date.now());
      animationFrameRef.current = requestAnimationFrame(updateTime);
    };

    animationFrameRef.current = requestAnimationFrame(updateTime);

    // Thêm loading timeout
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(loadingTimeout);
    };
  }, []);

  const getCurrentPosition = useCallback((initialPosition: number) => {
    if (!startTimeRef.current || !currentTime) return initialPosition;

    const elapsedTime = currentTime - startTimeRef.current;
    const rotationDuration = 20000; // 20s
    
    // Tính toán phần trăm hoàn thành của animation trong một vòng (0-1)
    const progress = (elapsedTime % rotationDuration) / rotationDuration;
    
    // Tính toán góc quay trong một vòng (0-360)
    const rotationAngle = progress * 360;
    
    // Tính toán vị trí thực tế của icon trong vòng hiện tại
    // Trừ rotationAngle vì icon quay ngược chiều với orbit
    let currentPosition = initialPosition - rotationAngle;
    
    // Chuẩn hóa vị trí về khoảng 0-360
    currentPosition = ((currentPosition % 360) + 360) % 360;
    
    return currentPosition;
  }, [currentTime]);

  const getCurrentQuadrant = useCallback((position: number) => {
    // Chuẩn hóa vị trí về khoảng 0-360
    let normalizedPosition = position % 360;
    if (normalizedPosition < 0) normalizedPosition += 360;

    // Xác định cung hiện tại
    if (normalizedPosition >= 225 && normalizedPosition < 315) return 1;      // Cung 1: 225-315 (đỉnh)
    if (normalizedPosition >= 315 || normalizedPosition < 45) return 2;       // Cung 2: 315-45 (phải)
    if (normalizedPosition >= 45 && normalizedPosition < 135) return 3;       // Cung 3: 45-135 (đáy)
    if (normalizedPosition >= 135 && normalizedPosition < 225) return 4;      // Cung 4: 135-225 (trái)
    return 1; // Mặc định
  }, []);

  const getTooltipPosition = useCallback((service: typeof services[0]) => {
    const currentPosition = getCurrentPosition(service.position);
    const currentQuadrant = getCurrentQuadrant(currentPosition);
    
    // Phía phải: Cung 1 (đỉnh) và Cung 2 (phải)
    if (currentQuadrant === 1 || currentQuadrant === 2) {
      return 'right';
    }
    // Phía trái: Cung 3 (đáy) và Cung 4 (trái)
    else {
      return 'left';
    }
  }, [getCurrentPosition, getCurrentQuadrant]);

  const getTooltipStyle = (position: number) => {
    return {
      position: 'absolute' as const,
      left: '50%',
      top: '50%',
      transform: `translate(-50%, -50%)`,
      animationName: `orbit${position}`,
      animationDuration: '20s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationPlayState: hoveredService ? 'paused' : 'running',
    };
  };

  const getTooltipStyles = useCallback((service: typeof services[0]) => {
    const iconElement = iconRefs.current[service.name];
    if (!iconElement) return {};

    const tooltipPosition = getTooltipPosition(service);
    const iconRect = iconElement.getBoundingClientRect();
    const gap = 24; // 1.5rem

    const baseStyles = {
      position: 'fixed' as const,
      top: iconRect.top + iconRect.height / 2,
      transform: 'translateY(-50%)',
    };

    if (tooltipPosition === 'right') {
      return {
        ...baseStyles,
        left: iconRect.right + gap,
      };
    } else {
      return {
        ...baseStyles,
        right: window.innerWidth - iconRect.left + gap,
      };
    }
  }, []);

  if (isLoading) {
    return (
      <>
        <Loading isLoading={isLoading} />
        <div className="fixed inset-0 opacity-0">
          <HomeContent 
            services={services}
            hoveredService={hoveredService}
            setHoveredService={setHoveredService}
            getCurrentPosition={getCurrentPosition}
            getTooltipPosition={getTooltipPosition}
            getTooltipStyle={getTooltipStyle}
            getTooltipStyles={getTooltipStyles}
            setIconRef={setIconRef}
          />
        </div>
      </>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden animate-fadeIn">
      <HomeContent 
        services={services}
        hoveredService={hoveredService}
        setHoveredService={setHoveredService}
        getCurrentPosition={getCurrentPosition}
        getTooltipPosition={getTooltipPosition}
        getTooltipStyle={getTooltipStyle}
        getTooltipStyles={getTooltipStyles}
        setIconRef={setIconRef}
      />
    </div>
  );
}

// Tách phần nội dung chính thành component riêng để tái sử dụng
const HomeContent = ({
  services,
  hoveredService,
  setHoveredService,
  getCurrentPosition,
  getTooltipPosition,
  getTooltipStyle,
  getTooltipStyles,
  setIconRef
}: HomeContentProps) => {
  return (
    <>
      <NetworkBackground />
      <style jsx global>{`
        ${services.map(service => `
          @keyframes orbit${service.position} {
            from {
              transform: translate(-50%, -50%) rotate(${service.position}deg) translateX(160px) rotate(-${service.position}deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(${service.position + 360}deg) translateX(160px) rotate(-${service.position + 360}deg);
            }
          }
        `).join('\n')}
      `}</style>
      
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
          {/* SVG Circle */}
          <div className="absolute w-full h-full pointer-events-none -z-[1]">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.5"
                className="glow-circle"
              />
            </svg>
          </div>

          {/* Center Icon */}
          <div className="transform transition-transform duration-300 hover:scale-110 rounded-full border border-white w-36 h-36 flex items-center justify-center bg-black glow-border relative z-[1]">
            <Image
              src="/logo.svg"
              alt="HT Logo"
              width={80}
              height={80}
              priority
            />
          </div>

          {/* Service Icons */}
          <div className="absolute inset-0">
            {services.map((service) => {
              const orbitStyles = getTooltipStyle(service.position);
              const tooltipPosition = getTooltipPosition(service);

              return (
                <div
                  key={service.name}
                  style={orbitStyles}
                  className={hoveredService === service.name ? 'paused' : ''}
                >
                  {/* Icon and Hover Area */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setHoveredService(service.name)}
                    onMouseLeave={(e) => {
                      const tooltipElement = document.querySelector(`[data-tooltip="${service.name}"]`);
                      if (tooltipElement) {
                        const tooltipRect = tooltipElement.getBoundingClientRect();
                        const mouseX = e.clientX;
                        const mouseY = e.clientY;

                        if (
                          mouseX >= tooltipRect.left &&
                          mouseX <= tooltipRect.right &&
                          mouseY >= tooltipRect.top &&
                          mouseY <= tooltipRect.bottom
                        ) {
                          return;
                        }
                      }
                      setHoveredService(null);
                    }}
                  >
                    {/* Icon */}
                    <div 
                      ref={setIconRef(service.name)}
                      className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-2xl glow-border relative"
                    >
                      <span className="transform hover:scale-110 transition-transform cursor-pointer">
                        {service.icon}
                      </span>
                    </div>

                    {/* Invisible padding for smooth hover */}
                    <div 
                      className={`absolute ${
                        tooltipPosition === 'right'
                          ? 'left-full top-1/2 -translate-y-1/2 h-20 w-8'
                          : 'right-full top-1/2 -translate-y-1/2 h-20 w-8'
                      }`}
                    />
                  </div>

                  <Tooltip
                    isVisible={hoveredService === service.name}
                    name={service.name}
                    description={service.description}
                    link={service.link}
                    position={tooltipPosition}
                    style={getTooltipStyles(service)}
                    onMouseEnter={() => setHoveredService(service.name)}
                    onMouseLeave={() => setHoveredService(null)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full p-2 bg-black/20">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          {/* Menu */}
          <div className="flex gap-4">
            <Link href="/about" className="text-white/80 hover:text-white transition-colors">
              Giới thiệu
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
              Liên hệ
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-white/60">
            © 2025 by huuthien.com
          </div>
        </div>
      </footer>
    </>
  );
}; 