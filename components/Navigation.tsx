'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

interface NavigationProps {
  logo: string;
  logoAlt?: string;
  links: NavLink[];
  cta?: {
    href: string;
    label: string;
  };
  variant?: 'light' | 'dark';
}

/**
 * Navigation Component
 * 
 * Minimalist navigation component inspired by Vercel's Geist design system.
 * Features clean borders, smooth animations, and mobile-responsive menu.
 * 
 * @example
 * ```tsx
 * <Navigation
 *   logo="/logo.svg"
 *   logoAlt="Company Logo"
 *   links={[
 *     { href: '/', label: 'Home' },
 *     { href: '/about', label: 'About' },
 *     { href: '/contact', label: 'Contact' }
 *   ]}
 *   cta={{ href: '/signup', label: 'Sign Up' }}
 *   variant="light"
 * />
 * ```
 */
export default function Navigation({
  logo,
  logoAlt = 'Logo',
  links,
  cta,
  variant = 'light',
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  const navClasses = variant === 'dark' 
    ? 'geist-nav geist-nav-dark' 
    : 'geist-nav';
  const scrolledClass = scrolled ? 'geist-nav-scrolled' : '';

  return (
    <>
      {/* Coming Soon Toast */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[60] px-4 py-2 bg-black text-white text-sm whitespace-nowrap"
          >
            Coming soon
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`${navClasses} ${scrolledClass} sticky top-0 left-0 right-0 z-50`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Logo - Left side on mobile */}
          <Link href="/" className="md:hidden flex items-center min-h-[44px] min-w-[44px]">
            <div className="h-8 w-auto">
              {logo ? (
                <Image
                  src={logo}
                  alt={logoAlt}
                  width={120}
                  height={32}
                  className="h-full w-auto object-contain"
                  priority
                  onError={(e) => {
                    // Fallback to text logo if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.logo-text')) {
                      const textLogo = document.createElement('span');
                      textLogo.className = 'logo-text text-heading-20 font-bold text-black';
                      textLogo.textContent = 'LZTEK';
                      parent.appendChild(textLogo);
                    }
                  }}
                />
              ) : (
                <span className="text-heading-20 font-bold text-black">LZTEK</span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation - Logo and Pages on left */}
          <div className="hidden md:flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center min-h-[44px] min-w-[44px]">
              <div className="h-8 w-auto">
                {logo ? (
                  <Image
                    src={logo}
                    alt={logoAlt}
                    width={120}
                    height={32}
                    className="h-full w-auto object-contain"
                    priority
                    onError={(e) => {
                      // Fallback to text logo if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.logo-text')) {
                        const textLogo = document.createElement('span');
                        textLogo.className = 'logo-text text-heading-20 font-bold text-black';
                        textLogo.textContent = 'LZTEK';
                        parent.appendChild(textLogo);
                      }
                    }}
                  />
                ) : (
                  <span className="text-heading-20 font-bold text-black">LZTEK</span>
                )}
              </div>
            </Link>

            {/* Pages/Links - Filter out external links */}
            <div className="flex items-center space-x-1">
              {links.filter(link => !link.external).map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium min-h-[44px] flex items-center text-black no-underline hover:text-black ${
                      active
                        ? 'bg-gray-100'
                        : 'hover:bg-gray-50'
                    }`}
                    style={{ color: '#000000' }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right side: External Docs link and Log in Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Docs Link - External */}
            {links.filter(link => link.external).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium min-h-[44px] flex items-center gap-1.5 text-black no-underline hover:text-black hover:bg-gray-50"
                style={{ color: '#000000' }}
              >
                {link.label}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
            
            {/* Log in Button */}
            <button
              onClick={() => {
                setShowComingSoon(true);
                setTimeout(() => setShowComingSoon(false), 3000);
              }}
              className="px-4 py-2 text-sm font-medium min-h-[44px] flex items-center bg-black text-white hover:bg-gray-900"
            >
              Log in
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-black hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden py-4 space-y-1 overflow-hidden border-t border-gray-200"
            >
              {/* Internal Links */}
              {links.filter(link => !link.external).map((item, index) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-medium min-h-[44px] flex items-center text-black no-underline hover:text-black ${
                        active
                          ? 'bg-gray-100'
                          : 'hover:bg-gray-50'
                      }`}
                      style={{ color: '#000000' }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Mobile External Links - Only show once */}
              {links.filter(link => link.external).map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (links.filter(link => !link.external).length + index) * 0.05 }}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-base font-medium min-h-[44px] flex items-center gap-2 text-black no-underline hover:text-black hover:bg-gray-50"
                    style={{ color: '#000000' }}
                  >
                    {item.label}
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </motion.div>
              ))}
              
              {/* Mobile Log in Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowComingSoon(true);
                    setTimeout(() => setShowComingSoon(false), 3000);
                  }}
                  className="w-full px-4 py-3 text-base font-medium min-h-[44px] flex items-center justify-center bg-black text-white hover:bg-gray-900"
                >
                  Log in
                </button>
              </div>
              
              {cta && (
                <div className="pt-4 border-t border-gray-200">
                  <Link href={cta.href} onClick={() => setIsOpen(false)} className="block">
                    <button className="geist-button geist-button-primary w-full">
                      {cta.label}
                    </button>
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  );
}
