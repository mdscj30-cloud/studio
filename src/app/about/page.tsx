
import TeamSection from "@/components/about/TeamSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContentStats from "@/components/about/ContentStats";

export const metadata = {
  title: 'About Us',
  description: 'Learn about Nexa Consultancy\'s professional ethics, structured approach, and commitment to helping startups across India succeed.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | Nexa Consultancy',
    description: 'Learn about Nexa Consultancy\'s professional ethics, structured approach, and commitment to helping startups across India succeed.',
    url: '/about',
  },
};

export default function AboutPage() {
    return (
        <>
            <section className="-mx-container-padding bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
                <div className="container mx-auto text-center py-16 md:py-24">
                    <h1 className="text-4xl md:text-5xl font-bold">About Nexa Consultancy</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Your trusted partner in strategic growth.
                    </p>
                </div>
            </section>

            <div className="container">
                <WhyChooseUs />
                <TeamSection />
            </div>
            <ContentStats />
        </>
    );
}
