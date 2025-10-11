'use client';

import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import { LiquidButton } from './components/ui/liquid-glass-button';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fadeIn">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/l2.jpeg)'
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
        <div className="relative z-10 text-center px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slideUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 animate-fadeInUp">
              Healthcare AI Infrastructure that <br className="hidden sm:block" />Scales Trust and Reasoning.
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
              Somnium Biolabs is building the world's first AI Physiology Engine — a living digital twin that lets clinicians test treatments virtually before they touch a patient.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12 animate-fadeInUp animation-delay-400">
                <LiquidButton 
                  variant="landing"
                  size="lg"
                  className="w-full sm:w-auto cursor-pointer"
                  onClick={() => window.location.href = '/technology'}
                >
                  Explore the Technology
                </LiquidButton>
                <LiquidButton 
                  variant="landing"
                  size="lg"
                  className="w-full sm:w-auto cursor-pointer"
                  onClick={() => window.location.href = '/founder-letter'}
                >
                  Read the Founder's Letter
                </LiquidButton>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="border-t border-gray-400"></div>

      {/* The Problem Section */}
      <section className="relative py-20 lg:py-32 animate-fadeIn bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gray-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-8 animate-fadeInUp">
              <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 animate-fadeInUp text-gray-900">
              The Problem
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200 animate-fadeInUp animation-delay-200">
                <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-6 sm:mb-8 leading-tight">
                  Modern medicine is still trial and error.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  <div className="space-y-4 sm:space-y-6">
                    <p>
                      In critical care, every minute counts. A single change in drug, ventilator, or fluid balance can save or end a life.
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border-l-4 border-gray-400">
                      <p className="text-gray-800 font-semibold">
                        Yet today, clinicians depend on experience, intuition, and fragmented AI tools that rarely speak the same language.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border-l-4 border-gray-400">
                      <p className="text-gray-800 font-semibold">
                        Each model predicts one narrow outcome. None understands the human body as a whole.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl p-4 sm:p-6 text-white">
                      <p className="font-bold text-lg sm:text-xl">
                        The result: uncertainty, preventable harm, and billions lost to reactive care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="border-t border-gray-400"></div>

      {/* Our Solution Section */}
      <section className="relative py-20 lg:py-32 animate-fadeIn" style={{ backgroundColor: '#F8F2EB' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gray-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-8 animate-fadeInUp">
              <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 animate-fadeInUp text-gray-900">
              Our Solution
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200 animate-fadeInUp animation-delay-200">
                <div className="text-center mb-8 sm:mb-12">
                  <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-3 sm:mb-4">
                    Somnium Twin Engine (SE)
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium">
                    A unified intelligence for the entire patient.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Foundational Architecture</h3>
                    <p className="text-gray-700 text-sm">
                      Powers a new generation of clinical and research systems
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Causal Simulation</h3>
                    <p className="text-gray-700 text-sm">
                      Transitions from data interpretation to integrated foresight
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Digital Twin</h3>
                    <p className="text-gray-700 text-sm">
                      Dynamic patient models for safe what-if exploration
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl p-6 sm:p-8 text-white text-center">
                  <p className="font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed">
                    Before adjusting therapy, teams can visualize how the body might respond, enabling clinicians to choose interventions based on <span className="underline decoration-2 underline-offset-4">foresight, not hindsight</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="border-t border-gray-400"></div>

      {/* Why Now Section */}
      <section className="relative py-20 lg:py-32 animate-fadeIn bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gray-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gray-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-8 animate-fadeInUp">
              <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 animate-fadeInUp text-gray-900">
              Why Now
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200 animate-fadeInUp animation-delay-200">
                <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-8 sm:mb-12 leading-tight">
                  Medicine finally has the ingredients simulation has always required:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                  <div className="group bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4">Real-time Data</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      From ICUs and biosensors providing continuous patient monitoring and vital sign tracking
                    </p>
                  </div>
                  
                  <div className="group bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4">Foundation Models</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Multimodal AI systems trained on vast medical datasets for comprehensive understanding
                    </p>
                  </div>
                  
                  <div className="group bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4">Compute Power</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Advanced processing capabilities once reserved for complex physics simulations
                    </p>
                  </div>
                  
                  <div className="group bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4">Regulatory Pathways</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Clear guidelines and approval frameworks for effective AI implementation in healthcare
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-6 sm:p-8 text-white text-center">
                  <p className="font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed">
                    Somnium Biolabs unites these into <span className="underline decoration-2 underline-offset-4">one operating system for human physiology</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="border-t border-gray-400"></div>

      {/* Our Vision Section */}
      <section className="relative py-20 lg:py-32 animate-fadeIn" style={{ backgroundColor: '#F8F2EB' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gray-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gray-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-8 animate-fadeInUp">
              <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 animate-fadeInUp text-gray-900">
              Our Vision
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200 animate-fadeInUp animation-delay-200">
                <div className="text-center mb-8 sm:mb-12">
                  <p className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 mb-6 sm:mb-8 leading-tight">
                    Every patient deserves a digital counterpart.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 sm:mb-3">For Physicians</h3>
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Continuously learning digital reflections that help make safer, smarter clinical decisions
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 sm:mb-3">For Hospitals</h3>
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Integrated systems that optimize resource allocation and improve patient outcomes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 sm:mb-3">For Patients</h3>
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Personalized care that helps them live longer, healthier lives through predictive insights
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 sm:mb-3">For Healthcare</h3>
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Revolutionary AI infrastructure that transforms how medicine is practiced and delivered
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-6 sm:p-8 text-white text-center">
                  <p className="font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed">
                    This isn't science fiction — it's the <span className="underline decoration-2 underline-offset-4">next generation AI infrastructure of modern medicine</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="border-t border-gray-400"></div>

      {/* A Word on The Tech Section */}
      <section className="relative py-20 lg:py-32 animate-fadeIn" style={{ backgroundColor: '#F8F2EB' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fadeInUp">
              A Word on <span className="text-gray-800">The Tech</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
              Our cutting-edge AI infrastructure combines the latest advances in machine learning with deep domain expertise in plant biology, creating powerful tools for agricultural innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Foundation Models Card */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center animate-fadeInUp animation-delay-300 hover:scale-105 transition-transform duration-300">
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
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center animate-fadeInUp animation-delay-400 hover:scale-105 transition-transform duration-300">
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
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center animate-fadeInUp animation-delay-500 hover:scale-105 transition-transform duration-300">
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
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center animate-fadeInUp animation-delay-600 hover:scale-105 transition-transform duration-300">
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
        <section className="relative py-20 lg:py-32 animate-fadeIn" style={{ backgroundColor: '#F8F2EB' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              Our virtual human, <span className="text-gray-700">ñuma</span>, is leveraged to enhance your product safety and performance
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Medical Devices */}
            <div className="text-center animate-fadeInUp animation-delay-200 hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden bg-white/50 flex items-center justify-center">
                <img 
                  src="/health.webp" 
                  alt="Medical Devices" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3 sm:mb-4">Medical Devices</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Improved treatment via medical device optimization
              </p>
            </div>

            {/* Defense */}
            <div className="text-center animate-fadeInUp animation-delay-400 hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden bg-white/50 flex items-center justify-center">
                <img 
                  src="/defense.webp" 
                  alt="Defense" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3 sm:mb-4">Defense</h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Improved military personnel protection via gear optimization
              </p>
            </div>
            
            {/* Sport */}
            <div className="text-center animate-fadeInUp animation-delay-600 hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden bg-white/50 flex items-center justify-center">
                <img 
                  src="/sport.webp" 
                  alt="Sport" 
                  className="w-full h-full object-cover"
                />
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
      <section className="relative py-20 lg:py-32 animate-fadeIn" style={{ backgroundColor: '#F8F2EB' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              Design Optimisation, Verification and Performance Promotion
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
            {/* Benefit 1 */}
            <div className="text-center animate-fadeInUp animation-delay-200 hover:scale-105 transition-transform duration-300">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
       <div id="contact" className="rounded-xl p-6 sm:p-8 text-center mx-4 sm:mx-0 animate-fadeIn" style={{ backgroundColor: '#F8F2EB' }}>
         <h6 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 animate-fadeInUp">
           Have something to say?
         </h6>
         <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base animate-fadeInUp animation-delay-200">
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