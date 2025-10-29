import React from 'react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-24 sm:py-28 lg:py-32 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-700">
              <Star className="h-4 w-4" />
              <span className="text-xs font-medium">San Francisco's premier golf experience</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Championship golf with iconic SF views
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Nestled among coastal cypress and Pacific breezes, our 18-hole course blends classic design with modern playability. Enjoy immaculate fairways, elevated dining, and a vibrant community minutes from the Golden Gate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#membership" className="inline-flex justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-emerald-700">
                Explore membership
              </a>
              <a
                href="https://maps.google.com/?q=Golden+Gate+Park+Golf+Course,+San+Francisco"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-gray-900 font-medium shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
              >
                Get directions
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-white/60 ring-1 ring-gray-200 py-4">
                <dt className="text-xs text-gray-500">Holes</dt>
                <dd className="text-xl font-semibold text-gray-900">18</dd>
              </div>
              <div className="rounded-xl bg-white/60 ring-1 ring-gray-200 py-4">
                <dt className="text-xs text-gray-500">Par</dt>
                <dd className="text-xl font-semibold text-gray-900">71</dd>
              </div>
              <div className="rounded-xl bg-white/60 ring-1 ring-gray-200 py-4">
                <dt className="text-xs text-gray-500">Practice bays</dt>
                <dd className="text-xl font-semibold text-gray-900">24</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-emerald-600 to-sky-500 p-1 shadow-2xl">
              <div className="h-full w-full rounded-2xl bg-white/10 backdrop-blur">
                <div className="h-full w-full rounded-2xl bg-[radial-gradient(125%_125%_at_50%_0%,#ffffff_40%,#d1fae5_60%,#cffafe_85%)]" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-end justify-end p-6">
              <div className="rounded-xl bg-white/90 ring-1 ring-black/10 px-4 py-3 shadow">
                <p className="text-sm text-gray-600">Fog-kissed mornings. Golden hour finishes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
