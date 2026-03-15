
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';
import Script from 'next/script';
import { CalComProvider } from '@/components/layout/CalComProvider';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexaconsultancy.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nexa Consultancy | Finance, Tax & Compliance for Startups in India',
    template: '%s | Nexa Consultancy',
  },
  description: 'Nexa Consultancy provides expert finance, tax, and compliance consulting to help startups and growing businesses across India scale with confidence.',
  keywords: ['startup consulting', 'financial consulting for startups', 'tax compliance India', 'CFO services', 'business strategy', 'Nexa Consultancy', 'Bangalore', 'Mumbai', 'Delhi', 'Indore', 'Jaipur', 'Ahmedabad'],
  manifest: '/manifest.json',
  icons: {
    icon: '/Nexalogo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Nexa Consultancy',
    title: 'Nexa Consultancy | Finance, Tax & Compliance for Startups in India',
    description: 'Expert finance, tax, and compliance consulting to help startups and growing businesses across India scale with confidence.',
    images: [
      {
        url: '/Nexalogo.png',
        width: 1200,
        height: 630,
        alt: 'Nexa Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexa Consultancy | Finance, Tax & Compliance for Startups in India',
    description: 'Expert finance, tax, and compliance consulting to help startups and growing businesses across India scale with confidence.',
    images: ['/Nexalogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nexa Consultancy',
  url: siteUrl,
  logo: `${siteUrl}/Nexalogo.png`,
  description: 'Expert finance, tax, and compliance consulting for startups and growing businesses across India.',
  areaServed: ['Bangalore', 'Mumbai', 'Delhi', 'Indore', 'Jaipur', 'Ahmedabad', 'India'],
  serviceType: ['Financial Consulting', 'Tax Compliance', 'CFO Services', 'Startup Advisory'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased font-sans bg-background text-foreground">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RCCM4G1Q63"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RCCM4G1Q63');
          `}
        </Script>
        <CalComProvider />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
