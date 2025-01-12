import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left side menu */}
          <nav className="flex items-center space-x-6">
            <Link 
              href="/about"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-xs"
            >
              Giới thiệu
            </Link>
            <Link 
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-xs"
            >
              Liên hệ
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-gray-400 text-xs">
            © 2025 by huuthien.com
          </p>
        </div>
      </div>
    </footer>
  );
} 