import React from "react";

const goldMat = "#C9B037";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6" style={{ color: goldMat }}>Mentions légales</h1>
        <ul className="list-disc pl-6 space-y-2 text-white/80">
          <li><b>Éditeur du site :</b> Perfect Models Management</li>
          <li><b>Contact :</b> <a href="mailto:perfectmodels.ga@gmail.com" className="underline" style={{ color: goldMat }}>perfectmodels.ga@gmail.com</a></li>
          <li><b>Hébergement :</b> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
          <li><b>Responsable de la publication :</b> Direction de Perfect Models Management</li>
          <li><b>Propriété intellectuelle :</b> Tous les contenus (textes, images, logos) sont la propriété exclusive de Perfect Models Management ou de leurs auteurs respectifs.</li>
          <li><b>Utilisation des données :</b> Voir la <a href="/confidentialite" className="underline" style={{ color: goldMat }}>politique de confidentialité</a>.</li>
        </ul>
        <p className="mt-8 text-white/60 text-sm">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
      </div>
    </div>
  );
} 