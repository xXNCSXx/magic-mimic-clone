import logo from '@/assets/logo.png';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
        <h6 className="text-sm font-mono text-muted-foreground mb-4 animate-fade-in-up">
          Minh Pham
        </h6>

        {/* Main hero text */}
        <h1 className="text-hero mb-8 animate-fade-in-up">
          making{' '}
          <span className="text-highlight animate-glow-pulse">good</span>{' '}
          <span className="text-highlight animate-glow-pulse">shit</span>{' '}
          since 2009
        </h1>

        {/* About section */}
        <div className="max-w-2xl mx-auto space-y-8 animate-slide-in-left">
          <div>
            <h3 className="text-lg font-mono text-accent mb-4">About me</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a{' '}
              <span className="text-highlight font-bold">selectively</span>{' '}
              <span className="text-highlight font-bold">skilled</span>{' '}
              product designer with strong focus on producing high quality & impactful digital experience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-mono text-accent mb-6">What i do</h3>
          </div>
        </div>
      </div>
    </section>
  );
};