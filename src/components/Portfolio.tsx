import { useState } from 'react';

const portfolioItems = [
  {
    id: '3d',
    title: '3D',
    description: 'I can produce anything that my 16" laptop can render',
    fullDescription: 'Creating stunning 3D visualizations, product renders, and immersive experiences using industry-leading tools and techniques.',
  },
  {
    id: 'visual',
    title: 'Visual',
    description: 'I search the internet for visual references and then combine them to create my own w...',
    fullDescription: 'Visual design that tells stories. I blend references, create mood boards, and craft unique visual languages that resonate with audiences.',
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Creating memorable brand identities that leave lasting impressions',
    fullDescription: 'From logo design to complete brand systems, I help businesses establish their unique visual identity in the digital landscape.',
  },
  {
    id: 'ui',
    title: 'UI/UX',
    description: 'Designing intuitive interfaces that users love to interact with',
    fullDescription: 'User-centered design approach focusing on creating seamless, intuitive experiences that solve real problems.',
  }
];

export const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="surface-hover p-8 h-80 relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <h2 className="text-4xl font-black mb-4 text-highlight group-hover:animate-glow-pulse">
                  {item.title}
                </h2>
                
                <div className="flex-1 overflow-hidden">
                  <p className={`text-muted-foreground transition-all duration-500 ${
                    hoveredItem === item.id 
                      ? 'opacity-0 -translate-y-4' 
                      : 'opacity-100 translate-y-0'
                  }`}>
                    {item.description}
                  </p>
                  
                  <p className={`text-foreground leading-relaxed absolute inset-0 pt-16 transition-all duration-500 ${
                    hoveredItem === item.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}>
                    {item.fullDescription}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className={`w-full h-1 bg-accent mt-6 origin-left transition-transform duration-500 ${
                  hoveredItem === item.id ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </div>

              {/* Number indicator */}
              <div className="absolute top-4 right-4 text-6xl font-black text-accent/20 group-hover:text-accent/40 transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};