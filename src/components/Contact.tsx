import { Mail, Linkedin } from 'lucide-react';
import { MaskContainer } from './ui/svg-mask-effect';

export const Contact = () => {
  return (
    <section id="contato" className="py-20 px-6 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <MaskContainer
          className="h-auto py-8 mb-8"
          size={10}
          revealSize={350}
          revealText={
            <h2 className="text-4xl md:text-6xl font-black text-highlight text-center">
              Vamos Conversar?
            </h2>
          }
        >
          <h2 className="text-4xl md:text-6xl font-black text-accent text-center">
            Vamos Conversar?
          </h2>
        </MaskContainer>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-in-left">
          Estou sempre aberto a novas oportunidades, colaborações e discussões sobre arquitetura, 
          tecnologia e inovação. Entre em contato comigo!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
          <a
            href="mailto:niltonjunior@email.com"
            className="group flex items-center gap-3 bg-accent hover:bg-accent/90 text-background font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover-lift"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Enviar E-mail
          </a>
          
          <a
            href="https://linkedin.com/in/niltonjunior"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-2 border-accent text-accent hover:bg-accent hover:text-background font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover-lift"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};