import WhyChooseUs from "@/components/home/WhyChooseUs";

export const metadata = {
  title: 'About Us | Bharati Advisors',
  description: 'Learn about our firm\'s professional ethics, structured approach, and commitment to client partnerships.',
};

export default function AboutPage() {
    return (
        <>
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">About Bharati Advisors</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Your trusted partner in strategic growth.
                    </p>
                </div>
            </section>

            <WhyChooseUs />
        </>
    );
}
