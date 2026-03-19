import React, { useEffect, useId, useRef } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import type { Service } from '../data/services';

type Props = {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (service: Service) => void;
};

const ServiceModal: React.FC<Props> = ({ service, isOpen, onClose, onRequestQuote }) => {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
  }, [isOpen]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-[10000]">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-fade opacity-80" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/40 via-slate-950/20 to-slate-950/50 dark:from-black/25 dark:via-black/45 dark:to-black/70"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20" aria-hidden="true" />
      </div>

      <button
        type="button"
        className="fixed inset-0 bg-slate-950/20 dark:bg-black/35 backdrop-blur-md"
        aria-label="Close service"
        onClick={onClose}
      />

      <div className="relative min-h-full flex items-start justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div
          className="w-full max-w-5xl glass-strong shadow-glass rounded-[2rem] overflow-hidden flex flex-col max-h-[calc(100dvh-4rem)] ring-1 ring-white/10"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="relative flex-shrink-0 px-6 sm:px-8 pt-6 sm:pt-7 pb-6 border-b border-white/10 dark:border-white/10">
            <div
              className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/10 to-transparent dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-radial-fade opacity-25" aria-hidden="true" />

            <div className="relative flex items-start justify-between gap-6">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full px-3 py-1.5 border border-white/20 bg-white/10 dark:border-white/10 dark:bg-white/[0.06] text-xs font-semibold text-slate-700 dark:text-slate-200">
                    Service
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-1.5 border border-white/20 bg-white/10 dark:border-white/10 dark:bg-white/[0.06] text-xs font-semibold text-slate-700 dark:text-slate-200">
                    Timeline: {service.timeline}
                  </span>
                </div>

                <h3
                  id={titleId}
                  className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white"
                >
                  {service.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2 rounded-full glass glass-hover text-slate-900 dark:text-white ring-1 ring-white/10 flex-shrink-0"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 min-h-0 p-6 sm:p-8 overflow-y-auto overscroll-contain">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 space-y-7">
                <section className="glass rounded-[1.5rem] p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {service.bestFor.slice(0, 3).map((b) => (
                      <span
                        key={b}
                        className="rounded-full px-3 py-1 text-xs font-semibold border border-white/20 bg-white/10 dark:border-white/10 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { label: 'Premium UI', value: 'Modern, classy design' },
                      { label: 'Performance', value: 'Fast and reliable' },
                      { label: 'Delivery', value: 'Clear milestones' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/20 bg-white/10 dark:border-white/10 dark:bg-white/[0.06] p-4"
                      >
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">
                          {item.label}
                        </div>
                        <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="glass rounded-[1.5rem] p-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Overview</h4>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.longDescription}
                  </p>
                </section>

                <section className="glass rounded-[1.5rem] p-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    What’s included
                  </h4>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400 flex-shrink-0" />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="glass rounded-[1.5rem] p-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Best for</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.bestFor.map((b) => (
                      <span
                        key={b}
                        className="rounded-full px-3 py-1 text-xs font-semibold border border-white/20 bg-white/10 dark:border-white/10 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="glass rounded-[1.5rem] p-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Process</h4>
                  <div className="mt-4 relative">
                    <div
                      className="absolute left-3.5 top-3 bottom-3 w-px bg-white/15 dark:bg-white/10"
                      aria-hidden="true"
                    />
                    <ol className="space-y-5">
                      {service.process.map((step, idx) => (
                        <li key={step} className="relative flex items-start gap-4">
                          <div className="mt-0.5 h-7 w-7 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-xs font-semibold grid place-items-center ring-4 ring-white/15 dark:ring-white/10 flex-shrink-0 tabular-nums">
                            {idx + 1}
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] uppercase tracking-wide text-slate-600 dark:text-slate-300">
                              Step {idx + 1}
                            </div>
                            <div className="mt-1 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                              {step}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </section>

                <section className="glass rounded-[1.5rem] p-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">FAQ</h4>
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        What do you need from me to start?
                      </div>
                      <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        Your goals, examples you like, and any existing assets (logo, content,
                        links). If you don’t have them, we’ll guide you.
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        How is pricing decided?
                      </div>
                      <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        We scope by features, pages/screens, integrations, and timeline. You’ll
                        receive a clear estimate with milestones.
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-6 self-start">
                <div className="glass rounded-[1.5rem] p-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Deliverables
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-strong rounded-[1.5rem] p-6">
                  <div className="inline-flex items-center rounded-full px-3 py-1.5 glass text-xs font-semibold text-slate-700 dark:text-slate-200">
                    Next step
                  </div>
                  <div className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Share your goals and we’ll respond with scope, timeline, and an estimate tailored
                    to this service.
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onRequestQuote(service);
                    }}
                    className="mt-6 w-full inline-flex items-center justify-center rounded-2xl py-3 px-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10"
                  >
                    Request a quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      { k: 'Response', v: 'Fast' },
                      { k: 'Clarity', v: 'Scoped' },
                      { k: 'Delivery', v: 'Milestones' },
                    ].map((m) => (
                      <div
                        key={m.k}
                        className="rounded-2xl border border-white/20 bg-white/10 dark:border-white/10 dark:bg-white/[0.06] px-3 py-2 text-center"
                      >
                        <div className="text-[11px] font-semibold text-slate-900 dark:text-white">
                          {m.k}
                        </div>
                        <div className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-300">
                          {m.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
