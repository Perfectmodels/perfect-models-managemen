import React from "react";

const goldMat = "#C9B037";

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6" style={{ color: goldMat }}>Politique de confidentialité</h1>
        <p className="mb-4 text-lg text-white/80">Perfect Models Management accorde une grande importance à la protection de vos données personnelles. Voici comment nous traitons vos informations :</p>
        <ul className="list-disc pl-6 space-y-2 text-white/80">
          <li>Les données collectées via le formulaire sont utilisées uniquement pour l’étude et la gestion des candidatures.</li>
          <li>Vos informations ne sont jamais revendues ni partagées à des tiers extérieurs à l’agence.</li>
          <li>Vous pouvez demander la modification ou la suppression de vos données à tout moment en nous contactant.</li>
          <li>Les données sont stockées de manière sécurisée sur nos serveurs et ceux de nos prestataires (ex : Supabase).</li>
          <li>En cas de question sur la confidentialité, contactez-nous à <a href="mailto:perfectmodels.ga@gmail.com" className="underline" style={{ color: goldMat }}>perfectmodels.ga@gmail.com</a>.</li>
        </ul>
        <p className="mt-8 text-white/60 text-sm">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
      </div>
    </div>
  );
} 