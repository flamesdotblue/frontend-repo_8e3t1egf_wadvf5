import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-emerald-600/10 ring-1 ring-emerald-500/30 flex items-center justify-center">
              <span className="font-black text-emerald-700">GG</span>
            </div>
            <span className="font-semibold text-gray-900">Golden Gate Golf Club</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#amenities" className="text-gray-700 hover:text-gray-900">Amenities</a>
            <a href="#membership" className="text-gray-700 hover:text-gray-900">Membership</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://maps.google.com/?q=San+Francisco+CA+golf+club"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </a>
            <a
              href="#membership"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-white shadow-sm hover:bg-emerald-700"
            >
              <Phone className="h-4 w-4" />
              <span>Book a tee time</span>
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
