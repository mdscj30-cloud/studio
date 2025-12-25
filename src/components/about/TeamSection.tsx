import { TEAM_MEMBERS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
              <Card key={member.category} className="flex flex-col text-center transition-all duration-300 border hover:border-accent hover:shadow-xl hover:scale-105">
                 <div className="relative aspect-video w-full rounded-t-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.category}
                      fill
                      className="object-cover"
                      data-ai-hint={member.imageHint}
                    />
                  </div>
                <CardHeader>
                    <div className="mx-auto bg-accent/10 p-3 rounded-full mb-2 w-fit">
                        <Icon className="w-8 h-8 text-accent" />
                    </div>
                  <CardTitle className="text-xl text-primary">{member.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}