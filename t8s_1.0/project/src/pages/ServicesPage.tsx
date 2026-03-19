import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ServiceModal from '../components/ServiceModal';
import ServiceCard from '../components/ServiceCard';
import { services, type Service } from '../data/services';

type Props = {
  onBackHome: () => void;
  onRequestQuote: (service: Service) => void;
};

const ServicesPage: React.FC<Props> = ({ onBackHome, onRequestQuote }) => {
  const [active, setActive] = useState<Service | null>(null);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const base = [...services].sort((a, b) => a.id - b.id);
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

  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/^#\/services\/([^/?#]+)/);
    const slug = match?.[1];
    if (!slug) return;
    const found = services.find((s) => s.slug === slug);
    if (found) setActive(found);
  }, []);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-strong shadow-glass rounded-[2rem] p-7 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <button
                onClick={onBackHome}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass glass-hover text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to website
              </button>
              <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Services
              </h1>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
                Explore our 8 core solutions — each delivered with premium design, modern engineering, and a clear process from discovery to launch.
              </p>
              <div className="mt-6">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                  Search services
                </label>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full max-w-xl px-4 py-3 rounded-2xl glass text-slate-900 dark:text-white placeholder:text-slate-500/80 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="e.g. landing page, SEO, dashboards, automation…"
                />
              </div>
            </div>

            <div className="glass rounded-[1.5rem] p-5 sm:p-6">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                How we work
              </div>
              <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Premium UI + clear messaging
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Performance + accessibility by default
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Transparent timelines and delivery
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              onViewDetails={(s) => {
                window.location.hash = `#/services/${s.slug}`;
                setActive(s);
              }}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>

        <div className="mt-12 glass-strong shadow-glass rounded-[2rem] p-8 sm:p-10 text-center">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Need a custom package?
          </h3>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Tell us what you’re building and we’ll recommend a tailored mix of services with a clear plan, timeline, and pricing.
          </p>
          <button
            onClick={() => onRequestQuote(services[0])}
            className="mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10 transition-all duration-300"
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
            <div key={p.title} className="glass-strong shadow-glass rounded-[2rem] p-7 sm:p-8">
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">{p.subtitle}</div>
              <div className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{p.title}</div>
              <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {p.items.map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{i}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onRequestQuote(services[0])}
                className="mt-7 w-full inline-flex items-center justify-center rounded-2xl py-3 px-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300"
              >
                Get pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <ServiceModal
          service={active}
          isOpen={Boolean(active)}
          onClose={() => {
            setActive(null);
            if (window.location.hash.startsWith('#/services/')) {
              window.location.hash = '#/services';
            }
          }}
          onRequestQuote={onRequestQuote}
        />
      </div>
    </section>
  );
};

export default ServicesPage;
