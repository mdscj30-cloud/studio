import { DETAILED_SERVICES } from "@/lib/constants";

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Leverage the Benefits of a Full-Stack Finance Team
          </h2>
          <p className="text-lg text-foreground/80 mb-12">
            We are a process-driven and tech-enabled team of experts solving all your financial service needs, from incorporation to exit.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            {DETAILED_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                    <div key={service.title} className="flex flex-col items-center">
                        <div className="flex items-center justify-center rounded-full bg-primary/10 h-16 w-16 mb-2">
                           <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-sm text-primary">{service.title}</h3>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
