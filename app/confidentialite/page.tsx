import React from "react";

export default function ConfidentialitePage() {
  return (
    <main>
      <section className="py-24 bg-blanc text-noir min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-or drop-shadow-xl uppercase tracking-wide text-center">Politique de Confidentialité</h1>
          <div className="space-y-6 text-lg text-noir/80">
            <p>Nous attachons une grande importance à la protection de vos données personnelles. Les informations collectées via nos formulaires sont utilisées uniquement pour le traitement de votre demande ou candidature.</p>
            <p>Vos données ne sont jamais transmises à des tiers sans votre consentement. Vous pouvez demander la suppression ou la modification de vos informations à tout moment en nous contactant.</p>
            <p>Pour toute question relative à la confidentialité, contactez-nous à <b>contact@perfectmodels.ga</b>.</p>
          </div>
        </div>
      </section>
    </main>
  );
} 