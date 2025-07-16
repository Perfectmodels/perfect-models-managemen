"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function EvaluationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/evaluation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        setError(err.error || "Erreur lors de l'envoi. Veuillez réessayer plus tard.");
        setLoading(false);
        return;
      }
      setSubmitted(true);
    } catch (e) {
      setError("Erreur réseau ou serveur. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-24 flex items-center justify-center">
      <Card className="max-w-lg w-full p-8 border-0 shadow-lg">
        {submitted ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-amber-600 mb-4">Merci !</h2>
            <p className="text-lg text-neutral-700 mb-4">Votre demande d'évaluation gratuite a bien été envoyée.</p>
            <p className="text-neutral-500">Notre équipe vous contactera sous 48h pour un retour personnalisé.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-black mb-6 text-center">Évaluation Gratuite</h1>
            {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Prénom *</label>
                <Input name="prenom" placeholder="Votre prénom" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Nom *</label>
                <Input name="nom" placeholder="Votre nom" required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                <Input name="email" type="email" placeholder="votre@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Téléphone *</label>
                <Input name="telephone" type="tel" placeholder="+241 XX XX XX XX" required />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Âge *</label>
                <Input name="age" type="number" placeholder="25" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Taille (cm) *</label>
                <Input name="taille" type="number" placeholder="175" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Genre *</label>
                <select
                  name="genre"
                  className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="femme">Femme</option>
                  <option value="homme">Homme</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Motivation</label>
              <textarea
                name="motivation"
                className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                rows={3}
                placeholder="Pourquoi souhaitez-vous devenir mannequin ?"
              ></textarea>
            </div>
            <Button className="w-full bg-black hover:bg-neutral-800 text-white py-4 text-lg" disabled={loading}>
              {loading ? "Envoi en cours..." : (<><span>Envoyer mon évaluation</span><ArrowRight className="ml-2 h-5 w-5" /></>)}
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
} 