"use client";
import { Briefcase, Users, Star, Calendar } from "lucide-react";

export default function PresentationSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-neutral-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Perfect Models Management en bref</h2>
        <p className="text-lg text-neutral-700 mb-10 max-w-2xl mx-auto">
          Depuis 2021, nous révélons et accompagnons les talents du mannequinat au Gabon et en Afrique. Notre agence, c’est une équipe passionnée, des mannequins d’exception, des partenaires engagés et des événements de référence.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <Briefcase className="h-10 w-10 text-amber-500 mb-2" />
            <span className="text-2xl font-bold text-black">2021</span>
            <span className="text-sm text-neutral-600">Année de création</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-10 w-10 text-amber-500 mb-2" />
            <span className="text-2xl font-bold text-black">20+</span>
            <span className="text-sm text-neutral-600">Mannequins</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="h-10 w-10 text-amber-500 mb-2" />
            <span className="text-2xl font-bold text-black">15+</span>
            <span className="text-sm text-neutral-600">Partenariats</span>
          </div>
          <div className="flex flex-col items-center">
            <Calendar className="h-10 w-10 text-amber-500 mb-2" />
            <span className="text-2xl font-bold text-black">30+</span>
            <span className="text-sm text-neutral-600">Événements</span>
          </div>
        </div>
        <a href="/agence" className="inline-block mt-4 bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-neutral-800 transition-colors">Voir plus</a>
      </div>
    </section>
  );
} 