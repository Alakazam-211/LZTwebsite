'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <style jsx global>{`
        footer a,
        footer a:link,
        footer a:visited {
          color: #000000 !important;
          text-decoration: none !important;
        }
        footer a:hover,
        footer a:focus,
        footer a:active {
          color: #000000 !important;
          text-decoration: underline !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Company Info */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-4">
              <div className="h-8 w-auto">
                <Image
                  src="/assets/Logo_v2_black.svg"
                  alt="LZTEK Logo"
                  width={120}
                  height={32}
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-copy-14 text-black">
              Professional hosting services for web and mobile applications.
            </p>
          </div>

          {/* Spacer Column - Invisible */}
          <div className="hidden md:block flex-1"></div>

          {/* Three Columns - Right Aligned */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[74px] md:justify-end">
            {/* Company */}
            <div>
              <h3 className="text-heading-16 mb-4 font-semibold text-black">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-copy-14 text-black no-underline hover:underline" style={{ color: '#000000' }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-copy-14 text-black no-underline hover:underline" style={{ color: '#000000' }}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-heading-16 mb-4 font-semibold text-black">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://alakazamlabs.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-copy-14 text-black no-underline hover:underline"
                    style={{ color: '#000000' }}
                  >
                    Alakazam Labs
                  </a>
                </li>
                <li>
                  <a 
                    href="https://discover-nocode.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-copy-14 text-black no-underline hover:underline"
                    style={{ color: '#000000' }}
                  >
                    Discover NoCode
                  </a>
                </li>
                <li>
                  <a 
                    href="https://docs.lztek.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-copy-14 text-black no-underline hover:underline"
                    style={{ color: '#000000' }}
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Platforms */}
            <div>
              <h3 className="text-heading-16 mb-4 font-semibold text-black">Platforms</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://vercel.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-copy-14 text-black no-underline hover:underline"
                    style={{ color: '#000000' }}
                  >
                    Vercel
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.netlify.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-copy-14 text-black no-underline hover:underline"
                    style={{ color: '#000000' }}
                  >
                    Netlify
                  </a>
                </li>
                <li>
                  <a 
                    href="https://supabase.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-copy-14 text-black no-underline hover:underline"
                    style={{ color: '#000000' }}
                  >
                    Supabase
                  </a>
                </li>
                <li>
                  <a 
                    href="https://firebase.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-copy-14 text-black no-underline hover:underline"
                    style={{ color: '#000000' }}
                  >
                    Firebase
                  </a>
                </li>
                <li>
                  <a 
                    href="https://capacitorjs.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-copy-14 text-black no-underline hover:underline"
                    style={{ color: '#000000' }}
                  >
                    Capacitor
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-copy-12 text-black">
            © Copyright {currentYear} LZTEK, LLC. All rights reserved.
          </p>
          <Link 
            href="/_files/ugd/e86beb_0befdaea0e3c4487bbbef1875b5c0507.pdf" 
            className="text-copy-12 text-black no-underline hover:underline"
            style={{ color: '#000000' }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
