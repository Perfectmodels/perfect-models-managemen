import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import ModelsSection from '@/components/ModelsSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ModelsSection />
      <ServicesSection />
    </Layout>
  );
}
