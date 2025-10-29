import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Membership from './components/Membership';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Amenities />
        <Membership />

        <section id="contact" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">Visit us</h3>
                <p className="mt-2 text-gray-600">Open daily from sunrise to sunset. Public welcome, reservations recommended.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-white ring-1 ring-gray-200 p-4">
                    <h4 className="font-semibold">Location</h4>
                    <p className="mt-1 text-sm text-gray-600">San Francisco, CA</p>
                    <a
                      className="mt-3 inline-flex text-sm text-emerald-700 hover:text-emerald-800"
                      href="https://maps.google.com/?q=San+Francisco+CA+golf+club"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Maps →
                    </a>
                  </div>
                  <div className="rounded-xl bg-white ring-1 ring-gray-200 p-4">
                    <h4 className="font-semibold">Tee times</h4>
                    <p className="mt-1 text-sm text-gray-600">Call the shop 7am–6pm daily.</p>
                    <a className="mt-3 inline-flex text-sm text-emerald-700 hover:text-emerald-800" href="#membership">Book now →</a>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6">
                <h3 className="text-xl font-semibold">Send us a note</h3>
                <form className="mt-4 grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-700">Name</label>
                      <input type="text" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="Alex Johnson" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">Email</label>
                      <input type="email" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="alex@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Message</label>
                    <textarea className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" rows="4" placeholder="I’m interested in a tour and membership details..." />
                  </div>
                  <button type="button" className="inline-flex justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-emerald-700">Submit</button>
                  <p className="text-xs text-gray-500">This demo form does not send messages.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Golden Gate Golf Club. All rights reserved.</p>
          <nav className="flex gap-6 text-sm">
            <a href="#amenities" className="text-gray-600 hover:text-gray-900">Amenities</a>
            <a href="#membership" className="text-gray-600 hover:text-gray-900">Membership</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
