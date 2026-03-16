import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/useTheme';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong shadow-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-left"
              aria-label="Go to top"
            >
              <div className="text-xl sm:text-2xl font-bold text-gradient">
                Techno8solutions
              </div>
              <div className="hidden sm:block text-xs text-slate-600 dark:text-slate-300">
                Modern web, mobile, and AI solutions
              </div>
            </button>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-2">
              {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="px-4 py-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10 transition-all duration-300"
            >
              Get a Quote
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass glass-hover"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full glass glass-hover"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 p-4">
            <div className="glass-strong rounded-2xl p-3 shadow-glass">
              <nav className="space-y-1">
                {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mt-2 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300"
                >
                  Get a Quote
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
