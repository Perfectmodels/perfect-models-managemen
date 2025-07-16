import Image from "next/image";

const photos = [
  "/flora.jpg", "/flora2.jpg", "/flora3.jpg", "/flora4.jpg", "/flora5.jpg",
  "/mirabelle.jpg", "/mirabelle2.jpg", "/noemi.jpg", "/noemi2.jpg", "/noemi3.jpg",
  "/stecy.jpg", "/stecy2.jpg", "/stecy3.jpg", "/stecy4.jpg",
  "/rosnel.jpg", "/rosnel2.jpg", "/rosnel3.jpg",
  // Ajoute d'autres photos ici
];

export default function PortfolioPage() {
  return (
    <main>
      {/* Titre + intro */}
      <section className="py-24 bg-gris text-noir min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-or drop-shadow-xl uppercase tracking-wide text-center">Portfolio</h1>
          <p className="text-xl text-noir/80 mb-12 text-center">Découvrez nos réalisations, shootings et défilés à travers une sélection de photos de nos talents en action.</p>
          {/* Grille de photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {photos.map((src, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden shadow-lg bg-blanc cursor-pointer">
                <Image src={src} alt={`Portfolio ${i + 1}`} width={400} height={500} className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-noir/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-or text-lg font-bold">Voir</span>
                </div>
              </div>
            ))}
          </div>
          {/* CTA en bas */}
          <div className="text-center mt-12">
            <a href="/contact" className="inline-block bg-or text-noir font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-or focus:outline-none focus:ring-2 focus:ring-or focus:ring-offset-2">Collaborer avec nous</a>
          </div>
        </div>
      </section>
    </main>
  );
}
