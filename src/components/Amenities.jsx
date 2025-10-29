import React from 'react';
import { Trophy, Home, Users, Calendar, MapPin, CheckCircle } from 'lucide-react';

const items = [
  {
    icon: Trophy,
    title: 'Championship 18-hole course',
    desc: 'Classic layout with coastal winds, strategic bunkering, and true-rolling greens.',
  },
  {
    icon: CheckCircle,
    title: 'Practice facilities',
    desc: 'Expansive range, short-game complex, and pristine putting greens for all levels.',
  },
  {
    icon: Home,
    title: 'Clubhouse & dining',
    desc: 'Elevated California cuisine, sunlit terrace, and curated local wines & spirits.',
  },
  {
    icon: Users,
    title: 'Coaching & juniors',
    desc: 'PGA-certified instruction, on-course clinics, and year-round junior programs.',
  },
  {
    icon: MapPin,
    title: 'Iconic SF setting',
    desc: 'Cypress-lined fairways with sweeping views toward the Pacific and the Presidio.',
  },
  {
    icon: Calendar,
    title: 'Member events',
    desc: 'Monthly tournaments, twilight socials, and signature Golden Gate Cup.',
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Amenities & experiences</h2>
          <p className="mt-4 text-gray-600">Thoughtfully designed facilities that elevate every round—from warm-up to the 19th hole.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
