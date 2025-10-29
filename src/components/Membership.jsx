import React from 'react';
import { Check, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Social',
    price: '$95/mo',
    highlight: 'Best for casual play',
    features: [
      'Member dining & clubhouse access',
      'Preferred twilight tee times',
      'Invites to socials & 9-hole events',
    ],
  },
  {
    name: 'Full',
    price: '$295/mo',
    highlight: 'Most popular',
    featured: true,
    features: [
      'Unlimited tee time access',
      'Advanced booking window',
      'Member tournaments & GHIN',
      'Complimentary range balls',
    ],
  },
  {
    name: 'Corporate',
    price: 'Custom',
    highlight: 'Teams & client hosting',
    features: [
      'Transferable passes for 4-12 members',
      'Hosted events & clinics',
      'Brand placements & sponsorships',
    ],
  },
];

export default function Membership() {
  return (
    <section id="membership" className="py-20 sm:py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-700">
            <Star className="h-4 w-4" />
            <span className="text-xs font-medium">Membership at Golden Gate</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Find your perfect fit</h2>
          <p className="mt-3 text-gray-600">Flexible options for focused practice, frequent play, and corporate hospitality.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-white border ${tier.featured ? 'border-emerald-300 shadow-lg shadow-emerald-100' : 'border-gray-200 shadow-sm'} p-6`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white shadow">Most popular</span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                <p className="text-xl font-bold text-emerald-700">{tier.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{tier.highlight}</p>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full justify-center rounded-full px-5 py-2.5 text-sm font-medium shadow-sm ${tier.featured ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50'}`}
              >
                {tier.price === 'Custom' ? 'Contact us' : 'Apply now'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
