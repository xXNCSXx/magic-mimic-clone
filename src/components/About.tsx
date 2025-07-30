export const About = () => {
  return (
    <section id="sobre" className="py-20 px-6 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-highlight mb-8 animate-fade-in-up">
            Sobre Mim
          </h2>
          
          <div className="space-y-8 animate-slide-in-left">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Sou um estudante apaixonado por integrar{' '}
              <span className="text-accent font-bold">design</span> e{' '}
              <span className="text-accent font-bold">tecnologia</span>, sempre buscando
              soluções inovadoras e sustentáveis para os desafios da arquitetura moderna.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              No 8º período de Arquitetura e Urbanismo, dedico-me ao{' '}
              <span className="text-highlight font-bold">aprimoramento contínuo</span> e à 
              aplicação de soluções criativas que transformem espaços em experiências únicas e funcionais.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Minha abordagem combina conhecimento técnico com visão artística, explorando desde
              a modelagem 3D até realidade virtual, sempre com foco na{' '}
              <span className="text-accent font-bold">inovação</span> e{' '}
              <span className="text-accent font-bold">sustentabilidade</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};