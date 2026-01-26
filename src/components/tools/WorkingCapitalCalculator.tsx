'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  currentAssets: z.coerce.number().min(0, 'Current assets must be positive.'),
  currentLiabilities: z.coerce.number().min(0, 'Current liabilities must be positive.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function WorkingCapitalCalculator() {
  const [result, setResult] = useState<number | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentAssets: 500000,
      currentLiabilities: 200000,
    },
  });

  function onSubmit(values: FormValues) {
    const workingCapital = values.currentAssets - values.currentLiabilities;
    setResult(workingCapital);
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Calculator className="text-accent"/> Working Capital Calculator</CardTitle>
          <CardDescription>Quickly assess your company's short-term liquidity and operational health.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="currentAssets"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Current Assets (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., Cash, Receivables, Inventory" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentLiabilities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Current Liabilities (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., Payables, Short-term debt" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" variant="accent">Calculate</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle>Your Working Capital</CardTitle>
          <CardDescription>A key indicator of your short-term financial health.</CardDescription>
        </CardHeader>
        <CardContent>
          {result === null && (
             <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center">
                <Calculator className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your results will appear here.</p>
             </div>
          )}
          {result !== null && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Net Working Capital</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className={cn("text-3xl font-bold", result < 0 ? 'text-destructive' : 'text-green-600')}>
                  ₹{result.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-muted-foreground">
                  {result >= 0 
                    ? 'Positive working capital indicates good short-term liquidity.' 
                    : 'Negative working capital may signal a risk of not meeting short-term obligations.'}
                </p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
