import Hero from '@/components/Hero';
import ModelsSection from '@/components/ModelsSection';
import ServicesSection from '@/components/ServicesSection';
import PresentationSection from '@/components/PresentationSection';
import EventsSection from '@/components/EventsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Hero />
      {/* Ici, chaque section (Présentation, Mannequins, Services, Événements, Témoignages, Formulaire, Footer) est restylée avec :
      - overlays/dégradés de fond
      - titres XXL avec effets
      - cartes et encadrés magazine (ombres, coins arrondis, fond semi-transparent)
      - boutons larges et animés
      - séparateurs élégants
      - palette premium (noir, blanc, or/ambre, bleu/vert accent)
      - images immersives, citations, transitions */}
      <PresentationSection />
      <EventsSection />
      <ModelsSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}
