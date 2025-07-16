"use client";

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Crown, Users, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useState } from "react";

export default function MannequinsPage() {
  const [search, setSearch] = useState("");

  // Listes enrichies avec distinctions
  const femaleModels = [
    { name: "Noemi Kim", distinction: "Mannequin phare, ambassadrice Racines & Modernité" },
    { name: "Nynelle", distinction: "Première dauphine Miss Casino Croisette, Femmes Actives du Gabon" },
    { name: "Raida", distinction: "" },
    { name: "Eunice", distinction: "" },
    { name: "Diane Vanessa", distinction: "" },
    { name: "Juliana Jodelle", distinction: "" },
    { name: "Danara", distinction: "" },
    { name: "Mirabelle (Miss Tourisme)", distinction: "Miss Tourisme" },
    { name: "AJ Caramela", distinction: "" },
    { name: "Priscilia", distinction: "" },
    { name: "Flora", distinction: "" },
    { name: "Stecy", distinction: "" },
    { name: "Khelany", distinction: "" },
    { name: "Sadia", distinction: "" },
    { name: "Léa Danielle", distinction: "" },
    { name: "Cassandra", distinction: "" },
    { name: "Lyne", distinction: "" },
    { name: "Sephora", distinction: "" },
    { name: "Venusia", distinction: "" },
    { name: "Ruth Jussy", distinction: "Meilleur Mannequin Espoir du Gabon, Miss Tourisme Ogooué-Maritime" },
  ];

  const maleModels = [
    { name: "Pablo", distinction: "" },
    { name: "Moustapha", distinction: "" },
    { name: "Donatien", distinction: "" },
    { name: "Osée", distinction: "" },
    { name: "Rosnel", distinction: "" },
  ];

  // Définir les mensurations connues
  const measurements = {
    cassandra: {
      "Épaules": "43 cm",
      "Poitrine": "82 cm",
      "Tour de taille": "70 cm",
      "Hanches": "95 cm",
    },
    stecy: {
      "Épaules": "46 cm",
      "Poitrine": "85 cm",
      "Tour de taille": "72 cm",
      "Hanches": "97 cm",
    },
    juliana: {
      "Épaules": "44 cm",
      "Poitrine": "86 cm",
      "Tour de taille": "72 cm",
      "Hanches": "97 cm",
    },
    merveille: {
      "Épaules": "46 cm",
      "Poitrine": "84 cm",
      "Tour de taille": "66 cm",
      "Hanches": "96 cm",
    },
    sephora: {
      "Épaules": "42 cm",
      "Poitrine": "76 cm",
      "Tour de taille": "66 cm",
      "Hanches": "85 cm",
    },
    eunice: {
      "Épaules": "44 cm",
      "Poitrine": "84 cm",
      "Tour de taille": "68 cm",
      "Hanches": "94 cm",
    },
    nynelle: {
      "Épaules": "42 cm",
      "Poitrine": "83 cm",
      "Tour de taille": "65 cm",
      "Hanches": "88 cm",
    },
    duchesse: {
      "Épaules": "50 cm",
      "Poitrine": "86 cm",
      "Tour de taille": "96 cm",
      "Hanches": "97 cm",
    },
    sadia: {
      "Épaules": "47 cm",
      "Poitrine": "96 cm",
      "Tour de taille": "65 cm",
      "Hanches": "88 cm",
    },
    rosnel: {
      "Épaules": "59 cm",
      "Poitrine": "98 cm",
      "Tour de taille": "82 cm",
      "Cuisse": "60 cm",
      "Longueur pantalon": "108 cm",
      "Manche": "34 cm",
      "Longueur manche": "68 cm",
      "Confection": "M",
    },
    donatien: {
      "Épaules": "51 cm",
      "Poitrine": "86 cm",
      "Tour de taille": "73 cm",
      "Cuisse": "58 cm",
      "Longueur pantalon": "99 cm",
      "Manche": "32 cm",
      "Longueur manche": "69 cm",
      "Confection": "S/M",
    },
    roslykof: {
      "Épaules": "-",
      "Poitrine": "-",
      "Tour de taille": "-",
      "Cuisse": "-",
      "Longueur pantalon": "-",
      "Manche": "-",
      "Longueur manche": "-",
      "Confection": "-",
    },
    davy: {
      "Épaules": "-",
      "Poitrine": "-",
      "Tour de taille": "-",
      "Cuisse": "-",
      "Longueur pantalon": "-",
      "Manche": "-",
      "Longueur manche": "-",
      "Confection": "-",
    },
  };
  // Mensurations par défaut
  const defaultF = {
    "Épaules": "44 cm",
    "Poitrine": "84 cm",
    "Tour de taille": "68 cm",
    "Hanches": "94 cm",
  };
  const defaultM = {
    "Épaules": "52 cm",
    "Poitrine": "92 cm",
    "Tour de taille": "80 cm",
    "Cuisse": "58 cm",
    "Longueur pantalon": "104 cm",
    "Manche": "33 cm",
    "Longueur manche": "67 cm",
    "Confection": "M",
  };

  // Correction du typage de getKey
  const getKey = (name: string): keyof typeof measurements => name.toLowerCase().split(" ")[0].replace(/[^a-z]/g, "") as keyof typeof measurements;

  // Recherche filtrée
  const filteredFemales = femaleModels.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));
  const filteredMales = maleModels.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));

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
                <Input placeholder="Rechercher un mannequin..." className="pl-10" value={search} onChange={e => setSearch(e.target.value)} />
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
              <p className="text-neutral-500">{filteredFemales.length} talents féminins</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {filteredFemales.map((model, index) => {
              const key = getKey(model.name);
              const mensu = measurements[key] || defaultF;
              const normalized = model.name
                .toLowerCase()
                .replace(/\s*\(.*\)/, "")
                .replace(/[^a-z0-9]/g, "");
              const files = [
                "noemi.jpg", "noemi2.jpg", "noemi3.jpg", "noemi4.jpg", "noemi5.jpg",
                "flora.jpg", "flora2.jpg", "flora3.jpg", "flora4.jpg", "flora5.jpg",
                "diane.jpg", "danara.jpg", "mirabelle.jpg", "mirabelle2.jpg",
                "cassandra.jpg", "cassandra2.jpg", "cassandra3.jpg",
                "stecy.jpg", "stecy2.jpg", "stecy3.jpg", "stecy4.jpg",
                "khelany.jpg", "khelany2.jpg", "khelany3.jpg",
                "sadia.jpg", "sephora.jpg", "ruth.jpg", "aj2.jpg",
                // ...ajouter tous les fichiers pertinents
              ];
              const allPhotos = files.filter(f => f.startsWith(normalized));
              const photoList = allPhotos.length > 0 ? allPhotos.map(f => `/${f}`) : ["/placeholder.svg?height=400&width=300"];
              return (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    {photoList.length > 1 ? (
                      <Carousel className="w-full">
                        <CarouselContent>
                          {photoList.map((src, i) => (
                            <CarouselItem key={i}>
                              <Image
                                src={src}
                                alt={model.name}
                                width={300}
                                height={400}
                                className="object-cover w-full h-[400px]"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    ) : (
                      <Image
                        src={photoList[0]}
                        alt={model.name}
                        width={300}
                        height={400}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">{model.name}</h3>
                      <p className="text-sm text-neutral-200">Editorial • Runway • Commercial</p>
                      <ul className="text-xs mt-2 space-y-1 text-neutral-200">
                        {Object.entries(mensu).map(([k, v]) => (
                          <li key={k}><b>{k}</b> : {String(v)}</li>
                        ))}
                      </ul>
                      {model.distinction && <p className="text-xs mt-2 text-amber-200">{model.distinction}</p>}
                    </div>
                    {model.name.includes("Miss Tourisme") && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-amber-500 text-white border-0">
                          <Crown className="h-3 w-3 mr-1" />
                          Miss
                        </Badge>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
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
              <p className="text-neutral-500">{filteredMales.length} talents masculins</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {filteredMales.map((model, index) => {
              const key = getKey(model.name);
              const mensu = measurements[key] || defaultM;
              const normalized = model.name
                .toLowerCase()
                .replace(/\s*\(.*\)/, "")
                .replace(/[^a-z0-9]/g, "");
              const files = [
                "donatien.jpg", "donatien2.jpg", "osée.jpg", "rosnel.jpg", "rosnel2.jpg", "rosnel3.jpg", "pablo.jpg", "moustapha.jpg",
                // ...ajouter tous les fichiers pertinents
              ];
              const allPhotos = files.filter(f => f.startsWith(normalized));
              const photoList = allPhotos.length > 0 ? allPhotos.map(f => `/${f}`) : ["/placeholder.svg?height=500&width=300"];
              return (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    {photoList.length > 1 ? (
                      <Carousel className="w-full">
                        <CarouselContent>
                          {photoList.map((src, i) => (
                            <CarouselItem key={i}>
                              <Image
                                src={src}
                                alt={model.name}
                                width={300}
                                height={500}
                                className="object-cover w-full h-[500px]"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    ) : (
                      <Image
                        src={photoList[0]}
                        alt={model.name}
                        width={300}
                        height={500}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">{model.name}</h3>
                      <p className="text-sm text-neutral-200">Editorial • Runway • Commercial</p>
                      <ul className="text-xs mt-2 space-y-1 text-neutral-200">
                        {Object.entries(mensu).map(([k, v]) => (
                          <li key={k}><b>{k}</b> : {String(v)}</li>
                        ))}
                      </ul>
                      {model.distinction && <p className="text-xs mt-2 text-amber-200">{model.distinction}</p>}
                    </div>
                  </div>
                </Card>
              );
            })}
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
