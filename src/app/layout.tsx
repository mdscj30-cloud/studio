import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'N consulting | Strategic Consulting for Startups',
  description: 'N consulting provides expert consulting on strategy, finance, and operations to help startups scale and succeed.',
  keywords: ['startup consulting', 'strategic advisory', 'financial consulting for startups', 'business strategy', 'N consulting']
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-background text-foreground">
        <SidebarProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
               <div className="w-32 hidden md:block" />
               <main className="flex-grow">
                {children}
              </main>
            </div>
            <Footer />
          </div>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
