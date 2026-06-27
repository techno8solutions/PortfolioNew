import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Hold the loading screen for 1.2 seconds for branding, then fade out
    const fadeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    // Remove from DOM after fade transition completes (800ms)
    const removeTimer = window.setTimeout(() => {
      setIsRendered(false);
    }, 2000);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <>
      <style>
        {`
          @keyframes progressSweep {
            0% { left: -40%; }
            100% { left: 140%; }
          }
          .animate-sweep {
            animation: progressSweep 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          }
        `}
      </style>
      
      <div 
        className={`fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-white transition-opacity duration-800 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-4 translate-y-[-10%]">
          <div className="text-xl md:text-2xl font-extrabold tracking-[0.15em] text-slate-900 uppercase">
            TECHNO8
          </div>
          <div className="relative w-32 md:w-40 h-[2px] bg-slate-100 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[40%] bg-slate-900 rounded-full animate-sweep" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
