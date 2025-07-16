import React from "react";

export default function AgencePage() {
  return (
    <section className="relative min-h-screen py-32 bg-gradient-to-br from-black via-neutral-900 to-amber-900/80 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 drop-shadow-xl text-amber-300 uppercase tracking-wide text-center">L’Agence</h1>
        <div className="bg-white/10 rounded-3xl shadow-2xl p-10 backdrop-blur-md border border-amber-200">
          <p className="text-xl text-amber-100 font-serif italic mb-6 text-center">
            Depuis 2021, Perfect Models Management s’impose comme une référence du mannequinat au Gabon et en Afrique centrale. Notre équipe accompagne les talents, organise des événements majeurs et collabore avec les plus grands noms de la mode.
          </p>
          <ul className="text-amber-200 text-lg space-y-4 mb-8">
            <li>• Sélection rigoureuse des mannequins</li>
            <li>• Accompagnement personnalisé</li>
            <li>• Partenariats avec stylistes, marques et médias</li>
            <li>• Organisation de défilés, castings, shootings</li>
            <li>• Promotion de la mode et de la culture gabonaise</li>
          </ul>
          <p className="text-amber-200 text-center">Rejoignez l’aventure Perfect Models Management !</p>
        </div>
        </div>
      </section>
  );
}
