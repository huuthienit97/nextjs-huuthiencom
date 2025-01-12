"use client";

import React, { useState, useEffect } from 'react';
import DesktopAbout from '@/components/about/DesktopAbout';
import MobileAbout from '@/components/about/MobileAbout';
import Loading from '@/components/Loading';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

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
      {isMobile ? <MobileAbout /> : <DesktopAbout />}
    </>
  );
} 