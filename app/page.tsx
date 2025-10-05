'use client';

import { useEffect, useState } from 'react';
import Footer from './components/Footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const slides = [
    {
      image: "/l2.jpeg", // Local background image
      title: "The Future of Human Preservation",
      subtitle: "Pioneering cryopreservation technology for organ transplantation and medical hibernation"
    },
    {
      image: "/l2.jpeg", // Local background image
      title: "Bridging Time and Medicine", 
      subtitle: "Extending organ viability from hours to weeks, giving patients time for life-saving treatments"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>
        
        {/* Blue Circle Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        {/* Main content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12">
              <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto">
                Learn More
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-white hover:text-black transition-colors duration-200 w-full sm:w-auto">
                Get Started
              </button>
            </div>
            
            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="border-t border-gray-400"></div>

      {/* A Word on The Tech Section */}
      <section className="relative py-20 lg:py-32" style={{ backgroundColor: '#F8F2EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              A Word on <span className="text-gray-800">The Tech</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our cutting-edge AI infrastructure combines the latest advances in machine learning with deep domain expertise in plant biology, creating powerful tools for agricultural innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Foundation Models Card */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Foundation Models</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Advanced AI models trained on massive plant genomic datasets, providing deep understanding of biological patterns.
              </p>
            </div>

            {/* Multi-omics Integration Card */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Multi-omics Integration</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Seamlessly integrate genomic, transcriptomic, proteomic, and metabolomic data for comprehensive analysis.
              </p>
            </div>

            {/* Real-time Processing Card */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Real-time Processing</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Lightning-fast analysis capabilities that scale from single samples to population-level studies.
              </p>
            </div>

            {/* Precision Predictions Card */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Precision Predictions</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                High-accuracy trait prediction and breeding value estimation with quantified uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="border-t border-gray-400"></div>

      {/* Virtual Human Section */}
        <section className="relative py-20 lg:py-32" style={{ backgroundColor: '#F8F2EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our virtual human, <span className="text-gray-700">ñuma</span>, is leveraged to enhance your product safety and performance
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Medical Devices */}
            <div className="text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden bg-white/50 flex items-center justify-center">
                <svg className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3 sm:mb-4">Medical Devices</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Improved treatment via medical device optimization
              </p>
            </div>

            {/* Defense */}
            <div className="text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden bg-white/50 flex items-center justify-center">
                <svg className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3 sm:mb-4">Defense</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Improved military personnel protection via gear optimization
              </p>
            </div>

            {/* Sport */}
            <div className="text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden bg-white/50 flex items-center justify-center">
                <svg className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3 sm:mb-4">Sport</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Improved athletic performance via equipment optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="border-t border-gray-400"></div>

      {/* Design Optimization Section */}
      <section className="relative py-20 lg:py-32" style={{ backgroundColor: '#F8F2EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Design Optimisation, Verification and Performance Promotion
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Enhanced understanding of your product performance
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Decreased prototyping time, costs, and manufacturing waste
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Reduced physical test burden and results variability through virtual testing
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Provide scientific evidence following ASME V&V40 guidelines
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Communicate product performances through scientific publication
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Accelerate time to market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="border-t border-gray-400"></div>
            
      {/* Contact Section */}
       <div className="rounded-xl p-6 sm:p-8 text-center mx-4 sm:mx-0" style={{ backgroundColor: '#F8F2EB' }}>
         <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
           Have something to say?
         </h3>
         <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
           Email us at <a href="mailto:chintan@somniumbio.com" className="text-blue-600 hover:text-blue-700 font-medium break-all sm:break-normal">chintan@somniumbio.com</a>
         </p>
       </div>

      {/* Section Divider */}
      <div className="border-t border-gray-400"></div>

      {/* Footer */}
      <Footer variant="home" />
    </div>
  );
}