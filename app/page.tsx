"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center bg-beige text-noir overflow-hidden">
        <Image
          src="/background (1).jpg"
          alt="Hero"
          fill
          className="object-cover object-center opacity-40 pointer-events-none select-none"
          priority
        />
        <div className="relative z-10 text-center py-32 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-or drop-shadow-xl uppercase tracking-wide">
            L'excellence a un visage
          </h1>
          <p className="mb-10 text-2xl md:text-3xl text-noir/80 font-serif italic max-w-2xl mx-auto">
            L'élégance, la diversité et le professionnalisme au service de la mode et de la publicité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mannequins">
              <button className="bg-or text-noir font-bold px-10 py-4 rounded-full text-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-or focus:outline-none focus:ring-2 focus:ring-or focus:ring-offset-2 cta-glow">
                Découvrir nos Mannequins
              </button>
            </Link>
            <Link href="/devenir-mannequin">
              <button className="bg-noir text-or font-bold px-10 py-4 rounded-full text-xl shadow-lg hover:bg-or hover:text-noir hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-or focus:outline-none focus:ring-2 focus:ring-or focus:ring-offset-2">
                Devenir Mannequin
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-24 bg-blanc text-noir">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-or">L'agence de référence au Gabon</h2>
          <p className="text-xl text-noir/80 mb-8">
            Perfect Models Management est une agence de mannequins et de talents spécialisée dans la mode, la publicité et l’événementiel. Nous révélons, formons et accompagnons les talents d’aujourd’hui et de demain.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
            <div className="flex-1 bg-gris rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-or">+50 mannequins</h3>
              <p className="text-noir/70">Sélectionnés pour leur professionnalisme, leur charisme et leur diversité.</p>
            </div>
            <div className="flex-1 bg-gris rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-or">Casting & Formation</h3>
              <p className="text-noir/70">Un accompagnement sur-mesure pour révéler le potentiel de chaque talent.</p>
            </div>
            <div className="flex-1 bg-gris rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-or">Événementiel</h3>
              <p className="text-noir/70">Organisation de défilés, shootings, campagnes et événements de prestige.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-beige text-noir">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-or text-center">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-blanc rounded-2xl p-8 shadow-md flex flex-col items-center">
              <Image src="/icons/service-mannequin.svg" alt="Mannequins" width={60} height={60} className="mb-4" />
              <h3 className="text-xl font-bold mb-2 text-or">Mannequins & Talents</h3>
              <p className="text-noir/70 text-center">Mise à disposition de mannequins professionnels pour vos projets mode, pub, événementiel.</p>
            </div>
            <div className="bg-blanc rounded-2xl p-8 shadow-md flex flex-col items-center">
              <Image src="/icons/service-formation.svg" alt="Formation" width={60} height={60} className="mb-4" />
              <h3 className="text-xl font-bold mb-2 text-or">Casting & Formation</h3>
              <p className="text-noir/70 text-center">Organisation de castings, coaching, formation à la prise de parole, au défilé, à la photo.</p>
            </div>
            <div className="bg-blanc rounded-2xl p-8 shadow-md flex flex-col items-center">
              <Image src="/icons/service-evenement.svg" alt="Événementiel" width={60} height={60} className="mb-4" />
              <h3 className="text-xl font-bold mb-2 text-or">Événementiel</h3>
              <p className="text-noir/70 text-center">Défilés, shootings, campagnes, organisation d’événements mode et corporate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 bg-gris text-noir">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-or">Ils nous font confiance</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-blanc rounded-2xl p-8 shadow-md">
              <p className="italic text-noir/80 mb-4">“Une équipe professionnelle, à l’écoute et passionnée. Merci pour l’accompagnement !”</p>
              <div className="font-bold text-or">Mirabelle</div>
              <div className="text-noir/60 text-sm">Miss Tourisme</div>
            </div>
            <div className="bg-blanc rounded-2xl p-8 shadow-md">
              <p className="italic text-noir/80 mb-4">“Grâce à Perfect Models, j’ai pu défiler pour de grandes marques et progresser rapidement.”</p>
              <div className="font-bold text-or">Pablo</div>
              <div className="text-noir/60 text-sm">Mannequin Homme</div>
            </div>
            <div className="bg-blanc rounded-2xl p-8 shadow-md">
              <p className="italic text-noir/80 mb-4">“Un vivier de talents et une vraie famille. Je recommande à 100 % !”</p>
              <div className="font-bold text-or">Noemi Kim</div>
              <div className="text-noir/60 text-sm">Mannequin Femme</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16 bg-blanc text-noir">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-or">Ils nous soutiennent</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image src="/logo-pmm.png" alt="Logo PMM" width={80} height={80} className="opacity-80" />
            <Image src="/Affiche.png" alt="Affiche" width={80} height={80} className="opacity-80" />
            <Image src="/Brand'O.jpg" alt="Brand'O" width={80} height={80} className="opacity-80" />
            <Image src="/La Gare Du Nord.jpg" alt="La Gare Du Nord" width={80} height={80} className="opacity-80" />
            <Image src="/Sabo Fashion.jpg" alt="Sabo Fashion" width={80} height={80} className="opacity-80" />
            {/* Ajoute d'autres logos partenaires ici */}
          </div>
        </div>
      </section>
      <style jsx global>{`
        .cta-glow:hover {
          background: linear-gradient(90deg, #D4AF37 0%, #f7d774 100%);
          box-shadow: 0 0 16px 2px #D4AF3788;
        }
      `}</style>
    </main>
  );
}
