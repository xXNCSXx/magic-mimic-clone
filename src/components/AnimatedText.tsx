import { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className = '', delay = 0 }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Split text into individual characters
    const chars = text.split('');
    container.innerHTML = '';

    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(50px) rotateX(90deg)';
      span.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      span.style.transformOrigin = 'center bottom';
      container.appendChild(span);

      // Animate each character with staggered delay
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0) rotateX(0deg)';
      }, delay + index * 50);
    });

    // Mouse interaction effect
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'SPAN') {
        target.style.transform = 'translateY(-10px) scale(1.2)';
        target.style.color = 'hsl(var(--accent))';
        target.style.textShadow = '0 0 20px hsl(var(--accent) / 0.8)';
        
        setTimeout(() => {
          target.style.transform = 'translateY(0) scale(1)';
          target.style.color = '';
          target.style.textShadow = '';
        }, 300);
      }
    };

    container.addEventListener('mouseover', handleMouseOver);

    return () => {
      container.removeEventListener('mouseover', handleMouseOver);
    };
  }, [text, delay]);

  return (
    <div 
      ref={containerRef} 
      className={className}
    />
  );
};