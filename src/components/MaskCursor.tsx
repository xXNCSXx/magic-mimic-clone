import { useEffect, useRef, useState } from 'react';

interface MaskCursorProps {
  children: React.ReactNode;
  className?: string;
}

export const MaskCursor = ({ children, className = '' }: MaskCursorProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    element.addEventListener('mousemove', handleMouseMove);
    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`mask-cursor ${className}`}
      style={{
        '--x': `${mousePos.x}%`,
        '--y': `${mousePos.y}%`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};