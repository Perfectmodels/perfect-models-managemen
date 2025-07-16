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
      <PresentationSection />
      <EventsSection />
      <ModelsSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}
