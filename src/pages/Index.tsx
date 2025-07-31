import { useState, useEffect } from 'react';
import { AdvancedCursor } from '@/components/AdvancedCursor';
import { FloatingLetters } from '@/components/FloatingLetters';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <AdvancedCursor />
      <FloatingLetters />
      
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className={`flex-1 flex flex-col transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
