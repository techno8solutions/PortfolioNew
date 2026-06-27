import React, { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';
import { caseStudies, caseStudyCategories, type CaseStudy } from '../data/caseStudies';

const getGridClass = (index: number, total: number) => {
  // Graceful fallback for filtered views with few items
  if (total < 4) return 'col-span-1 md:col-span-1 min-h-[400px]';
  
  // Bento Grid Pattern for 8 items
  const pattern = index % 8;
  if (pattern === 0) return 'col-span-1 md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[832px]'; // Huge hero block
  if (pattern === 4 || pattern === 5) return 'col-span-1 md:col-span-2 md:row-span-1 min-h-[400px]'; // Wide blocks
  if (pattern === 7) return 'col-span-1 md:col-span-3 md:row-span-1 min-h-[400px] md:min-h-[500px]'; // Panoramic bottom block
  
  // Standard square blocks
  return 'col-span-1 md:col-span-1 md:row-span-1 min-h-[400px]';
};

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
          <div className="inline-flex items-center rounded-full px-4 py-2 bg-white border border-slate-200 shadow-sm">
            <span className="text-sm font-semibold text-slate-800">
              Selected work
            </span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Case studies with premium polish.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            A snapshot of outcomes across design, development, marketing, and AI automation — built to look great and perform fast.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {caseStudyCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(0,1fr)] mb-12">
          {filtered.map((project, index) => (
            <div
              key={project.slug}
              className={`group relative rounded-3xl overflow-hidden bg-slate-900 ${getGridClass(index, filtered.length)}`}
            >
              {/* Immersive Background Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:via-black/50" />
              
              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-auto flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="inline-flex items-center rounded-full px-3 py-1.5 bg-white/10 backdrop-blur-md text-white/90 text-xs font-semibold border border-white/20">
                    {project.category}
                  </div>
                  <button
                    onClick={() => setActive(project)}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-colors shadow-lg"
                  >
                    <ArrowRight className="h-5 w-5 -rotate-45" />
                  </button>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/20 backdrop-blur-md text-white/90 font-bold border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 font-medium line-clamp-2 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {project.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={goToCaseStudiesPage}
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300 shadow-sm"
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
