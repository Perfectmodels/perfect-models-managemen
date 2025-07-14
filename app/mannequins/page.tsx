import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Crown, Users, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MannequinsPage() {
  const femaleModels = [
    "Noemi Kim",
    "Nynelle",
    "Raida",
    "Eunice",
    "Diane Vanessa",
    "Juliana Jodelle",
    "Danara",
    "Mirabelle (Miss Tourisme)",
    "AJ Caramela",
    "Priscilia",
    "Flora",
    "Stecya",
    "Khelany",
    "Sadia",
    "Stecya",
    "Léa Danielle",
    "Cassandra",
    "Lyne",
    "Sephora",
    "Venusia",
    "Ruth Jussy",
  ]

  const maleModels = ["Pablo", "Moustapha", "Donatien", "Osée", "Rosnel"]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Nos Talents</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              22 mannequins d'<span className="text-amber-500">exception</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Découvrez notre sélection rigoureuse de talents masculins et féminins, chacun apportant sa personnalité
              unique et son professionnalisme
            </p>
          </div>

          {/* Search & Filter */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <Input placeholder="Rechercher un mannequin..." className="pl-10" />
              </div>
              <Button variant="outline" className="px-6 bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mannequins Femmes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
              <Crown className="h-6 w-6 text-rose-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">Mannequins Femmes</h2>
              <p className="text-neutral-500">{femaleModels.length} talents féminins</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {femaleModels.map((model, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=300`}
                    alt={model}
                    width={300}
                    height={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{model}</h3>
                    <p className="text-sm text-neutral-200">Editorial • Runway • Commercial</p>
                  </div>
                  {model.includes("Miss Tourisme") && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-amber-500 text-white border-0">
                        <Crown className="h-3 w-3 mr-1" />
                        Miss
                      </Badge>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mannequins Hommes */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">Mannequins Hommes</h2>
              <p className="text-neutral-500">{maleModels.length} talents masculins</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {maleModels.map((model, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=500&width=300`}
                    alt={model}
                    width={300}
                    height={500}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{model}</h3>
                    <p className="text-sm text-neutral-200">Editorial • Runway • Commercial</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Vous cherchez le talent <span className="text-amber-400">parfait</span> ?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Contactez-nous pour discuter de vos besoins et trouver le mannequin idéal pour votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4">
                Réserver un Mannequin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/devenir-mannequin">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 bg-transparent"
              >
                Devenir Mannequin
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
