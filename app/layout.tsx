import type { Metadata } from 'next'
import './globals.css'
import Navbar from "@/components/navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo-pmm.png" />
        <link rel="apple-touch-icon" href="/logo-pmm.png" />
        <meta property="og:image" content="/logo-pmm.png" />
        <meta property="og:title" content="Perfect Model Management - Agence de mannequins Gabon" />
        <meta property="og:description" content="Agence de mannequins, casting, formation, événementiel, Gabon, Afrique" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo-pmm.png" />
        <meta name="twitter:title" content="Perfect Model Management - Agence de mannequins Gabon" />
        <meta name="twitter:description" content="Agence de mannequins, casting, formation, événementiel, Gabon, Afrique" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
