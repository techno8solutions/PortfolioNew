import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Globe, Smartphone, TrendingUp, Instagram, Code, Database, Palette, Bot } from 'lucide-react';
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

type Props = {
  onBackHome: () => void;
  onRequestQuote: (service: Service) => void;
};

const ServicesPage: React.FC<Props> = ({ onBackHome, onRequestQuote }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const base = [...servicesData].sort((a, b) => a.id - b.id);
    if (!normalized) return base;
    return base.filter((s) => {
      const haystack = [
        s.title,
        s.shortDescription,
        s.longDescription,
        ...s.features,
        ...s.bestFor,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query]);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 shadow-sm rounded-[2rem] p-7 sm:p-10 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <button
                onClick={onBackHome}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-sm font-semibold text-slate-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to website
              </button>
              <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Services
              </h1>
              <p className="mt-3 text-lg text-slate-600 max-w-3xl">
                Explore our 8 core solutions — each delivered with premium design, modern engineering, and a clear process from discovery to launch.
              </p>
              <div className="mt-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Search services
                </label>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full max-w-xl px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-colors"
                  placeholder="e.g. landing page, SEO, dashboards, automation…"
                />
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[1.5rem] p-5 sm:p-6 w-full sm:w-80 flex-shrink-0">
              <div className="text-sm font-bold text-slate-900">
                How we work
              </div>
              <div className="mt-3 space-y-3 text-sm text-slate-600 font-medium">
                <div className="flex items-start gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600 mt-1 flex-shrink-0" />
                  Premium UI + clear messaging
                </div>
                <div className="flex items-start gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600 mt-1 flex-shrink-0" />
                  Performance + accessibility by default
                </div>
                <div className="flex items-start gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600 mt-1 flex-shrink-0" />
                  Transparent timelines and delivery
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Stack */}
        <div className="relative w-full flex flex-col gap-8 lg:gap-0 lg:pb-[20vh]">
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 border border-slate-200 rounded-[2rem]">
              <h3 className="text-xl font-bold text-slate-900">No services found</h3>
              <p className="text-slate-600 mt-2">Try adjusting your search terms.</p>
            </div>
          ) : (
            filtered.map((service, index) => {
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
                        onClick={() => onRequestQuote(service)}
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
            })
          )}
        </div>

        <div className="mt-16 bg-white border border-slate-200 shadow-sm rounded-[2rem] p-8 sm:p-10 text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Need a custom package?
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Tell us what you’re building and we’ll recommend a tailored mix of services with a clear plan, timeline, and pricing.
          </p>
          <button
            onClick={() => onRequestQuote(servicesData[0])}
            className="mt-7 inline-flex items-center justify-center rounded-md px-8 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300"
          >
            Request a quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Starter',
              subtitle: 'Ideal for quick launches',
              items: ['Clean UI + strong messaging', 'Essential pages/screens', 'Fast turnaround'],
            },
            {
              title: 'Growth',
              subtitle: 'For scaling teams',
              items: ['Advanced sections + integrations', 'Analytics-ready structure', 'Iteration support'],
            },
            {
              title: 'Scale',
              subtitle: 'For serious products',
              items: ['Design system foundations', 'Performance + accessibility', 'Long-term roadmap'],
            },
          ].map((p) => (
            <div key={p.title} className="bg-white border border-slate-200 shadow-sm rounded-[2rem] p-7 sm:p-8">
              <div className="text-sm font-semibold text-slate-500">{p.subtitle}</div>
              <div className="mt-2 text-2xl font-bold text-slate-900">{p.title}</div>
              <div className="mt-6 space-y-3 text-sm text-slate-600 font-medium">
                {p.items.map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    <span>{i}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onRequestQuote(servicesData[0])}
                className="mt-8 w-full inline-flex items-center justify-center rounded-xl py-3 px-4 font-semibold text-slate-900 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all duration-300"
              >
                Get pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
