'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp, TrendingDown, Hourglass } from 'lucide-react';

const formSchema = z.object({
  cashBalance: z.coerce.number().min(0, 'Cash balance must be positive.'),
  monthlyRevenue: z.coerce.number().min(0, 'Monthly revenue must be positive.'),
  monthlyExpenses: z.coerce.number().min(0, 'Monthly expenses must be positive.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function BurnRateCalculator() {
  const [result, setResult] = useState<{ netBurn: number; runway: number | null } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cashBalance: 10000000,
      monthlyRevenue: 500000,
      monthlyExpenses: 1500000,
    },
  });

  function onSubmit(values: FormValues) {
    const netBurn = values.monthlyExpenses - values.monthlyRevenue;
    const runway = netBurn > 0 ? values.cashBalance / netBurn : null;
    setResult({ netBurn, runway });
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Calculator className="text-accent"/> Input Your Financials</CardTitle>
          <CardDescription>Enter your current cash balance and average monthly income and expenses to calculate your burn rate and runway.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="cashBalance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Cash Balance (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 10000000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="monthlyRevenue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Average Monthly Revenue (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 500000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="monthlyExpenses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Average Monthly Expenses (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 1500000" {...field} />
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
          <CardTitle>Your Results</CardTitle>
          <CardDescription>Here is your calculated burn rate and financial runway.</CardDescription>
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
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{result.netBurn > 0 ? 'Net Burn' : 'Net Profit'}</CardTitle>
                  {result.netBurn > 0 ? <TrendingDown className="h-4 w-4 text-destructive" /> : <TrendingUp className="h-4 w-4 text-green-500" />}
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${result.netBurn > 0 ? 'text-destructive' : 'text-green-500'}`}>
                    ₹{Math.abs(result.netBurn).toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-muted-foreground">per month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Financial Runway</CardTitle>
                  <Hourglass className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  {result.runway !== null ? (
                    <>
                      <div className="text-2xl font-bold">{result.runway.toFixed(1)}</div>
                      <p className="text-xs text-muted-foreground">months until cash runs out</p>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl font-bold text-green-500">Infinite</div>
                      <p className="text-xs text-muted-foreground">You are profitable! (Net burn is not positive)</p>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
