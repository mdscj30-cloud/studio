
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';
import Script from 'next/script';
import { CalComProvider } from '@/components/layout/CalComProvider';

export const metadata: Metadata = {
  title: 'Nexa Consultancy | Strategic Consulting for Startups',
  description: 'Nexa Consultancy provides expert consulting on strategy, finance, and operations to help startups scale and succeed.',
  keywords: ['startup consulting', 'strategic advisory', 'financial consulting for startups', 'business strategy', 'Nexa Consultancy', 'Bangalore', 'Mumbai', 'Delhi', 'Indore', 'Jaipur', 'Ahmedabad'],
  manifest: '/manifest.json',
  icons: {
    icon: '/Nexalogo.png',
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
