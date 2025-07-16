"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSent(false);
    // Ici, vous pouvez intégrer l'envoi d'email ou l'API de contact
    setSent(true);
  }

  return (
    <div className="max-w-2xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-amber-700">Contact</h1>
      <p className="mb-8 text-lg text-neutral-700">Une question, une demande de partenariat ou une envie de rejoindre l'agence ? Écrivez-nous !</p>
      {sent ? (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-6">Votre message a bien été envoyé. Merci !</div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}
          <div>
            <label className="block mb-1 font-medium">Nom *</label>
            <input name="nom" required className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email *</label>
            <input name="email" type="email" required className="w-full p-3 border border-neutral-300 rounded-md" placeholder="votre@email.com" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message *</label>
            <textarea name="message" required className="w-full p-3 border border-neutral-300 rounded-md" rows={5} placeholder="Votre message..." />
          </div>
          <button type="submit" className="w-full bg-black hover:bg-neutral-800 text-white py-3 text-lg rounded">Envoyer</button>
        </form>
      )}
      <div className="mt-12 text-neutral-600 text-sm">
        <div><b>Email :</b> <a href="mailto:perfectmodels.ga@gmail.com" className="text-amber-600 underline">perfectmodels.ga@gmail.com</a></div>
        <div className="mt-2"><b>Instagram :</b> <a href="https://www.instagram.com/perfectmodels.ga/" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">@perfectmodels.ga</a></div>
        <div className="mt-2"><b>Facebook :</b> <a href="https://www.facebook.com/perfectmodels.ga" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">perfectmodels.ga</a></div>
      </div>
    </div>
  );
}
