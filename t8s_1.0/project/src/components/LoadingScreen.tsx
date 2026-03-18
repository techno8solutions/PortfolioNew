import React, { useEffect, useMemo, useState } from 'react';

const waitForWindowLoad = () =>
  new Promise<void>((resolve) => {
    if (document.readyState === 'complete') {
      resolve();
      return;
    }
    window.addEventListener('load', () => resolve(), { once: true });
  });

const waitForFonts = async () => {
  const fonts = (document as unknown as { fonts?: { ready: Promise<unknown> } }).fonts;
  if (!fonts?.ready) return;
  try {
    await fonts.ready;
  } catch {
    // ignore
  }
};

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  const tips = useMemo(
    () => [
      'Tip: Toggle dark mode anytime.',
      'Tip: Smooth scroll navigation is enabled.',
      'Tip: Share project goals for a faster estimate.',
    ],
    []
  );

  const tip = useMemo(() => tips[Math.floor(Math.random() * tips.length)], [tips]);

  useEffect(() => {
    requestAnimationFrame(() => {
      document.getElementById('app-loader')?.remove();
    });

    const MIN_MS = 700;
    let isCanceled = false;

    const run = async () => {
      const startedAt = Date.now();
      await Promise.all([waitForWindowLoad(), waitForFonts()]);
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, MIN_MS - elapsed);
      await new Promise((r) => window.setTimeout(r, remaining));
      if (!isCanceled) setIsVisible(false);
    };

    void run();
    return () => {
      isCanceled = true;
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={[
        'fixed inset-0 z-[9999] grid place-items-center p-6',
        'transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none',
      ].join(' ')}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      onTransitionEnd={() => {
        if (!isVisible) setShouldRender(false);
      }}
    >
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/0 dark:from-black/30 dark:via-black/20 dark:to-black/60" />

      <div className="relative w-full max-w-xl glass-strong shadow-glass rounded-[2rem] p-7 sm:p-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-28 left-10 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute -top-20 right-6 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl" />
        </div>

        <div className="relative text-center">
          <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg shadow-blue-500/20 grid place-items-center">
            <div className="h-7 w-7 rounded-xl bg-white/20 loader-spin" aria-hidden="true" />
          </div>

          <div className="mt-4 text-2xl font-semibold text-gradient">Techno8solutions</div>
          <div className="mt-2 text-sm text-slate-700/80 dark:text-slate-200/80">
            Crafting a premium experience
          </div>

          <div className="mt-4 inline-flex items-center gap-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-slate-900/30 dark:bg-white/30 loader-dot" />
            <span className="h-2 w-2 rounded-full bg-slate-900/30 dark:bg-white/30 loader-dot loader-dot-2" />
            <span className="h-2 w-2 rounded-full bg-slate-900/30 dark:bg-white/30 loader-dot loader-dot-3" />
          </div>

          <div className="mt-5 h-2.5 w-full max-w-sm mx-auto rounded-full overflow-hidden border border-white/20 bg-white/20 dark:border-white/10 dark:bg-white/10">
            <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/70 to-emerald-400/40 loader-bar" />
          </div>

          <div className="mt-4 text-xs text-slate-600 dark:text-slate-300/80">{tip}</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
