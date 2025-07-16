import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, Star, Users, Award, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Hero from "@/components/Hero"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Quick Stats */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">22+</div>
              <div className="text-neutral-600">Mannequins Talentueux</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">3</div>
              <div className="text-neutral-600">Années d'Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">30+</div>
              <div className="text-neutral-600">Événements Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">15+</div>
              <div className="text-neutral-600">Clips & Films</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Bienvenue</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Perfect Models <span className="text-amber-500">Management</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
            Agence de mannequins basée à Libreville, Gabon, spécialisée dans la formation, le conseil et le placement de
            mannequins dans la mode, la publicité et la figuration depuis 2021.
          </p>
          <Link href="/agence">
            <Button className="bg-black hover:bg-neutral-800 text-white px-8">
              Découvrir Notre Histoire
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Nos Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Excellence dans chaque <span className="text-amber-500">domaine</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Représentation</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Gestion complète de carrière pour nos talents, de la formation aux contrats.
              </p>
              <Link href="/mannequins" className="text-amber-600 hover:text-amber-700 font-medium">
                Voir nos mannequins →
              </Link>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Casting & Événements</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Organisation de castings et participation aux plus grands événements mode.
              </p>
              <Link href="/portfolio" className="text-amber-600 hover:text-amber-700 font-medium">
                Voir notre portfolio →
              </Link>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Formation</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Programmes de formation complets pour développer le potentiel.
              </p>
              <Link href="/devenir-mannequin" className="text-amber-600 hover:text-amber-700 font-medium">
                Nous rejoindre →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect Fashion Day Highlight */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                🎉 Deuxième Édition Annoncée
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Perfect <span className="text-purple-500">Fashion Day</span> <span className="text-pink-500">2026</span>
              </h2>
              <h3 className="text-2xl font-light text-neutral-600 mb-6">L'Art de Se Révéler</h3>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Après le succès de notre première édition "Racines & Modernité", découvrez le nouveau thème de 2026 qui
                célèbre l'identité et la créativité.
              </p>
              <div className="flex items-center space-x-6 text-neutral-500 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>31 Janvier 2026</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>L'Art de Se Révéler</span>
                </div>
              </div>
              <Link href="/perfect-fashion-day">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8">
                  Découvrir l'Édition 2026
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Perfect+Fashion+Day+2026"
                alt="Perfect Fashion Day 2026"
                width={600}
                height={500}
                className="rounded-lg object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">2026</div>
                <div className="text-sm">L'Art de Se Révéler</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à rejoindre l'<span className="text-amber-400">élite</span> ?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Découvrez si vous avez ce qu'il faut pour intégrer Perfect Models Management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devenir-mannequin">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4">
                Postuler Maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 bg-transparent"
              >
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Perfect Models Management</h3>
                  <p className="text-sm text-neutral-400">L'élégance au service de la perfection</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-4">
                Agence de mannequins basée à Libreville, Gabon, spécialisée dans la formation, le conseil et le
                placement de mannequins depuis 2021.
              </p>
              <div className="text-sm text-neutral-500">Powered by Perfect Agency</div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/agence" className="hover:text-white transition-colors">
                    Notre Agence
                  </Link>
                </li>
                <li>
                  <Link href="/mannequins" className="hover:text-white transition-colors">
                    Mannequins
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/perfect-fashion-day" className="hover:text-white transition-colors">
                    Perfect Fashion Day
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-neutral-400 text-sm">
                <div>Libreville, Gabon</div>
                <div>+241 77 50 79 50</div>
                <div>@perfectmodelsga</div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500 text-sm">
            © {new Date().getFullYear()} Perfect Models Management. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}
