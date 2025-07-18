"use client";

import React, { useState } from "react";

const goldMat = "#C9B037";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSent(false);
    setSent(true);
  }

  return (
    <section className="relative min-h-screen py-24 bg-black text-white overflow-hidden">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-center uppercase tracking-wide" style={{ color: goldMat }}>Contact</h1>
        <p className="mb-10 text-xl text-white/80 text-center font-serif italic">Une question, une demande de partenariat ou une envie de rejoindre l'agence ? Écrivez-nous !</p>
        <div className="bg-white/5 rounded-3xl shadow-2xl p-10 backdrop-blur-md border border-amber-200">
          {sent ? (
            <div className="bg-green-100 text-green-700 p-4 rounded mb-6 text-center text-lg font-bold">Votre message a bien été envoyé. Merci !</div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}
              <div>
                <label className="block mb-1 font-medium" style={{ color: goldMat }}>Nom *</label>
                <input name="nom" required className="w-full p-4 border border-amber-200 rounded-xl bg-black/30 text-white placeholder:text-amber-300" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block mb-1 font-medium" style={{ color: goldMat }}>Email *</label>
                <input name="email" type="email" required className="w-full p-4 border border-amber-200 rounded-xl bg-black/30 text-white placeholder:text-amber-300" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block mb-1 font-medium" style={{ color: goldMat }}>Message *</label>
                <textarea name="message" required className="w-full p-4 border border-amber-200 rounded-xl bg-black/30 text-white placeholder:text-amber-300" rows={5} placeholder="Votre message..." />
              </div>
              <button type="submit" className="w-full py-4 text-2xl rounded-full font-bold shadow-lg hover:bg-amber-500 transition-colors uppercase tracking-wider" style={{ background: goldMat, color: '#222' }}>Envoyer</button>
            </form>
          )}
          <div className="mt-12 text-white/80 text-sm text-center">
            <div><b>Email :</b> <a href="mailto:perfectmodels.ga@gmail.com" className="underline" style={{ color: goldMat }}>perfectmodels.ga@gmail.com</a></div>
            <div className="mt-2"><b>Instagram :</b> <a href="https://www.instagram.com/perfectmodels.ga/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: goldMat }}>@perfectmodels.ga</a></div>
            <div className="mt-2"><b>Facebook :</b> <a href="https://www.facebook.com/perfectmodels.ga" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: goldMat }}>perfectmodels.ga</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
