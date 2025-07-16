import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perfect Models Management | Agence de Mannequins',
  description: 'Agence de mannequins professionnelle spécialisée dans la mode et la publicité',
  keywords: 'agence mannequins, modèles professionnels, défilés, publicité',
  
  openGraph: {
    title: 'Perfect Models Management',
    description: 'Agence de mannequins professionnelle spécialisée dans la mode et la publicité',
    url: 'https://perfectmodels.ga',
    siteName: 'Perfect Models Management',
    images: [
      {
        url: '/logo-pmm.png',
        width: 1200,
        height: 630,
        alt: 'Logo Perfect Models Management'
      }
    ],
    locale: 'fr_FR',
    type: 'website'
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect Models Management',
    description: 'Agence de mannequins professionnelle spécialisée dans la mode et la publicité',
    images: ['/logo-pmm.png']
  },
  
  icons: {
    icon: '/logo-pmm.png',
    apple: '/logo-pmm.png',
    shortcut: '/logo-pmm.png'
  }
};
