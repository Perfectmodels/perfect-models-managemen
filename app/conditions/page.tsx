import React from "react";

const goldMat = "#C9B037";

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6" style={{ color: goldMat }}>Conditions d'utilisation</h1>
        <p className="mb-4 text-lg text-white/80">Bienvenue sur le site de Perfect Models Management. En utilisant ce site et en soumettant votre candidature, vous acceptez les conditions suivantes :</p>
        <ul className="list-disc pl-6 space-y-2 text-white/80">
          <li>Les informations fournies dans le formulaire doivent être exactes et vérifiables.</li>
          <li>La candidature ne garantit pas une sélection automatique au sein de l’agence.</li>
          <li>Les données transmises sont utilisées uniquement dans le cadre du processus de recrutement et de gestion des candidatures.</li>
          <li>Perfect Models Management se réserve le droit de modifier ou d’interrompre le processus de sélection à tout moment.</li>
          <li>Tout contenu inapproprié ou frauduleux entraînera le rejet immédiat de la candidature.</li>
          <li>En cas de sélection, le/la candidat(e) s’engage à respecter le règlement intérieur de l’agence.</li>
        </ul>
        <p className="mt-8 text-white/60 text-sm">Pour toute question, contactez-nous à <a href="mailto:perfectmodels.ga@gmail.com" className="underline" style={{ color: goldMat }}>perfectmodels.ga@gmail.com</a>.</p>
      </div>
    </div>
  );
} 