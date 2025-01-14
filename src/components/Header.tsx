"use client";

import React, { useState } from 'react';
import { SiReact, SiNextdotjs } from 'react-icons/si';
import { FiSmartphone, FiMonitor, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { name: 'Frontend', href: '/services/frontend', icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
  { name: 'Backend', href: '/services/backend', icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
  { name: 'Mobile', href: '/services/mobile', icon: <FiSmartphone className="w-4 h-4 text-[#38B2AC]" /> },
  { name: 'Landing', href: '/services/landing', icon: <FiMonitor className="w-4 h-4 text-[#FF6B6B]" /> }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="w-auto h-14 group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg
                         text-gray-300 hover:text-white hover:bg-gray-800/50
                         transition-all duration-300"
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-2 text-gray-300 
                       hover:bg-gray-800 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
} 