import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ServicesPage from './pages/ServicesPage';
import { useEffect, useState } from 'react';

type Route = 'home' | 'case-studies' | 'services';

const getRouteFromHash = (hash: string): Route => {
  if (hash.startsWith('#/case-studies')) return 'case-studies';
  if (hash.startsWith('#/services')) return 'services';
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
    window.location.hash =
      next === 'home' ? '#/' : next === 'case-studies' ? '#/case-studies' : '#/services';
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
          ) : route === 'case-studies' ? (
            <CaseStudiesPage onBackHome={() => navigate('home')} />
          ) : (
            <ServicesPage
              onBackHome={() => navigate('home')}
              onRequestQuote={(service) => {
                sessionStorage.setItem('prefillService', service.contactValue);
                sessionStorage.setItem('scrollTo', 'contact');
                navigate('home');
              }}
            />
          )}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
