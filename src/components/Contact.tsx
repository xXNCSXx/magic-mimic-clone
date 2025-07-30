import { Mail, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contato" className="py-20 px-6 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black text-highlight mb-8 animate-fade-in-up">
          Vamos Conversar?
        </h2>
        
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