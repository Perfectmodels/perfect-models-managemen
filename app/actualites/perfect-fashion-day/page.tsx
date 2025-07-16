import Image from "next/image";

export default function ActualitePerfectFashionDay() {
  return (
    <main>
      <section className="py-24 bg-beige text-noir min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block badge-evt text-base font-bold px-6 py-2 mb-4">Événement</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-or drop-shadow-xl uppercase tracking-wide text-center">Perfect Fashion Day - Actualités</h1>
          <Image src="/Affiche.png" alt="Affiche Perfect Fashion Day" width={400} height={500} className="mx-auto rounded-2xl shadow-lg mb-10" />
          <div className="space-y-6 text-lg text-noir/80">
            <p>Retrouvez toutes les actualités et annonces autour du Perfect Fashion Day, l’événement mode de l’année au Gabon !</p>
            <ul className="list-disc pl-6">
              <li>Défilés de créateurs locaux et internationaux</li>
              <li>Concours de jeunes talents</li>
              <li>Rencontres avec des professionnels de la mode</li>
              <li>Ateliers, masterclass et networking</li>
            </ul>
            <p>Restez connectés pour ne rien manquer des prochaines annonces !</p>
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
