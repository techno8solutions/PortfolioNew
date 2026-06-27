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
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        aria-label="Close case study"
        role="button"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClose();
        }}
      />

      <div className="relative min-h-full flex items-start justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-5xl bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-slate-200">
          <div className="relative h-56 sm:h-72">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="absolute bottom-5 left-6 right-6">
              <div className="inline-flex items-center rounded-full px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold">
                {caseStudy.category}
              </div>
              <h3 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                {caseStudy.title}
              </h3>
              <p className="mt-2 text-white/90 max-w-3xl font-medium">
                {caseStudy.summary}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <section>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-700">
                      {caseStudy.timeline}
                    </span>
                    <span className="rounded-full px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-700">
                      {caseStudy.role}
                    </span>
                    {caseStudy.industries.slice(0, 2).map((i) => (
                      <span
                        key={i}
                        className="rounded-full px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-700"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="text-lg font-bold text-slate-900">
                    Overview
                  </h4>
                  <p className="mt-2 text-slate-600 font-medium leading-relaxed">
                    {caseStudy.overview}
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-bold text-slate-900">
                    Highlights
                  </h4>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {caseStudy.highlights.map((h) => (
                      <div key={h} className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-medium text-slate-700">
                        {h}
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <h4 className="text-lg font-bold text-slate-900">
                    Challenge
                  </h4>
                  <p className="mt-2 text-slate-600 font-medium leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </section>
                <section>
                  <h4 className="text-lg font-bold text-slate-900">
                    Solution
                  </h4>
                  <p className="mt-2 text-slate-600 font-medium leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-bold text-slate-900">
                    Process
                  </h4>
                  <div className="mt-4 space-y-3">
                    {caseStudy.process.map((step, idx) => (
                      <div key={step} className="flex items-start gap-4">
                        <div className="mt-0.5 h-6 w-6 rounded-full bg-slate-900 text-white flex-shrink-0 text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </div>
                        <div className="text-slate-600 font-medium leading-relaxed">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200 rounded-[1.5rem] p-6 sm:p-8">
                <h4 className="text-lg font-bold text-slate-900">
                  Results
                </h4>
                <div className="mt-5 space-y-4">
                  {caseStudy.results.map((r) => (
                    <div key={r.label} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          {r.label}
                        </div>
                        <div className="text-sm font-medium text-slate-600">
                          {r.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h5 className="text-sm font-bold text-slate-900">
                    Tech stack
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {caseStudy.techStack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-3 py-1.5 text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h5 className="text-sm font-bold text-slate-900">
                    Deliverables
                  </h5>
                  <div className="mt-3 space-y-2 text-sm font-medium text-slate-600">
                    {caseStudy.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-slate-900 rounded-[1.5rem] p-6 sm:p-8">
                <h4 className="text-lg font-bold text-white">
                  Request the full case study
                </h4>
                <p className="mt-2 text-sm font-medium text-slate-300">
                  Share your email and we’ll send the complete breakdown and deliverables.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-200 mb-2">
                      Full name
                    </label>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-200 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="john@example.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full mt-2 rounded-xl py-3.5 px-4 font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitted ? 'Request Sent' : isSubmitting ? 'Sending…' : 'Send to my email'}
                    {!isSubmitting && !isSubmitted && <Send className="inline-block ml-2 h-4 w-4" />}
                  </button>

                  {error && (
                    <div className="rounded-xl px-4 py-3 bg-red-500/10 border border-red-500/20 text-sm font-medium text-red-200 mt-4">
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
