import { MaskContainer } from './ui/svg-mask-effect';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Residência Sustentável",
      description: "Projeto de casa unifamiliar com foco em sustentabilidade e eficiência energética.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Centro Comunitário",
      description: "Espaço multifuncional para atividades culturais e sociais da comunidade.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Revitalização Urbana",
      description: "Proposta de revitalização de área degradada com enfoque em mobilidade urbana.",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Modelagem 3D Avançada",
      description: "Projeto desenvolvido com técnicas avançadas de modelagem e renderização.",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Análise Estrutural",
      description: "Estudo estrutural utilizando software especializado e análise computacional.",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Realidade Virtual",
      description: "Experiência imersiva de projeto arquitetônico utilizando tecnologia VR.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projetos" className="py-20 px-6 min-h-screen">
      <div className="container mx-auto">
        <MaskContainer
          className="h-auto py-8 mb-8"
          size={10}
          revealSize={300}
          revealText={
            <h2 className="text-4xl md:text-6xl font-black text-highlight text-center">
              Projetos
            </h2>
          }
        >
          <h2 className="text-4xl md:text-6xl font-black text-accent text-center">
            Projetos
          </h2>
        </MaskContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group surface-hover rounded-lg overflow-hidden hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-surface-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMUExQTFBIi8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE4NVYxNzVIMTc1VjEyNVoiIGZpbGw9IiM0QTRBNEEiLz4KPHBhdGggZD0iTTIxNSAxMjVIMjI1VjE3NUgyMTVWMTI1WiIgZmlsbD0iIzRBNEE0QSIvPgo8cGF0aCBkPSJNMTk1IDEwNUgyMDVWMTU1SDE5NVYxMDVaIiBmaWxsPSIjNEE0QTRBIi8+Cjwvc3ZnPgo=';
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Ver Detalhes</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <button className="w-full bg-accent/10 hover:bg-accent hover:text-background text-accent font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};