import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const legalLinks = [
      { href: '/terms', label: 'Terms and Conditions' },
      { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">N consulting</h3>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Strategic consulting to help startups navigate challenges and achieve sustainable growth.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Menu</h4>
            <ul className="space-y-2">
              {NAV_LINKS.filter(link => !['Process', 'Portfolio', 'Success Stories'].includes(link.label)).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
                <li>
                  <Link href='/contact' className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    Contact Us
                  </Link>
                </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
             <h4 className="font-semibold mb-4 text-primary-foreground/90">Get in Touch</h4>
             <p className="text-sm text-primary-foreground/80 mb-4">
                Ready to scale your startup? Let's talk.
             </p>
          </div>
        </div>
      </div>
      <div className="bg-primary/80">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} N consulting. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
