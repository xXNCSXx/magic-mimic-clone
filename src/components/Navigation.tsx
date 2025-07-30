export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-black text-highlight">
          NJ
        </div>
        
        <div className="hidden md:flex space-x-8">
          {[
            { name: 'Início', href: '#inicio' },
            { name: 'Sobre', href: '#sobre' },
            { name: 'Habilidades', href: '#habilidades' },
            { name: 'Projetos', href: '#projetos' },
            { name: 'Contato', href: '#contato' }
          ].map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors duration-300 relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="text-sm font-mono text-muted-foreground">
          2025
        </div>
      </div>
    </nav>
  );
};