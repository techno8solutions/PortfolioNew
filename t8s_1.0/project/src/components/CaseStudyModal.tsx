import React, { useEffect, useMemo, useState } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';
import type { CaseStudy } from '../data/caseStudies';

type Props = {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
};

const CaseStudyModal: React.FC<Props> = ({ caseStudy, isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const endpoint = useMemo(
    () => (import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL as string | undefined) ?? undefined,
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    setFullName('');
    setEmail('');
    setIsSubmitting(false);
    setIsSubmitted(false);
    setError(null);
  }, [isOpen]);

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

  if (!isOpen || !caseStudy) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!endpoint) {
      setError('Missing Google Sheets endpoint. Set VITE_GOOGLE_SHEETS_WEBAPP_URL in .env.local.');
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone: '',
          company: '',
          service: 'Case Study Request',
          budget: '',
          message: `Request details for: ${caseStudy.title} (${caseStudy.category})`,
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });
      setIsSubmitted(true);
    } catch {
      setError('Could not submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] overflow-y-auto overscroll-contain">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        aria-label="Close case study"
        role="button"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClose();
        }}
      />

      <div className="relative min-h-full flex items-start justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-5xl glass-strong shadow-glass rounded-[2rem] overflow-hidden">
          <div className="relative h-56 sm:h-72">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="p-2 rounded-full glass glass-hover text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="absolute bottom-5 left-6 right-6">
              <div className="inline-flex items-center rounded-full px-3 py-1.5 glass text-white/90 text-xs font-semibold">
                {caseStudy.category}
              </div>
              <h3 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
                {caseStudy.title}
              </h3>
              <p className="mt-2 text-white/85 max-w-3xl">
                {caseStudy.summary}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
            <div className="lg:col-span-7">
              <div className="space-y-6">
                <section>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full px-3 py-1 text-xs font-semibold glass text-slate-700 dark:text-slate-200">
                      {caseStudy.timeline}
                    </span>
                    <span className="rounded-full px-3 py-1 text-xs font-semibold glass text-slate-700 dark:text-slate-200">
                      {caseStudy.role}
                    </span>
                    {caseStudy.industries.slice(0, 2).map((i) => (
                      <span
                        key={i}
                        className="rounded-full px-3 py-1 text-xs font-semibold glass text-slate-700 dark:text-slate-200"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Overview
                  </h4>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {caseStudy.overview}
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Highlights
                  </h4>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {caseStudy.highlights.map((h) => (
                      <div key={h} className="glass rounded-2xl px-4 py-3 text-sm text-slate-700 dark:text-slate-200">
                        {h}
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Challenge
                  </h4>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </section>
                <section>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Solution
                  </h4>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Process
                  </h4>
                  <div className="mt-3 space-y-2">
                    {caseStudy.process.map((step, idx) => (
                      <div key={step} className="flex items-start gap-3">
                        <div className="mt-0.5 h-6 w-6 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-xs font-semibold grid place-items-center">
                          {idx + 1}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass rounded-[1.5rem] p-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Results
                </h4>
                <div className="mt-4 space-y-3">
                  {caseStudy.results.map((r) => (
                    <div key={r.label} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">
                          {r.label}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          {r.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Tech stack
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {caseStudy.techStack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-3 py-1 text-xs font-semibold glass text-slate-700 dark:text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Deliverables
                  </h5>
                  <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {caseStudy.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 glass rounded-[1.5rem] p-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Request the full case study
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Share your email and we’ll send the complete breakdown and deliverables.
                </p>

                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                      Full name
                    </label>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl glass text-slate-900 dark:text-white placeholder:text-slate-500/80 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl glass text-slate-900 dark:text-white placeholder:text-slate-500/80 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      placeholder="john@example.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full rounded-2xl py-3 px-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitted ? 'Request Sent' : isSubmitting ? 'Sending…' : 'Send to my email'}
                    {!isSubmitting && !isSubmitted && <Send className="inline-block ml-2 h-4 w-4" />}
                  </button>

                  {error && (
                    <div className="rounded-2xl px-4 py-3 glass text-sm text-rose-700 dark:text-rose-200">
                      {error}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
