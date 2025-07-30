export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 px-6 border-t border-border/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-black text-highlight mb-4">
              Let's work together
            </h3>
            <p className="text-muted-foreground">
              Available for freelance projects and collaborations
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-black text-accent/20 mb-4">
              {currentYear}
            </div>
          </div>
          
          <div className="text-right">
            <div className="space-y-2">
              {['Email', 'LinkedIn', 'Behance', 'Instagram'].map((platform, index) => (
                <a
                  key={platform}
                  href="#"
                  className="block text-sm font-mono text-muted-foreground hover:text-accent transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/10 text-center">
          <p className="text-xs font-mono text-muted-foreground">
            © {currentYear} Minh Pham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};