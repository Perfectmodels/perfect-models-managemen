"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Model {
  name: string;
  image: string;
  category: string;
  height: string;
  age: string;
}

const models: Model[] = [
  {
    name: "Ruth Jussy",
    image: "/ruth.jpg",
    category: "Meilleur Mannequin Espoir du Gabon, Miss Tourisme Ogooué-Maritime,Deuxieme Dauphine Miss Tourisme Gabon, étoile montante de l'agence",
    height: "-",
    age: "-"
  },
  {
    name: "Kendra Mebiame",
    image: "/kendra.jpg",
    category: "Mannequin, Meilleur Mannequin Espoir du Gabon 2022 ",
    height: "-",
    age: "-"
  },
  {
    name: "Nynelle Mbazoghe",
    image: "/nynelle.jpg",
    category: "Première dauphine Miss Casino Croisette, active dans Femmes Actives du Gabon",
    height: "-",
    age: "-"
  },
  {
    name: "Noémie Kim",
    image: "/noemi.jpg",
    category: "Mannequin phare, ambassadrice Racines & Modernité, shootings et défilés",
    height: "-",
    age: "-"
  }
];

const ModelsSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-black via-neutral-900 to-amber-900/80 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-14 drop-shadow-xl text-amber-300 uppercase tracking-wide">
          Nos Mannequins
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {models.map((model, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-amber-200 backdrop-blur-md hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-80">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <span className="absolute top-4 left-4 z-20 bg-amber-400 text-black px-4 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
                  Talent
                </span>
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold mb-2 text-amber-100 drop-shadow">{model.name}</h3>
                <p className="text-amber-200 mb-2 text-base italic font-serif">{model.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/mannequins"
            className="bg-amber-400 text-black px-12 py-4 rounded-full text-2xl font-bold shadow-lg hover:bg-amber-500 transition-colors uppercase tracking-wider"
          >
            Découvrir tous nos mannequins
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
