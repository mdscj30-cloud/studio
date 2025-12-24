import WhyChooseUs from "@/components/home/WhyChooseUs";

export const metadata = {
  title: 'About Us | N consulting',
  description: 'Learn about our firm\'s professional ethics, structured approach, and commitment to client partnerships.',
};

export default function AboutPage() {
    return (
        <>
            <section className="-mx-32 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x text-primary-foreground">
                <div className="container text-center py-16 md:py-24 pl-32">
                    <h1 className="text-4xl md:text-5xl font-bold">About N consulting</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Your trusted partner in strategic growth.
                    </p>
                </div>
            </section>

            <WhyChooseUs />
        </>
    );
}
