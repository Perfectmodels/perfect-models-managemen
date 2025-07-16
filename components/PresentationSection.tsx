"use client";
import { Briefcase, Users, Star, Calendar } from "lucide-react";

export default function PresentationSection() {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-black/60 to-amber-900/40 pointer-events-none z-0" />
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-xl text-amber-300 uppercase tracking-wide">
          Perfect Models Management
        </h2>
        <p className="text-2xl text-amber-100 mb-12 max-w-3xl mx-auto font-serif italic drop-shadow">
          Depuis 2021, nous révélons et accompagnons les talents du mannequinat au Gabon et en Afrique. Notre agence, c’est une équipe passionnée, des mannequins d’exception, des partenaires engagés et des événements de référence.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div className="flex flex-col items-center bg-white/10 rounded-2xl shadow-lg p-6 backdrop-blur-md border border-amber-200">
            <Briefcase className="h-12 w-12 text-amber-400 mb-2 drop-shadow" />
            <span className="text-3xl font-extrabold text-amber-100">2021</span>
            <span className="text-base text-amber-200 mt-1">Année de création</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 rounded-2xl shadow-lg p-6 backdrop-blur-md border border-amber-200">
            <Users className="h-12 w-12 text-amber-400 mb-2 drop-shadow" />
            <span className="text-3xl font-extrabold text-amber-100">20+</span>
            <span className="text-base text-amber-200 mt-1">Mannequins</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 rounded-2xl shadow-lg p-6 backdrop-blur-md border border-amber-200">
            <Star className="h-12 w-12 text-amber-400 mb-2 drop-shadow" />
            <span className="text-3xl font-extrabold text-amber-100">15+</span>
            <span className="text-base text-amber-200 mt-1">Partenariats</span>
          </div>
          <div className="flex flex-col items-center bg-white/10 rounded-2xl shadow-lg p-6 backdrop-blur-md border border-amber-200">
            <Calendar className="h-12 w-12 text-amber-400 mb-2 drop-shadow" />
            <span className="text-3xl font-extrabold text-amber-100">30+</span>
            <span className="text-base text-amber-200 mt-1">Événements</span>
          </div>
        </div>
        <a href="/agence" className="inline-block mt-6 bg-amber-400 text-black px-10 py-4 rounded-full text-2xl font-bold shadow-lg hover:bg-amber-500 transition-colors uppercase tracking-wider">
          Voir plus
        </a>
      </div>
    </section>
  );
} 