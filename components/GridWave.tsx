'use client';

import { useEffect, useRef, useState } from 'react';

export default function GridWave() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Find the hero section
      const heroSection = document.querySelector('section[class*="min-h-screen"]');
      if (!heroSection || !containerRef.current) return;
      
      const heroRect = heroSection.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Check if mouse is within hero section
      if (
        e.clientX >= heroRect.left &&
        e.clientX <= heroRect.right &&
        e.clientY >= heroRect.top &&
        e.clientY <= heroRect.bottom
      ) {
        const x = e.clientX - containerRect.left;
        const y = e.clientY - containerRect.top;
        setMousePosition({ x, y });
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const heroSection = document.querySelector('section[class*="min-h-screen"]');
    if (heroSection) {
      heroSection.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (heroSection) {
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const gridContainer = document.querySelector('.grid-container');
    if (!gridContainer) return;

    const updateWave = () => {
      const gridElement = gridContainer as HTMLElement;
      
      if (isHovering && containerRef.current && mousePosition.x > 0 && mousePosition.y > 0) {
        const rect = gridContainer.getBoundingClientRect();
        const relativeX = mousePosition.x;
        const relativeY = mousePosition.y;

        // Calculate distance from cursor for wave intensity
        const distance = Math.sqrt(
          Math.pow(relativeX - rect.width / 2, 2) + 
          Math.pow(relativeY - rect.height / 2, 2)
        );
        const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
        const intensity = Math.max(0, 1 - distance / maxDistance);
        
        // Create wave effect with CSS custom properties
        gridElement.style.setProperty('--wave-x', `${relativeX}px`);
        gridElement.style.setProperty('--wave-y', `${relativeY}px`);
        gridElement.style.setProperty('--wave-intensity', `${intensity}`);
        
        // Enhance grid opacity near cursor to create wave visibility (no transform to avoid content movement)
        const baseOpacity = 0.4;
        const enhancedOpacity = baseOpacity + intensity * 0.3;
        gridElement.style.setProperty('--grid-opacity', `${enhancedOpacity}`);
        
      } else {
        // Reset when not hovering
        gridElement.style.setProperty('--grid-opacity', '0.4');
      }
    };

    updateWave();
  }, [mousePosition, isHovering]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-10"
    />
  );
}
