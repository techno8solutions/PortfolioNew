import React, { useMemo } from 'react';
import { ArrowRight, CheckCircle, Globe, Smartphone, TrendingUp, Instagram, Code, Database, Palette, Bot } from 'lucide-react';
import { services as servicesData, type Service } from '../data/services';

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  trendingUp: TrendingUp,
  instagram: Instagram,
  code: Code,
  database: Database,
  palette: Palette,
  bot: Bot,
};

const Services: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const requestQuote = (service: Service) => {
    sessionStorage.setItem('prefillService', service.contactValue);
    scrollToContact();
  };

  const services = useMemo(() => [...servicesData].sort((a, b) => a.id - b.id), []);

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center rounded-full px-4 py-2 bg-white border border-slate-200 shadow-sm">
            <span className="text-sm font-semibold text-slate-800">
              Our 8 core solutions
            </span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Everything you need to grow online.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Choose a single service or combine multiple solutions into a complete digital package — designed, built, and shipped with premium polish.
          </p>
        </div>

        {/* Services Stack */}
        <div className="relative w-full flex flex-col gap-8 lg:gap-0 lg:pb-[20vh]">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconKey];
            
            return (
              <div
                key={service.slug}
                className="lg:sticky bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm flex flex-col lg:flex-row gap-12 lg:mb-0 lg:min-h-[75vh]"
                style={{
                  top: `calc(6rem + ${index * 1.5}rem)`,
                  zIndex: index,
                }}
              >
                {/* LEFT COLUMN: Visuals & Core Info */}
                <div className="lg:w-5/12 flex flex-col">
                  <div>
                    <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center mb-8">
                      <Icon className="w-7 h-7 text-slate-700" />
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="inline-flex items-center rounded-full px-3 py-1 bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                        Timeline: {service.timeline}
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.bestFor.map(b => (
                        <span key={b} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                          {b}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => requestQuote(service)}
                      className="w-full inline-flex items-center justify-center rounded-xl py-3.5 px-6 font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      Request a quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* RIGHT COLUMN: Detailed Info */}
                <div className="lg:w-7/12 flex flex-col gap-6">
                  {/* Overview */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-3">Overview</h4>
                    <p className="text-slate-600 leading-relaxed">
                      {service.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Features */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                      <h4 className="text-lg font-bold text-slate-900 mb-4">What's included</h4>
                      <ul className="space-y-3">
                        {service.features.map(f => (
                          <li key={f} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600 font-medium">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Deliverables</h4>
                      <ul className="space-y-3">
                        {service.deliverables.map(d => (
                          <li key={d} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600 font-medium">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Process */}
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 mt-auto">
                    <h4 className="text-lg font-bold text-slate-900 mb-6">Process</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      {service.process.map((step, idx) => (
                        <div key={step} className="relative">
                          <div className="text-sm font-bold text-slate-300 mb-2">0{idx + 1}</div>
                          <div className="text-slate-700 font-medium text-sm pr-2">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 lg:mt-32 text-center">
          <div className="bg-slate-900 rounded-[2rem] p-10 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white">
                Ready to transform your business?
              </h3>
              <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                Tell us what you’re building and we’ll recommend the best mix of services — along with a clear plan, timeline, and pricing.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
                    window.location.hash = '#/services';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors duration-300"
                >
                  Explore services
                </button>
                <button
                  onClick={() => {
                    window.location.hash = '#/case-studies';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  See recent work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
