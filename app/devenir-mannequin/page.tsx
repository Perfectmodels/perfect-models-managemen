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
              Formulaire de Candidature <span className="text-amber-500">Perfect Models Management</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Merci de remplir ce formulaire avec soin. Les champs marqués d'une * sont obligatoires.
            </p>
          </div>
          <Card className="p-8 border-0 shadow-lg">
            {submitted ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-amber-600 mb-4">Merci !</h2>
                <p className="text-lg text-neutral-700 mb-4">Votre candidature a bien été envoyée.</p>
                <p className="text-neutral-500">Notre équipe vous contactera sous 48h pour un retour personnalisé.</p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}
                {/* I. Informations personnelles */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-amber-600">I. Informations personnelles</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-1 font-medium">Nom & prénom *</label>
                      <input name="nom_prenom" required className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Ex : Nynelle Mbazoghe" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Date de naissance *</label>
                      <input name="date_naissance" type="date" required className="w-full p-3 border border-neutral-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Âge *</label>
                      <input name="age" type="number" min="10" max="99" required className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Ex : 18" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Ville de résidence *</label>
                      <input name="ville" required className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Ex : Libreville" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Nationalité *</label>
                      <input name="nationalite" required className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Ex : Gabonaise" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Téléphone / WhatsApp *</label>
                      <input name="telephone" required className="w-full p-3 border border-neutral-300 rounded-md" placeholder="+241 ..." />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Adresse e-mail *</label>
                      <input name="email" type="email" required className="w-full p-3 border border-neutral-300 rounded-md" placeholder="votre@email.com" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Instagram / Facebook (optionnel)</label>
                      <input name="reseaux" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="@votreprofil" />
                    </div>
                  </div>
                </div>
                {/* II. Mensurations */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-amber-600">II. Mensurations</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block mb-1 font-medium">Taille (cm) *</label>
                      <input name="taille" type="number" required className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Ex : 175" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Poids (kg) *</label>
                      <input name="poids" type="number" required className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Ex : 60" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Poitrine (cm)</label>
                      <input name="poitrine" type="number" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Ex : 85" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Tour de taille (cm)</label>
                      <input name="taille_tour" type="number" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Ex : 60" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Hanches (cm)</label>
                      <input name="hanches" type="number" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Ex : 90" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Pointure</label>
                      <input name="pointure" type="text" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Ex : 39" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-1 font-medium">Couleur des yeux / cheveux</label>
                      <input name="couleur_yeux_cheveux" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Ex : Yeux marron, cheveux noirs" />
                    </div>
                  </div>
                </div>
                {/* III. Expérience et motivation */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-amber-600">III. Expérience et motivation</h3>
                  <div className="mb-4">
                    <label className="block mb-1 font-medium">As-tu déjà eu une expérience dans le mannequinat ? *</label>
                    <div className="flex items-center space-x-6 mt-2">
                      <label className="flex items-center">
                        <input type="radio" name="experience_mannequinat" value="oui" required className="mr-2" /> Oui
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="experience_mannequinat" value="non" required className="mr-2" /> Non
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-medium">Si oui, donne quelques détails :</label>
                    <textarea name="details_experience" className="w-full p-3 border border-neutral-300 rounded-md" rows={2} placeholder="Décrivez brièvement votre expérience (optionnel)" />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-medium">Pourquoi veux-tu rejoindre notre agence ? *</label>
                    <textarea name="motivation" required className="w-full p-3 border border-neutral-300 rounded-md" rows={2} placeholder="Votre motivation" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">As-tu des compétences particulières ? (ex : danse, chant, défilé, acting, maquillage...)</label>
                    <input name="competences" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Listez vos compétences (optionnel)" />
                  </div>
                </div>
                {/* IV. Mini questionnaire : Culture de la Mode Gabonaise */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-amber-600">IV. Mini questionnaire : Culture de la Mode Gabonaise</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1 font-medium">1. Cite un(e) styliste ou créateur(trice) de mode gabonais(e) que tu connais :</label>
                      <input name="styliste_gabonais" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Votre réponse" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">2. Quel événement ou festival célèbre la mode au Gabon ?</label>
                      <input name="evenement_mode_gabon" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Votre réponse" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">3. À ton avis, quelles sont les matières ou tissus traditionnellement utilisés dans la mode gabonaise ?</label>
                      <input name="tissus_gabon" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Votre réponse" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">4. Pourquoi est-il important de valoriser la mode locale ?</label>
                      <input name="valoriser_mode_locale" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Votre réponse" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">5. Qu’est-ce que la mode représente pour toi personnellement ?</label>
                      <input name="mode_perso" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Votre réponse" />
                    </div>
                  </div>
                </div>
                {/* V. Signature */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-amber-600">V. Signature du/de la candidat(e)</h3>
                  <div className="mb-2 text-neutral-600 text-sm">
                    Je certifie que les informations fournies dans ce formulaire sont exactes.
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-1 font-medium">Signature *</label>
                      <input name="signature" required className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Nom et prénom" />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Date *</label>
                      <input name="date_signature" type="date" required className="w-full p-3 border border-neutral-300 rounded-md" />
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-black hover:bg-neutral-800 text-white py-4 text-lg" disabled={loading}>
                  {loading ? "Envoi en cours..." : (<><span>Envoyer ma Candidature</span></>)}
                </Button>
              </form>
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
