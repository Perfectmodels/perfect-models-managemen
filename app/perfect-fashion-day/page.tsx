"use client";

import Image from "next/image";
import Link from "next/link";

export default function PerfectFashionDayPage() {
  return (
    <main>
      {/* Badge événement + titre */}
      <section className="py-24 bg-beige text-noir min-h-screen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block badge-evt text-base font-bold px-6 py-2 mb-4">Événement</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-or drop-shadow-xl uppercase tracking-wide">Perfect Fashion Day</h1>
          {/* Affiche/visuel principal */}
          <Image src="/Affiche.png" alt="Affiche Perfect Fashion Day" width={400} height={500} className="mx-auto rounded-2xl shadow-lg mb-10" />
          {/* Programme (liste) */}
          <div className="bg-blanc rounded-2xl p-8 shadow-md mb-10">
            <h2 className="text-2xl font-bold text-or mb-4">Programme</h2>
            <ul className="text-noir/80 text-lg space-y-2">
              <li>• Défilés de mode</li>
              <li>• Concours de jeunes talents</li>
              <li>• Ateliers et masterclass</li>
              <li>• Remise de prix</li>
              <li>• Networking & cocktail</li>
            </ul>
          </div>
          {/* Infos pratiques + bouton inscription */}
          <div className="mb-10">
            <p className="text-lg text-noir/70 mb-4">Date : 31 janvier 2026</p>
            <p className="text-lg text-noir/70 mb-8">Lieu : Libreville, Gabon</p>
            <Link href="/perfect-fashion-day/pre-inscription">
              <button className="bg-or text-noir font-bold px-10 py-4 rounded-full text-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-or focus:outline-none focus:ring-2 focus:ring-or focus:ring-offset-2 cta-glow">
                S’inscrire à l’événement
              </button>
            </Link>
          </div>
        </div>
      </section>
      <style jsx global>{`
        .badge-evt {
          background: #D4AF37;
          color: #fff;
          font-size: 1rem;
          border-radius: 12px;
          padding: 4px 16px;
          animation: blink 1.5s infinite alternate;
        }
        @keyframes blink {
          0% { opacity: 1; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </main>
  );
}
