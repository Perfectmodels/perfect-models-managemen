import React from "react";
import Image from "next/image";

const mannequins = [
  { name: "Ruth Jussy", image: "/ruth.jpg", distinctions: "Meilleur Mannequin Espoir du Gabon, Miss Tourisme Ogooué-Maritime" },
  { name: "Kendra Mebiame", image: "/kendra.jpg", distinctions: "Mannequin, Meilleur Mannequin Espoir du Gabon 2022" },
  { name: "Nynelle Mbazoghe", image: "/nynelle.jpg", distinctions: "Première dauphine Miss Casino Croisette, Femmes Actives du Gabon" },
  { name: "Noémie Kim", image: "/noemi.jpg", distinctions: "Mannequin phare, ambassadrice Racines & Modernité" },
];

export default function MannequinsPage() {
  return (
    <section className="relative min-h-screen py-32 bg-gradient-to-br from-black via-neutral-900 to-amber-900/80 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-14 drop-shadow-xl text-amber-300 uppercase tracking-wide text-center">Nos Mannequins</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {mannequins.map((model, idx) => (
            <div key={idx} className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-amber-200 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <div className="relative h-80">
                <Image src={model.image} alt={model.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <span className="absolute top-4 left-4 z-20 bg-amber-400 text-black px-4 py-1 rounded-full text-xs font-bold uppercase shadow-lg">Talent</span>
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold mb-2 text-amber-100 drop-shadow">{model.name}</h3>
                <p className="text-amber-200 mb-2 text-base italic font-serif">{model.distinctions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
