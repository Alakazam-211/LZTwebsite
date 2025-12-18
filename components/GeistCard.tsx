import { ReactNode } from 'react';

interface GeistCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'subtle';
}

/**
 * GeistCard Component
 * 
 * A minimalist outlined component inspired by Vercel's Geist design system.
 * Features clean borders, no shadows, static design.
 * 
 * @example
 * ```tsx
 * <GeistCard variant="default" className="p-8">
 *   <h2>Card Title</h2>
 *   <p>Card content goes here</p>
 * </GeistCard>
 * ```
 */
export default function GeistCard({
  children,
  className = '',
  variant = 'default',
}: GeistCardProps) {
  const baseClasses = 'geist-outlined';
  
  const variantClasses = {
    default: '',
    dark: 'geist-outlined-dark',
    subtle: 'geist-outlined-subtle',
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
