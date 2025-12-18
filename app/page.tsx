'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GeistCard from '@/components/GeistCard';
import GeistButton from '@/components/GeistButton';
import GridWave from '@/components/GridWave';
import StarRating from '@/components/testimonials/StarRating';
import OverlappedAvatars from '@/components/testimonials/OverlappedAvatars';

// Scrolling company logos for social proof - using URLs from discover-nocode
const companyLogos = [
  { name: 'Montimber', logo: 'https://assets.discover-nocode.com/dnc-website/montimber.webp' },
  { name: 'Inglett & Stubbs', logo: 'https://assets.discover-nocode.com/dnc-website/IS-Logo-Color-Plain-PNG-medium-1200x443.webp' },
  { name: 'Infitex', logo: 'https://assets.discover-nocode.com/dnc-website/Infitex_Logo_Fixed.png' },
  { name: 'RPMAVS', logo: 'https://assets.discover-nocode.com/dnc-website/RPMAVS_black_logo.png' },
  { name: 'InnovAsia', logo: 'https://assets.discover-nocode.com/dnc-website/InnovAsia_Eco_Logo_TransparentBG_Trimmed.png' },
  { name: 'PCG', logo: 'https://assets.discover-nocode.com/dnc-website/PCG.png' },
  { name: 'LocalKin', logo: 'https://assets.discover-nocode.com/dnc-website/LocalKin.png' },
];

// Platform favicon mapping
const platformFavicons: Record<string, string> = {
  Vercel: 'https://vercel.com/favicon.ico',
  Netlify: 'https://www.netlify.com/favicon.ico',
  Supabase: 'https://supabase.com/favicon/favicon-32x32.png',
  Firebase: 'https://firebase.google.com/favicon.ico',
  Capacitor: 'https://capacitorjs.com/favicon.ico',
};

// Hosting plans (replacing services)
const hostingPlans = [
  {
    name: 'Basic Hosting',
    price: '$25/mo',
    description: 'Perfect for small projects and MVPs',
    features: [
      'Single platform deployment',
      'Basic monitoring',
      'SSL certificate included',
      'Custom domain setup',
    ],
    platforms: ['Vercel', 'Netlify'],
  },
  {
    name: 'Professional Hosting',
    price: '$50-$300/mo',
    description: 'Ideal for growing businesses',
    features: [
      'Multi-platform deployment',
      'Advanced monitoring',
      'Priority support',
      'Email hosting',
      'App store deployment',
    ],
    platforms: ['Vercel', 'Netlify', 'Supabase', 'Firebase'],
  },
  {
    name: 'Enterprise Hosting',
    price: '$500-$1000/mo',
    description: 'For large-scale applications',
    features: [
      'All platforms supported',
      '24/7 dedicated support',
      'Custom infrastructure',
      'Performance optimization',
      'Security audits',
      'Multi-region deployment',
    ],
    platforms: ['Vercel', 'Netlify', 'Capacitor', 'Supabase', 'Firebase'],
  },
];

// All supported platforms for hero display
const allPlatforms = ['Vercel', 'Netlify', 'Supabase', 'Firebase', 'Capacitor'];

interface Testimonial {
  id: string;
  name: string;
  email: string;
  rating: number;
  text: string;
  photo: string[];
  job?: string;
  company?: string;
  website?: string;
  order?: number;
}

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoadingRatings, setIsLoadingRatings] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data.testimonials || []);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setIsLoadingRatings(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Calculate average rating
  const averageRating = testimonials.length > 0
    ? testimonials.reduce((sum, t) => sum + (t.rating || 0), 0) / testimonials.length
    : 4.9;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Header and Subtitle */}
      <section className="min-h-screen md:min-h-[90vh] flex items-center px-4 relative overflow-hidden py-16">
        {/* Grid Wave Effect */}
        <GridWave />
        
        {/* Floating Platform Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {allPlatforms.map((platform, index) => {
            // Different positions for each platform - closer to center
            // Vercel, Netlify, Supabase, Firebase, Capacitor
            const positions = [
              { top: '20%', left: '20%', rotate: '12deg' }, // Vercel
              { top: '25%', right: '25%', rotate: '-8deg' }, // Netlify
              { top: '60%', left: '22%', rotate: '15deg' }, // Supabase - moved up to avoid company scroller
              { top: '10%', left: '45%', rotate: '-5deg' }, // Firebase - moved up higher, not behind clients
              { top: '75%', right: '15%', rotate: '-12deg' }, // Capacitor - bottom right
            ];
            const position = positions[index] || positions[0];
            
            return (
              <div
                key={platform}
                className="floating-platform group pointer-events-auto"
                style={{
                  top: position.top,
                  left: position.left,
                  right: position.right,
                  transform: `rotate(${position.rotate})`,
                }}
              >
                <img
                  src={platformFavicons[platform] || `https://${platform.toLowerCase()}.com/favicon.ico`}
                  alt={platform}
                  className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-0 cursor-pointer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.platform-fallback')) {
                      const fallback = document.createElement('span');
                      fallback.className = 'platform-fallback text-label-12 geist-outlined px-2 py-1';
                      fallback.textContent = platform;
                      parent.appendChild(fallback);
                    }
                  }}
                />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-label-12 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-20">
                  {platform}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="container mx-auto max-w-7xl grid-container relative w-full z-20">
          <div className="text-center mb-20">
            <h1 className="text-heading-64 mb-8">
              Your Ideas, <span className="text-black">Deployed Everywhere</span>
            </h1>
            <p className="text-copy-24 mb-12 max-w-3xl mx-auto text-gray-600">
              Ship faster. Scale effortlessly. Reach users on every platform. 
              Professional hosting that just works.
            </p>
          </div>

          {/* Ratings and Reviews Section */}
          <div className="mb-20 relative" style={{ zIndex: 100 }}>
            <div className="flex flex-col items-center">
              {isLoadingRatings ? (
                <div className="mb-2 flex items-center gap-2">
                  {/* Skeleton stars */}
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gray-200 animate-pulse"
                      />
                    ))}
                  </div>
                  {/* Skeleton rating number */}
                  <div className="w-12 h-12 bg-gray-200 animate-pulse rounded ml-2" />
                </div>
              ) : (
                <div className="mb-2">
                  <StarRating rating={averageRating} size="lg" />
                </div>
              )}
              {isLoadingRatings ? (
                <div className="h-5 w-32 bg-gray-200 animate-pulse rounded mb-4" />
              ) : (
                <p className="text-copy-14 text-gray-600 mb-4">
                  {testimonials.length > 0 ? `Based on ${testimonials.length} reviews` : 'Based on customer reviews'}
                </p>
              )}
              {/* Testimonials Avatars */}
              {!isLoadingRatings && testimonials.length > 0 && (
                <OverlappedAvatars testimonials={testimonials} maxVisible={10} size="md" />
              )}
            </div>
          </div>

          {/* Metrics Section */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-20">
            <div className="text-center">
              <div className="text-heading-48 font-bold mb-2">30+</div>
              <div className="text-copy-14 text-gray-600">Projects Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-heading-48 font-bold mb-2">24/7</div>
              <div className="text-copy-14 text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-heading-48 font-bold mb-2">99%</div>
              <div className="text-copy-14 text-gray-600">Success Rate</div>
            </div>
          </div>

          {/* Scrolling Company Logos - Social Proof */}
          <GeistCard className="p-0 mb-20 overflow-hidden relative" style={{ zIndex: 1 }}>
            <div className="overflow-hidden relative">
              <div className="flex gap-32 items-center animate-scroll whitespace-nowrap py-8">
                {companyLogos.map((company, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center h-20 w-40"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-16 max-w-40 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.logo-fallback')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'logo-fallback text-label-14 font-medium text-gray-500';
                          fallback.textContent = company.name;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {companyLogos.map((company, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-20 w-40"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-16 max-w-40 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.logo-fallback')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'logo-fallback text-label-14 font-medium text-gray-500';
                          fallback.textContent = company.name;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </GeistCard>
        </div>
      </section>

      {/* Hosting Plans Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl grid-container relative">
          <div className="mb-16">
            <h2 className="text-heading-48 text-center mb-4">Hosting Plans</h2>
            <p className="text-copy-18 text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose the perfect hosting plan for your needs. From simple deployments to enterprise-scale infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hostingPlans.map((plan, index) => (
                <GeistCard key={index} className="p-8 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-heading-24 mb-2">{plan.name}</h3>
                    <p className="text-heading-20 font-semibold mb-2">{plan.price}</p>
                    <p className="text-copy-14 text-gray-600 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-copy-14 flex items-start">
                          <span className="mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mb-6">
                      <p className="text-label-14 font-medium mb-2">Supported Platforms:</p>
                      <div className="flex flex-wrap gap-3 items-center">
                        {plan.platforms.map((platform) => (
                          <div
                            key={platform}
                            className="group relative"
                          >
                            <img
                              src={platformFavicons[platform] || `https://${platform.toLowerCase()}.com/favicon.ico`}
                              alt={platform}
                              className="w-6 h-6 transition-all duration-300 group-hover:scale-110 cursor-pointer"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent && !parent.querySelector('.platform-fallback')) {
                                  const fallback = document.createElement('span');
                                  fallback.className = 'platform-fallback text-label-12 geist-outlined px-2 py-1';
                                  fallback.textContent = platform;
                                  parent.appendChild(fallback);
                                }
                              }}
                            />
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-label-12 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
                              {platform}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <GeistButton variant="primary" className="w-full mt-auto">
                    Get Started
                  </GeistButton>
                </GeistCard>
              ))}
            </div>
          </div>

          {/* AI-Driven Software Development Section */}
          <GeistCard className="p-0 mb-16 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0 items-stretch">
              <div className="p-12">
                <h2 className="text-heading-40 mb-4">AI-Driven Software Development</h2>
                <p className="text-copy-18 mb-6 text-gray-600">
                  Need custom software built fast? Our AI-driven development services can help you 
                  prototype, build, and deploy applications in record time.
                </p>
                <p className="text-copy-16 mb-8 text-gray-600">
                  From rapid prototyping to full production deployment, we offer custom-built or 
                  pre-built solutions with ongoing support.
                </p>
                <Link href="https://alakazamlabs.com" target="_blank" rel="noopener noreferrer">
                  <GeistButton variant="primary" className="px-8">
                    Learn More at Alakazam Labs
                  </GeistButton>
                </Link>
              </div>
              <div className="bg-black p-12 text-center flex flex-col items-center justify-center min-h-full">
                <div className="mb-6">
                  <Image
                    src="/assets/AlakazamAI_splash.png"
                    alt="Alakazam Labs Logo"
                    width={400}
                    height={120}
                    className="w-auto h-20 object-contain"
                  />
                </div>
                <p className="text-copy-16 text-white">
                  Rapid prototyping and MVP development powered by AI
                </p>
              </div>
            </div>
          </GeistCard>

          {/* NoCode Platform Support Section */}
          <GeistCard className="p-0 mb-16 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0 items-stretch">
              <div className="p-12">
                <h2 className="text-heading-40 mb-4">NoCode Platform Support</h2>
                <p className="text-copy-18 mb-6 text-gray-600">
                  Build powerful applications without writing code. Discover NoCode provides comprehensive 
                  support for no-code platforms, helping you create and deploy applications faster.
                </p>
                <p className="text-copy-16 mb-8 text-gray-600">
                  From visual builders to automated workflows, we offer expert guidance and support 
                  for all your no-code development needs.
                </p>
                <Link href="https://discover-nocode.com" target="_blank" rel="noopener noreferrer">
                  <GeistButton variant="primary" className="px-8">
                    Learn More at Discover NoCode
                  </GeistButton>
                </Link>
              </div>
              <div className="bg-black p-12 text-center flex flex-col items-center justify-center min-h-full">
                <div className="mb-6">
                  <Image
                    src="/assets/discoverNoCodeWhite.svg"
                    alt="Discover NoCode Logo"
                    width={400}
                    height={120}
                    className="w-auto h-20 object-contain"
                  />
                </div>
                <p className="text-copy-16 text-white">
                  Build applications faster with no-code platform expertise
                </p>
              </div>
            </div>
          </GeistCard>

          {/* App Store Deployment */}
          <GeistCard className="p-8 mb-16">
            <h2 className="text-heading-32 mb-6 text-center">Deploy to App Stores</h2>
            <p className="text-copy-16 text-center text-gray-600 mb-8">
              Reach users on both Apple App Store and Google Play Store
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/app-store-badges/app-store-badge.png"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                />
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/app-store-badges/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </GeistCard>
        </div>
      </section>
    </div>
  );
}
