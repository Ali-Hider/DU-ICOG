import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    children: [
      { name: 'Mission and Vision', href: '/about/mission-vision' },
      { name: 'Message from Director', href: '/about/director-message' },
    ],
  },
  {
    name: 'People',
    children: [
      { name: 'Executive Committee', href: '/people/committee' },
      { name: 'Officers and Staff', href: '/people/staff' },
    ],
  },
  {
    name: 'Research',
    children: [
      { name: 'Current Research', href: '/research/current' },
      { name: 'Completed Research', href: '/research/completed' },
      { name: 'Future Research', href: '/research/future' },
      { name: 'Research Areas', href: '/research/areas' },
      { name: 'Research Facilities', href: '/research/facilities' },
    ],
  },
  { name: 'Publications', href: '/publications' },
  { name: 'Notice', href: '/notice' },
  {
    name: 'Events',
    children: [
      { name: 'Seminar', href: '/events/seminar' },
      { name: 'Workshop', href: '/events/workshop' },
      { name: 'Conference', href: '/events/conference' },
      { name: 'Training', href: '/events/training' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function NavHead() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-400 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        {/* Main Flex Container */}
        <div className="flex items-center justify-between h-14">
          {/* ===== DESKTOP MENU (ONLY lg+) ===== */}
          <div className="hidden lg:flex space-x-6 xl:space-x-10">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group py-2">
                  <button className="flex items-center text-lg font-bold text-gray-800 hover:text-white">
                    {item.name}
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div className="absolute left-0 mt-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <div className="bg-white border border-gray-100 rounded-md shadow-xl overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-base font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-900 border-l-4 border-transparent hover:border-blue-900"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}  // fixed: use href directly
                  className="relative text-lg font-bold text-gray-800 hover:text-white group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>

          {/* ===== DESKTOP LOGIN (ONLY lg+) ===== */}
          <div className="hidden lg:block">
            <a
              href="https://du.ac.bd/login"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-black text-sm font-black tracking-widest rounded-full shadow hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 uppercase"
            >
              LOGIN
            </a>
          </div>

          {/* ===== MOBILE + TABLET (hamburger + login) ===== */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <div></div>

            <div className="flex items-center space-x-2">
              <a
                href="https://du.ac.bd/login"
                className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-black text-sm font-black tracking-widest rounded-full shadow uppercase"
              >
                LOGIN
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-blue-900"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ===== MOBILE / TABLET DROPDOWN ===== */}
       {/* ===== MOBILE / TABLET DROPDOWN ===== */}
{isOpen && (
  <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto min-h-screen pt-16 pb-4 px-4 sm:px-6">
    {/* CLOSE BUTTON */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-4 right-4 p-2 text-gray-800 hover:text-blue-900 z-50"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    {/* MENU ITEMS */}
    <div className="flex flex-col space-y-2">
      {navigation.map((item) => (
        <div key={item.name}>
          {item.children ? (
            <div className="space-y-1">
              <div className="text-lg font-bold text-gray-800">{item.name}</div>
              <div className="pl-3 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    to={child.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-1 text-gray-700 font-semibold hover:text-blue-800 text-sm"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg font-bold text-gray-800 border-b border-gray-100"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>
)}




      </div>
    </nav>
  );
}
