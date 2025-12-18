'use client';

import { useEffect, useRef, useState } from 'react';

export default function RocketAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'landing' | 'idle' | 'moving' | 'launching'>('landing');
  const rocketRef = useRef<SVGGElement>(null);

  useEffect(() => {
    // Start animation when component mounts
    setIsVisible(true);
    
    let landingTimeout: NodeJS.Timeout;
    let movingTimeout: NodeJS.Timeout;
    let launchingTimeout: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

    const startAnimationCycle = () => {
      setAnimationPhase('landing');
      
      landingTimeout = setTimeout(() => {
        setAnimationPhase('idle');
        
        movingTimeout = setTimeout(() => {
          setAnimationPhase('moving');
          
          launchingTimeout = setTimeout(() => {
            setAnimationPhase('launching');
            
            resetTimeout = setTimeout(() => {
              // Restart cycle
              startAnimationCycle();
            }, 2000); // Launch duration
          }, 2000); // Moving duration
        }, 1500); // Idle duration
      }, 2500); // Landing duration
    };

    startAnimationCycle();

    return () => {
      clearTimeout(landingTimeout);
      clearTimeout(movingTimeout);
      clearTimeout(launchingTimeout);
      clearTimeout(resetTimeout);
    };
  }, []);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [, setAnimationTick] = useState(0);

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

  // Force re-render on animation phase change
  useEffect(() => {
    setAnimationTick((tick) => tick + 1);
  }, [animationPhase]);

  const getRocketPosition = () => {
    const containerWidth = dimensions.width || 1000;
    const containerHeight = dimensions.height || 1000;
    const rocketHeight = 50; // Height of rocket in SVG coordinates
    const platformY = containerHeight * 0.3;
    const leftX = containerWidth * 0.2;
    const rightX = containerWidth * 0.8;
    
    switch (animationPhase) {
      case 'landing':
        // Start from above viewport, land on left platform
        return { x: leftX, y: -rocketHeight };
      case 'idle':
        // Idle on left platform
        return { x: leftX, y: platformY };
      case 'moving':
        // Move right on carousel
        return { x: rightX, y: platformY };
      case 'launching':
        // Launch off to the right
        return { x: containerWidth + 100, y: platformY - 50 };
      default:
        return { x: leftX, y: platformY };
    }
  };

  const getRocketOpacity = () => {
    // Rocket is always visible except when launching
    return animationPhase === 'launching' ? 0 : 1;
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ overflow: 'visible' }}
        width={dimensions.width || '100%'}
        height={dimensions.height || '100%'}
        viewBox={`0 0 ${dimensions.width || 1000} ${dimensions.height || 1000}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Carousel platform */}
        {dimensions.width > 0 && (
          <g>
            {/* Horizontal platform track */}
            <line
              x1={dimensions.width * 0.15}
              y1={(dimensions.height || 1000) * 0.3 + 30}
              x2={dimensions.width * 0.85}
              y2={(dimensions.height || 1000) * 0.3 + 30}
              stroke="rgba(0, 0, 0, 0.15)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Left platform */}
            <rect
              x={dimensions.width * 0.15}
              y={(dimensions.height || 1000) * 0.3 + 20}
              width="80"
              height="20"
              fill="none"
              stroke="rgba(0, 0, 0, 0.2)"
              strokeWidth="1.5"
              rx="4"
            />
            {/* Right platform */}
            <rect
              x={dimensions.width * 0.75}
              y={(dimensions.height || 1000) * 0.3 + 20}
              width="80"
              height="20"
              fill="none"
              stroke="rgba(0, 0, 0, 0.2)"
              strokeWidth="1.5"
              rx="4"
            />
          </g>
        )}

        {/* Rocket - simple black outline */}
        {dimensions.width > 0 && (
          <g
            ref={rocketRef}
            style={{
              transform: `translate(${getRocketPosition().x}px, ${getRocketPosition().y}px)`,
              opacity: getRocketOpacity(),
              transition: animationPhase === 'landing' 
                ? 'transform 2.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out'
                : animationPhase === 'moving'
                ? 'transform 2s ease-in-out, opacity 0.3s ease-out'
                : animationPhase === 'launching'
                ? 'transform 2s cubic-bezier(0.2, 0, 0, 1), opacity 1.5s ease-out'
                : 'transform 0.3s ease-in-out',
            }}
          >
            {/* Rocket body - simple outline */}
            <g stroke="black" strokeWidth="2" fill="none">
              {/* Main body */}
              <ellipse
                cx="0"
                cy="0"
                rx="12"
                ry="25"
              />
              
              {/* Nose cone */}
              <path
                d="M -12 -25 L 0 -30 L 12 -25 Z"
              />
              
              {/* Window */}
              <circle
                cx="0"
                cy="-5"
                r="4"
              />
              
              {/* Fins */}
              <path
                d="M -12 25 L -18 40 L -8 33 Z"
              />
              <path
                d="M 12 25 L 18 40 L 8 33 Z"
              />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
