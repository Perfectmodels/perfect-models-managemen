import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Camera, Film, Sparkles, ArrowRight } from "lucide-react"

export function AchievementsSection() {
  const fashionShows = [
    "Défilé Bye Bye Vacances par Alban Design",
    "K'elle POUR ELLE (2, 3 & 4) de Binette Bah Lendoye",
    "Festival International des Talents d'Exception – STYLE Assoumatari",
    "O'Fashion Event – Perfect Models Management",
    "After Work Fashion par Aristide Ogouliguende",
    "Edele A 2022 (Défilé et Vente Privée)",
    "FEMOGA (1 & 2) par Angèle Epouta Créations",
    "Pink Woman Show (1 & 2) de Stecya Minkoue",
    "Fashionshowchou / Awards de la Mode Gabonaise",
    "Festival de l'Indépendance",
    "Issée Fashion Show",
  ]

  const videoClips = [
    "King Ben – Cotelet",
    "Donzer – Ovongo",
    "Orfee Lashka – Je sais que tu mens",
    "Communauté Black – Même pas un KOKOKO",
    "Petit Jesus International – Y'a pas l'argent dedans",
    "Monsieur Oyone – Le collectionneur de pain",
  ]

  const photoShoots = [
    "Edele A – Collection Un Air d'été",
    "Tito Style – Collection Africa",
    "Vanella Fashion",
    "Vi Design",
    "Alban Design",
    "Muni Design (Kenya)",
    "Maysah (Côte d'Ivoire)",
    "Traxel (Dakar)",
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Perfect Fashion Day */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0">
            Événement Phare
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Perfect <span className="text-amber-500">Fashion Day</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Notre événement annuel incontournable qui rassemble les plus grands talents de la mode gabonaise et
            internationale. Une célébration de l'élégance, de la créativité et de l'excellence.
          </p>
          <div className="flex items-center justify-center space-x-6 text-neutral-500">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Événement Annuel</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span>Talents Internationaux</span>
            </div>
          </div>
        </div>

        {/* Palmarès */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Notre Palmarès</Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Une expertise <span className="text-amber-500">reconnue</span>
            </h3>
            <p className="text-lg text-neutral-600">
              Depuis 2021, Perfect Models Management participe à tous les événements majeurs de la mode au Gabon
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Défilés de Mode */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Défilés de Mode</h4>
                  <p className="text-sm text-neutral-500">{fashionShows.length} événements majeurs</p>
                </div>
              </div>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {fashionShows.map((show, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-neutral-600 leading-relaxed">{show}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Clips Vidéo & Cinéma */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Film className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Clips & Cinéma</h4>
                  <p className="text-sm text-neutral-500">{videoClips.length}+ productions audiovisuelles</p>
                </div>
              </div>
              <div className="space-y-3">
                {videoClips.map((clip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-neutral-600 leading-relaxed">{clip}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Shooting Photo */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Camera className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Shooting Photo</h4>
                  <p className="text-sm text-neutral-500">{photoShoots.length}+ collaborations créatives</p>
                </div>
              </div>
              <div className="space-y-3">
                {photoShoots.map((shoot, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-neutral-600 leading-relaxed">{shoot}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-black hover:bg-neutral-800 text-white px-8 py-4 text-lg">
            Découvrir Notre Portfolio Complet
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
