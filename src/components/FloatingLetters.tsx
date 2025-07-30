import { useEffect, useRef } from 'react';

interface Letter {
  id: number;
  char: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export const FloatingLetters = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<Letter[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Characters to float around
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*()[]{}';
    
    // Initialize letters
    const initLetters = () => {
      lettersRef.current = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.3 + 0.1
      }));

      // Create DOM elements
      lettersRef.current.forEach(letter => {
        const element = document.createElement('div');
        element.id = `floating-letter-${letter.id}`;
        element.textContent = letter.char;
        element.style.position = 'fixed';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '1';
        element.style.color = 'hsl(var(--accent))';
        element.style.fontSize = `${letter.size}px`;
        element.style.fontFamily = 'monospace';
        element.style.opacity = letter.opacity.toString();
        element.style.transition = 'all 0.1s ease-out';
        container.appendChild(element);
      });
    };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    const animate = () => {
      lettersRef.current.forEach(letter => {
        // Mouse repulsion effect
        const dx = letter.x - mouseRef.current.x;
        const dy = letter.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          letter.vx += (dx / distance) * force * 0.02;
          letter.vy += (dy / distance) * force * 0.02;
        }

        // Update position
        letter.x += letter.vx;
        letter.y += letter.vy;

        // Boundaries
        if (letter.x < 0 || letter.x > window.innerWidth) letter.vx *= -1;
        if (letter.y < 0 || letter.y > window.innerHeight) letter.vy *= -1;

        // Apply friction
        letter.vx *= 0.98;
        letter.vy *= 0.98;

        // Update DOM element
        const element = document.getElementById(`floating-letter-${letter.id}`);
        if (element) {
          element.style.left = `${letter.x}px`;
          element.style.top = `${letter.y}px`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initLetters();
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Cleanup DOM elements
      lettersRef.current.forEach(letter => {
        const element = document.getElementById(`floating-letter-${letter.id}`);
        if (element) element.remove();
      });
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-1" />;
};