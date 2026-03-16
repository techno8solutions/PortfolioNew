import React from 'react';
import { Code, Palette, TrendingUp, Shield, Users, Award } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center rounded-full px-4 py-2 glass">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Why teams choose us
            </span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Professional craft, modern engineering, reliable delivery.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A single partner for strategy, design, development, and growth — with consistent quality across every touchpoint.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group glass glass-hover rounded-3xl p-7 sm:p-8"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/10">
                  <capability.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {capability.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company values */}
        <div className="mt-16">
          <div className="glass-strong rounded-[2rem] p-8 sm:p-12 shadow-glass">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
                  The Techno8solutions promise
                </h3>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  High-quality design and engineering, delivered with clarity and consistency — so your product looks premium and performs beautifully.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
                {[
                  { title: '8', subtitle: 'Solutions' },
                  { title: '1', subtitle: 'Partner' },
                  { title: '∞', subtitle: 'Growth' },
                ].map((item) => (
                  <div key={item.subtitle} className="glass rounded-2xl p-4 text-center">
                    <div className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
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
