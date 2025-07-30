import { useState, useEffect } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
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
    <div className="relative">
      <CustomCursor />
      
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <Hero />
          <Portfolio />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
