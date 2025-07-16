export default function EvaluationPage() {
  return (
    <main>
      <section className="py-24 bg-blanc text-noir min-h-screen">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-or drop-shadow-xl uppercase tracking-wide text-center">Évaluation</h1>
          <form className="bg-gris/40 rounded-2xl p-8 shadow-md flex flex-col gap-6">
            <label className="text-lg font-bold text-or">Pourquoi souhaitez-vous devenir mannequin ?</label>
            <textarea className="p-4 rounded-md border border-or bg-blanc text-noir" rows={4} required />
            <label className="text-lg font-bold text-or">Avez-vous déjà une expérience dans la mode ?</label>
            <textarea className="p-4 rounded-md border border-or bg-blanc text-noir" rows={4} required />
            <button type="submit" className="bg-or text-noir font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-or focus:outline-none focus:ring-2 focus:ring-or focus:ring-offset-2 cta-glow">Envoyer</button>
          </form>
        </div>
      </section>
    </main>
  );
} 