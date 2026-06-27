import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ParticleWave from './ParticleWave';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative overflow-hidden min-h-[90vh] flex items-center justify-center pt-24 group"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Noise Texture Hover */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          WebkitMaskImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 60%)`,
          maskImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 60%)`,
        }}
      >
        {/* Subtle blur layer */}
        <div className="absolute inset-0 bg-slate-200/30 backdrop-blur-[2px]" />
        {/* SVG Noise layer */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px'
          }} 
        />
      </div>

      {/* Dynamic Particle Wave Background */}
      <ParticleWave />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-60 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <div 
          className="transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-white border border-slate-200 shadow-sm animate-fade-in mx-auto mb-8">
            <span className="flex h-2 w-2 rounded-full bg-slate-900 animate-pulse"></span>
            <span className="text-sm font-semibold text-slate-800 tracking-tight">
              Premium digital studio for modern brands
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[1.05] mb-8">
            Elevate your <br />
            digital presence.
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mb-12">
            Websites, mobile apps, marketing, and AI automation — delivered with clean design, unmatched performance, and a reliable launch process.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center rounded-md px-8 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300"
            >
              Start a project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => {
                window.location.hash = '#/case-studies';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-base font-semibold text-slate-900 bg-white border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-300"
            >
              View case studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
