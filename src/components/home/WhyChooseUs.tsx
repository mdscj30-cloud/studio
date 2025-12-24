import { WHY_CHOOSE_US_POINTS } from '@/lib/constants';

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Commitment</h2>
           <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">We are dedicated to fostering growth and success through our core principles.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_POINTS.map((item) => {
            const Icon = item.icon;
            return (
                <div key={item.title} className="p-6 bg-card rounded-lg border border-transparent hover:border-accent hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4 mb-3">
                        <Icon className="w-8 h-8 text-accent shrink-0" />
                        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
