import Link from 'next/link';
import { NAV_LINKS, LOCATIONS } from '@/lib/constants';
import { Linkedin, Twitter, MapPin } from 'lucide-react';

export default function Footer() {
  const legalLinks = [
      { href: '/terms', label: 'Terms and Conditions' },
      { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-left">
          <div className="col-span-2 md:col-span-2 flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4 text-white">N consulting</h3>
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
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center text-left px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} N consulting. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
