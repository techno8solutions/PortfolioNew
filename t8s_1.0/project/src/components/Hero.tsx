import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Sparkles, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-10 w-72 h-72 bg-blue-400/25 dark:bg-blue-500/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-36 right-10 w-72 h-72 bg-violet-400/25 dark:bg-violet-500/25 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-24 w-72 h-72 bg-emerald-400/20 dark:bg-emerald-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Premium digital studio for modern brands
              </span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Build a <span className="text-gradient">classy, high‑converting</span> digital presence.
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Websites, mobile apps, marketing, and AI automation — delivered with clean design, strong performance, and a reliable launch process.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10 transition-all duration-300"
              >
                Start a project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>

              <button
                onClick={() => {
                  window.location.hash = '#/case-studies';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-slate-900 dark:text-white glass glass-hover"
              >
                View case studies
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              {[
                { icon: Globe, text: '8 integrated solutions' },
                { icon: ShieldCheck, text: 'Secure & scalable builds' },
                { icon: CheckCircle, text: 'Polished delivery & support' },
              ].map((benefit, index) => (
                <div key={index} className="glass rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <benefit.icon className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {benefit.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-strong rounded-3xl p-6 sm:p-8 shadow-glass">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Delivery snapshot
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">
                    Designed to feel premium
                  </div>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { number: '8', label: 'Core solutions' },
                  { number: '150+', label: 'Projects shipped' },
                  { number: '98%', label: 'Client satisfaction' },
                  { number: '24/7', label: 'Support options' },
                ].map((stat, index) => (
                  <div key={index} className="glass rounded-2xl p-4">
                    <div className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 glass rounded-2xl p-4">
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Typical outcomes
                </div>
                <div className="mt-2 grid grid-cols-1 gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Faster load time and stronger SEO foundations
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Clean UI with consistent brand polish
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Conversion‑focused sections and CTAs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
