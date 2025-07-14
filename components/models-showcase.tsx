import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Users, ArrowRight } from "lucide-react"

export function ModelsShowcase() {
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Nos Talents</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            22 mannequins d'<span className="text-amber-500">exception</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Découvrez notre sélection rigoureuse de talents masculins et féminins, chacun apportant sa personnalité
            unique et son professionnalisme.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mannequins Femmes */}
          <Card className="p-8 border-0 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                <Crown className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-black">Mannequins Femmes</h3>
                <p className="text-neutral-500">{femaleModels.length} talents féminins</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {femaleModels.map((model, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-lg p-3 text-center hover:bg-amber-50 transition-colors duration-200"
                >
                  <p className="text-sm font-medium text-neutral-700">{model}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Mannequins Hommes */}
          <Card className="p-8 border-0 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-black">Mannequins Hommes</h3>
                <p className="text-neutral-500">{maleModels.length} talents masculins</p>
              </div>
            </div>

            <div className="space-y-3">
              {maleModels.map((model, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-lg p-4 text-center hover:bg-amber-50 transition-colors duration-200"
                >
                  <p className="font-medium text-neutral-700">{model}</p>
                </div>
              ))}
            </div>

            {/* Highlight spécial */}
            <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg border border-amber-200">
              <div className="flex items-center space-x-2 mb-2">
                <Crown className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-800">Talent Exceptionnel</span>
              </div>
              <p className="text-sm text-amber-700">
                Mirabelle - Miss Tourisme, représentant l'excellence de notre sélection
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button className="bg-black hover:bg-neutral-800 text-white px-8 py-4">
            Voir Tous Nos Mannequins
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
