'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gradient">
              {process.env.NEXT_PUBLIC_SITE_TITLE || 'My Landing Page'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="bg-gradient-hero text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-hero text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity duration-200 text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
