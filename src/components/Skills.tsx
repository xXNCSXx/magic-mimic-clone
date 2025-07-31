import { MaskContainer } from './ui/svg-mask-effect';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Software e Ferramentas",
      skills: [
        "SketchUp",
        "Revit (com DYNAMO)",
        "Unreal Engine",
        "Lumion",
        "SolidWorks",
        "Ftool",
        "Pepakura Designer",
        "InVesalius 3.1",
        "Microsoft Excel",
        "GitHub"
      ]
    },
    {
      title: "Habilidades Técnicas",
      skills: [
        "Modelagem 3D e Impressão 3D",
        "Renderização e Visualização Arquitetônica",
        "Realidade Virtual (VR)",
        "Tratamento de Nuvens de Pontos",
        "Programação (HTML, Visual Basic)"
      ]
    },
    {
      title: "Competências Essenciais",
      skills: [
        "Design Arquitetônico e Urbanístico",
        "Análise Estrutural",
        "Gestão de Projetos",
        "Resolução de Problemas",
        "Inovação e Criatividade"
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-6 min-h-screen">
      <div className="container mx-auto">
        <MaskContainer
          className="h-auto py-8 mb-8"
          size={10}
          revealSize={300}
          revealText={
            <h2 className="text-4xl md:text-6xl font-black text-highlight text-center">
              Habilidades
            </h2>
          }
        >
          <h2 className="text-4xl md:text-6xl font-black text-accent text-center">
            Habilidades
          </h2>
        </MaskContainer>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="surface-hover p-8 rounded-lg animate-slide-in-left"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-bold text-accent mb-6 text-center">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default text-center py-2 px-4 rounded-md hover:bg-accent/10"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};