import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Calendar, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: { type?: string; name?: string }
}) {
  const { type, name } = searchParams

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "styliste":
        return "Styliste"
      case "partenaire":
        return "Partenaire"
      case "sponsor":
        return "Sponsor"
      case "mecene":
        return "Mécène"
      default:
        return "Participant"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "styliste":
        return "from-purple-500 to-purple-600"
      case "partenaire":
        return "from-blue-500 to-blue-600"
      case "sponsor":
        return "from-amber-500 to-amber-600"
      case "mecene":
        return "from-pink-500 to-pink-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">Candidature Reçue</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Merci <span className="text-green-500">{name}</span> !
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Votre candidature en tant que <strong>{getTypeLabel(type || "")}</strong> pour Perfect Fashion Day 2026 a
              été reçue avec succès.
            </p>
          </div>

          <Card className="p-8 border-0 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">Prochaines Étapes</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Confirmation de réception</h3>
                  <p className="text-neutral-600">
                    Vous recevrez un email de confirmation dans les prochaines minutes à l'adresse que vous avez
                    fournie.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Évaluation de votre dossier</h3>
                  <p className="text-neutral-600">
                    Notre équipe étudiera votre candidature dans les 7 jours ouvrables suivant votre soumission.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Réponse officielle</h3>
                  <p className="text-neutral-600">
                    Nous vous contacterons pour vous informer de la suite donnée à votre candidature et, le cas échéant,
                    pour organiser un entretien ou une rencontre.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-4">Informations Importantes</h3>
              <div className="space-y-3 text-neutral-600">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  <span>Date limite : 15 décembre 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  <span>Événement : 31 janvier 2026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  <span>Thème : L'Art de Se Révéler</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-4">Besoin d'aide ?</h3>
              <div className="space-y-3 text-neutral-600">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span>perfectmodels.ga@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span>+241 77 50 79 50</span>
                </div>
                <p className="text-sm">Notre équipe est disponible pour répondre à toutes vos questions.</p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-neutral-600 mb-6">
              En attendant notre réponse, n'hésitez pas à suivre nos actualités sur nos réseaux sociaux !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/perfect-fashion-day">
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${getTypeColor(
                    type || "",
                  )} hover:opacity-90 text-white font-semibold px-8 py-4`}
                >
                  Retour à Perfect Fashion Day
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-4 bg-transparent"
                >
                  Retour à l'Accueil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
