import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles, Film, Camera, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const goldMat = "#C9B037";

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
    <div className="min-h-screen bg-black pt-20 text-white">
      {/* Hero Section stylée */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <Image src="/flora4.jpg" alt="Défilé" fill priority className="object-cover object-center opacity-30 absolute inset-0 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Award className="mx-auto mb-6 h-16 w-16" style={{ color: goldMat }} />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg" style={{ color: goldMat }}>Portfolio</h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: goldMat }}>L’excellence sur tous les podiums</p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">Depuis 2021, Perfect Models Management rayonne sur les plus grands événements de mode, clips et shootings en Afrique centrale.</p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 border-b border-amber-900/40 bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-extrabold mb-2" style={{ color: goldMat }}>{fashionShows.length}+</div>
            <div className="text-lg text-white/80 font-medium">Défilés de Mode</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold mb-2" style={{ color: goldMat }}>{videoClips.length}+</div>
            <div className="text-lg text-white/80 font-medium">Clips & Films</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold mb-2" style={{ color: goldMat }}>{photoShoots.length}+</div>
            <div className="text-lg text-white/80 font-medium">Shooting Photo</div>
          </div>
        </div>
      </section>

      {/* Défilés de Mode */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <Sparkles className="h-10 w-10" style={{ color: goldMat }} />
            <h2 className="text-4xl font-bold" style={{ color: goldMat }}>Défilés de Mode</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {fashionShows.map((show, index) => (
              <Card key={index} className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white/5">
                <div className="flex items-center space-x-4 mb-2">
                  <Award className="h-6 w-6" style={{ color: goldMat }} />
                  <span className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">{show}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clips Vidéo & Cinéma */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <Film className="h-10 w-10" style={{ color: goldMat }} />
            <h2 className="text-4xl font-bold" style={{ color: goldMat }}>Clips Vidéo & Cinéma</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {videoClips.map((clip, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/5"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <Film className="h-6 w-6" style={{ color: goldMat }} />
                  <span className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">{clip}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shooting Photo */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <Camera className="h-10 w-10" style={{ color: goldMat }} />
            <h2 className="text-4xl font-bold" style={{ color: goldMat }}>Shooting Photo</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photoShoots.map((shoot, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/5"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <Camera className="h-6 w-6" style={{ color: goldMat }} />
                  <span className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">{shoot}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Note importante */}
      <section className="py-16 border-t border-amber-900/40 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4" style={{ background: goldMat, color: '#222', border: 'none' }}>Engagement Total</Badge>
          <p className="text-xl font-medium" style={{ color: goldMat }}>
            Notre agence de mannequins a participé à tous les événements de mode depuis 2021, son année de création.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Votre prochain projet avec <span style={{ color: goldMat }}>nous</span> ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Découvrez comment Perfect Models Management peut apporter l'excellence à votre événement ou campagne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" style={{ background: goldMat, color: '#222' }} className="font-semibold px-8 py-4">
                Collaborer avec Nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/mannequins">
              <Button
                size="lg"
                variant="outline"
                style={{ borderColor: goldMat, color: goldMat }}
                className="px-8 py-4 bg-transparent"
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
