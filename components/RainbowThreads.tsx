'use client';

import { useEffect, useRef, useState } from 'react';

interface ThreadConfig {
  color: string;
  top: string;
  sag: number; // How much the thread sags in the middle (in pixels)
  rotation: number; // Initial rotation in degrees
}

// Evenly spaced threads with consistent sag - organized and neat
const threads: ThreadConfig[] = [
  { color: 'red', top: '20%', sag: 30, rotation: 0 },
  { color: 'orange', top: '30%', sag: 30, rotation: 0 },
  { color: 'yellow', top: '40%', sag: 30, rotation: 0 },
  { color: 'green', top: '50%', sag: 30, rotation: 0 },
  { color: 'blue', top: '60%', sag: 30, rotation: 0 },
  { color: 'indigo', top: '70%', sag: 30, rotation: 0 },
  { color: 'purple', top: '80%', sag: 30, rotation: 0 },
];

// Calculate catenary curve points (simplified parabolic approximation)
function getCatenaryPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  sag: number,
  rotation: number,
  numPoints: number = 100
): string {
  const points: string[] = [];
  const width = x2 - x1;
  const centerX = (x1 + x2) / 2;
  const centerY = (y1 + y2) / 2;
  const rad = (rotation * Math.PI) / 180;
  
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    let x = x1 + width * t;
    // Parabolic curve approximation for catenary (hanging curve)
    // The curve sags most in the middle
    const curveFactor = 4 * sag * t * (1 - t);
    let y = y1 + curveFactor;
    
    // Apply rotation around center
    const dx = x - centerX;
    const dy = y - centerY;
    x = centerX + dx * Math.cos(rad) - dy * Math.sin(rad);
    y = centerY + dx * Math.sin(rad) + dy * Math.cos(rad);
    
    points.push(`${x},${y}`);
  }

  return `M ${points.join(' L ')}`;
}

export default function RainbowThreads() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const sagOffsetRef = useRef(0); // Positive = more sag (falling), Negative = less sag (lifting)
  const sagVelocityRef = useRef(0);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const scrollDirectionRef = useRef<'up' | 'down' | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Update dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Physics simulation - threads hang naturally without elastic behavior
  useEffect(() => {
    const baseSag = 30; // Base sag amount for all threads
    const gravity = 0.12; // Gravity constant (threads naturally sag under weight)
    const damping = 0.96; // Air resistance/friction damping (higher = less damping)
    const weightlessMultiplier = 1.5; // How much threads "fall" when scrolling down
    const heavyMultiplier = 0.6; // How much threads resist when scrolling up

    const handleScroll = () => {
      const now = Date.now();
      const currentScrollY = window.scrollY;
      const timeDelta = Math.max(1, now - lastScrollTime.current);
      
      if (timeDelta > 0 && timeDelta < 100) {
        const scrollDelta = currentScrollY - lastScrollY.current;
        const scrollVelocity = scrollDelta / timeDelta; // pixels per millisecond
        
        // Determine scroll direction
        if (scrollDelta > 0) {
          scrollDirectionRef.current = 'down';
        } else if (scrollDelta < 0) {
          scrollDirectionRef.current = 'up';
        }
        
        // Only react to scrolling (threshold: 0.1 pixels/ms)
        if (Math.abs(scrollVelocity) > 0.1) {
          if (scrollDirectionRef.current === 'down') {
            // Scrolling DOWN: Weightless feeling - threads fall/sag more
            // Positive sag offset = more sag = falling
            const fallForce = scrollVelocity * weightlessMultiplier * 15;
            sagVelocityRef.current += fallForce;
          } else if (scrollDirectionRef.current === 'up') {
            // Scrolling UP: Heavy feeling - gravity + weight resists upward motion
            // Negative sag offset = less sag = lifting against weight
            const liftResistance = -scrollVelocity * heavyMultiplier * 12;
            sagVelocityRef.current += liftResistance;
            // Also apply gravity pulling down
            sagVelocityRef.current += gravity * 1.5;
          }
        }
      }

      lastScrollY.current = currentScrollY;
      lastScrollTime.current = now;
    };

    const animate = () => {
      // Always apply gravity - threads naturally sag under their own weight
      sagVelocityRef.current += gravity;
      
      // Apply damping (air resistance/friction) - no spring, just natural resistance
      sagVelocityRef.current *= damping;
      
      // Update sag offset
      sagOffsetRef.current += sagVelocityRef.current;
      
      // Natural bounds - threads can drift but won't go to extremes
      const maxSag = 100; // Maximum sag (threads can hang lower)
      const minSag = -25; // Minimum sag (threads can lift slightly)
      if (sagOffsetRef.current > maxSag) {
        sagOffsetRef.current = maxSag;
        sagVelocityRef.current *= 0.4; // Natural stop when hanging too low
      } else if (sagOffsetRef.current < minSag) {
        sagOffsetRef.current = minSag;
        sagVelocityRef.current *= 0.4; // Natural stop when lifted too high
      }
      
      // Stop animation when motion is negligible (threads settle naturally)
      if (Math.abs(sagVelocityRef.current) < 0.005 && Math.abs(sagOffsetRef.current) < 0.2) {
        sagVelocityRef.current = 0;
        sagOffsetRef.current = 0;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Force re-render for animation
  const [, setAnimationTick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.abs(sagVelocityRef.current) > 0.01 || Math.abs(sagOffsetRef.current) > 0.01) {
        setAnimationTick((tick) => tick + 1);
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  const containerWidth = dimensions.width || (typeof window !== 'undefined' ? window.innerWidth : 0);
  const containerHeight = dimensions.height || (typeof window !== 'undefined' ? window.innerHeight : 0);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <svg 
        className="absolute inset-0 w-full h-full" 
        style={{ overflow: 'visible' }}
        width={containerWidth || '100%'}
        height={containerHeight || '100%'}
      >
        {threads.map((thread, index) => {
          if (containerWidth === 0 || containerHeight === 0) return null;
          
          // Anchor points on left and right sides of the grid
          const leftX = 0;
          const rightX = containerWidth;
          const topY = (containerHeight * parseFloat(thread.top)) / 100;
          
          // Apply physics-based sag adjustment
          // Threads hang naturally - no elastic behavior, just gravity and momentum
          // Positive sagOffset = more sag (falling/weightless)
          // Negative sagOffset = less sag (lifting/heavy)
          const adjustedSag = thread.sag + sagOffsetRef.current;
          
          // Calculate catenary curve path
          const pathData = getCatenaryPath(
            leftX,
            topY,
            rightX,
            topY,
            adjustedSag,
            thread.rotation
          );

          // Create gradient for the thread
          const gradientId = `gradient-${thread.color}-${index}`;
          const colorMap: Record<string, string> = {
            red: '#ef4444',
            orange: '#f97316',
            yellow: '#eab308',
            green: '#22c55e',
            blue: '#3b82f6',
            indigo: '#6366f1',
            purple: '#a855f7',
          };

          return (
            <g key={index}>
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" stopOpacity="0" />
                  <stop offset="15%" stopColor={colorMap[thread.color]} stopOpacity="0.2" />
                  <stop offset="50%" stopColor={colorMap[thread.color]} stopOpacity="0.4" />
                  <stop offset="85%" stopColor={colorMap[thread.color]} stopOpacity="0.2" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d={pathData}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  filter: 'blur(0.5px)',
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
