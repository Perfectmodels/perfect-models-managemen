"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const goldMat = "#C9B037";

export default function PerfectFashionDayPage() {
  return (
    <div className="min-h-screen bg-black pt-16 text-white">
      {/* HERO */}
      <section className="py-10 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center uppercase tracking-wide" style={{ color: goldMat }}>
            Perfect Fashion Day
          </h1>
          <p className="text-xl text-white/80 text-center mb-2">
            L’événement annuel incontournable de la mode gabonaise et internationale.
          </p>
        </div>
      </section>

      {/* ÉDITION 1 */}
      <section className="py-8 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2" style={{ color: goldMat }}>Première Édition – 2025</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center mb-6">
            <div className="flex-1 mb-6 md:mb-0">
              <ul className="text-lg space-y-1">
                <li><b>Date :</b> Samedi 25 janvier 2025</li>
                <li><b>Lieu :</b> La Gare du Nord, Libreville</li>
                <li><b>Thème :</b> Racines & Modernité</li>
                <li><b>Maître de cérémonie :</b> Winie Joinna</li>
                <li><b>Promoteur :</b> Parfait Asseko (Manager & Fondateur PMM)</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/Affiche.png" alt="Affiche Perfect Fashion Day 2025" width={320} height={260} className="rounded-xl border border-amber-900/40 shadow-lg" />
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: goldMat }}>Styliste Participants</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-lg">
              <li>AG Style – Tradition et modernité</li>
              <li>VENTEX Custom – Sur-mesure audacieux</li>
              <li>Farel MD – Masculin raffiné</li>
              <li>Madame Luc / Abiale – Élégance intemporelle</li>
              <li>Brand’O – Structure et originalité</li>
              <li>Tito Style – Urban & afro</li>
              <li>Miguel Fashion Style – Sur-mesure puissant</li>
              <li>Faran – Parade Miss du Gabon</li>
              <li>Edele A – Final poétique</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: goldMat }}>Animations & Moments forts</h3>
            <ul className="list-disc pl-6 text-lg space-y-1">
              <li>Slam « Racines et Modernité » par Lady Riaba</li>
              <li>Parade spéciale Miss du Gabon (tenues Faran)</li>
              <li>Remises d’attestations (mannequins anciens, participants)</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: goldMat }}>Mannequins vedettes</h3>
            <p className="text-lg">Juliana Jodelle, AJ Caramela, Osée Jn, Noemi Kim, Flora Hinda, Sadia, Lyne, Diane Vanessa, Donatien, Cassandra, Pablo Zapatero, Sephora Hons, Billy Le Gamin + la Perfect Models Squad</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: goldMat }}>Collaborations associées</h3>
            <ul className="list-disc pl-6 text-lg space-y-1">
              <li>BADŪ Créations (Liban) x AJ Caramela & Julnice Destiny</li>
              <li>Jinaya Concepstore x Cassandra</li>
              <li>Défilé École de Mode Nzeng-Ayong (mannequins PMM)</li>
              <li>Italie-Gabon (Abiale by Madame Luc)</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: goldMat }}>Partenaires, contacts & médias</h3>
            <ul className="text-lg space-y-1">
              <li><b>Partenaire principal :</b> La Gare du Nord</li>
              <li><b>Photographe :</b> Darain Visuals</li>
              <li><b>Maquillage/Coiffure :</b> Perfect Models Glam Team</li>
              <li><b>Email :</b> <span className="text-white">perfectmodels.ga@gmail.com</span></li>
              <li><b>Téléphone :</b> <span className="text-white">+241 074066461</span></li>
              <li><b>Site web :</b> <a href="https://www.perfectmodels.ga" className="underline" style={{ color: goldMat }}>perfectmodels.ga</a></li>
              <li><b>Instagram/Facebook :</b> <span className="text-white">@Perfectmodels.Ga</span></li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: goldMat }}>Hashtags événement</h3>
            <div className="flex flex-wrap gap-2 text-lg">
              <span style={{ color: goldMat }}>#PerfectFashionDay</span>
              <span style={{ color: goldMat }}>#PerfectModelsManagement</span>
              <span style={{ color: goldMat }}>#ModeGabonaise</span>
              <span style={{ color: goldMat }}>#RacinesEtModernité</span>
              <span style={{ color: goldMat }}>#PMMTalent</span>
              <span style={{ color: goldMat }}>#HauteDiplomatieMode</span>
              <span style={{ color: goldMat }}>#MadeInGabon</span>
              <span style={{ color: goldMat }}>#FashionEvent</span>
              <span style={{ color: goldMat }}>#TheFutureIsPerfect</span>
            </div>
          </div>
        </div>
      </section>
      {/* Section édition suivante, etc. à poursuivre... */}
    </div>
  );
}
