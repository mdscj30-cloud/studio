import { Calculator, CheckSquare, Presentation, Percent, Users, CircleDollarSign, Wallet, TrendingUp } from 'lucide-react';

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
    Icon: TrendingUp,
    component: 'SaaSCalculator',
  },
    {
    slug: 'breakeven-point-calculator',
    title: 'Breakeven Point Calculator',
    description: 'Determine the sales volume required to cover your costs and start generating a profit. A fundamental tool for any business.',
    Icon: CircleDollarSign,
    component: 'BreakevenCalculator',
  },
  {
    slug: 'esop-dilution-calculator',
    title: 'ESOP Dilution Calculator',
    description: 'Model how creating or increasing an Employee Stock Option Pool (ESOP) will impact the ownership percentage of founders and existing shareholders.',
    Icon: Users,
    component: 'EsopCalculator',
  },
    {
    slug: 'working-capital-calculator',
    title: 'Working Capital Calculator',
    description: 'Quickly calculate your company\'s working capital to assess its short-term operational liquidity and financial health.',
    Icon: Wallet,
    component: 'WorkingCapitalCalculator',
  },
    {
    slug: 'compound-interest-calculator',
    title: 'Compound Interest Calculator',
    description: 'Project the future value of your investments or savings with our compound interest calculator. Understand the power of compounding over time.',
    Icon: TrendingUp,
    component: 'CompoundInterestCalculator',
  },
  {
    slug: 'gst-late-fee-calculator',
    title: 'GST Late Fee Calculator',
    description: 'Calculate the potential penalty for delayed filing of GSTR-1 and GSTR-3B returns to understand the cost of non-compliance.',
    Icon: Percent,
    component: 'GstCalculator',
  },
  {
    slug: 'fundraising-due-diligence-checklist',
    title: 'Fundraising Due Diligence Checklist',
    description: 'An interactive checklist to ensure you have all the necessary documents and information ready for investor due diligence.',
    Icon: CheckSquare,
    component: 'DueDiligenceChecklist',
  },
];
