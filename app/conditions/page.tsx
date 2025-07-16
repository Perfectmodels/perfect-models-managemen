import React from "react";

export default function ConditionsPage() {
  return (
    <main>
      <section className="py-24 bg-blanc text-noir min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-or drop-shadow-xl uppercase tracking-wide text-center">Conditions d’Utilisation</h1>
          <div className="space-y-6 text-lg text-noir/80">
            <p>En accédant à ce site, vous acceptez les présentes conditions d’utilisation. Le contenu du site est protégé par la législation sur la propriété intellectuelle.</p>
            <p>Il est interdit de reproduire, copier ou exploiter tout ou partie du site sans autorisation écrite préalable.</p>
            <p>Perfect Models Management se réserve le droit de modifier à tout moment les présentes conditions.</p>
            <p>Pour toute question, contactez-nous à <b>contact@perfectmodels.ga</b>.</p>
          </div>
        </div>
      </section>
    </main>
  );
} 