'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'White Paper I', href: '/white-paper' },
    { name: 'Founder Letter', href: '/founder-letter' },
    { name: 'Problem Statement', href: '/problem-statement' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const blueSectionHeight = 400; // Changed to 300px for earlier color change
      setIsScrolled(scrollPosition > blueSectionHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-white/20 bg-gradient-to-r from-white/20 to-gray-300/20 transition-all duration-300">
          <div className="flex justify-between items-center">
            {/* Left side - Logo/Brand */}
            <div className="flex items-center">
              <div className="w-8 h-8 mr-3 rounded-full overflow-hidden bg-white/10 p-1">
                <Image
                  src="/logo.jpg"
                  alt="Somnium Biolabs Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <Link href="/" className={`text-lg font-semibold transition-colors font-exo2 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-black' 
                  : 'text-white/90 hover:text-white'
              }`}>
                Somnium Biolabs
              </Link>
            </div>
            
            {/* Center - Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? isScrolled
                        ? 'text-gray-900 bg-gray-200 px-3 py-1 rounded-full'
                        : 'text-white bg-white/20 px-3 py-1 rounded-full'
                      : isScrolled
                        ? 'text-gray-700 hover:text-gray-900'
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right side - CTA Button */}
            <div className="flex items-center">
              <button className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isScrolled
                  ? 'bg-gray-900 text-white hover:bg-black'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}>
                Join Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-4">
              <button
                type="button"
                className={`focus:outline-none transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
