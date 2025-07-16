"use client";

import React, { useState } from "react";

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
    <section className="relative min-h-screen py-32 bg-gradient-to-br from-black via-neutral-900 to-amber-900/80 text-white overflow-hidden">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 drop-shadow-xl text-amber-300 uppercase tracking-wide text-center">Contact</h1>
        <p className="mb-10 text-xl text-amber-100 text-center font-serif italic">Une question, une demande de partenariat ou une envie de rejoindre l'agence ? Écrivez-nous !</p>
        <div className="bg-white/10 rounded-3xl shadow-2xl p-10 backdrop-blur-md border border-amber-200">
          {sent ? (
            <div className="bg-green-100 text-green-700 p-4 rounded mb-6 text-center text-lg font-bold">Votre message a bien été envoyé. Merci !</div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}
              <div>
                <label className="block mb-1 font-medium text-amber-200">Nom *</label>
                <input name="nom" required className="w-full p-4 border border-amber-200 rounded-xl bg-black/30 text-white placeholder:text-amber-300" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block mb-1 font-medium text-amber-200">Email *</label>
                <input name="email" type="email" required className="w-full p-4 border border-amber-200 rounded-xl bg-black/30 text-white placeholder:text-amber-300" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block mb-1 font-medium text-amber-200">Message *</label>
                <textarea name="message" required className="w-full p-4 border border-amber-200 rounded-xl bg-black/30 text-white placeholder:text-amber-300" rows={5} placeholder="Votre message..." />
              </div>
              <button type="submit" className="w-full bg-amber-400 text-black py-4 text-2xl rounded-full font-bold shadow-lg hover:bg-amber-500 transition-colors uppercase tracking-wider">Envoyer</button>
            </form>
          )}
          <div className="mt-12 text-amber-200 text-sm text-center">
            <div><b>Email :</b> <a href="mailto:perfectmodels.ga@gmail.com" className="text-amber-400 underline">perfectmodels.ga@gmail.com</a></div>
            <div className="mt-2"><b>Instagram :</b> <a href="https://www.instagram.com/perfectmodels.ga/" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">@perfectmodels.ga</a></div>
            <div className="mt-2"><b>Facebook :</b> <a href="https://www.facebook.com/perfectmodels.ga" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">perfectmodels.ga</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
