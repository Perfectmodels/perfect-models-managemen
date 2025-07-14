import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles, Film, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  const fashionShows = [
    "Défilé Bye Bye Vacances par Alban Design",
    "K'elle POUR ELLE (2, 3 & 4) de Binette Bah Lendoye",
    "Défilé Nouvelle Vision – Les Créations Olga-O",
    "Festival International des Talents d'Exception – STYLE Assoumatari",
    "O'Fashion Event – Perfect Models Management",
    "After Work Fashion par Aristide Ogouliguende",
    "Edele A 2022 (Défilé et Vente Privée) par Edele A",
    "Sorties Officielles des Femmes Actives du Gabon (2 & 3)",
    "FEMOGA (1 & 2) par Angèle Epouta Créations",
    "Musée Éphémère Iconique by alejandr_o_sun",
    "EDYDY Concours (6 mannequins finalistes)",
    "Festival Culturel (Ministère de l'Enseignement Supérieur, de la Recherche Scientifique, du Transfert de Technologies, de la Culture et des Arts)",
    "Pink Woman Show (1 & 2) de Stecya Minkoue",
    "Fashionshowchou / Awards de la Mode Gabonaise par Chouchou Lazare",
    "Vernissage Symbiose Concept Store par Edele A",
    "Inauguration House Of Design – Mystic Création par Sun Alejandro",
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
    "Pléiade Gabon",
    "Paf paf",
  ]

  const photoShoots = [
    "Edele A – Shooting collection Un Air d'été",
    "Tito Style – Collection Africa",
    "Vanella Fashion",
    "Vi Design",
    "Alban Design",
    "Issée by Lita",
    "Muni Design (Kenya)",
    "Maysah (Côte d'Ivoire)",
    "Angèle Epouta",
    "Angelina Créations",
    "Joha Fashion",
    "Traxel (Dakar)",
    "Anicet Design",
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Notre Palmarès</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Une expertise <span className="text-amber-500">reconnue</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Depuis 2021, Perfect Models Management participe à tous les événements majeurs de la mode au Gabon et
              collabore avec les plus grands noms de l'industrie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">{fashionShows.length}+</div>
              <div className="text-neutral-600">Défilés de Mode</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">{videoClips.length}+</div>
              <div className="text-neutral-600">Clips & Films</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">{photoShoots.length}+</div>
              <div className="text-neutral-600">Shooting Photo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Défilés de Mode */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">Défilés de Mode</h2>
              <p className="text-neutral-500">{fashionShows.length} événements majeurs</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {fashionShows.map((show, index) => (
              <Card key={index} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-amber-500 transition-colors"></div>
                  <p className="text-neutral-700 leading-relaxed group-hover:text-black transition-colors">{show}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clips Vidéo & Cinéma */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Film className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">Figuration - Clip Vidéo et Cinéma</h2>
              <p className="text-neutral-500">{videoClips.length}+ productions audiovisuelles</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {videoClips.map((clip, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={clip}
                    width={300}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Film className="h-4 w-4 mb-1" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-neutral-700 group-hover:text-black transition-colors">
                    {clip}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration - Shooting Photo */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Camera className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">Collaboration - Shooting Photo</h2>
              <p className="text-neutral-500">{photoShoots.length}+ collaborations créatives</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photoShoots.map((shoot, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=250&width=300`}
                    alt={shoot}
                    width={300}
                    height={250}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-4 w-4 mb-1" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-neutral-700 group-hover:text-black transition-colors">
                    {shoot}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Note importante */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-amber-500 text-white border-0">Engagement Total</Badge>
          <p className="text-lg text-amber-800 font-medium">
            Notre agence de mannequins a participé à tous les événements de mode depuis 2021, son année de création.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Votre prochain projet avec <span className="text-amber-400">nous</span> ?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Découvrez comment Perfect Models Management peut apporter l'excellence à votre événement ou campagne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4">
                Collaborer avec Nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/mannequins">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 bg-transparent"
              >
                Voir nos Mannequins
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
