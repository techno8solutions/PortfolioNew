import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-dvh transition-colors duration-300">
        <div className="fixed inset-0 -z-10 bg-radial-fade" />
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white/60 via-white/20 to-white/0 dark:from-black/30 dark:via-black/20 dark:to-black/40" />

        <Header />

        <main className="pt-16">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
