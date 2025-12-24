import Image from 'next/image';
import { findImage } from '@/lib/constants';

const features = [
    {
        title: "End-to-end solution",
        description: "Utilize the advantage of our in-house domain experts who collaborate seamlessly to manage every aspect from data processing to reporting to stakeholders, we have got it all covered. We take care of your book-keeping, compliance, data analytics, secretarial, and legal requirements along with due diligence, fundraising and M&A activities.",
        image: findImage('feature-1')
    },
    {
        title: "Your remote Finance office at one click",
        description: "Outsourcing finance is not an easy decision. To make it transparent, we provide full visibility to your finance activities and access to data room at one click. Data security and confidentiality are our top priorities, so you can trust us and outsource with confidence.",
        image: findImage('feature-2')
    },
    {
        title: "Access your KPI’s - anytime, anywhere",
        description: "You can access valuable data insights from anywhere. Our user-friendly dashboards help you understand your KPI’s effortlessly, managing your cashflows and enables you to make decisions backed by accurate data.",
        image: findImage('feature-3')
    }
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Financial expertise you won't find anywhere else</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Finance is one of the key drivers of your business growth, whether you realise early or in later stage of your business journey.
          </p>
        </div>
        <div className="grid gap-12">
            {features.map((feature, index) => (
                 <div key={feature.title} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''}`}>
                    <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                        <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                        <p className="text-foreground/80">{feature.description}</p>
                    </div>
                    {feature.image && (
                        <div className="rounded-lg overflow-hidden shadow-lg">
                             <Image 
                                src={feature.image.imageUrl}
                                alt={feature.image.description}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                                data-ai-hint={feature.image.imageHint}
                            />
                        </div>
                    )}
                 </div>
            ))}
        </div>
      </div>
    </section>
  );
}
