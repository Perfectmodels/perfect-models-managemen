"use client";

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Upload, CheckCircle, Star, Users } from "lucide-react"
import Link from "next/link";
import { useState } from "react";

export default function DevenirMannequinPage() {
  const requirements = [
    "Âge minimum : 16 ans",
    "Taille minimum : 1m65 pour les femmes, 1m80 pour les hommes",
    "Motivation et professionnalisme",
    "Disponibilité pour les formations",
    "Présentation soignée",
  ]

  const process = [
    {
      step: "1",
      title: "Candidature en ligne",
      description: "Remplissez le formulaire et envoyez vos photos",
    },
    {
      step: "2",
      title: "Présélection",
      description: "Notre équipe étudie votre dossier sous 48h",
    },
    {
      step: "3",
      title: "Casting",
      description: "Rencontre physique dans nos locaux",
    },
    {
      step: "4",
      title: "Formation",
      description: "Programme de formation personnalisé",
    },
    {
      step: "5",
      title: "Intégration",
      description: "Bienvenue dans la famille Perfect Models",
    },
  ]

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/evaluation", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json();
        setError(err.error || "Erreur lors de l'envoi. Veuillez réessayer plus tard.");
        setLoading(false);
        return;
      }
      setSubmitted(true);
      form.reset();
    } catch (e) {
      setError("Erreur réseau ou serveur. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Rejoignez-nous</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Devenir <span className="text-amber-500">Mannequin</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Transformez votre passion en carrière professionnelle avec Perfect Models Management. Nous vous
              accompagnons vers l'excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Critères</Badge>
              <h2 className="text-4xl font-bold text-black mb-6">
                Avez-vous le <span className="text-amber-500">profil</span> ?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Découvrez si vous correspondez aux critères recherchés par notre agence pour intégrer notre sélection de
                mannequins professionnels.
              </p>

              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                    <span className="text-neutral-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 border-0 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-black">Évaluation Gratuite</h3>
                  <p className="text-neutral-600 mt-2">Découvrez votre potentiel en 5 minutes</p>
                </div>

                <Link href="/devenir-mannequin/evaluation" passHref legacyBehavior>
                  <Button className="w-full bg-black hover:bg-neutral-800 text-white mb-4">
                    Commencer l'Évaluation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <p className="text-sm text-neutral-500 text-center">
                  100% gratuit • Sans engagement • Réponse sous 48h
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Notre Processus</Badge>
            <h2 className="text-4xl font-bold text-black mb-6">
              5 étapes vers le <span className="text-amber-500">succès</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Un processus simple et transparent pour vous accompagner de la candidature à l'intégration
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Candidature</Badge>
            <h2 className="text-4xl font-bold text-black mb-6">
              Postulez <span className="text-amber-500">maintenant</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Remplissez ce formulaire pour commencer votre aventure avec Perfect Models Management
            </p>
          </div>

          <Card className="p-8 border-0 shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input name="prenom" placeholder="Votre prénom" required />
                </div>
                <div>
                  <Input name="nom" placeholder="Votre nom" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input name="email" type="email" placeholder="votre@email.com" required />
                </div>
                <div>
                  <Input name="telephone" type="tel" placeholder="+241 XX XX XX XX" required />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Input name="age" type="number" placeholder="25" required />
                </div>
                <div>
                  <Input name="taille" type="number" placeholder="175" required />
                </div>
                <div>
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
                <label className="block text-sm font-medium text-neutral-700 mb-2">Expérience</label>
                <textarea
                  name="experience"
                  className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  rows={3}
                  placeholder="Décrivez votre expérience dans le mannequinat (débutant accepté)"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Photos *</label>
                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center hover:border-amber-400 transition-colors">
                  <Upload className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                  <p className="text-neutral-600 mb-2">Glissez vos photos ici ou cliquez pour sélectionner</p>
                  <p className="text-sm text-neutral-500">
                    Minimum 3 photos : portrait, pied en cap, profil (JPG, PNG max 5MB chacune)
                  </p>
                  <input name="photos" type="file" accept="image/*" multiple required className="mt-4" />
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input name="cgu" type="checkbox" className="mt-1" required />
                <p className="text-sm text-neutral-600">
                  J'accepte les{" "}
                  <a href="#" className="text-amber-600 hover:underline">
                    conditions d'utilisation
                  </a>{" "}
                  et la{" "}
                  <a href="#" className="text-amber-600 hover:underline">
                    politique de confidentialité
                  </a>{" "}
                  *
                </p>
              </div>

              <Button className="w-full bg-black hover:bg-neutral-800 text-white py-4 text-lg" disabled={loading}>
                {loading ? "Envoi en cours..." : (<><span>Envoyer ma Candidature</span><ArrowRight className="ml-2 h-5 w-5" /></>)}
              </Button>
            </form>
           {submitted && (
             <div className="text-center py-16">
               <h2 className="text-2xl font-bold text-amber-600 mb-4">Merci !</h2>
               <p className="text-lg text-neutral-700 mb-4">Votre candidature a bien été envoyée.</p>
               <p className="text-neutral-500">Notre équipe vous contactera sous 48h pour un retour personnalisé.</p>
             </div>
           )}
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Témoignages</Badge>
            <h2 className="text-4xl font-bold text-black mb-6">
              Ils nous font <span className="text-amber-500">confiance</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Mirabelle</h4>
                  <p className="text-sm text-neutral-500">Miss Tourisme</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "Perfect Models Management m'a donné l'opportunité de révéler mon potentiel. L'accompagnement est
                exceptionnel !"
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Pablo</h4>
                  <p className="text-sm text-neutral-500">Mannequin Homme</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "Une agence professionnelle qui m'a ouvert les portes de l'industrie de la mode. Je recommande vivement
                !"
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Noemi Kim</h4>
                  <p className="text-sm text-neutral-500">Mannequin Femme</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "Grâce à Perfect Models, j'ai participé aux plus grands défilés du Gabon. Une expérience transformatrice
                !"
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
