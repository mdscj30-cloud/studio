'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp } from 'lucide-react';

const formSchema = z.object({
  principal: z.coerce.number().min(1, 'Principal must be positive.'),
  rate: z.coerce.number().min(0.1, 'Interest rate must be positive.'),
  years: z.coerce.number().min(1, 'Years must be at least 1.'),
  compounding: z.coerce.number().min(1, 'Compounding frequency is required.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function CompoundInterestCalculator() {
  const [result, setResult] = useState<{ futureValue: number; totalInterest: number } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      principal: 100000,
      rate: 8,
      years: 10,
      compounding: 12,
    },
  });

  function onSubmit(values: FormValues) {
    const P = values.principal;
    const r = values.rate / 100;
    const n = values.compounding;
    const t = values.years;
    const futureValue = P * Math.pow(1 + r / n, n * t);
    const totalInterest = futureValue - P;
    setResult({ futureValue, totalInterest });
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Calculator className="text-accent"/> Compound Interest Calculator</CardTitle>
          <CardDescription>See how your investment can grow over time with the power of compounding.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField control={form.control} name="principal" render={({ field }) => (<FormItem><FormLabel>Initial Principal (₹)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="rate" render={({ field }) => (<FormItem><FormLabel>Annual Interest Rate (%)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="years" render={({ field }) => (<FormItem><FormLabel>Time (Years)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
              </div>
              <FormField
                control={form.control}
                name="compounding"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Compounding Frequency</FormLabel>
                    <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={String(field.value)}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select frequency" /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="1">Annually</SelectItem>
                        <SelectItem value="2">Semi-Annually</SelectItem>
                        <SelectItem value="4">Quarterly</SelectItem>
                        <SelectItem value="12">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
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
          <CardTitle>Your Investment Growth</CardTitle>
          <CardDescription>Projected value based on your inputs.</CardDescription>
        </CardHeader>
        <CardContent>
          {result === null && (
             <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center">
                <Calculator className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your results will appear here.</p>
             </div>
          )}
          {result !== null && (
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Future Value</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">₹{result.futureValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
                  <p className="text-xs text-muted-foreground">Total value of your investment after the selected period.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Total Interest Earned</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹{result.totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
                  <p className="text-xs text-muted-foreground">The power of compounding at work.</p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
