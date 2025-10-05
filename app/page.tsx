'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentText, setCurrentText] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const texts = [
    "until there's a match.",
    "until every donated organ saves a life.",
    "until 76,000 organs save 76,000 lives.",
    "until 728,000 people no longer die waiting.",
    "until there's no waiting list.",
    "until our work is done.",
    "until"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        {/* Main content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Main until text */}
            <div className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              <div className="mb-4">until</div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light h-20 sm:h-24 lg:h-28 flex items-center justify-center">
                <span 
                  key={currentText}
                  className="animate-fade-in"
                  style={{
                    animation: 'fadeIn 0.5s ease-in-out'
                  }}
                >
                  {texts[currentText]}
                </span>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <div className="text-sm text-gray-400 mb-2">Scroll to discover</div>
              <div className="w-px h-8 bg-gray-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Main description */}
            <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
              <p className="mb-6">
                Cryopreservation is already essential to modern medicine—powering IVF and life-saving stem cell therapies.
              </p>
              
              <p className="mb-6">
                Now, we're extending this technology to whole human organs — transforming hours of viability into weeks, or months, however long is necessary — so that no donated organ is lost to logistics, and no patient dies waiting.
              </p>
              
              <p className="mb-8">
                By solving this immediate need, we de-risk and build the foundation for what comes next: whole-body reversible cryopreservation. We're pausing molecular motion to give patients a bridge to future cures.
              </p>
              
              <div className="text-2xl sm:text-3xl font-light text-white">
                more soon.
              </div>
            </div>

            {/* Join Us button */}
            <div className="pt-8">
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 UntilLabs - All Rights Reserved
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter/X
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Final until */}
      <div className="text-center py-20">
        <div className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white">
          until
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}