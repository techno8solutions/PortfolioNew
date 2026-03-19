import React, { useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  useEffect(() => {
    const el = document.getElementById('app-loader');
    if (!el) return;
    el.setAttribute('data-exit', '1');
    const t = window.setTimeout(() => el.remove(), 220);
    return () => window.clearTimeout(t);
  }, []);

  return null;
};

export default LoadingScreen;
