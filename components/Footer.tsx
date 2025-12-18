'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
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
            <p className="text-copy-14 text-gray-600">
              Professional hosting services for web and mobile applications.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-heading-16 mb-4 font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-copy-14 text-black hover:text-black" style={{ color: '#000000' }}>
                  Hosting
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-copy-14 text-black hover:text-black" style={{ color: '#000000' }}>
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-copy-14 text-black hover:text-black" style={{ color: '#000000' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-heading-16 mb-4 font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-copy-14 text-black hover:text-black" style={{ color: '#000000' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-copy-14 text-black hover:text-black" style={{ color: '#000000' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-heading-16 mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-copy-14 text-black hover:text-black" style={{ color: '#000000' }}>
                  Documentation
                </Link>
              </li>
              <li>
                <a 
                  href="https://vercel.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-copy-14 text-black hover:text-black"
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
                  className="text-copy-14 text-black hover:text-black"
                  style={{ color: '#000000' }}
                >
                  Netlify
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-copy-12 text-gray-500">
            © Copyright {currentYear} LZTEK, LLC. All rights reserved.
          </p>
          <Link 
            href="/_files/ugd/e86beb_0befdaea0e3c4487bbbef1875b5c0507.pdf" 
            className="text-copy-12 text-gray-500 hover:text-black transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
