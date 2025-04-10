"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update header background
      setIsScrolled(window.scrollY > 50);

      // Find the current section based on scroll position
      const sections = [
        { id: 'hero', element: document.querySelector('.HeroSection') },
        { id: 'features', element: document.querySelector('.FeaturesSection') },
        { id: 'pricing', element: document.querySelector('.PricingSection') },
        { id: 'add-friend', element: document.querySelector('.AddFriendSection') },
        { id: 'faq', element: document.querySelector('.FAQSection') }
      ];

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionMap: Record<string, string> = {
      'hero': '.HeroSection',
      'features': '.FeaturesSection',
      'pricing': '.PricingSection',
      'add-friend': '.AddFriendSection',
      'faq': '.FAQSection'
    };
    
    const selector = sectionMap[sectionId];
    if (selector) {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu after navigation
        setIsMobileMenuOpen(false);
      }
    }
  };

  const menuItems = [
    { id: 'hero', label: 'トップ' },
    { id: 'features', label: '特徴' },
    { id: 'pricing', label: '料金' },
    { id: 'add-friend', label: '友だち追加' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center md:hidden">
          <div className="text-lg font-bold text-green-600">ホームページつくるくん</div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center space-x-8">
          {menuItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === id ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
                }`}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col pt-4 pb-2 space-y-2">
                {menuItems.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                        activeSection === id ? 'text-green-600 bg-green-50 rounded' : 'text-gray-600 hover:text-green-500'
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}; 