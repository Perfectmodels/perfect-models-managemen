import Image from "next/image";

export default function AgencePage() {
  return (
    <main>
      <section className="py-24 bg-blanc text-noir">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-or drop-shadow-xl uppercase tracking-wide">Notre Agence</h1>
          <p className="text-xl text-noir/80 mb-12 max-w-2xl mx-auto">
            Depuis plus de 10 ans, Perfect Models Management s’impose comme la référence du mannequinat et de la gestion de talents au Gabon. Notre mission : révéler, former et accompagner les talents d’aujourd’hui et de demain.
          </p>
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="bg-gris rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-2 text-or">Historique</h3>
              <p className="text-noir/70">Créée en 2012, l’agence a accompagné plus de 200 talents et organisé de nombreux événements de prestige.</p>
            </div>
            <div className="bg-gris rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-2 text-or">Vision</h3>
              <p className="text-noir/70">Promouvoir l’excellence, la diversité et l’éthique dans le monde de la mode et de la publicité.</p>
            </div>
            <div className="bg-gris rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-2 text-or">Valeurs</h3>
              <p className="text-noir/70">Respect, professionnalisme, accompagnement personnalisé et rayonnement international.</p>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-or">Notre Équipe</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="bg-blanc rounded-2xl p-6 shadow-md flex flex-col items-center w-64">
              <Image src="/flora.jpg" alt="Directrice" width={100} height={100} className="rounded-full mb-4 object-cover" />
              <div className="font-bold text-lg text-noir">Flora M.</div>
              <div className="text-or text-sm mb-2">Directrice</div>
              <p className="text-noir/70 text-sm">Fondatrice, coach et formatrice, passionnée par la valorisation des talents africains.</p>
            </div>
            <div className="bg-blanc rounded-2xl p-6 shadow-md flex flex-col items-center w-64">
              <Image src="/rosnel.jpg" alt="Responsable Casting" width={100} height={100} className="rounded-full mb-4 object-cover" />
              <div className="font-bold text-lg text-noir">Rosnel D.</div>
              <div className="text-or text-sm mb-2">Responsable Casting</div>
              <p className="text-noir/70 text-sm">Expert du recrutement et du suivi des mannequins, il accompagne chaque talent dans son évolution.</p>
            </div>
            {/* Ajoute d'autres membres de l'équipe ici */}
          </div>
        </div>
      </section>
    </main>
  );
}
