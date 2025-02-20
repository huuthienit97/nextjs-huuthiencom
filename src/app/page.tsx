"use client";

import React, { useState, useEffect } from 'react';
import DesktopPage from '@/components/DesktopPage';
import MobilePage from '@/components/MobilePage';
import Loading from '@/components/Loading';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    // Kiểm tra lần đầu
    checkDevice();
    
    // Theo dõi thay đổi kích thước màn hình
    window.addEventListener('resize', checkDevice);

    // Thêm loading timeout
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      window.removeEventListener('resize', checkDevice);
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <>
      {isMobile ? <MobilePage /> : <DesktopPage />}
    </>
  );
}
