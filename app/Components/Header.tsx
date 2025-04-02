"use client";
import React from "react";
import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";

function Header() {
  return (
    <nav className="fixed z-50 w-full border-b border-slate-200 bg-slate-50/80 backdrop-blur-lg dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-xl font-semibold text-slate-800 dark:text-slate-100">
            NightPorno
          </span>
        </Link>
        <DarkThemeToggle className="rounded-lg p-2.5 text-slate-600 hover:bg-slate-200 focus:ring-4 focus:ring-slate-300 dark:text-slate-200 dark:hover:bg-slate-700 dark:focus:ring-slate-700" />
      </div>
    </nav>
  );
}

export default Header;
