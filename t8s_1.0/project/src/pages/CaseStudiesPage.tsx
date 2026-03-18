import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CaseStudyModal from '../components/CaseStudyModal';
import { caseStudies, caseStudyCategories, type CaseStudy } from '../data/caseStudies';

type Props = {
  onBackHome: () => void;
};

const CaseStudiesPage: React.FC<Props> = ({ onBackHome }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [active, setActive] = useState<CaseStudy | null>(null);

  const filtered = useMemo(() => {
    if (selectedCategory === 'All') return caseStudies;
    return caseStudies.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

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
                Case Studies
              </h1>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
                Explore full‑fidelity case studies across design, development, marketing, and AI automation — presented with a premium, modern layout.
              </p>
            </div>

            <div className="glass rounded-[1.5rem] p-5 sm:p-6">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                What you’ll find
              </div>
              <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Clear overview, challenge, and solution
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Results summary and tech stack
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Request full details via email
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {caseStudyCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={[
                  'px-5 py-2.5 rounded-full font-semibold transition-all duration-300',
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10'
                    : 'glass glass-hover text-slate-700 dark:text-slate-200',
                ].join(' ')}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((c) => (
            <div key={c.slug} className="group glass glass-hover rounded-3xl overflow-hidden">
              <div className="relative h-56">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="inline-flex items-center rounded-full px-3 py-1.5 glass text-white/90 text-xs font-semibold">
                    {c.category}
                  </div>
                  <div className="mt-2 text-xl font-semibold text-white">{c.title}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 line-clamp-3">{c.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                  {c.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-semibold glass text-slate-700 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold glass text-slate-700 dark:text-slate-200">
                    {c.timeline}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold glass text-slate-700 dark:text-slate-200">
                    {c.role}
                  </span>
                </div>
                <button
                  onClick={() => setActive(c)}
                  className="mt-6 inline-flex items-center font-semibold text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"
                >
                  Request details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <CaseStudyModal
          caseStudy={active}
          isOpen={Boolean(active)}
          onClose={() => setActive(null)}
        />
      </div>
    </section>
  );
};

export default CaseStudiesPage;
