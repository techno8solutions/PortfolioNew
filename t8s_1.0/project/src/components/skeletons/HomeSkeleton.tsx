import React from 'react';

const Block = ({ className }: { className: string }) => (
  <div className={`skeleton-soft ${className}`} />
);

const HomeSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <div className="glass-strong shadow-glass rounded-[2rem] p-7 sm:p-10">
        <Block className="h-6 w-40 rounded-full" />
        <Block className="mt-6 h-12 w-3/4 rounded-2xl" />
        <Block className="mt-4 h-6 w-2/3 rounded-2xl" />
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Block className="h-12 w-48 rounded-full" />
          <Block className="h-12 w-44 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="glass-strong shadow-glass rounded-3xl p-7">
            <Block className="h-12 w-12 rounded-2xl" />
            <Block className="mt-6 h-5 w-2/3 rounded-xl" />
            <Block className="mt-3 h-4 w-full rounded-xl" />
            <Block className="mt-2 h-4 w-5/6 rounded-xl" />
          </div>
        ))}
      </div>

      <div className="glass-strong shadow-glass rounded-[2rem] p-7 sm:p-10">
        <Block className="h-7 w-48 rounded-2xl" />
        <Block className="mt-4 h-5 w-3/4 rounded-2xl" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="glass rounded-3xl overflow-hidden">
              <Block className="h-40 w-full rounded-none" />
              <div className="p-6">
                <Block className="h-5 w-2/3 rounded-xl" />
                <Block className="mt-3 h-4 w-full rounded-xl" />
                <Block className="mt-2 h-4 w-5/6 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;

