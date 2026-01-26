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
import { Calculator, AlertTriangle } from 'lucide-react';

const formSchema = z.object({
  turnover: z.coerce.number().min(0, 'Turnover must be positive.'),
  daysDelayed: z.coerce.number().min(1, 'Days delayed must be at least 1.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function GstCalculator() {
  const [result, setResult] = useState<{ gstr1: number; gstr3b: number; total: number } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      turnover: 500000,
      daysDelayed: 30,
    },
  });

  function onSubmit(values: FormValues) {
    const isNilReturn = values.turnover === 0;
    const gstr1Penalty = isNilReturn ? Math.min(values.daysDelayed * 20, 500) : Math.min(values.daysDelayed * 50, 5000);
    const gstr3bPenalty = isNilReturn ? Math.min(values.daysDelayed * 20, 500) : Math.min(values.daysDelayed * 50, 10000);
    
    setResult({ gstr1: gstr1Penalty, gstr3b: gstr3bPenalty, total: gstr1Penalty + gstr3bPenalty });
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Calculator className="text-accent"/> GST Late Fee Calculator</CardTitle>
          <CardDescription>Estimate the late filing fee for GSTR-1 and GSTR-3B based on your turnover and delay. Does not include interest.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="turnover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Turnover for the Filing Period (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter 0 for NIL return" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="daysDelayed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Days Delayed</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" variant="accent">Calculate Penalty</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle>Estimated Late Filing Fee</CardTitle>
          <CardDescription>This is an estimate and does not include interest on tax due.</CardDescription>
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
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">GSTR-1 Late Fee</CardTitle></CardHeader>
                <CardContent><div className="text-2xl font-bold">₹{result.gstr1.toLocaleString('en-IN')}</div></CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">GSTR-3B Late Fee</CardTitle></CardHeader>
                <CardContent><div className="text-2xl font-bold">₹{result.gstr3b.toLocaleString('en-IN')}</div></CardContent>
              </Card>
              <Card className="border-destructive">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Estimated Penalty</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-destructive">
                    ₹{result.total.toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-muted-foreground">Note: Interest at 18% p.a. is also applicable on any unpaid tax liability.</p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
