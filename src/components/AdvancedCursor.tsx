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
        className="fixed w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75"
        style={{
          left: cursorPos.x - 8,
          top: cursorPos.y - 8,
          transform: isMoving ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      
      {/* Cursor ring */}
      <div 
        className="fixed w-8 h-8 border border-accent/50 rounded-full pointer-events-none z-[9998] transition-all duration-200"
        style={{
          left: cursorPos.x - 16,
          top: cursorPos.y - 16,
          transform: isMoving ? 'scale(1.5)' : 'scale(1)',
          opacity: isMoving ? 0.8 : 0.4
        }}
      />

      {/* Trail dots */}
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className="cursor-trail-dot fixed w-2 h-2 bg-accent/30 rounded-full pointer-events-none z-[9997]"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Glow effect */}
      <div 
        className="fixed w-20 h-20 pointer-events-none z-[9996]"
        style={{
          left: cursorPos.x - 40,
          top: cursorPos.y - 40,
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)',
          opacity: isMoving ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
    </>
  );
};
