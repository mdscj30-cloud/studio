'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp, TrendingDown, Scale } from 'lucide-react';
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  arpa: z.coerce.number().min(1, 'ARPA must be positive.'),
  grossMargin: z.coerce.number().min(0).max(100, 'Gross margin must be between 0 and 100.'),
  churnRate: z.coerce.number().min(0.1, 'Churn rate must be positive.').max(100, 'Churn rate cannot exceed 100.'),
  salesMarketingSpend: z.coerce.number().min(0, 'Spend must be positive.'),
  newCustomers: z.coerce.number().min(1, 'Must have at least one new customer.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function SaaSCalculator() {
  const [result, setResult] = useState<{ ltv: number; cac: number; ratio: number } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      arpa: 5000,
      grossMargin: 80,
      churnRate: 5,
      salesMarketingSpend: 1000000,
      newCustomers: 100,
    },
  });

  function onSubmit(values: FormValues) {
    const ltv = (values.arpa * (values.grossMargin / 100)) / (values.churnRate / 100);
    const cac = values.salesMarketingSpend / values.newCustomers;
    const ratio = ltv / cac;
    setResult({ ltv, cac, ratio });
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Calculator className="text-accent"/> SaaS Unit Economics</CardTitle>
          <CardDescription>Enter your metrics to calculate LTV, CAC, and the all-important LTV:CAC ratio.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <p className="font-semibold text-primary">Customer Lifetime Value (LTV) Inputs</p>
              <div className="grid sm:grid-cols-3 gap-4">
                <FormField control={form.control} name="arpa" render={({ field }) => (<FormItem><FormLabel>ARPA (₹)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="grossMargin" render={({ field }) => (<FormItem><FormLabel>Gross Margin (%)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="churnRate" render={({ field }) => (<FormItem><FormLabel>Monthly Churn (%)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
              </div>

              <Separator />
              
              <p className="font-semibold text-primary">Customer Acquisition Cost (CAC) Inputs</p>
               <div className="grid sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="salesMarketingSpend" render={({ field }) => (<FormItem><FormLabel>Total S&M Spend (₹)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="newCustomers" render={({ field }) => (<FormItem><FormLabel>New Customers Acquired</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
              </div>

              <Button type="submit" className="w-full" variant="accent">Calculate</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle>Your SaaS Metrics</CardTitle>
          <CardDescription>Analysis of your business viability based on the inputs provided.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {result === null && (
             <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center">
                <Calculator className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your results will appear here after calculation.</p>
             </div>
          )}
          {result !== null && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">LTV</CardTitle></CardHeader>
                  <CardContent><div className="text-2xl font-bold">₹{result.ltv.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div></CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">CAC</CardTitle></CardHeader>
                  <CardContent><div className="text-2xl font-bold">₹{result.cac.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div></CardContent>
                </Card>
              </div>
              <Card className={cn(result.ratio < 3 ? 'border-destructive' : 'border-green-500')}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">LTV to CAC Ratio</CardTitle>
                  <Scale className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className={cn("text-3xl font-bold", result.ratio < 3 ? 'text-destructive' : 'text-green-500')}>
                    {result.ratio.toFixed(2)} : 1
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {result.ratio < 1 && 'Unsustainable. You are losing money on each customer.'}
                    {result.ratio >= 1 && result.ratio < 3 && 'Needs improvement. Your model may not be profitable or scalable.'}
                    {result.ratio >= 3 && 'Healthy! You have a viable and scalable business model.'}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
