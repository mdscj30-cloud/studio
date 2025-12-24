import Link from 'next/link';
import { NAV_LINKS, SERVICES } from '@/lib/constants';
import { Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const serviceLinks = SERVICES.slice(0, 4);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Bharati Advisors</h3>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner in navigating the complexities of business in India.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
               <li>
                  <Link href="/services" className="text-sm font-semibold text-accent hover:underline">
                    View All Services...
                  </Link>
                </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.filter(l => l.label !== 'Admin').map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 shrink-0" />
                <span className="text-sm text-primary-foreground/80">123 Business Avenue, Corporate Towers, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 shrink-0" />
                <a href="tel:+911234567890" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">+91 123 456 7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 shrink-0" />
                <a href="mailto:contact@bharatiadvisors.com" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">contact@bharatiadvisors.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary/80">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} Bharati Advisors. All Rights Reserved.
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
