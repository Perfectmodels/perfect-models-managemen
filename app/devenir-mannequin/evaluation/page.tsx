export default function EvaluationPage() {
  const goldMat = "#C9B037";
  return (
    <main>
      <section className="py-24 bg-black text-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-center uppercase tracking-wide" style={{ color: goldMat }}>
            Évaluation & Candidature
          </h1>
          {/* Formulaire existant */}
          <form className="bg-white/5 rounded-2xl p-8 shadow-md flex flex-col gap-6 mb-12 border border-amber-200">
            <label className="text-lg font-bold" style={{ color: goldMat }}>Pourquoi souhaitez-vous devenir mannequin ?</label>
            <textarea className="p-4 rounded-md border border-amber-200 bg-black text-white" rows={4} required />
            <label className="text-lg font-bold" style={{ color: goldMat }}>Avez-vous déjà une expérience dans la mode ?</label>
            <textarea className="p-4 rounded-md border border-amber-200 bg-black text-white" rows={4} required />
            <button type="submit" className="bg-black text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2" style={{ background: goldMat, color: '#222' }}>Envoyer</button>
          </form>

          {/* Nouveau formulaire complet */}
          <form className="bg-white/5 rounded-2xl p-8 shadow-md flex flex-col gap-8 border border-amber-200">
            {/* A. Informations personnelles */}
            <h2 className="text-2xl font-bold mb-2" style={{ color: goldMat }}>A. Informations personnelles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Nom & prénom" required />
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Date de naissance" type="date" required />
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Âge" type="number" min="10" required />
              <select className="p-3 rounded border border-amber-200 bg-black text-white" required>
                <option>Genre</option>
                <option>Femme</option>
                <option>Homme</option>
                <option>Autre</option>
              </select>
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Ville & quartier de résidence" required />
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Adresse e-mail" type="email" required />
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Téléphone" required />
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Réseaux sociaux" />
            </div>
            {/* B. Informations physiques */}
            <h2 className="text-2xl font-bold mb-2" style={{ color: goldMat }}>B. Informations physiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Taille (cm)" required />
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Poids (kg)" required />
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Mensurations (poitrine/taille/hanches)" />
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Pointure" />
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Couleur des yeux" />
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Couleur des cheveux" />
              <select className="p-3 rounded border border-amber-200 bg-black text-white">
                <option>Cheveux</option>
                <option>Naturels</option>
                <option>Traités</option>
              </select>
              <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Tatouages ou piercings visibles ?" />
            </div>
            {/* C. Expérience & motivation */}
            <h2 className="text-2xl font-bold mb-2" style={{ color: goldMat }}>C. Expérience & motivation</h2>
            <textarea className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Avez-vous déjà eu une expérience en mannequinat ? (précisez)" rows={2} />
            <textarea className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Quels sont vos objectifs en tant que mannequin ?" rows={2} />
            <textarea className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Qu’est-ce qui vous motive à rejoindre Perfect Models Management ?" rows={2} />
            <select className="p-3 rounded border border-amber-200 bg-black text-white">
              <option>Disponible pour castings/événements le week-end ?</option>
              <option>Oui</option>
              <option>Non</option>
            </select>
            <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Parlez-vous d’autres langues que le français ? (précisez)" />
            {/* D. Mini quiz */}
            <h2 className="text-2xl font-bold mb-2" style={{ color: goldMat }}>D. Mini quiz – connaissances & motivation</h2>
            <ol className="list-decimal pl-6 space-y-2 text-base">
              <li>Pourquoi la ponctualité est-elle essentielle lors des castings et défilés ?
                <div className="flex flex-col gap-1 mt-1">
                  <label><input type="radio" name="q1" /> On a toujours un peu de marge</label>
                  <label><input type="radio" name="q1" /> Cela montre du professionnalisme et du respect</label>
                  <label><input type="radio" name="q1" /> C’est uniquement pour plaire à l'agence</label>
                </div>
              </li>
              <li>Que faites-vous si l’on vous demande de porter une tenue surprenante ou inhabituelle ?
                <div className="flex flex-col gap-1 mt-1">
                  <label><input type="radio" name="q2" /> J’obéis systématiquement</label>
                  <label><input type="radio" name="q2" /> J’en discute avec l’équipe si j’ai un malaise</label>
                  <label><input type="radio" name="q2" /> Je refuse, peu importe la raison</label>
                </div>
              </li>
              <li>Citez trois qualités indispensables chez un mannequin :
                <div className="flex flex-col gap-1 mt-1">
                  <input className="p-2 rounded border border-amber-200 bg-black text-white" placeholder="Qualité 1" />
                  <input className="p-2 rounded border border-amber-200 bg-black text-white" placeholder="Qualité 2" />
                  <input className="p-2 rounded border border-amber-200 bg-black text-white" placeholder="Qualité 3" />
                </div>
              </li>
              <li>Connaissez-vous la différence entre un shooting photo et un défilé de mode ?
                <div className="flex flex-col gap-1 mt-1">
                  <label><input type="radio" name="q4" /> Oui (expliquez brièvement)</label>
                  <label><input type="radio" name="q4" /> Non</label>
                  <input className="p-2 rounded border border-amber-200 bg-black text-white" placeholder="Explication" />
                </div>
              </li>
              <li>Comment réagissez-vous si on vous propose un casting payant par message privé sur Instagram ?
                <div className="flex flex-col gap-1 mt-1">
                  <label><input type="radio" name="q5" /> J’accepte si la rémunération est bonne</label>
                  <label><input type="radio" name="q5" /> Je contacte l’agence pour vérifier</label>
                  <label><input type="radio" name="q5" /> Je transmets mes papiers sans réfléchir</label>
                </div>
              </li>
              {/* ... (questions 6 à 20 à poursuivre de la même façon) ... */}
            </ol>
            {/* E. Documents à fournir */}
            <h2 className="text-2xl font-bold mb-2" style={{ color: goldMat }}>E. Documents à fournir</h2>
            <ul className="list-disc pl-6 space-y-1 text-base">
              <li>1 photo portrait récente (sans filtres)</li>
              <li>1 photo de plein pied (naturelle, debout)</li>
              <li>Pièce d’identité (scan ou photo)</li>
            </ul>
            {/* F. Déclaration sur l’honneur */}
            <h2 className="text-2xl font-bold mb-2" style={{ color: goldMat }}>F. Déclaration sur l’honneur</h2>
            <label className="flex items-center gap-2">
              <input type="checkbox" required />
              Je déclare que ces informations sont exactes
            </label>
            <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Date" type="date" />
            <input className="p-3 rounded border border-amber-200 bg-black text-white" placeholder="Signature (nom)" />
            <button type="submit" className="bg-black text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2" style={{ background: goldMat, color: '#222' }}>Envoyer la candidature</button>
          </form>
        </div>
      </section>
    </main>
  );
} 