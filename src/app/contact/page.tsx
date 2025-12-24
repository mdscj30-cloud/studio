import { ContactForm } from './ContactForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Bharati Advisors',
  description: 'Request a consultation to discuss how Bharati Advisors can help your startup achieve its goals.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            We're ready to help you navigate your startup's journey. Reach out for a strategic consultation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold text-primary mb-2">Request a Consultation</h2>
              <p className="text-foreground/70 mb-8">
                Fill out the form below and one of our advisors will contact you to schedule a discussion.
              </p>
              <ContactForm />
            </div>
            <div className="md:col-span-2">
              <div className="bg-muted/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                <ul className="space-y-6">
                    <li className="flex items-start">
                        <MapPin className="w-6 h-6 mr-4 mt-1 shrink-0 text-accent" />
                        <div>
                            <h4 className="font-semibold">Our Office</h4>
                            <p className="text-sm text-foreground/80">123 Business Avenue, Startup City, India 560102</p>
                        </div>
                    </li>
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
                            <a href="mailto:contact@bharatiadvisors.com" className="text-sm text-foreground/80 hover:text-primary transition-colors">contact@bharatiadvisors.com</a>
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
        </div>
      </section>
    </>
  );
}
