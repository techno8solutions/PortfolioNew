import React, { useEffect, useState } from 'react';
import { Code, Palette, TrendingUp, Shield, Users, Award, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const capabilities = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "From frontend interfaces to backend logic and APIs — we build secure, scalable digital products that perform flawlessly across all platforms."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization", 
      description: "We ensure lightning-fast loading times with image optimization, lazy loading, code splitting, and advanced caching strategies."
    },
    {
      icon: Palette,
      title: "Responsive UX Design",
      description: "Pixel-perfect experiences across all devices using modern design systems, accessibility principles, and user-centered design methodologies."
    },
    {
      icon: Shield,
      title: "SEO & Technical Strategy",
      description: "Clean code, semantic structure, and best practices help improve discoverability on Google while ensuring technical excellence."
    },
    {
      icon: Users,
      title: "CMS & No-Code Integration",
      description: "WordPress, Sanity, Webflow, Shopify — we empower clients with intuitive tools to manage content and grow their business independently."
    },
    {
      icon: Award,
      title: "Reliable Support & Scaling",
      description: "Post-launch support, server scaling, proactive maintenance, and continuous optimization for sustainable long-term growth."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white border border-slate-200 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-slate-900 animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider uppercase text-slate-800">
              Why teams choose us
            </span>
          </div>
          <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Professional craft. <br className="hidden sm:block" />
            Modern engineering.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            A single partner for strategy, design, development, and growth — delivering consistent quality across every digital touchpoint.
          </p>
        </div>

        {/* Capabilities grid with Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            // Create a staggered parallax effect
            // Columns 1 and 3 move up slightly faster, Column 2 moves slower or in reverse
            const isMiddleCol = index % 3 === 1;
            const parallaxOffset = isMiddleCol ? scrollY * 0.04 : scrollY * 0.08;
            
            return (
              <div
                key={index}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-all duration-300 will-change-transform shadow-sm hover:shadow-md"
                style={{ transform: `translateY(${-parallaxOffset}px)` }}
              >
                <div className="mb-8">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <capability.icon className="h-6 w-6 text-slate-900" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Company values */}
        <div 
          className="mt-32 transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translateY(${-scrollY * 0.03}px)` }}
        >
          <div className="relative bg-slate-900 rounded-[2rem] p-10 sm:p-14 shadow-xl overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
              <div className="max-w-3xl">
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  The Techno8solutions promise
                </h3>
                <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-medium">
                  High-quality design and flawless engineering, delivered with clarity and consistency — ensuring your product looks premium, performs beautifully, and scales seamlessly.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 w-full lg:w-auto shrink-0">
                {[
                  { title: '8', subtitle: 'Solutions' },
                  { title: '1', subtitle: 'Partner' },
                  { title: '∞', subtitle: 'Growth' },
                ].map((item) => (
                  <div key={item.subtitle} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-3xl font-bold text-white">
                      {item.title}
                    </div>
                    <div className="mt-2 text-sm font-bold uppercase tracking-wider text-slate-300">
                      {item.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
