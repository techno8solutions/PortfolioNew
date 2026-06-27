import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type Route = 'home' | 'case-studies' | 'services';

type Props = {
  route: Route;
  navigate: (route: Route) => void;
};

const Header: React.FC<Props> = ({ route, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center min-w-0">
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
              <div className="text-xl font-bold text-slate-900 tracking-tight">
                Techno8solutions
              </div>
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate('services')}
              className={`text-sm font-semibold transition-colors ${
                route === 'services' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => navigate('case-studies')}
              className={`text-sm font-semibold transition-colors ${
                route === 'case-studies' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              Get a Quote
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-base font-semibold text-slate-700 hover:text-slate-900"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate('services');
                  setIsMenuOpen(false);
                }}
                className={`text-left text-base font-semibold ${
                  route === 'services' ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => {
                  navigate('case-studies');
                  setIsMenuOpen(false);
                }}
                className={`text-left text-base font-semibold ${
                  route === 'case-studies' ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-base font-semibold text-slate-700 hover:text-slate-900"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-center rounded-md px-5 py-3 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800"
              >
                Get a Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
