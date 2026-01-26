
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { LOCATIONS } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RequestConsultation } from '@/components/layout/PartnerWithUs';

export const metadata = {
  title: 'Contact Us | Nexa Consultancy',
  description: 'Request a consultation to discuss how Nexa Consultancy can help your startup achieve its goals in Bangalore, Mumbai, Delhi, and across India.',
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
          <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <Card className="bg-muted/50">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">Get in Touch</CardTitle>
                        <CardDescription>Our team is available to answer your questions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-6">
                             <li className="flex items-start">
                                <Phone className="w-6 h-6 mr-4 mt-1 shrink-0 text-accent" />
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <a href="tel:+919131540853" className="text-sm text-foreground/80 hover:text-primary transition-colors">+91 9131540853</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-6 h-6 mr-4 mt-1 shrink-0 text-accent" />
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <a href="mailto:hello@nexaconsultancy.com" className="text-sm text-foreground/80 hover:text-primary transition-colors">hello@nexaconsultancy.com</a>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <Clock className="w-6 h-6 mr-4 mt-1 shrink-0 text-accent" />
                                <div>
                                    <h4 className="font-semibold">Business Hours</h4>
                                    <p className="text-sm text-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">Our Presence</CardTitle>
                        <CardDescription>Serving startups from key hubs across India.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {LOCATIONS.map(location => (
                                <li key={location.name} className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-3 shrink-0 text-accent" />
                                    <span className='font-medium'>{location.name}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-muted-foreground mt-4">While we have a presence in these cities, we operate on a remote-first basis to serve clients across India and globally.</p>
                    </CardContent>
                </Card>

              </div>
          </div>
      </section>
      <RequestConsultation />
    </>
  );
}
