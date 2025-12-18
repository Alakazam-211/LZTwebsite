'use client';

import { useEffect } from 'react';
import GeistCard from '@/components/GeistCard';

export default function GetStarted() {
  // Load Fillout embed script (exact teachCast approach)
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
      return;
    }

    // Create and append script
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl grid-container relative">
        <div className="text-center mb-12">
          <h1 className="text-heading-48 mb-4">Get Started with Hosting</h1>
          <p className="text-copy-18">
            Fill out the form below to get started with our hosting services.
          </p>
        </div>

        <GeistCard className="p-0">
          <div className="p-6 pb-0">
            <h2 className="text-heading-24 mb-4">Request Hosting Services</h2>
          </div>
          {/* Fillout Form Embed - directly in JSX so it's always in DOM */}
          <div 
            style={{ width: '100%', height: '500px' }}
            data-fillout-id="2sLB6wHMBxus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
            data-fillout-domain="forms.discover-nocode.com"
          />
          <div className="p-6 pt-0"></div>
        </GeistCard>
      </div>
    </div>
  );
}
