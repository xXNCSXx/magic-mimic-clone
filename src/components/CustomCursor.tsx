import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Delayed follower
      setTimeout(() => {
        setFollowerPos({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="cursor"
        style={{
          left: cursorPos.x - 10,
          top: cursorPos.y - 10,
        }}
      />
      <div 
        className="cursor-follower"
        style={{
          left: followerPos.x - 20,
          top: followerPos.y - 20,
        }}
      />
    </>
  );
};