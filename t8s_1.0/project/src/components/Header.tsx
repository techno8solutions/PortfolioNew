import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/useTheme';

type Route = 'home' | 'case-studies' | 'services';

type Props = {
  route: Route;
  navigate: (route: Route) => void;
};

const Header: React.FC<Props> = ({ route, navigate }) => {
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
    if (route !== 'home') {
      sessionStorage.setItem('scrollTo', sectionId);
      navigate('home');
      setIsMenuOpen(false);
      return;
    }
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
        <div className="flex items-center h-16 gap-3">
          <div className="flex items-center flex-1 min-w-0">
            <button
              onClick={() => {
                if (route !== 'home') {
                  sessionStorage.setItem('scrollTo', 'top');
                  navigate('home');
                  return;
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left min-w-0"
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

          <nav className="hidden md:flex items-center justify-center">
            <ul className="glass-strong shadow-glass rounded-full px-2 py-1 flex items-center gap-1">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('services')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    route === 'services'
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10'
                      : 'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('case-studies')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    route === 'case-studies'
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10'
                      : 'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex items-center justify-end flex-1 space-x-3">
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
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-300 font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    navigate('services');
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-colors duration-300 font-medium ${
                    route === 'services'
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    navigate('case-studies');
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-colors duration-300 font-medium ${
                    route === 'case-studies'
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                >
                  Case Studies
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-300 font-medium"
                >
                  Contact
                </button>
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
