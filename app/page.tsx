import Hero from '@/components/Hero';
import ModelsSection from '@/components/ModelsSection';
import ServicesSection from '@/components/ServicesSection';
import PresentationSection from '@/components/PresentationSection';
import EventsSection from '@/components/EventsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const goldMat = "#C9B037";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center uppercase tracking-wide" style={{ color: goldMat }}>Perfect Models Management</h1>
        <Hero />
      </section>
      <section className="bg-black">
        <PresentationSection />
      </section>
      <section className="bg-black">
        <EventsSection />
      </section>
      <section className="bg-black">
        <ModelsSection />
      </section>
      <section className="bg-black">
        <ServicesSection />
      </section>
      <section className="bg-black">
        <TestimonialsSection />
      </section>
    </div>
  );
}
