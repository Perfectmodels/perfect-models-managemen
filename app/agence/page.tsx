import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, Star, Users, Globe, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AgencePage() {
  const keyPartners = [
    "Akile Tabarna (Régisseur Cabine, directeur artistique)",
    "Chouchou Lazare",
    "LB Design",
    "Anice Design",
    "Alban Design",
    "OJ Fashion",
    "Tito Style",
    "Style Assoumatari",
    "Christ'on Mode",
    "Elamourima Création",
    "Jessica Design",
    "Les Kabas de Tamar",
    "Le Pagne de Paris",
    "K'Elle Collection",
    "Vi-Design",
    "Dimbu Van",
    "Edele A",
    "House Of Design / Mystic Création",
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Notre Histoire</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Perfect Models <span className="text-amber-500">Management</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Une agence gabonaise qui redéfinit les standards de l'industrie du mannequinat en Afrique
            </p>
          </div>
        </div>
      </section>

      {/* Présentation Générale */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Présentation Générale</Badge>
              <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
                Une vision, une <span className="text-amber-500">excellence</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Perfect Models Management (PMM) est une agence de mannequins hommes et femmes située au Gabon, à
                Libreville.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                PMM assure la formation, le conseil, le placement de mannequins dans le domaine de la mode (défilés,
                cabine, photo), de la publicité (audiovisuel et papier) et de la figuration (clips vidéo, TV, cinéma).
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-amber-500" />
                  <span className="text-neutral-700">Formation professionnelle complète</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-amber-500" />
                  <span className="text-neutral-700">Conseil personnalisé pour chaque talent</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-amber-500" />
                  <span className="text-neutral-700">Placement dans tous les domaines artistiques</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Perfect Models Management"
                width={600}
                height={500}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fondateur */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Parfait ASSEKO"
                width={400}
                height={500}
                className="rounded-lg object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-400 text-black p-6 rounded-lg shadow-lg">
                <div className="text-lg font-bold">Fondateur</div>
                <div className="text-sm">Depuis 2021</div>
              </div>
            </div>

            <div>
              <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Fondateur</Badge>
              <h2 className="text-4xl font-bold text-black mb-6">
                Parfait <span className="text-amber-500">ASSEKO</span>
              </h2>
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="h-5 w-5 text-amber-500" />
                <span className="text-neutral-600">Fondation : 12 septembre 2021</span>
              </div>
              <div className="flex items-center space-x-3 mb-8">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-neutral-600">Libreville, Gabon</span>
              </div>

              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                L'agence PMM a été fondée le 12 septembre 2021 par Parfait ASSEKO, autoentrepreneur visionnaire qui a su
                identifier le potentiel exceptionnel des talents gabonais et africains dans l'industrie de la mode
                internationale.
              </p>

              <Link href="/contact">
                <Button className="bg-black hover:bg-neutral-800 text-white px-8">
                  Rencontrer l'Équipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires Clés */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Nos Partenaires</Badge>
            <h2 className="text-4xl font-bold text-black mb-6">
              Un réseau de <span className="text-amber-500">confiance</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Nous collaborons avec les meilleurs créateurs, stylistes et professionnels de l'industrie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPartners.map((partner, index) => (
              <Card key={index} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <p className="text-neutral-700 font-medium">{partner}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Notre <span className="text-amber-400">Vision</span>
              </h2>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Devenir la référence africaine en matière de représentation de mannequins, en révélant et développant
                les talents exceptionnels du continent pour les propulser sur la scène internationale.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">
                Notre <span className="text-amber-400">Mission</span>
              </h2>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Accompagner chaque talent dans son développement professionnel, en offrant formation, conseil et
                opportunités de placement dans tous les domaines de la mode, de la publicité et du divertissement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-neutral-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-6">
            Rejoignez notre <span className="text-amber-500">famille</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Découvrez comment Perfect Models Management peut transformer votre passion en carrière professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devenir-mannequin">
              <Button size="lg" className="bg-black hover:bg-neutral-800 text-white px-8 py-4">
                Devenir Mannequin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 bg-transparent"
              >
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
