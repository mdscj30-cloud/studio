
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { LOCATIONS } from '@/lib/constants';

export const metadata = {
  title: 'Contact Us | Nexa Consultancy',
  description: 'Request a consultation to discuss how Nexa Consultancy can help your startup achieve its goals.',
};

export default function ContactPage() {
  return (
    <>
      <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
        <div className="container mx-auto text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            We're ready to help you navigate your startup's journey. Reach out for a strategic consultation.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
              <div className="bg-muted/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Offices & Information</h3>
                <ul className="grid sm:grid-cols-2 gap-8">
                    {LOCATIONS.map(location => (
                        <li key={location.name} className="flex items-start">
                            <MapPin className="w-6 h-6 mr-4 mt-1 shrink-0 text-accent" />
                            <div>
                                <h4 className="font-semibold">{location.name}</h4>
                            </div>
                        </li>
                    ))}
                    <li className="flex items-start">
                        <Phone className="w-6 h-6 mr-4 mt-1 shrink-0 text-accent" />
                        <div>
                            <h4 className="font-semibold">Phone</h4>
                            <a href="tel:+911234567890" className="text-sm text-foreground/80 hover:text-primary transition-colors">+91 123 456 7890</a>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Mail className="w-6 h-6 mr-4 mt-1 shrink-0 text-accent" />
                        <div>
                            <h4 className="font-semibold">Email</h4>
                            <a href="mailto:contact@nconsulting.com" className="text-sm text-foreground/80 hover:text-primary transition-colors">contact@nconsulting.com</a>
                        </div>
                    </li>
                    <li className="flex items-start col-span-1 sm:col-span-2 justify-center">
                        <div className="flex items-start">
                            <Clock className="w-6 h-6 mr-4 mt-1 shrink-0 text-accent" />
                            <div>
                                <h4 className="font-semibold">Business Hours</h4>
                                <p className="text-sm text-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                            </div>
                        </div>
                    </li>
                </ul>
              </div>
          </div>
      </section>
    </>
  );
}
