'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Target } from 'lucide-react';

const formSchema = z.object({
  fixedCosts: z.coerce.number().min(1, 'Fixed costs must be positive.'),
  pricePerUnit: z.coerce.number().min(1, 'Price per unit must be positive.'),
  variableCostPerUnit: z.coerce.number().min(0, 'Variable cost must be positive.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function BreakevenCalculator() {
  const [result, setResult] = useState<{ breakevenUnits: number; contributionMargin: number } | string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fixedCosts: 100000,
      pricePerUnit: 500,
      variableCostPerUnit: 200,
    },
  });

  function onSubmit(values: FormValues) {
    const contributionMargin = values.pricePerUnit - values.variableCostPerUnit;
    if (contributionMargin <= 0) {
      setResult('Price per unit must be greater than variable cost per unit to be profitable.');
      return;
    }
    const breakevenUnits = values.fixedCosts / contributionMargin;
    setResult({ breakevenUnits, contributionMargin });
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Calculator className="text-accent"/> Break-Even Point Calculator</CardTitle>
          <CardDescription>Find the number of units you need to sell to cover all your costs.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fixedCosts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Fixed Costs (per month, ₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 100000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pricePerUnit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Selling Price Per Unit (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="variableCostPerUnit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Variable Cost Per Unit (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 200" {...field} />
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
          <CardTitle>Your Break-Even Analysis</CardTitle>
          <CardDescription>The point where your revenue equals your costs.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {result === null && (
             <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center">
                <Calculator className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your results will appear here after calculation.</p>
             </div>
          )}
           {typeof result === 'string' && (
             <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center p-4 bg-destructive/10 border-l-4 border-destructive text-destructive-foreground rounded-r-lg">
                <p>{result}</p>
             </div>
           )}
          {result !== null && typeof result === 'object' && (
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Contribution Margin Per Unit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ₹{result.contributionMargin.toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-muted-foreground">Profit from each unit sold to cover fixed costs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Break-Even Point</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{Math.ceil(result.breakevenUnits).toLocaleString('en-IN')} Units</div>
                  <p className="text-xs text-muted-foreground">Number of units you need to sell per month to cover all costs.</p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
