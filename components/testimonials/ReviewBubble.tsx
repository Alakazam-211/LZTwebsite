'use client';

import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  id: string;
  name: string;
  job?: string;
  company?: string;
  text?: string;
  rating?: number;
  photo?: string[];
}

interface ReviewBubbleProps {
  testimonial: Testimonial;
  position: { x: number; y: number };
  onClose: () => void;
  isMobile?: boolean;
  avatarRefs?: React.MutableRefObject<Map<string, HTMLDivElement>>;
}

export default function ReviewBubble({ testimonial, position, onClose, isMobile = false, avatarRefs }: ReviewBubbleProps) {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [viewportPosition, setViewportPosition] = useState(position);
  const [isMounted, setIsMounted] = useState(false);

  // Update position dynamically on scroll/resize to stay affixed to avatar
  useEffect(() => {
    const updatePosition = () => {
      // Find the avatar element for this testimonial using the refs map
      let avatarElement: HTMLElement | null = null;
      
      if (avatarRefs?.current) {
        avatarElement = avatarRefs.current.get(testimonial.id) || null;
      }
      
      // Fallback: find by DOM traversal if refs not available
      if (!avatarElement) {
        const container = document.querySelector('[data-testimonials-container]');
        if (container) {
          const avatarContainer = container.querySelector('[class*="-space-x"]');
          if (avatarContainer) {
            const avatars = Array.from(avatarContainer.children) as HTMLElement[];
            avatarElement = avatars.find((avatar) => {
              const img = avatar.querySelector('img');
              return img?.alt === testimonial.name;
            }) || avatars[0] || null;
          }
        }
      }
      
      if (!avatarElement) {
        // Use initial position if avatar not found
        return;
      }
      
      const rect = avatarElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const topY = isMobile ? rect.bottom + 8 : rect.bottom + 12;
      setViewportPosition({ x: centerX, y: topY });
      
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/647cec84-b8f9-40fc-be68-6b1ffb022fbd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: 'ReviewBubble.tsx:updatePosition',
          message: 'Position updated on scroll/resize',
          data: {
            avatarTop: rect.top,
            avatarBottom: rect.bottom,
            avatarLeft: rect.left,
            avatarRight: rect.right,
            bubbleX: centerX,
            bubbleY: topY,
            scrollY: window.scrollY,
            windowHeight: window.innerHeight
          },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'run1',
          hypothesisId: 'A'
        })
      }).catch(() => {});
      // #endregion
    };

    // Initial position
    updatePosition();
    setIsMounted(true);

    // Update on scroll/resize with throttling for performance
    let rafId: number | null = null;
    const throttledUpdate = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updatePosition();
          rafId = null;
        });
      }
    };

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    window.addEventListener('resize', throttledUpdate);
    
    return () => {
      window.removeEventListener('scroll', throttledUpdate);
      window.removeEventListener('resize', throttledUpdate);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [testimonial.id, testimonial.name, isMobile, avatarRefs]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (bubbleRef.current && !bubbleRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [onClose]);

  const getInitials = (name?: string) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getPhotoUrl = (photo?: string[]) => {
    if (!photo || photo.length === 0) return undefined;
    const firstPhoto = photo[0];
    if (typeof firstPhoto === 'string') {
      return firstPhoto;
    }
    if (typeof firstPhoto === 'object' && firstPhoto !== null && 'url' in firstPhoto) {
      return (firstPhoto as any).url;
    }
    return undefined;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  // Calculate responsive width and positioning
  // Use fixed positioning with viewport coordinates so it escapes overflow-hidden and stays affixed
  const bubbleStyle = isMobile ? {
    position: 'fixed' as const,
    width: '85vw',
    maxWidth: '85vw',
    maxHeight: 'calc(100vh - 8rem)',
    overflowY: 'auto' as const,
    left: `${viewportPosition.x}px`,
    top: `${viewportPosition.y}px`,
    transform: 'translateX(-50%)',
    opacity: 1,
    zIndex: 999999
  } : {
    position: 'fixed' as const,
    width: '300px',
    left: `${viewportPosition.x}px`,
    top: `${viewportPosition.y}px`,
    transform: 'translateX(-50%)',
    animation: 'fadeInZoom 0.2s ease-out',
    opacity: 1,
    zIndex: 999999
  };

  // Don't render until position is calculated and valid
  if (!isMounted || (viewportPosition.x === 0 && viewportPosition.y === 0)) {
    return null;
  }

  const bubbleContent = (
    <div
      ref={bubbleRef}
      className="review-bubble rounded-3xl p-3 sm:p-4 font-sans"
      style={bubbleStyle}
      data-review-bubble="true"
    >
      {/* Arrow pointer - only show on desktop */}
      {!isMobile && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-4 h-4 review-bubble border-l border-t border-white/60 rotate-45"></div>
        </div>
      )}
      
      {/* Close button for mobile */}
      {isMobile && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-lg leading-none"
          aria-label="Close review"
        >
          ×
        </button>
      )}
      
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2 sm:gap-3 pr-6 sm:pr-0">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10 border-2 border-white/40 shadow-lg flex-shrink-0">
            <AvatarImage src={getPhotoUrl(testimonial.photo)} />
            <AvatarFallback className="bg-gradient-to-br from-blue-400/80 to-purple-500/80 backdrop-blur-sm text-gray-700">
              {getInitials(testimonial.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm sm:text-base text-gray-900 font-sans truncate">{testimonial.name || 'Anonymous'}</h3>
            {testimonial.job && testimonial.company && (
              <p className="text-xs sm:text-sm text-gray-600 font-sans truncate">
                {testimonial.job} at {testimonial.company}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex-shrink-0">
          {renderStars(testimonial.rating || 0)}
        </div>
        
        <blockquote className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
          "{testimonial.text || 'No review text available'}"
        </blockquote>
      </div>
    </div>
  );

  // Render using portal to escape overflow-hidden and appear above all sections
  if (typeof window !== 'undefined' && viewportPosition.x > 0 && viewportPosition.y > 0) {
    return createPortal(bubbleContent, document.body);
  }
  
  // Fallback for SSR or before position is calculated
  return null;
}
