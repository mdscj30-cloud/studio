import Image from 'next/image';
import { findImage } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Medal, Handshake, Shield, Target } from 'lucide-react';

const coreValues = [
    {
        icon: Medal,
        title: "Ethical Foundation",
        description: "Our advisory is built on an unwavering commitment to professional ethics and integrity. We prioritize your long-term interests, ensuring every recommendation is transparent, compliant, and responsible."
    },
    {
        icon: Handshake,
        title: "Long-Term Partnerships",
        description: "We are not just consultants; we are partners in your growth journey. We invest time to understand your business deeply, fostering long-term relationships built on mutual trust and shared objectives."
    },
    {
        icon: Target,
        title: "Structured Advisory Approach",
        description: "Discipline and structure are at the core of our methodology. We employ rigorous, data-driven frameworks to diagnose challenges and engineer solutions that are not just strategic but also practical and implementable."
    },
    {
        icon: Shield,
        title: "Confidentiality and Trust",
        description: "The confidentiality of your strategic and financial information is paramount. We adhere to the strictest protocols to protect your data, building a foundation of absolute trust and accountability."
    }
]

export const metadata = {
  title: 'About Bharati Advisors | Our Mission and Values',
  description: 'Learn about Bharati Advisors, our commitment to ethical consulting, our structured advisory approach, and our focus on building long-term client partnerships in India.',
};

export default function AboutPage() {
    const aboutImage = findImage('about-us-main');
    const leadership1 = findImage('leadership-1');
    const leadership2 = findImage('leadership-2');

    return (
        <>
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">About Bharati Advisors</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Forging India's Future, One Business at a Time.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                             <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Mission: Disciplined Counsel for Sustainable Growth</h2>
                             <div className="space-y-4 text-lg text-foreground/80">
                                <p>Bharati Advisors was founded on a simple, powerful principle: to provide Indian enterprises with the same caliber of strategic and financial counsel typically reserved for large multinational corporations. We recognized a critical need for advisory services that combine deep domain expertise with an unwavering ethical compass and a practical, results-oriented approach.</p>
                                <p>Our mission is to serve as the strategic architects for our clients, helping them build resilient organizations, navigate regulatory complexity, and achieve sustainable, long-term value. We are committed to empowering founders, CXOs, and business leaders with the clarity and confidence to make critical decisions.</p>
                             </div>
                        </div>
                        {aboutImage && (
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <Image 
                                    src={aboutImage.imageUrl}
                                    alt={aboutImage.description}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                    data-ai-hint={aboutImage.imageHint}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-muted/50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                        <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                            The principles that guide every engagement and define our character.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {coreValues.map((value) => {
                            const Icon = value.icon
                            return (
                                <Card key={value.title} className="bg-card">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <Icon className="w-8 h-8 text-accent"/>
                                        <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-foreground/70">{value.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
