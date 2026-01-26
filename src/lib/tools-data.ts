import { Calculator, CheckSquare, Presentation } from 'lucide-react';

export const TOOLS_DATA = [
  {
    slug: 'startup-burn-rate-runway-calculator',
    title: 'Startup Burn Rate & Runway Calculator',
    description: 'Calculate your net burn and runway to understand how long your startup can survive with its current cash reserves.',
    Icon: Calculator,
    component: 'BurnRateCalculator',
  },
  {
    slug: 'saas-ltv-cac-calculator',
    title: 'SaaS LTV to CAC Ratio Calculator',
    description: 'Analyze the viability of your SaaS business by calculating your Customer Lifetime Value (LTV) and Customer Acquisition Cost (CAC).',
    Icon: Calculator,
    component: 'SaaSCalculator',
  },
  {
    slug: 'fundraising-due-diligence-checklist',
    title: 'Fundraising Due Diligence Checklist',
    description: 'An interactive checklist to ensure you have all the necessary documents and information ready for investor due diligence.',
    Icon: CheckSquare,
    component: 'DueDiligenceChecklist',
  },
];
