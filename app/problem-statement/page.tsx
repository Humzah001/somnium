'use client';

import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import FooterNav from '../components/FooterNav';
import Navigation from '../components/Navigation';
import { LiquidButton } from '../components/ui/liquid-glass-button';

export default function ProblemStatement() {
  const [activeSection, setActiveSection] = useState('organ-donation');
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [hideBottomBar, setHideBottomBar] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const blueSectionHeight = 600;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      setShowBottomBar(scrollPosition > blueSectionHeight);
      
      const footerThreshold = documentHeight - windowHeight - 200;
      setHideBottomBar(scrollPosition >= footerThreshold);
      
      if (scrollPosition > blueSectionHeight && scrollPosition < footerThreshold) {
        const contentScrollPosition = scrollPosition - blueSectionHeight;
        const contentHeight = footerThreshold - blueSectionHeight;
        const contentScrollPercentage = (contentScrollPosition / contentHeight) * 100;
        setScrollProgress(Math.min(contentScrollPercentage, 100));
      } else {
        setScrollProgress(0);
      }
      
      if (scrollPosition <= blueSectionHeight) {
        setActiveSection('organ-donation');
        return;
      }
      
      if (scrollPosition > blueSectionHeight - 100) {
        for (const [sectionId, element] of Object.entries(sectionsRef.current)) {
          if (element) {
            const { offsetTop, offsetHeight } = element;
            const adjustedOffsetTop = offsetTop - blueSectionHeight;
            const adjustedScrollPosition = scrollPosition - blueSectionHeight;
            
            if (adjustedScrollPosition >= adjustedOffsetTop && adjustedScrollPosition < adjustedOffsetTop + offsetHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'organ-donation', title: 'Organ Donation' },
    { id: 'medical-hibernation', title: 'Medical Hibernation' },
    { id: 'core-challenge', title: 'The Core Technical Challenge' },
    { id: 'roadmap', title: 'Roadmap' },
    { id: 'molecular-discovery', title: 'Molecular Discovery' },
    { id: 'surgical-protocols', title: 'Surgical Protocols' },
    { id: 'engineering-systems', title: 'Engineering Systems' },
    { id: 'citations', title: 'Citations' }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      <section className="py-20 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/r1.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 mt-20">
            Problem Statement and Roadmap
          </h1>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
            <LiquidButton variant="problem-statement" size="sm">
              Engineering
            </LiquidButton>
            <LiquidButton variant="problem-statement" size="sm">
              Research
            </LiquidButton>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            How we're building a pause button for biology
          </p>
        </div>
      </section>

      <section className="relative bg-stone-50">
        <div className="pb-20">
          <div className="flex relative">
            <div className="hidden md:block sticky top-24 left-0 h-fit z-40 pl-4 sm:pl-8 mr-4 sm:mr-8 pt-8">
              <nav className="space-y-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block text-left transition-all duration-300 relative ${
                      activeSection === section.id
                        ? 'text-gray-900 font-medium text-base'
                        : 'text-gray-600 hover:text-gray-900 text-sm'
                    }`}
                  >
                    <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 -ml-8 w-4 h-px transition-colors duration-300 ${
                      activeSection === section.id ? 'bg-gray-900' : 'bg-gray-400'
                    }`}></div>
                    
                    {activeSection === section.id && (
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-8 w-px h-4 bg-gray-900"></div>
                    )}
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex-1 max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-12">
              <div className="prose prose-lg max-w-none">
                
                <div className="mb-12">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We're building a pause button for biology: a technology which halts molecular motion across long timescales and restarts it on demand. We will use this to help patients in two time-sensitive areas of medicine.
                  </p>
                </div>

                <div 
                  ref={(el) => { sectionsRef.current['organ-donation'] = el; }}
                  className="mb-12"
                  id="organ-donation"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Organ Donation
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    When someone dies, their organs are viable for only a few hours. This creates an enormous logistical challenge: organs must be matched with recipients within a very narrow window, often across great distances. The result is that many organs are lost to logistics, and many patients die waiting for a match.
                  </p>
                </div>

                <div 
                  ref={(el) => { sectionsRef.current['medical-hibernation'] = el; }}
                  className="mb-12"
                  id="medical-hibernation"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Medical Hibernation
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                  Despite the ever-increasing frequency of medical breakthroughs, many patients won't live to see a cure to their disease. By reversibly pausing the biological function of a patient, we can extend the critical window of care for those without other treatment options. For example, in the decade between the onset of the AIDs epidemic/pandemic and the widespread availability of combination antiretroviral therapies, more than four million afflicted patients died (source UNAIDS (2023)). In 1950, a patient with cystic fibrosis would have died in infancy, while those born today with the condition have a life expectancy that often extends into middle age. Finally, patients today still regularly die of cancers that could have proven treatable were they afforded the innovations provided by a few more years of rigorous medical research. Medical hibernation technology could help these patients pause their biological time and access cures that are right around the corner.
                  </p>
                </div>

                <div 
                  ref={(el) => { sectionsRef.current['core-challenge'] = el; }}
                  className="mb-12"
                  id="core-challenge"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Core Technical Challenge
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The fundamental challenge is controlling molecular motion. At room temperature, molecules move constantly, driving all biological processes. To pause biology, we need to slow this motion dramatically—ideally to a near-complete halt.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The most straightforward approach is to use temperature: cooling to hypothermic or cryogenic temperatures slows molecular motion. However, this creates new problems. Ice formation can damage cells, and the cooling and warming processes themselves can cause thermal stress.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Recent proof-of-concept studies have shown promising results: a rat kidney was successfully cryopreserved and transplanted, and rat brain tissue has been shown to retain electrical activity after cryopreservation. These studies provide a foundation for our approach. <a href="/white-paper" className="text-blue-600 hover:text-blue-700 underline">See our whitepaper</a> for details on our recent progress.
                  </p>
                </div>

                <div 
                  ref={(el) => { sectionsRef.current.roadmap = el; }}
                  className="mb-12"
                  id="roadmap"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Roadmap
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our roadmap to bring cryopreserved organs to the clinic includes several key milestones:
                  </p>
                  
                  <div className="bg-gray-100 rounded-lg p-6 my-8">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 font-bold mr-3">✓</span>
                        <span>Recovery of electrical activity from cryopreserved and rewarmed acutely resected rodent neural tissue. <a href="/white-paper" className="text-blue-600 hover:text-blue-700 underline">[complete] see whitepaper</a></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 font-bold mr-3">○</span>
                        <span>Preclinical validation of donor organ cryopreservation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 font-bold mr-3">○</span>
                        <span>Successful human organ cryopreservation first-in-human trial</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 font-bold mr-3">○</span>
                        <span>Preservation of an entire rodent for 2 hours in a hypothermic state</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 font-bold mr-3">○</span>
                        <span>Reversible whole-body cryopreservation of an entire rodent</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div 
                  ref={(el) => { sectionsRef.current['molecular-discovery'] = el; }}
                  className="mb-12"
                  id="molecular-discovery"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Molecular Discovery
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cryoprotective agents (CPAs) are chemicals that protect cells during freezing. Our molecular discovery program focuses on developing better CPAs:
                  </p>
                  
                  <div className="bg-gray-100 rounded-lg p-6 my-8">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Enhanced cryoprotectant efficacy</li>
                      <li>• Biocompatible cryoprotectants</li>
                      <li>• Enhanced Biodistribution</li>
                    </ul>
                  </div>
                </div>

                <div 
                  ref={(el) => { sectionsRef.current['surgical-protocols'] = el; }}
                  className="mb-12"
                  id="surgical-protocols"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Surgical Protocols
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Robust vascular access and perfusion control are critical for successful organ cryopreservation:
                  </p>
                  
                  <div className="bg-gray-100 rounded-lg p-6 my-8">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Organ Perfusion Protocols</li>
                      <li>• Transplant Model Surgery</li>
                      <li>• Microsurgery Protocols</li>
                    </ul>
                  </div>
                </div>

                <div 
                  ref={(el) => { sectionsRef.current['engineering-systems'] = el; }}
                  className="mb-12"
                  id="engineering-systems"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Engineering Systems
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The technological infrastructure required for cryopreservation:
                  </p>
                  
                  <div className="bg-gray-100 rounded-lg p-6 my-8">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Volumetric Rewarming</li>
                      <li>• High throughput screening systems</li>
                      <li>• Material Physics Instrumentation and Modeling</li>
                    </ul>
                  </div>
                </div>

                <div 
                  ref={(el) => { sectionsRef.current.citations = el; }}
                  className="mb-12"
                  id="citations"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Citations
                  </h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <p><strong>1.</strong> Han, Z., Rao, J.S., Gangwar, L., et al. Vitrification and nanowarming enable long-term organ cryopreservation and life-sustaining kidney transplantation in a rat model. Nat Commun 14, 3407 (2023). <a href="https://doi.org/10.1038/s41467-023-38824-8" className="text-blue-600 hover:text-blue-700 underline">https://doi.org/10.1038/s41467-023-38824-8</a></p>
                    </div>
                    
                    <div>
                      <p><strong>2.</strong> Xue, W., Li, H., Xu, J., et al. Effective cryopreservation of human brain tissue and neural organoids. Cell Reports Methods, 4(5), (2024). <a href="https://doi.org/10.1016/j.crmeth.2024.100745" className="text-blue-600 hover:text-blue-700 underline">https://doi.org/10.1016/j.crmeth.2024.100745</a></p>
                    </div>
                    
                    <div>
                      <p><strong>3.</strong> Fahy, G.M., Wowk, B., Wu, J., et al. Cryopreservation of organs by vitrification: perspectives and recent advances. Cryobiology, 48(2), 157-178 (2004). <a href="https://doi.org/10.1016/j.cryobiol.2004.02.008" className="text-blue-600 hover:text-blue-700 underline">https://doi.org/10.1016/j.cryobiol.2004.02.008</a></p>
                    </div>
                    
                    <div>
                      <p><strong>4.</strong> Day, B., Stringer, B., Wilson, J., et al. Glioma Surgical Aspirate: A Viable Source of Tumor Tissue for Experimental Research. Cancers, 5, 357-371 (2013). <a href="https://doi.org/10.3390/cancers5020357" className="text-blue-600 hover:text-blue-700 underline">https://doi.org/10.3390/cancers5020357</a></p>
                    </div>
                    
                    <div>
                      <p><strong>5.</strong> Frey, U., Egert, U., Heer, F., et al. Microelectronic system for high-resolution mapping of extracellular electric fields applied to brain slices. Biosensors & Bioelectronics, 24(7), 2191-2198 (2009). <a href="https://doi.org/10.1016/j.bios.2008.11.028" className="text-blue-600 hover:text-blue-700 underline">https://doi.org/10.1016/j.bios.2008.11.028</a></p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-stone-100 to-stone-200 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Curious to learn more about our approach?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Reach out at <a href="mailto:contact@somniumbio.com" className="text-blue-600 hover:text-blue-700 font-medium underline">contact@somniumbio.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="problem-statement" />

      {showBottomBar && !hideBottomBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <div className="px-12 py-4 bg-gradient-to-r from-white/10 via-gray-100/20 to-white/10">
            <div className="h-2 bg-gray-200/50 rounded-full relative overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-100 ease-out"
                style={{ 
                  width: `${scrollProgress}%`,
                  background: scrollProgress < 20 
                    ? 'linear-gradient(to right, #fca5a5, #ef4444)'
                    : scrollProgress < 40 
                    ? 'linear-gradient(to right, #fca5a5, #f97316)'
                    : scrollProgress < 60 
                    ? 'linear-gradient(to right, #fca5a5, #f97316, #fde047)'
                    : scrollProgress < 80 
                    ? 'linear-gradient(to right, #fca5a5, #f97316, #fde047, #86efac)'
                    : 'linear-gradient(to right, #fca5a5, #f97316, #fde047, #86efac, #93c5fd)'
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
