import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { LoadingScreen } from './components/LoadingScreen';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Resume } from './components/sections/Resume';
import { Skills } from './components/sections/Skills';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
