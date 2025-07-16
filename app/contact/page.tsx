"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section className="py-24 bg-gris text-noir min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-or drop-shadow-xl uppercase tracking-wide text-center">Contact</h1>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-or mb-4">Coordonnées</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><Mail className="text-or" /> contact@perfectmodels.ga</li>
                <li className="flex items-center gap-3"><Phone className="text-or" /> +241 07 00 00 00</li>
                <li className="flex items-center gap-3"><MapPin className="text-or" /> Libreville, Gabon</li>
              </ul>
            </div>
            <form className="bg-blanc rounded-2xl p-8 shadow-md flex flex-col gap-6">
              <input type="text" placeholder="Nom & Prénom" className="p-4 rounded-md border border-gris bg-gris/50 text-noir" required />
              <input type="email" placeholder="Adresse e-mail" className="p-4 rounded-md border border-gris bg-gris/50 text-noir" required />
              <textarea placeholder="Votre message" rows={5} className="p-4 rounded-md border border-gris bg-gris/50 text-noir" required />
              <button type="submit" className="bg-or text-noir font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-or focus:outline-none focus:ring-2 focus:ring-or focus:ring-offset-2 cta-glow">Envoyer</button>
            </form>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=9.454,0.390,9.464,0.400&amp;layer=mapnik"
              className="w-full h-64 border-0"
              allowFullScreen
              loading="lazy"
              title="Carte Libreville"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
