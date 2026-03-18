import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';
import CaseStudiesPage from './pages/CaseStudiesPage';
import { useEffect, useState } from 'react';

type Route = 'home' | 'case-studies';

const getRouteFromHash = (hash: string): Route => {
  if (hash.startsWith('#/case-studies')) return 'case-studies';
  return 'home';
};

function App() {
  const [route, setRoute] = useState<Route>(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (route !== 'home') return;
    const sectionId = sessionStorage.getItem('scrollTo');
    if (!sectionId) return;
    sessionStorage.removeItem('scrollTo');
    requestAnimationFrame(() => {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [route]);

  const navigate = (next: Route) => {
    window.location.hash = next === 'home' ? '#/' : '#/case-studies';
  };

  return (
    <ThemeProvider>
      <div className="min-h-dvh transition-colors duration-300">
        <div className="fixed inset-0 -z-10 bg-radial-fade" />
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/60 via-white/20 to-white/0 dark:from-black/30 dark:via-black/20 dark:to-black/40" />

        <LoadingScreen />
        <Header route={route} navigate={navigate} />

        <main className="pt-16">
          {route === 'home' ? (
            <>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Contact />
            </>
          ) : (
            <CaseStudiesPage onBackHome={() => navigate('home')} />
          )}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
