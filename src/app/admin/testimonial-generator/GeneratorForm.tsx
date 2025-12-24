'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { generateClientTestimonial, GenerateClientTestimonialOutput } from '@/ai/flows/generate-client-testimonials';
import { Loader2, Sparkles, Copy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  clientData: z.string().min(50, { message: 'Please provide detailed client data (at least 50 characters).' }),
  industryBenchmarks: z.string().min(20, { message: 'Please provide relevant industry benchmarks (at least 20 characters).' }),
});

export function GeneratorForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState<GenerateClientTestimonialOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientData: '',
      industryBenchmarks: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setOutput(null);
    try {
      const result = await generateClientTestimonial(values);
      setOutput(result);
      toast({
        title: "Testimonial Generated!",
        description: "The AI has crafted a new client testimonial.",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "An error occurred while generating the testimonial. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const copyToClipboard = () => {
    if (output?.testimonial) {
      navigator.clipboard.writeText(output.testimonial);
      toast({
        title: "Copied to Clipboard!",
        description: "The testimonial text has been copied.",
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Input Data</CardTitle>
          <CardDescription>Provide the necessary data to generate the testimonial.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="clientData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Project Data</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Client: Acme Inc, a D2C brand. Objective: Reduce customer acquisition cost. Solution: Implemented our financial modeling for marketing spend. Results: CAC reduced by 15% over 6 months, marketing ROI increased from 3.5x to 5.2x."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industryBenchmarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry Benchmarks</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Average D2C CAC is $25. Typical marketing ROI is 3x. Industry-leading ROI is 5x+."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Testimonial
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card className="bg-muted/30">
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle>Generated Output</CardTitle>
                <CardDescription>Review the AI-generated testimonial below.</CardDescription>
            </div>
             {output && (
                <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                    <Copy className="h-5 w-5" />
                </Button>
             )}
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">AI is crafting the testimonial...</p>
            </div>
          )}
          {!isLoading && !output && (
             <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                <Sparkles className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your generated testimonial will appear here.</p>
             </div>
          )}
          {output && (
            <div className="prose prose-sm max-w-none rounded-md border bg-background p-4 min-h-[300px]">
                <p className='italic'>{output.testimonial}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
