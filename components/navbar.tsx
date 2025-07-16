"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 w-full bg-blanc/90 backdrop-blur border-b border-gris z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
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
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          <NavLink href="/" label="Accueil" />
          <NavLink href="/agence" label="Notre Agence" dropdown />
          <NavLink href="/mannequins" label="Mannequins" filter />
          <NavLink href="/portfolio" label="Portfolio" icon="photo" />
          <NavLink href="/perfect-fashion-day" label="Perfect Fashion Day" badge />
          <NavLink href="/contact" label="Contact" icon="mail" />
          <Link href="/devenir-mannequin">
            <button className="ml-4 px-6 py-2 rounded-full font-bold bg-or text-noir shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-or focus:outline-none focus:ring-2 focus:ring-or focus:ring-offset-2 cta-glow">
              Devenir Mannequin
            </button>
          </Link>
        </div>
        {/* Burger menu */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-or"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-7 w-7 text-noir" />
        </button>
      </div>
      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-noir/60" onClick={() => setOpen(false)}>
          <div
            className="fixed top-0 right-0 w-72 h-full bg-blanc shadow-lg p-8 flex flex-col space-y-8 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4 text-gris hover:text-noir text-2xl"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
            >
              ✕
            </button>
            <NavLink href="/" label="Accueil" mobile onClick={() => setOpen(false)} />
            <NavLink href="/agence" label="Notre Agence" dropdown mobile onClick={() => setOpen(false)} />
            <NavLink href="/mannequins" label="Mannequins" filter mobile onClick={() => setOpen(false)} />
            <NavLink href="/portfolio" label="Portfolio" icon="photo" mobile onClick={() => setOpen(false)} />
            <NavLink href="/perfect-fashion-day" label="Perfect Fashion Day" badge mobile onClick={() => setOpen(false)} />
            <NavLink href="/contact" label="Contact" icon="mail" mobile onClick={() => setOpen(false)} />
            <Link href="/devenir-mannequin" onClick={() => setOpen(false)}>
              <button className="w-full mt-6 px-6 py-3 rounded-full font-bold bg-or text-noir shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-or focus:outline-none focus:ring-2 focus:ring-or focus:ring-offset-2 cta-glow">
                Devenir Mannequin
              </button>
            </Link>
          </div>
        </div>
      )}
      <style jsx global>{`
        .cta-glow:hover {
          background: linear-gradient(90deg, #D4AF37 0%, #f7d774 100%);
          box-shadow: 0 0 16px 2px #D4AF3788;
        }
        .nav-link {
          position: relative;
          transition: color 0.2s;
        }
        .nav-link:after {
          content: '';
          display: block;
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px;
          background: #D4AF37;
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .nav-link:hover:after, .nav-link.active:after {
          transform: scaleX(1);
        }
        .nav-link:hover, .nav-link.active {
          color: #D4AF37;
        }
        .badge-evt {
          background: #D4AF37;
          color: #fff;
          font-size: 0.7rem;
          border-radius: 8px;
          padding: 2px 8px;
          margin-left: 8px;
          animation: blink 1.5s infinite alternate;
        }
        @keyframes blink {
          0% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ href, label, icon, badge, dropdown, filter, mobile, onClick }) {
  return (
    <Link href={href} onClick={onClick} className={`nav-link flex items-center gap-1 font-semibold text-lg px-3 py-2 transition-colors ${mobile ? "text-noir" : "text-noir"}`}>
      {icon === "photo" && (
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
      )}
      {icon === "mail" && (
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><polyline points="22,6 12,13 2,6" /></svg>
      )}
      {label}
      {badge && <span className="badge-evt">Événement</span>}
      {dropdown && !mobile && (
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
      )}
      {filter && !mobile && (
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" /><path d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" /></svg>
      )}
    </Link>
  );
} 