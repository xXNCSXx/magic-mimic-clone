import { useEffect, useRef, useState } from 'react';

interface CursorTrail {
  x: number;
  y: number;
  timestamp: number;
}

export const AdvancedCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const trailRef = useRef<CursorTrail[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Add to trail
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });

      // Keep only recent trail points (last 500ms)
      const now = Date.now();
      trailRef.current = trailRef.current.filter(point => now - point.timestamp < 500);

      // Clear moving state after delay
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsMoving(false), 100);
    };

    const handleMouseLeave = () => {
      setIsMoving(false);
      trailRef.current = [];
    };

    // Animation loop for trail
    const animateTrail = () => {
      const trailElements = document.querySelectorAll('.cursor-trail-dot');
      const now = Date.now();
      
      trailElements.forEach((element, index) => {
        const trailPoint = trailRef.current[trailRef.current.length - 1 - index];
        if (trailPoint) {
          const age = now - trailPoint.timestamp;
          const opacity = Math.max(0, 1 - (age / 500)) * 0.6;
          const scale = Math.max(0.1, 1 - (age / 500));
          
          (element as HTMLElement).style.left = `${trailPoint.x}px`;
          (element as HTMLElement).style.top = `${trailPoint.y}px`;
          (element as HTMLElement).style.opacity = opacity.toString();
          (element as HTMLElement).style.transform = `translate(-50%, -50%) scale(${scale})`;
        }
      });

      animationRef.current = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animateTrail();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div 
        className="fixed w-8 h-8 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100"
        style={{
          left: cursorPos.x - 16,
          top: cursorPos.y - 16,
          transform: isMoving ? 'scale(2)' : 'scale(1)',
          boxShadow: isMoving ? '0 0 30px hsl(var(--accent) / 0.8)' : '0 0 15px hsl(var(--accent) / 0.4)'
        }}
      />
      
      {/* Cursor ring */}
      <div 
        className="fixed w-16 h-16 border-2 border-accent/40 rounded-full pointer-events-none z-[9998] transition-all duration-300"
        style={{
          left: cursorPos.x - 32,
          top: cursorPos.y - 32,
          transform: isMoving ? 'scale(2.5)' : 'scale(1)',
          opacity: isMoving ? 1 : 0.6
        }}
      />

      {/* Outer ring */}
      <div 
        className="fixed w-24 h-24 border border-accent/20 rounded-full pointer-events-none z-[9997] transition-all duration-500"
        style={{
          left: cursorPos.x - 48,
          top: cursorPos.y - 48,
          transform: isMoving ? 'scale(1.8)' : 'scale(1)',
          opacity: isMoving ? 0.8 : 0.3
        }}
      />

      {/* Trail dots */}
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={i}
          className="cursor-trail-dot fixed w-4 h-4 bg-accent/40 rounded-full pointer-events-none z-[9996]"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px hsl(var(--accent) / 0.5)'
          }}
        />
      ))}

      {/* Glow effect */}
      <div 
        className="fixed w-40 h-40 pointer-events-none z-[9995]"
        style={{
          left: cursorPos.x - 80,
          top: cursorPos.y - 80,
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, hsl(var(--accent) / 0.05) 50%, transparent 70%)',
          opacity: isMoving ? 1 : 0.3,
          transition: 'opacity 0.3s ease',
          transform: isMoving ? 'scale(1.5)' : 'scale(1)'
        }}
      />

      {/* Additional pulse effect */}
      <div 
        className="fixed w-32 h-32 pointer-events-none z-[9994] animate-ping"
        style={{
          left: cursorPos.x - 64,
          top: cursorPos.y - 64,
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 50%)',
          opacity: isMoving ? 0.6 : 0,
          transition: 'opacity 0.2s ease'
        }}
      />
    </>
  );
};
