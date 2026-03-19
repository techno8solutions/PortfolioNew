import React, { useMemo, useState } from 'react';
import { services as servicesData, type Service } from '../data/services';
import ServiceModal from './ServiceModal';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const [active, setActive] = useState<Service | null>(null);

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
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center rounded-full px-4 py-2 glass">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Our 8 core solutions
            </span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Everything you need to grow online.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Choose a single service or combine multiple solutions into a complete digital package — designed, built, and shipped with premium polish.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              onViewDetails={setActive}
              onRequestQuote={requestQuote}
              dense
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-strong rounded-[2rem] p-10 sm:p-12 shadow-glass">
            <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Ready to transform your business?
            </h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Tell us what you’re building and we’ll recommend the best mix of services — along with a clear plan, timeline, and pricing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  window.location.hash = '#/services';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10 transition-all duration-300"
              >
                Explore services
              </button>
              <button
                onClick={() => {
                  window.location.hash = '#/case-studies';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-slate-900 dark:text-white glass glass-hover"
              >
                See recent work
              </button>
            </div>
          </div>
        </div>
      </div>

      <ServiceModal
        service={active}
        isOpen={Boolean(active)}
        onClose={() => setActive(null)}
        onRequestQuote={requestQuote}
      />
    </section>
  );
};

export default Services;
