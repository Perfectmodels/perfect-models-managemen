"use client";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function EventsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Événement à la Une</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <div className="relative w-full md:w-1/2 h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Affiche.png"
              alt="Perfect Fashion Day"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-lg font-semibold">Perfect Fashion Day - 31 janvier 2026</div>
          </div>
          <div className="flex flex-col items-center md:items-start md:w-1/2">
            <p className="text-lg text-neutral-700 mb-4">Ne manquez pas la nouvelle édition de la Perfect Fashion Day, l’événement mode incontournable au Gabon ! Défilés, concours, talents et surprises vous attendent.</p>
            <Link href="/perfect-fashion-day" className="mb-4 inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-neutral-800 transition-colors">Détails & Inscriptions</Link>
            <Link href="/perfect-fashion-day" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors">
              <Calendar className="h-5 w-5" />
              Voir le calendrier
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 