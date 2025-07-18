import React from "react";

const goldMat = "#C9B037"; // Doré mat

export default function AgencePage() {
  return (
    <section className="relative min-h-screen py-16 bg-black text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Titre principal */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-center uppercase tracking-wide" style={{ color: goldMat }}>
          Perfect Models Management
        </h1>
        {/* Présentation générale */}
        <div className="bg-white/5 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-amber-200">
          <h2 className="text-2xl font-bold mb-4" style={{ color: goldMat }}>Présentation Générale</h2>
          <p className="text-lg mb-4">
            Perfect Models Management (PMM) est une agence de mannequins hommes et femmes basée à Libreville (Gabon), fondée le 12 septembre 2021 par Parfait ASSEKO.<br/>
            Elle accompagne des talents dans la formation, le conseil, le placement (mode – défilé, catalogue, photo –, publicité, figuration TV/cinéma).
          </p>
        </div>
        {/* Palmarès Mode */}
        <div className="bg-white/5 rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-amber-200">
          <h2 className="text-2xl font-bold mb-4" style={{ color: goldMat }}>Palmarès Mode</h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            <li>Défilé Bye Bye Vacances (Alban Design)</li>
            <li>K’Elle POUR ELLE (Binette Bah Lendoye)</li>
            <li>Défilé Nouvelle Vision (Olga-O)</li>
            <li>Festival International des Talents d’Exception (STYLE Assoumatari)</li>
            <li>O’Fashion Évent – PMM</li>
            <li>After Work Fashion (Aristide Ogouliguende)</li>
            <li>Edele A 2022</li>
            <li>Pink Woman Show (Stecya Minkoue)</li>
            <li>FEMOGA (Angèle Epouta Créations)</li>
            <li>Musée Éphémère Iconique</li>
            <li>Fashionshowchou (Chouchou Lazare)</li>
            <li>Inauguration House Of Design – Mystic Création</li>
            <li>Festival de l’Indépendance</li>
            <li>Issée Fashion Show</li>
            <li className="italic">(L’agence participe à tous les événements phares du secteur depuis 2021)</li>
          </ul>
        </div>
        {/* Figuration & Collaboration Média */}
        <div className="bg-white/5 rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-amber-200">
          <h2 className="text-2xl font-bold mb-4" style={{ color: goldMat }}>Figuration & Collaboration Média</h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            <li>Clips vidéo : King Ben, Donzer, Orfee Lashka, Communauté Black, Petit Jesus International, Monsieur Oyone, Pléiade Gabon, Paf paf</li>
            <li>Shooting photo : Edele A, Tito Style, Vanella Fashion, Vi Design, Alban Design, Issée by Lita, Muni Design (Kenya), Maysah (Côte d’Ivoire), Angèle Epouta, Angelina Créations, Joha Fashion, Traxel (Dakar), Anicet Design, etc.</li>
          </ul>
        </div>
        {/* Partenaires Clés */}
        <div className="bg-white/5 rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-amber-200">
          <h2 className="text-2xl font-bold mb-4" style={{ color: goldMat }}>Partenaires Clés</h2>
          <p className="text-lg mb-2">Akile Tabarna, Chouchou Lazare, LB Design, Anice Design, Alban Design, OJ Fashion, Tito Style, Style Assoumatari, Christ’on Mode, Elamourima Création, Jessica Design, Les Kabas de Tamar, Le Pagne de Paris, K’Elle Collection, Vi-Design, Dimbu Van, Edele A, House Of Design / Mystic Création</p>
        </div>
        {/* Contacts */}
        <div className="bg-white/5 rounded-3xl shadow-xl p-8 md:p-12 border border-amber-200">
          <h2 className="text-2xl font-bold mb-4" style={{ color: goldMat }}>Contacts</h2>
          <ul className="text-lg space-y-1">
            <li>Email : <span className="text-white">perfectmodels.ga@gmail.com</span></li>
            <li>Téléphone : <span className="text-white">+241 074066461</span></li>
            <li>Site web : <a href="https://www.perfectmodels.ga" className="underline" style={{ color: goldMat }}>perfectmodels.ga</a></li>
            <li>Adresse : <span className="text-white">INDI HAIR, Avorbam (en face du CES)</span></li>
            <li>Facebook/Instagram : <span className="text-white">@Perfectmodels.Ga</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
