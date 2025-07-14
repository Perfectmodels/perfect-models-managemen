import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Calendar,
  Sparkles,
  Star,
  MapPin,
  Camera,
  Film,
  Users,
  Bell,
  Globe,
  Mail,
  Instagram,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PerfectFashionDayPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6 bg-amber-100 text-amber-800 border-amber-200 inline-block rounded px-2 py-1 text-xs font-semibold">Perfect Fashion Day</div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Perfect Fashion <span className="text-amber-500">Day</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Notre événement annuel incontournable qui rassemble les plus grands talents de la mode gabonaise et
              internationale
            </p>
          </div>
        </div>
      </section>

      {/* Deuxième Édition 2026 - Annonce */}
      <section className="py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-lg px-6 py-2 inline-block rounded font-semibold">🎉 DEUXIÈME ÉDITION À VENIR</div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Perfect Fashion Day <span className="text-purple-500">2026</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-neutral-600 mb-8">L'Art de Se Révéler</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Date Officielle</div>
                    <div className="text-neutral-600">Samedi 31 janvier 2026</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Thème</div>
                    <div className="text-neutral-600">L'Art de Se Révéler</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Concept</div>
                    <div className="text-neutral-600">Identité et créativité</div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Après une première édition marquante, riche en émotions et en élégance, Perfect Models Management est
                fier d'annoncer le retour de la Perfect Fashion Day pour une deuxième édition inédite.
              </p>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-black mb-3">Pourquoi « L'Art de Se Révéler » ?</h4>
                <p className="text-neutral-700 mb-4">Parce que la mode ne se limite pas à l'apparence :</p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Elle est un miroir de l'âme</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Un outil de reconnaissance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Une voix pour ceux qui veulent être vus, entendus, compris</span>
                  </li>
                </ul>
              </div>
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

          {/* Message Fort */}
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-black mb-4">Un défilé-concept, un message fort</h4>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                La Perfect Fashion Day est bien plus qu'un simple événement de mode. C'est un espace d'expression, un
                carrefour de talents, une célébration de la beauté plurielle.
              </p>
              <p className="text-neutral-700 italic">
                "Nos mannequins – véritables ambassadeurs du style gabonais – porteront fièrement les créations de
                stylistes passionnés, dans une mise en scène soignée et immersive."
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Bientôt Plus d'Infos */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bell className="h-8 w-8 text-black" />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Bientôt plus d'<span className="text-amber-400">infos</span>...
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Le lieu, la programmation complète, les stylistes sélectionnés et les artistes invités seront bientôt
            annoncés.
          </p>
          <p className="text-lg text-neutral-400 mb-8">Restez connectés à nos canaux officiels pour tout savoir !</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3 bg-neutral-800 rounded-lg p-4">
              <Globe className="h-5 w-5 text-amber-400" />
              <span className="text-sm">www.perfectmodels.ga</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-neutral-800 rounded-lg p-4">
              <Mail className="h-5 w-5 text-amber-400" />
              <span className="text-sm">perfectmodels.ga@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-neutral-800 rounded-lg p-4">
              <Instagram className="h-5 w-5 text-amber-400" />
              <span className="text-sm">@perfectmodels.ga</span>
            </div>
          </div>

          <Link href="/contact">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4">
              Être Informé en Premier
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Hashtags */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-black mb-6">Perfect Fashion Day 2026</h3>
          <p className="text-lg text-neutral-700 mb-6 italic">
            "Une scène, des corps, des styles. Une identité qui se raconte à chaque pas."
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="text-purple-600 font-medium">#PerfectFashionDay2026</span>
            <span className="text-pink-600 font-medium">#LArtDeSeRévéler</span>
            <span className="text-purple-600 font-medium">#PerfectModelsManagement</span>
            <span className="text-pink-600 font-medium">#ModeGabonaise</span>
            <span className="text-purple-600 font-medium">#ModeIdentitaire</span>
            <span className="text-pink-600 font-medium">#PFDay2</span>
          </div>
        </div>
      </section>

      {/* Perfect Fashion Day 2025 - Retour sur la Première Édition */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6 bg-amber-100 text-amber-800 border-amber-200 inline-block rounded px-2 py-1 text-xs font-semibold">Retour sur 2025</div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Première Édition <span className="text-amber-500">Réussie</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Revivez les moments forts de notre première édition "Racines & Modernité" du 25 janvier 2025
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="mb-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0 inline-block rounded px-2 py-1 text-xs font-semibold">25 Janvier 2025 • La Gare du Nord</div>
              <h3 className="text-3xl font-bold text-black mb-6 leading-tight">
                Perfect Fashion Day <span className="text-amber-500">Racines & Modernité</span>
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-amber-500" />
                  <span className="text-neutral-700">Samedi 25 janvier 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-500" />
                  <span className="text-neutral-700">La Gare du Nord, Libreville</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-amber-500" />
                  <span className="text-neutral-700">Maître de cérémonie : Parfait Asseko</span>
                </div>
              </div>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                La première édition du Perfect Fashion Day a marqué l'histoire de la mode gabonaise avec le thème
                "Racines & Modernité", célébrant l'héritage culturel et l'innovation contemporaine.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/Affiche.png"
                alt="Affiche Perfect Fashion Day 2025"
                width={600}
                height={500}
                className="rounded-lg object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-400 text-black p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">9</div>
                <div className="text-sm">Stylistes Participants</div>
              </div>
            </div>
          </div>

          {/* Stylistes avec Carrousels */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="mb-6 bg-amber-100 text-amber-800 border-amber-200 inline-block rounded px-2 py-1 text-xs font-semibold">Ordre de Passage 2025</div>
              <h3 className="text-3xl font-bold text-black mb-4">
                Les <span className="text-amber-500">Créateurs</span> à l'Honneur
              </h3>
            </div>

            <div className="space-y-16">
              {/* AG Style */}
              <div className="bg-gradient-to-r from-amber-50 to-neutral-50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">AG Style</h4>
                    <p className="text-neutral-600">Mélange parfait de tradition et modernité</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 italic">
                  "La styliste AG Style a ébloui le podium avec ses créations uniques, sublimées par nos mannequins
                  talentueux. Un mélange parfait de tradition et de modernité, capturé avec brio par Darain Visuals."
                </p>

                {/* Carrousel AG Style */}
                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[
                      "agstyle (7).jpg",
                      "agstyle (13).jpg",
                      "agstyle (15).jpg",
                      "agstyle (17).jpg",
                      "agstyle (21).jpg",
                      "agstyle (23).jpg",
                      "agstyle (28).jpg",
                      "agstyle (33).jpg",
                      "agstyle (36).jpg",
                      "agstyle (41).jpg",
                      "agstyle (42).jpg",
                    ].map((file, i) => (
                      <div key={i} className="flex-shrink-0">
                        <Image
                          src={`/${file}`}
                          alt={`AG Style ${i + 1}`}
                          width={250}
                          height={300}
                          className="rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Farel MD */}
              <div className="bg-gradient-to-r from-blue-50 to-neutral-50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">Farel MD</h4>
                    <p className="text-neutral-600">Élégance masculine & attitude</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 italic">
                  "Le styliste Farel MD a transporté le public dans un univers masculin affirmé et raffiné. Nos
                  mannequins ont porté ses créations avec fierté, force et prestance."
                </p>

                {/* Carrousel Farel MD */}
                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[
                      "farelmd (5).jpg",
                      "farelmd (10).jpg",
                      "farelmd (16).jpg",
                      "farelmd (21).jpg",
                      "farelmd (26).jpg",
                      "farelmd (28).jpg",
                      "farelmd (30).jpg",
                      "farelmd (31).jpg",
                      "farelmd (33).jpg",
                      "farelmd (37).jpg",
                    ].map((file, i) => (
                      <div key={i} className="flex-shrink-0">
                        <Image
                          src={`/${file}`}
                          alt={`Farel MD ${i + 1}`}
                          width={250}
                          height={300}
                          className="rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* VENTEX Custom */}
              <div className="bg-gradient-to-r from-purple-50 to-neutral-50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">VENTEX Custom</h4>
                    <p className="text-neutral-600">Pièces sur-mesure haute en audace</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 italic">
                  "La maison VENTEX Custom a livré une prestation haute en audace et en style. Des pièces sur-mesure
                  portées avec élégance par notre équipe de mannequins, sublimées par les lumières de la Gare du Nord."
                </p>

                {/* Carrousel VENTEX Custom */}
                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[
                      "ventex (4).jpg",
                      "ventex (7).jpg",
                      "ventex (14).jpg",
                      "ventex (18).jpg",
                      "ventex (21).jpg",
                      "ventex (28).jpg",
                      "ventex (31).jpg",
                      "ventex (36).jpg",
                      "ventex (43).jpg",
                      "ventex (44).jpg",
                    ].map((file, i) => (
                      <div key={i} className="flex-shrink-0">
                        <Image
                          src={`/${file}`}
                          alt={`VENTEX Custom ${i + 1}`}
                          width={250}
                          height={300}
                          className="rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Miguel Fashion Style */}
              <div className="bg-gradient-to-r from-green-50 to-neutral-50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">Miguel Fashion Style</h4>
                    <p className="text-neutral-600">Finesse sur-mesure et délicatesse</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 italic">
                  "Avec des tenues taillées dans l'élégance, Miguel Fashion Style a livré une collection puissante et
                  délicate. Portées par nos mannequins d'exception, ses créations ont brillé sur le podium."
                </p>

                {/* Carrousel Miguel Fashion Style */}
                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[
                      "miguel (6).jpg",
                      "miguel (10).jpg",
                      "miguel (12).jpg",
                      "miguel (13).jpg",
                      "miguel (19).jpg",
                      "miguel (21).jpg",
                      "miguel (23).jpg",
                      "miguel (24).jpg",
                      "miguel (25).jpg",
                    ].map((file, i) => (
                      <div key={i} className="flex-shrink-0">
                        <Image
                          src={`/${file}`}
                          alt={`Miguel Fashion Style ${i + 1}`}
                          width={250}
                          height={300}
                          className="rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Faran */}
              <div className="bg-gradient-to-r from-rose-50 to-neutral-50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">Faran</h4>
                    <p className="text-neutral-600">Parade des Miss du Gabon</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 italic">
                  "Un moment fort du show : la styliste Faran a accompagné la Parade des Miss du Gabon avec ses
                  créations vibrantes de grâce et de symbolique. Un hommage à la beauté et à la fierté féminine."
                </p>

                {/* Carrousel Faran */}
                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[
                      "faran (7).jpg",
                      "faran (18).jpg",
                      "faran (31).jpg",
                      "faran (45).jpg",
                      "faran (62).jpg",
                      "faran (63).jpg",
                      "faran (72).jpg",
                    ].map((file, i) => (
                      <div key={i} className="flex-shrink-0">
                        <Image
                          src={`/${file}`}
                          alt={`Faran ${i + 1}`}
                          width={250}
                          height={300}
                          className="rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Madame Luc / Abiale */}
              <div className="bg-gradient-to-r from-indigo-50 to-neutral-50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    6
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">Madame Luc / Abiale</h4>
                    <p className="text-neutral-600">Coupes fluides et élégance intemporelle</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 italic">
                  "Des coupes fluides, une allure élégante et intemporelle : Abiale by Madame Luc a marqué les esprits.
                  Un savoir-faire gabonais valorisé avec brio sur le podium."
                </p>

                {/* Carrousel Madame Luc / Abiale */}
                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[
                      "madame Luc.jpg",
                      "madameluc (1).jpg",
                      "madameluc (4).jpg",
                      "madameluc (10).jpg",
                      "madameluc (14).jpg",
                      "madameluc (23).jpg",
                      "madameluc (27).jpg",
                      "madameluc (35).jpg",
                    ].map((file, i) => (
                      <div key={i} className="flex-shrink-0">
                        <Image
                          src={`/${file}`}
                          alt={`Madame Luc / Abiale ${i + 1}`}
                          width={250}
                          height={300}
                          className="rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Brand'O */}
              <div className="bg-gradient-to-r from-orange-50 to-neutral-50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    7
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">Brand'O</h4>
                    <p className="text-neutral-600">Volume, structure et originalité</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 italic">
                  "Du volume, de la structure et une touche d'originalité : le styliste Brand'O a apporté une énergie
                  flamboyante au podium. Les mannequins ont su sublimer ses silhouettes avec caractère."
                </p>

                {/* Carrousel Brand'O */}
                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[
                      "brando.jpg",
                      "brando (10).jpg",
                      "brando (11).jpg",
                      "brando (13).jpg",
                      "brando (17).jpg",
                      "brando (22).jpg",
                      "brando (24).jpg",
                      "brando (25).jpg",
                      "brando (26).jpg",
                      "brando (28).jpg",
                      "brando (34).jpg",
                      "brando (39).jpg",
                      "brando (45).jpg",
                      "brando (50).jpg",
                    ].map((file, i) => (
                      <div key={i} className="flex-shrink-0">
                        <Image
                          src={`/${file}`}
                          alt={`Brand'O ${i + 1}`}
                          width={250}
                          height={300}
                          className="rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tito Style */}
              <div className="bg-gradient-to-r from-teal-50 to-neutral-50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    8
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">Tito Style</h4>
                    <p className="text-neutral-600">Audace urbaine & inspiration afro</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 italic">
                  "Le styliste Tito Style a offert une explosion de créativité. Entre influences street et traditions
                  revisitées, ses pièces ont conquis le public."
                </p>

                {/* Carrousel Tito Style */}
                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[
                      "titostyle (4).jpg",
                      "titostyle (12).jpg",
                      "titostyle (17).jpg",
                      "titostyle (19).jpg",
                      "titostyle (25).jpg",
                      "titostyle (33).jpg",
                      "titostyle (36).jpg",
                      "titostyle (41).jpg",
                      "titostyle (43).jpg",
                      "titostyle (45).jpg",
                      "titostyle (50).jpg",
                      "titostyle (51).jpg",
                      "titostyle (53).jpg",
                    ].map((file, i) => (
                      <div key={i} className="flex-shrink-0">
                        <Image
                          src={`/${file}`}
                          alt={`Tito Style ${i + 1}`}
                          width={250}
                          height={300}
                          className="rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Edele A */}
              <div className="bg-gradient-to-r from-violet-50 to-neutral-50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-violet-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    9
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">Edele A</h4>
                    <p className="text-neutral-600">Final poétique avec groupe mixte</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 italic">
                  "Pour clôturer en beauté la soirée, Edele A a proposé un tableau fort en émotions. Des silhouettes
                  épurées et harmonieuses portées par un groupe mixte de mannequins, dans une mise en scène élégante."
                </p>

                {/* Carrousel Edele A */}
                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[
                      "edelea (3).jpg",
                      "edelea (16).jpg",
                      "edelea (22).jpg",
                      "edelea (24).jpg",
                      "edelea (31).jpg",
                      "edelea (38).jpg",
                      "edelea (40).jpg",
                    ].map((file, i) => (
                      <div key={i} className="flex-shrink-0">
                        <Image
                          src={`/${file}`}
                          alt={`Edele A ${i + 1}`}
                          width={250}
                          height={300}
                          className="rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mannequins Vedettes */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="mb-6 bg-rose-100 text-rose-800 border-rose-200 inline-block rounded px-2 py-1 text-xs font-semibold">Perfect Models Squad 2025</div>
              <h3 className="text-3xl font-bold text-black mb-4">
                Nos <span className="text-amber-500">Mannequins</span> Vedettes
              </h3>
            </div>

            <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
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
              ].map((mannequin, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-lg p-3 text-center hover:bg-amber-50 transition-colors duration-200"
                >
                  <p className="text-sm font-medium text-neutral-700">{mannequin}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partenaires */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-8 mb-24">
            <div className="text-center mb-8">
              <div className="mb-4 bg-amber-500 text-white border-0 inline-block rounded px-2 py-1 text-xs font-semibold">Partenaires Officiels 2025</div>
              <h3 className="text-2xl font-bold text-black">
                Nos <span className="text-amber-600">Collaborateurs</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-amber-800">Golden Partenaire</h4>
                <p className="text-sm text-amber-700">La Gare du Nord</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-amber-800">Photographe</h4>
                <p className="text-sm text-amber-700">Darain Visuals</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Film className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-amber-800">Vidéaste</h4>
                <p className="text-sm text-amber-700">LeGrand TV</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-amber-800">Glam Team</h4>
                <p className="text-sm text-amber-700">Perfect Models</p>
              </div>
            </div>
          </div>

          {/* Revivez la première édition */}
          <div className="text-center">
            <p className="text-lg text-neutral-600 mb-6">
              📸 Revivez la première édition à travers nos images et vidéos disponibles en ligne.
            </p>
            <Button className="bg-black hover:bg-neutral-800 text-white px-8">
              Voir la Galerie 2025
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
