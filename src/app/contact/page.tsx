import { ContactForm } from './ContactForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | N consulting',
  description: 'Request a consultation to discuss how N consulting can help your startup achieve its goals.',
};

const locations = [
    { name: 'Bangalore (HQ)', address: '123 Business Avenue, Startup City, Bangalore 560102' },
    { name: 'Mumbai', address: '456 Commerce Drive, Financial District, Mumbai 400051' },
    { name: 'Delhi', address: '789 Innovation Plaza, Tech Park, New Delhi 110001' },
    { name: 'Indore', address: '101 Growth Street, Business Hub, Indore 452001' },
    { name: 'Jaipur', address: '212 Heritage Lane, Pink City, Jaipur 302001' },
    { name: 'Ahmedabad', address: '333 Enterprise Way, GIFT City, Ahmedabad 382355' },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-32 2xl:-mx-40 -ml-32">
        <div className="container text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            We're ready to help you navigate your startup's journey. Reach out for a strategic consultation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold text-primary mb-2">Request a Consultation</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and one of our advisors will contact you to schedule a discussion.
              </p>
              <ContactForm />
            </div>
            <div className="md:col-span-2">
              <div className="bg-muted/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Offices</h3>
                <ul className="space-y-6">
                    {locations.map(location => (
                        <li key={location.name} className="flex items-start">
                            <MapPin className="w-6 h-6 mr-4 mt-1 shrink-0 text-accent" />
                            <div>
                                <h4 className="font-semibold">{location.name}</h4>
                                <p className="text-sm text-foreground/80">{location.address}</p>
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
                    <li className="flex items-start">
                        <Clock className="w-6 h-6 mr-4 mt-1 shrink-0 text-accent" />
                        <div>
                            <h4 className="font-semibold">Business Hours</h4>
                            <p className="text-sm text-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        </div>
                    </li>
                </ul>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
