import { TEAM_MEMBERS } from '@/lib/constants';
import Image from 'next/image';

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Our Expert Team</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a blend of financial experts, strategic thinkers, and tech innovators from the country's most prestigious institutions and firms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => {
            const Icon = member.icon;
            return (
              <div key={member.category} className="group relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <Image
                  src={member.image}
                  alt={member.category}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={member.imageHint}
                />
                <div className="relative z-20 flex flex-col justify-end h-full p-6 text-white">
                  <div className="bg-accent/80 p-3 rounded-full mb-4 w-fit group-hover:bg-accent transition-colors">
                      <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">{member.category}</h3>
                  <p className="text-sm text-white/80 mt-2">{member.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
