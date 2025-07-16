"use client";
import { Star, Users, Camera, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "AG Style",
    role: "Styliste",
    icon: <Star className="h-8 w-8 text-amber-500" />,
    text: "Collaborer avec Perfect Models Management, c'est sublimer mes créations grâce à une équipe de mannequins professionnels, investis et passionnés. L'organisation de la Perfect Fashion Day est exemplaire !"
  },
  {
    name: "Farel MD",
    role: "Styliste",
    icon: <Users className="h-8 w-8 text-blue-500" />,
    text: "L'agence m'a permis de présenter mes collections dans un cadre prestigieux, avec des talents qui valorisent vraiment le travail des créateurs locaux. Une expérience enrichissante à chaque édition."
  },
  {
    name: "Miguel Fashion Style",
    role: "Styliste",
    icon: <Sparkles className="h-8 w-8 text-pink-500" />,
    text: "La collaboration avec PMM est synonyme de professionnalisme et d'innovation. L'équipe sait mettre en valeur chaque détail, du casting à la scène."
  },
  {
    name: "Darain Visuals",
    role: "Photographe principal",
    icon: <Camera className="h-8 w-8 text-green-500" />,
    text: "Travailler avec Perfect Models Management, c'est capturer l'excellence et la diversité. L'ambiance lors de la Perfect Fashion Day est toujours inspirante et dynamique."
  },
  {
    name: "La Gare du Nord",
    role: "Partenaire Lieu",
    icon: <Star className="h-8 w-8 text-amber-500" />,
    text: "Nous sommes fiers d'accueillir les événements de PMM. Leur sérieux et leur créativité font rayonner la mode gabonaise."
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-neutral-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ils nous font confiance</h2>
        <p className="text-lg text-neutral-700 mb-10 max-w-2xl mx-auto">Découvrez ce que nos stylistes et partenaires disent de leur collaboration avec Perfect Models Management lors de la Perfect Fashion Day.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
              <div className="mb-4">{t.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-1">{t.name}</h3>
              <p className="text-sm text-neutral-500 mb-4">{t.role}</p>
              <p className="text-neutral-700 italic">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 