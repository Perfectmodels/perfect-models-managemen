"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/logo-pmm.png"
                alt="Logo Perfect Model Management"
                width={48}
                height={48}
                className="cursor-pointer rounded-full hover:scale-105 transition-transform duration-200"
                priority
              />
            </Link>
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
            <Link href="/" className="text-lg text-neutral-700 hover:text-black transition-colors font-semibold">
              Accueil
            </Link>
            <Link href="/agence" className="text-lg text-neutral-700 hover:text-black transition-colors font-semibold">
              Notre Agence
            </Link>
            <Link href="/mannequins" className="text-lg text-neutral-700 hover:text-black transition-colors font-semibold">
              Mannequins
            </Link>
            <Link href="/portfolio" className="text-lg text-neutral-700 hover:text-black transition-colors font-semibold">
              Portfolio
            </Link>
            <Link
              href="/perfect-fashion-day"
              className="text-lg text-neutral-700 hover:text-black transition-colors font-semibold"
            >
              Perfect Fashion Day
            </Link>
            <Link href="/contact" className="text-lg text-neutral-700 hover:text-black transition-colors font-semibold">
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
            <Link href="/" className="text-lg text-neutral-700 hover:text-black font-semibold" onClick={() => setOpen(false)}>
              Accueil
            </Link>
            <Link href="/agence" className="text-lg text-neutral-700 hover:text-black font-semibold" onClick={() => setOpen(false)}>
              Notre Agence
            </Link>
            <Link href="/mannequins" className="text-lg text-neutral-700 hover:text-black font-semibold" onClick={() => setOpen(false)}>
              Mannequins
            </Link>
            <Link href="/portfolio" className="text-lg text-neutral-700 hover:text-black font-semibold" onClick={() => setOpen(false)}>
              Portfolio
            </Link>
            <Link href="/perfect-fashion-day" className="text-lg text-neutral-700 hover:text-black font-semibold" onClick={() => setOpen(false)}>
              Perfect Fashion Day
            </Link>
            <Link href="/contact" className="text-lg text-neutral-700 hover:text-black font-semibold" onClick={() => setOpen(false)}>
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