import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">Contactez-nous</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Parlons de votre <span className="text-amber-500">avenir</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans votre parcours vers
              l'excellence
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Informations de Contact</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Téléphone</div>
                    <div className="text-neutral-600">+241 77 50 79 50</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Email</div>
                    <div className="text-neutral-600">perfectmodels.ga@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Adresse</div>
                    <div className="text-neutral-600">Libreville, Gabon</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Horaires</div>
                    <div className="text-neutral-600">Lun - Ven: 9h - 18h</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <Button size="icon" variant="outline" className="border-neutral-300 bg-transparent hover:bg-amber-50">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="border-neutral-300 bg-transparent hover:bg-amber-50">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-sm text-neutral-600 mt-2">@perfectmodelsga</p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-6">Envoyez-nous un message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Prénom</label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Nom</label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Téléphone</label>
                  <Input type="tel" placeholder="+241 XX XX XX XX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Sujet</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>Devenir mannequin</option>
                    <option>Réserver un mannequin</option>
                    <option>Collaboration</option>
                    <option>Information générale</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                  <textarea
                    className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    rows={4}
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <Button className="w-full bg-black hover:bg-neutral-800 text-white">
                  Envoyer le Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Notre Localisation</h2>
            <p className="text-lg text-neutral-600">Retrouvez-nous au cœur de Libreville</p>
          </div>

          <div className="bg-neutral-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
              <p className="text-neutral-600">Carte interactive disponible prochainement</p>
              <p className="text-sm text-neutral-500 mt-2">Libreville, Gabon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
