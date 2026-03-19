import React from 'react';

const Block = ({ className }: { className: string }) => (
  <div className={`skeleton-soft ${className}`} />
);

const ServicesSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      <div className="glass-strong shadow-glass rounded-[2rem] p-7 sm:p-10">
        <Block className="h-10 w-56 rounded-2xl" />
        <Block className="mt-4 h-5 w-2/3 rounded-2xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div key={idx} className="glass-strong shadow-glass rounded-3xl overflow-hidden">
            <Block className="h-36 w-full rounded-none" />
            <div className="p-6">
              <Block className="h-5 w-2/3 rounded-xl" />
              <Block className="mt-3 h-4 w-full rounded-xl" />
              <Block className="mt-2 h-4 w-5/6 rounded-xl" />
              <div className="mt-5 flex gap-2">
                <Block className="h-7 w-20 rounded-full" />
                <Block className="h-7 w-20 rounded-full" />
                <Block className="h-7 w-20 rounded-full" />
              </div>
              <Block className="mt-6 h-12 w-full rounded-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSkeleton;

