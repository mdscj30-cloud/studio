'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Users, PieChart, Plus, Trash } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '../ui/separator';

const shareholderSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  shares: z.coerce.number().min(1, 'Shares must be positive.'),
});

const formSchema = z.object({
  shareholders: z.array(shareholderSchema).min(1, 'At least one shareholder is required.'),
  esopPoolPercent: z.coerce.number().min(1, 'ESOP pool must be at least 1%.').max(50, 'ESOP pool cannot exceed 50%.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function EsopCalculator() {
  const [result, setResult] = useState<{
    preDilutionTotal: number;
    postDilutionTotal: number;
    esopPoolShares: number;
    shareholders: { name: string; pre: number; post: number }[];
  } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shareholders: [
        { name: 'Founder A', shares: 8000 },
        { name: 'Founder B', shares: 2000 },
      ],
      esopPoolPercent: 10,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "shareholders",
  });

  function onSubmit(values: FormValues) {
    const preDilutionTotal = values.shareholders.reduce((acc, s) => acc + s.shares, 0);
    const postDilutionTotal = preDilutionTotal / (1 - values.esopPoolPercent / 100);
    const esopPoolShares = postDilutionTotal - preDilutionTotal;

    const shareholdersResult = values.shareholders.map(s => ({
      name: s.name,
      pre: (s.shares / preDilutionTotal) * 100,
      post: (s.shares / postDilutionTotal) * 100,
    }));

    setResult({ preDilutionTotal, postDilutionTotal, esopPoolShares, shareholders: shareholdersResult });
  }

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Calculator className="text-accent"/> ESOP Dilution Calculator</CardTitle>
          <CardDescription>Model how creating an ESOP pool will affect your cap table and ownership percentages.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <FormLabel>Current Shareholders</FormLabel>
                <div className="space-y-2 mt-2">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex gap-2 items-center">
                      <FormField control={form.control} name={`shareholders.${index}.name`} render={({ field }) => (<FormItem className="flex-1"><FormControl><Input placeholder="Shareholder Name" {...field} /></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={form.control} name={`shareholders.${index}.shares`} render={({ field }) => (<FormItem className="w-28"><FormControl><Input type="number" placeholder="Shares" {...field} /></FormControl><FormMessage /></FormItem>)} />
                      <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)} disabled={fields.length <= 1}><Trash /></Button>
                    </div>
                  ))}
                </div>
                <Button type="button" variant="outline" size="sm" onClick={() => append({ name: '', shares: 0 })} className="mt-2"><Plus className="mr-2"/> Add Shareholder</Button>
              </div>

              <Separator />

              <FormField control={form.control} name="esopPoolPercent" render={({ field }) => (<FormItem><FormLabel>Desired ESOP Pool Size (%)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
              
              <Button type="submit" className="w-full" variant="accent">Calculate Dilution</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3 bg-muted/30">
        <CardHeader>
          <CardTitle>Dilution Analysis</CardTitle>
          <CardDescription>Your cap table before and after creating the ESOP pool.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {result === null && (
             <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center">
                <PieChart className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your dilution analysis will appear here.</p>
             </div>
          )}
          {result !== null && (
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Shareholder</TableHead>
                    <TableHead className="text-right">Pre-Dilution Ownership</TableHead>
                    <TableHead className="text-right">Post-Dilution Ownership</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {result.shareholders.map(s => (
                    <TableRow key={s.name}>
                      <TableCell className="font-medium">{s.name}</TableCell>
                      <TableCell className="text-right">{s.pre.toFixed(2)}%</TableCell>
                      <TableCell className="text-right">{s.post.toFixed(2)}%</TableCell>
                    </TableRow>
                  ))}
                   <TableRow className="bg-primary/10 font-semibold">
                      <TableCell>New ESOP Pool</TableCell>
                      <TableCell className="text-right">0.00%</TableCell>
                      <TableCell className="text-right">{form.getValues('esopPoolPercent').toFixed(2)}%</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 text-center">
                <Card><CardHeader><CardTitle className="text-sm">Total Pre-ESOP Shares</CardTitle><CardDescription className="text-2xl font-bold">{result.preDilutionTotal.toLocaleString('en-IN')}</CardDescription></CardHeader></Card>
                <Card><CardHeader><CardTitle className="text-sm">New ESOP Pool Shares</CardTitle><CardDescription className="text-2xl font-bold">{Math.round(result.esopPoolShares).toLocaleString('en-IN')}</CardDescription></CardHeader></Card>
                <Card><CardHeader><CardTitle className="text-sm">Total Post-ESOP Shares</CardTitle><CardDescription className="text-2xl font-bold">{Math.round(result.postDilutionTotal).toLocaleString('en-IN')}</CardDescription></CardHeader></Card>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
