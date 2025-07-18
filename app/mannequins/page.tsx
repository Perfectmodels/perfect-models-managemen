import React from "react";
import Image from "next/image";

const goldMat = "#C9B037";

const mannequins = [
  { name: "Ruth Jussy", image: "/ruth.jpg", distinctions: "Meilleur Mannequin Espoir du Gabon, Miss Tourisme Ogooué-Maritime" },
  { name: "Kendra Mebiame", image: "/kendra.jpg", distinctions: "Mannequin, Meilleur Mannequin Espoir du Gabon 2022" },
  { name: "Nynelle Mbazoghe", image: "/nynelle.jpg", distinctions: "Première dauphine Miss Casino Croisette, Femmes Actives du Gabon" },
  { name: "Noémie Kim", image: "/noemi.jpg", distinctions: "Mannequin phare, ambassadrice Racines & Modernité" },
];

const repertoire = [
  ["Akoma Ayo Rosnel", "Rosnelakomaayo8@gmail.com", "066821555", "23", "1m90", "H", "Charbonnage"],
  ["Medame Mba Mirabelle", "mirabellemedame@gmail.com", "062285568", "27", "1m77", "F", "Nzeng-Ayong"],
  ["NYAMETE TOWENE Ruth Jussy", "Jussynyamete@gmail.com", "062445965", "21", "1m77", "F", "PG2"],
  ["Benga Eneme Désirée Sadia Christelle", "Laurekim7@icloud.com", "062-22480", "22", "1m68", "F", "Alibandeng"],
  ["Okamba Pembe Annie Flora", "Okambaflora123@gmail.com", "077855329", "24", "1m78", "F", "Awoungou"],
  ["Moussogou Mandoukou Ruth", "ruthfastia@hotmail.fr", "074334902", "32", "1m65", "F", "PK9"],
  ["Meyie Edzo Alexandrine", "meyiealexandrine8@gmail.com", "074701611", "25", "1m70", "F", "Angondje Château"],
  ["Mekui M'Essono Lea Daniel", "essonolea3@gmail.com", "076204557", "20", "1m76", "F", "Ondogo"],
  ["Mbazoghe Bekale Latifa Nynelle", "mbazoghelatifa@gmail.com", "062091558", "21", "À corriger", "F", "Belle Vue 2"],
  ["Olery N’Negue Obame Triphène Venusia Denise", "venusia.oolery@icloud.com", "074033441", "19", "1m75", "F", "Château d’Angondjé – Cap Caravane"],
  ["Bonoukpo Anani Donatien", "donatienboni10@gmail.com", "066911306", "27", "1m84", "H", "Ozangué"],
  ["Moussavou Darlyne Patchelie", "darlynepatcheliem@gmail.com", "066976707/074681429", "23", "1m75", "F", "Cocotier"],
  ["Pambou Dihiba Aimée Jeanlicia", "jeanliciadihiba@gmail.com", "062882465", "19", "1m65", "F", "IAI"],
  ["Akouressila Ntoumtoume Mell Ornédia", "mellnghoua1@gmail.com", "066938056", "24", "1m74", "F", "Nkembo"],
  ["Nzengue Rouchelle Sylverna Nicole", "nzenguerouchelle@gmail.com", "066817242", "23", "1m70", "F", "Chantier Moderne"],
  ["Okome Houssa Sephora Nawelle", "Annabiloghesawaya@gmail.com", "074701548", "21", "1m78", "F", "Charbonnage"],
  ["Niel-Merveille Aworet", "Nielmerveilleaworet@icloud.com", "062724441", "18", "1m75", "F", "Betsaïda"],
];

export default function MannequinsPage() {
  return (
    <section className="relative min-h-screen py-16 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-center uppercase tracking-wide" style={{ color: goldMat }}>Nos Mannequins</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {mannequins.map((model, idx) => (
            <div key={idx} className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-amber-200 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <div className="relative h-80">
                <Image src={model.image} alt={model.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <span className="absolute top-4 left-4 z-20 px-4 py-1 rounded-full text-xs font-bold uppercase shadow-lg" style={{ background: goldMat, color: '#222' }}>Talent</span>
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold mb-2" style={{ color: goldMat }}>{model.name}</h3>
                <p className="text-white mb-2 text-base italic font-serif">{model.distinctions}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Répertoire extrait */}
        <div className="bg-white/5 rounded-3xl shadow-xl p-8 md:p-12 border border-amber-200 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: goldMat }}>Répertoire Mannequins (Extrait)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-white border-separate border-spacing-y-2">
              <thead>
                <tr style={{ background: goldMat, color: '#222' }}>
                  <th className="px-3 py-2 rounded-l-lg">Nom</th>
                  <th className="px-3 py-2">Email</th>
                  <th className="px-3 py-2">Téléphone</th>
                  <th className="px-3 py-2">Âge</th>
                  <th className="px-3 py-2">Taille</th>
                  <th className="px-3 py-2">Sexe</th>
                  <th className="px-3 py-2 rounded-r-lg">Quartier</th>
                </tr>
              </thead>
              <tbody>
                {repertoire.map((row, i) => (
                  <tr key={i} className="bg-black/60">
                    {row.map((cell, j) => (
                      <td key={j} className="px-3 py-2 border-b border-amber-900/40 text-center">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
