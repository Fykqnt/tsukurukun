"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

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
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          {[
            { id: 'hero', label: 'トップ' },
            { id: 'features', label: '特徴' },
            { id: 'pricing', label: '料金' },
            { id: 'add-friend', label: '友だち追加' },
            { id: 'faq', label: 'FAQ' },
          ].map(({ id, label }) => (
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
      </nav>
    </motion.header>
  );
}; 