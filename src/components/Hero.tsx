import logo from '@/assets/logo.png';
import { AnimatedText } from './AnimatedText';

export const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-12 animate-scale-in">
          <img 
            src={logo} 
            alt="Minh Pham Logo" 
            className="w-24 h-24 mx-auto hover-lift animate-rotate-slow"
          />
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-black text-highlight mb-4 animate-fade-in-up">
          <AnimatedText 
            text="Nilton " 
            className="inline-block"
            delay={500}
          />
          <AnimatedText 
            text="Júnior" 
            className="inline-block text-accent animate-glow-pulse"
            delay={800}
          />
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl font-mono text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          Estudante de Arquitetura e Urbanismo (8º Período)
        </h2>

        {/* Impact phrase */}
        <div className="mb-12 animate-slide-in-left" style={{ animationDelay: '1.5s' }}>
          <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
            <span className="text-highlight font-bold">Design</span>, {' '}
            <span className="text-highlight font-bold">Tecnologia</span> e {' '}
            <span className="text-highlight font-bold">Inovação</span> {' '}
            em Cada Traço
          </p>
        </div>
      </div>
    </section>
  );
};