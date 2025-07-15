"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-black">Perfect Models</h1>
              <p className="text-xs text-neutral-600 -mt-1">Management</p>
            </div>
          </div>

          {/* Menu burger mobile */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-7 w-7 text-black" />
          </button>

          {/* Liens desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral-700 hover:text-black transition-colors font-medium">
              Accueil
            </Link>
            <Link href="/agence" className="text-neutral-700 hover:text-black transition-colors font-medium">
              Notre Agence
            </Link>
            <Link href="/mannequins" className="text-neutral-700 hover:text-black transition-colors font-medium">
              Mannequins
            </Link>
            <Link href="/portfolio" className="text-neutral-700 hover:text-black transition-colors font-medium">
              Portfolio
            </Link>
            <Link
              href="/perfect-fashion-day"
              className="text-neutral-700 hover:text-black transition-colors font-medium"
            >
              Perfect Fashion Day
            </Link>
            <Link href="/contact" className="text-neutral-700 hover:text-black transition-colors font-medium">
              Contact
            </Link>
          </div>

          <Link href="/devenir-mannequin">
            <Button className="bg-black hover:bg-neutral-800 text-white px-6">Devenir Mannequin</Button>
          </Link>
        </div>
      </div>
      {/* Menu mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-6 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4 text-neutral-500 hover:text-black"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
            >
              ✕
            </button>
            <Link href="/" className="text-neutral-700 hover:text-black font-medium" onClick={() => setOpen(false)}>
              Accueil
            </Link>
            <Link href="/agence" className="text-neutral-700 hover:text-black font-medium" onClick={() => setOpen(false)}>
              Notre Agence
            </Link>
            <Link href="/mannequins" className="text-neutral-700 hover:text-black font-medium" onClick={() => setOpen(false)}>
              Mannequins
            </Link>
            <Link href="/portfolio" className="text-neutral-700 hover:text-black font-medium" onClick={() => setOpen(false)}>
              Portfolio
            </Link>
            <Link href="/perfect-fashion-day" className="text-neutral-700 hover:text-black font-medium" onClick={() => setOpen(false)}>
              Perfect Fashion Day
            </Link>
            <Link href="/contact" className="text-neutral-700 hover:text-black font-medium" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link href="/devenir-mannequin" onClick={() => setOpen(false)}>
              <Button className="bg-black hover:bg-neutral-800 text-white w-full mt-4">Devenir Mannequin</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 