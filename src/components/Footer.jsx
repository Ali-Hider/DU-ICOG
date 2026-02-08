import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt, FaChevronRight } from 'react-icons/fa';
import wsLogo from '../assets/websoft.jpg';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 space-y-12">
        {/* Row 1: Contact + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              International Centre for Ocean Governance
            </h4>
            <p className="text-sm leading-relaxed max-w-md">
              Dhaka University Campus, Dhaka-1000.
            </p>
            <p className="mt-4 flex items-center gap-3 text-sm">
              <FaPhoneAlt className="text-amber-400" /> +88 09666 911 463 (Ext)
            </p>
            <div className="mt-6 flex gap-4">
              <a className="p-2 rounded bg-slate-800 hover:bg-slate-700 transition">
                <FaFacebookF />
              </a>
              <a className="p-2 rounded bg-slate-800 hover:bg-slate-700 transition">
                <FaTwitter />
              </a>
              <a className="p-2 rounded bg-slate-800 hover:bg-slate-700 transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-slate-700 shadow-lg">
            <iframe
              title="Google Map"
              className="w-full h-72 border-0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC8wswqDdnAsOxFmeY3M46dFz2q_CfoqvU&q=23.727651106831065,90.40195521534076"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Row 2: Links (full width, different structure) */}
        <div className="border-t border-slate-700 pt-10">
          <h4 className="text-lg font-semibold text-white mb-6"> Quick Links </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            {['Career', 'Webmail', 'Website'].map(link => (
              <li
                key={link}
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaChevronRight className="text-amber-400 text-xs" />
                <Link to="#">{link}</Link> {/* <-- Changed to Link */}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
{/* Footer Bottom */}
<div className="bg-slate-950 border-t border-slate-700">
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
    {/* Left: Copyright */}
    <p className="text-sm sm:text-base text-gray-300 font-medium">
      © 2026 University of Dhaka. All Rights Reserved.
    </p>

    {/* Right: Powered by */}
    <div className="mt-3 sm:mt-0 flex items-center gap-2 text-sm sm:text-base text-gray-300">
      <span>Powered by</span>
      <a
        href="https://www.websoftbd.net/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center hover:opacity-90 transition"
      >
        <img
          src={wsLogo}
          alt="WebSoft Logo"
          className="h-6 sm:h-8 md:h-10 w-auto object-contain drop-shadow-md"
        />
      </a>
    </div>
  </div>
</div>

    </footer>
  );
}
