
import Link from 'next/link';
import { NAV_LINKS, LOCATIONS } from '@/lib/constants';
import { Linkedin, Twitter, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function Footer() {
  const legalLinks = [
      { href: '/terms', label: 'Terms and Conditions' },
      { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <>
      <section className="bg-muted/50 py-16 md:py-24 -mx-container-padding px-container-padding">
        <div className="container">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-primary">Ready to discuss your startup's future?</h2>
                <p className="text-muted-foreground mt-2 max-w-lg mx-auto mb-6">
                    Request a confidential, no-obligation consultation with our experts.
                </p>
                <Button asChild variant="accent" size="lg">
                    <Link href="/contact">Get In Touch</Link>
                </Button>
            </div>
        </div>
      </section>
      <footer className="bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-left">
            <div className="col-span-2 md:col-span-2 flex flex-col items-start">
              <Link href="/" className="flex items-center gap-2 mb-4">
                  <Image src="/logo-white.png" alt="Nexa Consultancy Logo" width={40} height={40} />
                  <span className="text-xl font-bold text-white">Nexa Consultancy</span>
              </Link>
              <p className="text-sm text-primary-foreground/80 max-w-xs mb-4">
                Strategic consulting to help startups navigate challenges and achieve sustainable growth.
              </p>
              <div className="flex items-center space-x-4">
                  <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
              </div>
            </div>
            <div className='text-left'>
              <h4 className="font-semibold mb-4 text-primary-foreground/90">Menu</h4>
              <ul className="space-y-2">
                {NAV_LINKS.filter(link => !['Process', 'Portfolio', 'Success Stories'].includes(link.label)).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
             <div className='text-left'>
              <h4 className="font-semibold mb-4 text-primary-foreground/90">Locations</h4>
              <ul className="space-y-2">
                {LOCATIONS.map((location) => (
                  <li key={location.name}>
                    <p className="text-sm text-primary-foreground/80 flex items-center justify-start">
                      <MapPin className="w-4 h-4 mr-2 inline-block" />
                      {location.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 text-left">
               <h4 className="font-semibold mb-4 text-primary-foreground/90">Get in Touch</h4>
               <ul className="space-y-2">
                  <li>
                    <Link href='/contact' className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                   {legalLinks.map((link) => (
                      <li key={link.href}>
                          <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                          {link.label}
                          </Link>
                      </li>
                   ))}
               </ul>
            </div>
          </div>
        </div>
        <div className="bg-black/20">
          <div className="container py-4 flex flex-col md:flex-row justify-between items-center text-left">
            <p className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
              © {new Date().getFullYear()} Nexa Consultancy. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
