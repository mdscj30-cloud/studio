'use client';

import { useState, useMemo, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const checklistData = {
    'Corporate': [
        { id: 'corp-1', label: 'Certificate of Incorporation & MOA/AOA' },
        { id: 'corp-2', label: 'Up-to-date Cap Table (on software like Carta/Pulley)' },
        { id: 'corp-3', label: 'All Shareholder Agreements (SHA) & Term Sheets' },
        { id: 'corp-4', label: 'All Board Meeting Minutes, signed' },
        { id: 'corp-5', label: 'All ROC Filings (AOC-4, MGT-7, etc.)' },
        { id: 'corp-6', label: 'List of all company-held domains and trademarks' },
    ],
    'Financial': [
        { id: 'fin-1', label: 'Audited financial statements for all past years' },
        { id: 'fin-2', label: 'Monthly MIS reports for the last 12-24 months' },
        { id: 'fin-3', label: 'Detailed financial model with projections' },
        { id: 'fin-4', label: 'Bank statements for the last 12 months' },
        { id: 'fin-5', label: 'All tax filings (GST, TDS, Income Tax)' },
        { id: 'fin-6', label: 'Details of any outstanding loans or debt' },
    ],
    'Legal & HR': [
        { id: 'hr-1', label: 'Standard employment contract template' },
        { id: 'hr-2', label: 'Signed employment contracts for all current employees' },
        { id: 'hr-3', label: 'Signed IP assignment agreements for all employees & contractors' },
        { id: 'hr-4', label: 'ESOP Plan documents and all grant letters' },
        { id: 'hr-5', label: 'List of all pending or threatened litigation' },
        { id: 'hr-6', label: 'Company policies (POSH, privacy, etc.)' },
    ],
    'Commercial': [
        { id: 'comm-1', label: 'Top 10 customer contracts' },
        { id: 'comm-2', label: 'Standard customer MSA/Terms of Service' },
        { id: 'comm-3', label: 'Top 10 vendor/supplier contracts' },
        { id: 'comm-4', label: 'Partnership or reseller agreements' },
        { id: 'comm-5', label: 'Property lease agreements' },
    ],
    'Product & Tech': [
        { id: 'tech-1', label: 'High-level technical architecture diagram' },
        { id: 'tech-2', label: 'List of all open-source software used and their licenses' },
        { id: 'tech-3', label: 'IP registrations (patents, trademarks, copyrights)' },
        { id: 'tech-4', label: 'Data security and privacy policies & procedures' },
    ]
};

type Category = keyof typeof checklistData;

export default function DueDiligenceChecklist() {
    const allItems = useMemo(() => Object.values(checklistData).flat(), []);
    
    // Initialize state from localStorage if available
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
        if (typeof window === 'undefined') return {};
        const saved = window.localStorage.getItem('dueDiligenceChecklist');
        return saved ? JSON.parse(saved) : {};
    });

    // Persist state to localStorage on change
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('dueDiligenceChecklist', JSON.stringify(checkedItems));
        }
    }, [checkedItems]);

    const handleCheckChange = (id: string, checked: boolean) => {
        setCheckedItems(prev => ({ ...prev, [id]: checked }));
    };

    const checkedCount = useMemo(() => Object.values(checkedItems).filter(Boolean).length, [checkedItems]);
    const progress = useMemo(() => (checkedCount / allItems.length) * 100, [checkedCount, allItems.length]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Due Diligence Readiness</CardTitle>
                <CardDescription>Track your progress in preparing a complete and professional data room for investors.</CardDescription>
                <div className="pt-4">
                    <Progress value={progress} />
                    <p className="text-sm text-muted-foreground mt-2 text-center">{checkedCount} of {allItems.length} items completed ({progress.toFixed(0)}%)</p>
                </div>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" defaultValue={Object.keys(checklistData)} className="w-full">
                    {Object.entries(checklistData).map(([category, items]) => (
                        <AccordionItem value={category} key={category}>
                            <AccordionTrigger className="text-lg font-semibold text-primary">{category}</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4 pt-2">
                                    {items.map(item => (
                                        <div key={item.id} className="flex items-center space-x-3">
                                            <Checkbox 
                                                id={item.id}
                                                checked={!!checkedItems[item.id]}
                                                onCheckedChange={(checked) => handleCheckChange(item.id, !!checked)}
                                            />
                                            <label
                                                htmlFor={item.id}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {item.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
}
