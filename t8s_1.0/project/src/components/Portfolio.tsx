import React, { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';
import { caseStudies, caseStudyCategories, type CaseStudy } from '../data/caseStudies';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [active, setActive] = useState<CaseStudy | null>(null);

  const filtered = useMemo(() => {
    if (selectedCategory === 'All') return caseStudies;
    return caseStudies.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  const goToCaseStudiesPage = () => {
    window.location.hash = '#/case-studies';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center rounded-full px-4 py-2 glass">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Selected work
            </span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Case studies with premium polish.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            A snapshot of outcomes across design, development, marketing, and AI automation — built to look great and perform fast.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudyCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10'
                    : 'glass glass-hover text-slate-700 dark:text-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filtered.map((project) => (
            <div key={project.slug} className="group glass glass-hover rounded-3xl overflow-hidden">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2.5 py-1 rounded-full font-semibold glass text-slate-700 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-5 line-clamp-3">
                  {project.summary}
                </p>
                
                <button
                  onClick={() => setActive(project)}
                  className="inline-flex items-center text-blue-700 dark:text-blue-300 font-semibold hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"
                >
                  Request details
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={goToCaseStudiesPage}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10 transition-all duration-300"
          >
            View all case studies
          </button>
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

export default Portfolio;
