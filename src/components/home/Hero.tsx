'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { findImage } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});


export default function Hero() {
  const heroImage = findImage('hero-background-2');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-20 md:py-32">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-[0.03]"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="relative z-10 text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-primary">
              Strategic Guidance for Ambitious Startups
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              We provide the expert advice and hands-on support you need to navigate challenges, accelerate growth, and achieve your vision.
            </p>
            <Button size="lg" asChild>
                <Link href="/contact">Request a Consultation</Link>
            </Button>
        </div>
        <div className="relative z-10">
            <Card className="max-w-md mx-auto bg-card/80 backdrop-blur-sm border-primary/20">
                <CardHeader>
                    <CardTitle className="text-primary">Partner with Us</CardTitle>
                    <CardDescription>Fill out the form to start a conversation about your startup's future.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input placeholder="Your Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input placeholder="Your Business Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
