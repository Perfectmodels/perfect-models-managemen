import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import ModelsSection from '@/components/ModelsSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ModelsSection />
      <ServicesSection />
    </>
  );
}
