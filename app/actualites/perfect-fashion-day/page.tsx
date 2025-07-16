import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, Calendar, MapPin, Users, Star, Camera, Film, Sparkles, Award, Crown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PerfectFashionDayPage() {
  const stylistes = [
    {
      name: "AG Style",
      description: "Mélange parfait de tradition et modernité",
      highlight: "Des créations uniques sublimées par nos mannequins talentueux",
    },
    {
      name: "Farel MD",
      description: "Élégance masculine & attitude",
      highlight: "Univers masculin affirmé et raffiné porté avec fierté",
    },
    {
      name: "Ventex Custom",
      description: "Pièces sur-mesure haute en audace",
      highlight: "Prestation haute en audace et en style",
    },
    {
      name: "Miguel Fashion Style",
      description: "Finesse sur-mesure et délicatesse",
      highlight: "Tenues taillées dans l'élégance, collection puissante et délicate",
    },
    {
      name: "Faran",
      description: "Parade des Miss du Gabon",
      highlight: "Créations vibrantes de grâce et de symbolique pour les Miss",
    },
    {
      name: "Madame Luc / Abiale",
      description: "Coupes fluides et élégance intemporelle",
      highlight: "Savoir-faire gabonais valorisé avec brio sur le podium",
    },
    {
      name: "Brand'O",
      description: "Volume, structure et originalité",
      highlight: "Énergie flamboyante avec des silhouettes de caractère",
    },
    {
      name: "Tito Style",
      description: "Audace urbaine & inspiration afro",
      highlight: "Explosion de créativité entre influences street et traditions",
    },
    {
      name: "Edele A",
      description: "Final poétique avec groupe mixte",
      highlight: "Clôture en beauté avec des silhouettes épurées et harmonieuses",
    },
  ]

  const mannequinsVedettes = [
    "Juliana Jodelle",
    "AJ Caramela",
    "Osée Jn",
    "Noemi Kim",
    "Flora Hinda",
    "Sadia",
    "Lyne",
    "Diane Vanessa",
    "Donatien",
    "Cassandra",
    "Pablo Zapatero",
    "Sephora Hons",
    "Billy Le Gamin",
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0">
              25 Janvier 2025 • La Gare du Nord
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Perfect Fashion Day <span className="text-amber-500">2025</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-neutral-600 mb-8">Racines & Modernité</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Retour sur la première édition historique de notre événement phare qui a marqué l'industrie de la mode
              gabonaise
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">9</div>
              <div className="text-neutral-600">Stylistes Participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">13</div>
              <div className="text-neutral-600">Mannequins Vedettes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">1</div>
              <div className="text-neutral-600">Performance Slam</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">4</div>
              <div className="text-neutral-600">Partenaires Officiels</div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations Événement */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Détails de l'Événement</Badge>
              <h2 className="text-4xl font-bold text-black mb-8">
                Une soirée <span className="text-amber-500">inoubliable</span>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Date</div>
                    <div className="text-neutral-600">Samedi 25 janvier 2025</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Lieu</div>
                    <div className="text-neutral-600">La Gare du Nord, Libreville</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Maître de Cérémonie</div>
                    <div className="text-neutral-600">Parfait Asseko, Fondateur PMM</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Thème</div>
                    <div className="text-neutral-600">Racines & Modernité</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Perfect Fashion Day 2025"
                width={600}
                height={500}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stylistes Participants */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Ordre de Passage Officiel</Badge>
            <h2 className="text-4xl font-bold text-black mb-6">
              Les <span className="text-amber-500">Créateurs</span> à l'Honneur
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Neuf stylistes exceptionnels ont présenté leurs collections, chacun apportant sa vision unique du thème
              "Racines & Modernité"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stylistes.map((styliste, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black group-hover:text-amber-600 transition-colors">
                      {styliste.name}
                    </h3>
                    <p className="text-sm text-neutral-500">{styliste.description}</p>
                  </div>
                </div>
                <p className="text-neutral-600 leading-relaxed italic">"{styliste.highlight}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mannequins Vedettes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-rose-100 text-rose-800 border-rose-200">Perfect Models Squad</Badge>
            <h2 className="text-4xl font-bold text-black mb-6">
              Nos <span className="text-amber-500">Mannequins</span> Vedettes
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Treize mannequins d'exception ont sublimé les créations des stylistes avec professionnalisme et élégance
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {mannequinsVedettes.map((mannequin, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=250`}
                    alt={mannequin}
                    width={250}
                    height={300}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{mannequin}</h3>
                    <p className="text-sm text-neutral-200">Perfect Models</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Moments Forts */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Temps Forts</Badge>
            <h2 className="text-4xl font-bold text-black mb-6">
              Moments <span className="text-amber-500">Inoubliables</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-0 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Performance d'Ouverture</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Lady Riaba, poétesse slameuse, a ouvert la soirée avec un slam inédit intitulé « Racines et Modernité »,
                accompagné d'une mise en scène des mannequins de l'agence.
              </p>
              <Badge className="bg-purple-100 text-purple-800 border-purple-200">Slam Inédit</Badge>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <Crown className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Parade des Miss du Gabon</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Un moment fort du show avec la styliste Faran qui a accompagné la Parade des Miss du Gabon avec ses
                créations vibrantes de grâce et de symbolique.
              </p>
              <Badge className="bg-rose-100 text-rose-800 border-rose-200">Moment Historique</Badge>
            </Card>
          </div>

          <Card className="p-8 border-0 shadow-lg">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4">Remises d'Attestations</h3>
            <p className="text-neutral-600 leading-relaxed">
              Cérémonie de remise d'attestations d'honneur aux mannequins les plus anciens de l'agence et attestations
              de participation pour tous les stylistes, mannequins, maquilleurs et photographes participants.
            </p>
          </Card>
        </div>
      </section>

      {/* Partenaires Officiels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Partenaires Officiels</Badge>
            <h2 className="text-4xl font-bold text-black mb-6">
              Nos <span className="text-amber-500">Collaborateurs</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Un événement rendu possible grâce à nos partenaires de confiance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <Badge className="mb-3 bg-amber-500 text-white border-0">Golden Partenaire</Badge>
              <h3 className="text-xl font-semibold text-black mb-2">La Gare du Nord</h3>
              <p className="text-neutral-600 text-sm">Lieu de l'événement</p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <Badge className="mb-3 bg-blue-100 text-blue-800 border-blue-200">Photographe Principal</Badge>
              <h3 className="text-xl font-semibold text-black mb-2">Darain Visuals</h3>
              <p className="text-neutral-600 text-sm">Captation photo professionnelle</p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="h-8 w-8 text-red-600" />
              </div>
              <Badge className="mb-3 bg-red-100 text-red-800 border-red-200">Vidéaste</Badge>
              <h3 className="text-xl font-semibold text-black mb-2">LeGrand TV</h3>
              <p className="text-neutral-600 text-sm">Production audiovisuelle</p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-pink-600" />
              </div>
              <Badge className="mb-3 bg-pink-100 text-pink-800 border-pink-200">Glam Team</Badge>
              <h3 className="text-xl font-semibold text-black mb-2">Perfect Models</h3>
              <p className="text-neutral-600 text-sm">Maquillage & Coiffure</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Hashtags & Communication */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-amber-500 text-black border-0">Communication Digitale</Badge>
          <h2 className="text-4xl font-bold mb-6">
            L'événement en <span className="text-amber-400">#hashtags</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg">
            <span className="text-amber-400">#PerfectFashionDay</span>
            <span className="text-amber-400">#PerfectModelsManagement</span>
            <span className="text-amber-400">#ModeGabonaise</span>
            <span className="text-amber-400">#RacinesEtModernité</span>
            <span className="text-amber-400">#PMMTalent</span>
            <span className="text-amber-400">#HauteDiplomatieMode</span>
            <span className="text-amber-400">#MadeInGabon</span>
            <span className="text-amber-400">#TheFutureIsPerfect</span>
          </div>
          <p className="text-xl text-neutral-300 mb-8">
            Capsules vidéos des moments forts partagées sur tous nos réseaux sociaux
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4">
              Participer à la Prochaine Édition
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-amber-700 mb-4">Performance d’ouverture : Lady Riaba</h2>
        <p className="text-lg text-neutral-700 mb-6">
          L’événement a débuté par une performance artistique de <b>Lady Riaba</b>, qui a captivé le public avec un slam intitulé <i>« Racine et Modernité »</i>. Un hommage vibrant à la culture gabonaise, entre tradition et innovation.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/ladyriaba (1).jpg" alt="Lady Riaba 1" className="rounded shadow" />
          <img src="/ladyriaba (5).jpg" alt="Lady Riaba 2" className="rounded shadow" />
          <img src="/ladyriaba (6).jpg" alt="Lady Riaba 3" className="rounded shadow" />
          <img src="/ladyriaba (8).jpg" alt="Lady Riaba 4" className="rounded shadow" />
          <img src="/ladyriaba (10).jpg" alt="Lady Riaba 5" className="rounded shadow" />
          <img src="/ladyriaba (14).jpg" alt="Lady Riaba 6" className="rounded shadow" />
          <img src="/ladyriaba (20).jpg" alt="Lady Riaba 7" className="rounded shadow" />
          <img src="/ladyriaba (22).jpg" alt="Lady Riaba 8" className="rounded shadow" />
          <img src="/ladyriaba (26).jpg" alt="Lady Riaba 9" className="rounded shadow" />
          <img src="/ladyriaba (28).jpg" alt="Lady Riaba 10" className="rounded shadow" />
        </div>
      </section>
    </div>
  )
}
