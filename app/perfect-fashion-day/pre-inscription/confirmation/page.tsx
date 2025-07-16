"use client";

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Calendar, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPreInscription() {
  return (
    <main>
      <section className="py-24 bg-beige text-noir min-h-screen flex items-center justify-center">
        <div className="bg-blanc rounded-2xl p-12 shadow-lg text-center max-w-xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-or drop-shadow-xl uppercase tracking-wide">Merci !</h1>
          <p className="text-xl text-noir/80 mb-6">Votre pré-inscription au Perfect Fashion Day a bien été prise en compte.</p>
          <p className="text-lg text-noir/70 mb-8">Nous vous contacterons prochainement avec toutes les informations nécessaires.</p>
          <span className="inline-block badge-evt text-base font-bold px-6 py-2">Événement</span>
        </div>
      </section>
      <style jsx global>{`
        .badge-evt {
          background: #D4AF37;
          color: #fff;
          font-size: 1rem;
          border-radius: 12px;
          padding: 4px 16px;
          animation: blink 1.5s infinite alternate;
        }
        @keyframes blink {
          0% { opacity: 1; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </main>
  );
}
