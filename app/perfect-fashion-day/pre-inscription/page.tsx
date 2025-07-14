import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Palette, Handshake, Crown, Heart, Calendar, Sparkles } from "lucide-react"
import { submitPreInscription } from "./actions"

export default function PreInscriptionPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-lg px-6 py-2">
              🎉 Perfect Fashion Day 2026
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Pré-inscription <span className="text-purple-500">Ouverte</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-neutral-600 mb-8">L'Art de Se Révéler</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Rejoignez-nous pour la deuxième édition de notre événement phare le 31 janvier 2026. Que vous soyez
              styliste, partenaire, sponsor ou mécène, votre participation fera la différence.
            </p>
            <div className="flex items-center justify-center space-x-6 text-neutral-500">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>31 Janvier 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span>L'Art de Se Révéler</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaires de Pré-inscription */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">Participez à l'Événement</Badge>
            <h2 className="text-4xl font-bold text-black mb-6">
              Choisissez votre <span className="text-purple-500">participation</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Sélectionnez le type de participation qui vous correspond et remplissez le formulaire de pré-inscription
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Stylistes */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Stylistes</h3>
                  <p className="text-neutral-600">Présentez vos créations sur notre podium</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">Ce que nous offrons :</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Podium professionnel à La Gare du Nord</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Mannequins expérimentés de Perfect Models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Couverture photo et vidéo professionnelle</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Promotion sur nos réseaux sociaux</span>
                  </li>
                </ul>
              </div>

              <form action={submitPreInscription} className="space-y-4">
                <input type="hidden" name="type" value="styliste" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Nom / Marque *</label>
                    <Input name="name" placeholder="Votre nom ou nom de marque" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                    <Input name="email" type="email" placeholder="votre@email.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Téléphone *</label>
                  <Input name="phone" type="tel" placeholder="+241 XX XX XX XX" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Style / Spécialité</label>
                  <Input name="specialty" placeholder="Ex: Haute couture, Prêt-à-porter, Streetwear..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Décrivez votre collection pour PFD 2026
                  </label>
                  <Textarea
                    name="collection_description"
                    placeholder="Parlez-nous de votre vision pour le thème 'L'Art de Se Révéler'..."
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Expérience</label>
                  <Textarea
                    name="experience"
                    placeholder="Vos précédents défilés, collaborations, réalisations..."
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Site web / Portfolio</label>
                  <Input name="website" type="url" placeholder="https://..." />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
                  Soumettre ma Candidature Styliste
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>

            {/* Partenaires */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Partenaires</h3>
                  <p className="text-neutral-600">Collaborez avec nous pour cet événement unique</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">Opportunités de partenariat :</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Visibilité de marque pendant l'événement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Mentions dans nos communications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Accès privilégié à l'événement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Networking avec l'industrie de la mode</span>
                  </li>
                </ul>
              </div>

              <form action={submitPreInscription} className="space-y-4">
                <input type="hidden" name="type" value="partenaire" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Entreprise *</label>
                    <Input name="name" placeholder="Nom de votre entreprise" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                    <Input name="email" type="email" placeholder="contact@entreprise.com" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Contact Principal</label>
                    <Input name="contact_person" placeholder="Nom du responsable" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Téléphone</label>
                    <Input name="phone" type="tel" placeholder="+241 XX XX XX XX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Secteur d'activité</label>
                  <Input name="sector" placeholder="Ex: Mode, Beauté, Technologie, Services..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Type de partenariat souhaité
                  </label>
                  <select
                    name="partnership_type"
                    className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Sélectionner un type</option>
                    <option value="logistique">Partenaire Logistique</option>
                    <option value="technique">Partenaire Technique</option>
                    <option value="media">Partenaire Média</option>
                    <option value="lieu">Partenaire Lieu</option>
                    <option value="service">Partenaire Service</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Décrivez votre proposition de partenariat
                  </label>
                  <Textarea
                    name="partnership_description"
                    placeholder="Comment souhaitez-vous contribuer à Perfect Fashion Day 2026 ?"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                  Proposer un Partenariat
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>

            {/* Sponsors */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
                  <Crown className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Sponsors</h3>
                  <p className="text-neutral-600">Soutenez financièrement notre événement</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">Packages de sponsoring :</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Sponsor Titre - Visibilité maximale</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Sponsor Gold - Logo sur tous supports</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Sponsor Silver - Mentions privilégiées</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Sponsor Bronze - Reconnaissance officielle</span>
                  </li>
                </ul>
              </div>

              <form action={submitPreInscription} className="space-y-4">
                <input type="hidden" name="type" value="sponsor" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Entreprise *</label>
                    <Input name="name" placeholder="Nom de votre entreprise" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                    <Input name="email" type="email" placeholder="sponsor@entreprise.com" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Contact Principal</label>
                    <Input name="contact_person" placeholder="Nom du responsable" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Téléphone</label>
                    <Input name="phone" type="tel" placeholder="+241 XX XX XX XX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Package de sponsoring souhaité
                  </label>
                  <select
                    name="sponsor_package"
                    className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Sélectionner un package</option>
                    <option value="titre">Sponsor Titre</option>
                    <option value="gold">Sponsor Gold</option>
                    <option value="silver">Sponsor Silver</option>
                    <option value="bronze">Sponsor Bronze</option>
                    <option value="custom">Package Personnalisé</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Budget approximatif</label>
                  <select
                    name="budget_range"
                    className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Sélectionner une fourchette</option>
                    <option value="500000-1000000">500 000 - 1 000 000 FCFA</option>
                    <option value="1000000-2500000">1 000 000 - 2 500 000 FCFA</option>
                    <option value="2500000-5000000">2 500 000 - 5 000 000 FCFA</option>
                    <option value="5000000+">5 000 000+ FCFA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Objectifs de sponsoring</label>
                  <Textarea
                    name="sponsoring_objectives"
                    placeholder="Quels sont vos objectifs en sponsorisant Perfect Fashion Day 2026 ?"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                  Devenir Sponsor Officiel
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>

            {/* Mécènes */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Mécènes</h3>
                  <p className="text-neutral-600">Soutenez la culture et les arts gabonais</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">Votre contribution :</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Soutien à la création artistique gabonaise</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Promotion des talents locaux</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Développement de l'industrie de la mode</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Reconnaissance en tant que mécène culturel</span>
                  </li>
                </ul>
              </div>

              <form action={submitPreInscription} className="space-y-4">
                <input type="hidden" name="type" value="mecene" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Nom / Organisation *</label>
                    <Input name="name" placeholder="Votre nom ou organisation" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                    <Input name="email" type="email" placeholder="votre@email.com" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Téléphone</label>
                    <Input name="phone" type="tel" placeholder="+241 XX XX XX XX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Type de mécénat</label>
                    <select
                      name="mecenate_type"
                      className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner</option>
                      <option value="individuel">Mécénat Individuel</option>
                      <option value="entreprise">Mécénat d'Entreprise</option>
                      <option value="fondation">Fondation</option>
                      <option value="association">Association</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Domaine de soutien privilégié
                  </label>
                  <select
                    name="support_area"
                    className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Sélectionner un domaine</option>
                    <option value="formation">Formation des jeunes talents</option>
                    <option value="creation">Soutien à la création</option>
                    <option value="logistique">Support logistique</option>
                    <option value="promotion">Promotion culturelle</option>
                    <option value="general">Soutien général</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Motivation pour soutenir Perfect Fashion Day
                  </label>
                  <Textarea
                    name="motivation"
                    placeholder="Pourquoi souhaitez-vous soutenir notre événement culturel ?"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Contribution envisagée</label>
                  <Textarea
                    name="contribution"
                    placeholder="Décrivez votre contribution (financière, matérielle, services...)"
                    rows={3}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
                  Devenir Mécène Culturel
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Informations Complémentaires */}
      <section className="py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            Informations Importantes
          </Badge>
          <h2 className="text-3xl font-bold text-black mb-6">Processus de Sélection</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-black mb-2">Pré-inscription</h3>
              <p className="text-sm text-neutral-600">Soumettez votre candidature via ce formulaire</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-black mb-2">Évaluation</h3>
              <p className="text-sm text-neutral-600">Notre équipe étudie votre dossier sous 7 jours</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-black mb-2">Confirmation</h3>
              <p className="text-sm text-neutral-600">Réponse officielle et détails de collaboration</p>
            </div>
          </div>
          <p className="text-neutral-600 mb-6">
            Les candidatures sont ouvertes jusqu'au <strong>15 décembre 2025</strong>. Ne manquez pas cette opportunité
            unique de participer à l'événement mode de l'année !
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-sm text-neutral-700">
              <strong>Contact :</strong> Pour toute question concernant les pré-inscriptions, contactez-nous à{" "}
              <a href="mailto:perfectmodels.ga@gmail.com" className="text-purple-600 hover:underline">
                perfectmodels.ga@gmail.com
              </a>{" "}
              ou au <strong>+241 77 50 79 50</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
