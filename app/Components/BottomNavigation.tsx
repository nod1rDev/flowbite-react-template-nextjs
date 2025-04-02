"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function BottomNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'menu' | 'search'>('menu');

  const isActive = (path: string) => pathname === path;

  const handleOpen = (type: 'menu' | 'search') => {
    setActiveTab(type);
    setIsOpen(true);
  };

  const menuItems = [
    { path: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { path: '/movies', label: 'Movies', icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z' },
    { path: '/series', label: 'TV Series', icon: 'M3 8h18v8H3z' },
  ];

  const categories = [
    { id: 'action', name: 'Action', count: 245 },
    { id: 'comedy', name: 'Comedy', count: 189 },
    { id: 'drama', name: 'Drama', count: 378 },
    { id: 'horror', name: 'Horror', count: 156 },
    { id: 'romance', name: 'Romance', count: 213 },
    { id: 'sci-fi', name: 'Sci-Fi', count: 167 },
    { id: 'thriller', name: 'Thriller', count: 192 },
    { id: 'documentary', name: 'Documentary', count: 124 },
  ];

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed z-40 w-full h-16 max-w-lg -translate-x-1/2 bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-full bottom-4 left-1/2 dark:bg-slate-800/60 dark:border-slate-700/50 shadow-lg">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
          <button
            onClick={() => handleOpen('menu')}
            className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 group"
          >
            <svg className="w-5 h-5 mb-1 text-slate-800 group-hover:text-slate-900 dark:text-slate-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            <span className="text-xs text-slate-800 dark:text-slate-100">Menu</span>
          </button>

          <button
            onClick={() => handleOpen('search')}
            className="inline-flex flex-col items-center justify-center hover:bg-slate-200/50 dark:hover:bg-slate-700/50 group"
          >
            <svg className="w-5 h-5 mb-1 text-slate-800 group-hover:text-slate-900 dark:text-slate-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="text-xs text-slate-800 dark:text-slate-100">Search</span>
          </button>

          <Link 
            href="/profile"
            className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 group"
          >
            <svg className="w-5 h-5 mb-1 text-slate-800 group-hover:text-slate-900 dark:text-slate-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <span className="text-xs text-slate-800 dark:text-slate-100">Profile</span>
          </Link>
        </div>
      </div>

      {/* Custom Drawer */}
      <div
        className={`fixed inset-0 z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/70 backdrop-blur-md transition-opacity ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer Content */}
        <div className="absolute bottom-0 w-full h-[80vh] bg-slate-50 dark:bg-slate-900 rounded-t-2xl shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100">
              {activeTab === 'menu' ? 'Menu' : 'Search'}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
            >
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-4 overflow-y-auto h-[calc(80vh-64px)]">
            {activeTab === 'search' ? (
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    className="block w-full p-4 pl-10 text-sm border-slate-200 rounded-xl bg-white focus:ring-slate-500 focus:border-slate-500 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-100"
                    placeholder="Search movies..."
                  />
                  <button className="absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 text-white dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:ring-slate-700">
                    Search
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300">Recent Searches</h3>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Main Menu */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 px-3">Main Menu</h3>
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center p-3 rounded-xl transition-colors ${
                        isActive(item.path) ? 'bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-white' : 'text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Categories Section */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 px-3">Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.id}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <span className="text-slate-800 dark:text-slate-100">{category.name}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                          {category.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNavigation;