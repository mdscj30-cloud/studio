
import { Rocket, ShoppingBag, Banknote, Factory } from 'lucide-react';

export interface IndustryFinancePage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  industry: string;
  Icon: React.ElementType;
  problem: {
    title: string;
    content: string[]; // array of paragraphs
  };
  solution: {
    title: string;
    content: string[]; // array of paragraphs
  };
  keyConsiderations: {
    title: string;
    points: string[]; // list of points
  };
  relatedServices: string[]; // slugs of services
  relatedGlossaryTerms: string[]; // slugs of glossary terms
}

export const INDUSTRY_FINANCE_PAGES: IndustryFinancePage[] = [
    {
        slug: 'finance-for-saas-startups-india',
        title: 'Finance for SaaS Startups in India | Nexa Consultancy',
        description: 'Complete financial guide for Indian SaaS startups. Master MRR, churn, revenue recognition, and fundraising with expert guidance.',
        h1: 'Finance for SaaS Startups',
        industry: 'SaaS',
        Icon: Rocket,
        problem: {
            title: 'The Unique Financial Challenges of SaaS',
            content: [
                'SaaS isn\'t like traditional business. Your revenue is recurring, your costs are upfront, and your success is measured in acronyms like MRR, LTV, and CAC. Traditional accounting often fails to capture the true health of a subscription business.',
                'Managing deferred revenue, complex GST on subscriptions, and preparing for due diligence requires specialized knowledge that goes beyond basic bookkeeping.'
            ]
        },
        keyConsiderations: {
            title: 'Key Financial Areas for SaaS Success',
            points: [
                'Accurate SaaS Metrics Tracking (MRR, Churn, LTV:CAC, Net Dollar Retention).',
                'Ind AS compliant revenue recognition for subscription billing.',
                'Managing GST on domestic and international subscriptions.',
                'TDS compliance on payments for foreign software and marketing tools.',
                'Building an investor-ready financial model that reflects the SaaS business cycle.'
            ]
        },
        solution: {
            title: 'Our Solution: A Financial Stack Built for SaaS',
            content: [
                'Nexa Consultancy provides an end-to-end financial operating system for SaaS startups. Our Virtual CFOs are experts in SaaS metrics and help you build dashboards that provide real-time insight into your growth engine.',
                'From handling complex revenue recognition to preparing you for your next funding round, we ensure your finances are as scalable as your software.'
            ]
        },
        relatedServices: ['virtual-cfo', 'pitch-deck-financial-modelling', 'regulatory-compliances'],
        relatedGlossaryTerms: ['what-is-saas-software-as-a-service', 'what-is-monthly-recurring-revenue-mrr', 'what-is-churn-rate', 'what-is-net-dollar-retention-ndr', 'what-is-gst-on-subscription-models']
    },
    {
        slug: 'gst-for-d2c-brands-india',
        title: 'GST for D2C Brands in India | A Complete Guide | Nexa Consultancy',
        description: 'Navigate GST for your D2C brand. Understand GST rates, marketplace reconciliation, multi-state registration, and ITC for e-commerce businesses in India.',
        h1: 'GST for D2C & E-commerce Brands',
        industry: 'D2C',
        Icon: ShoppingBag,
        problem: {
            title: 'The E-commerce GST Maze',
            content: [
                'Running a D2C brand means selling across multiple channels—your own Shopify store, Amazon, Flipkart, and more. Each channel has its own fee structure, and every state has its own GST implications.',
                'Reconciling marketplace payments, managing multi-state GST registrations, and claiming correct Input Tax Credit (ITC) on marketing and logistics can quickly become a nightmare, leading to compliance risks and cash flow blockages.'
            ]
        },
        keyConsiderations: {
            title: 'Critical GST Compliance for D2C',
            points: [
                'Correct GST classification (HSN codes) and tax rates for your products.',
                'Multi-state GST registrations based on warehouse locations.',
                'Accurate marketplace reconciliation to account for fees, returns, and TCS.',
                'Managing Input Tax Credit (ITC) on marketing, shipping, and packaging costs.',
                'E-invoicing and E-way bill compliance for B2B sales and stock transfers.'
            ]
        },
        solution: {
            title: 'Our Solution: Seamless E-commerce GST Management',
            content: [
                'We act as your dedicated GST compliance partner. Our team automates marketplace reconciliation, ensures accurate ITC claims, and manages all your state-wise GST filings.',
                'We help you structure your supply chain for tax efficiency, ensuring your D2C brand can scale across India without being bogged down by GST complexity.'
            ]
        },
        relatedServices: ['regulatory-compliances', 'bookkeeping', 'virtual-cfo'],
        relatedGlossaryTerms: ['what-is-d2c-direct-to-consumer', 'what-is-gst-on-e-commerce-operator-services', 'what-is-marketplace-reconciliation', 'what-is-input-tax-credit-itc', 'what-is-multi-state-gst']
    },
    {
        slug: 'finance-for-fintech-startups-india',
        title: 'Finance & Compliance for FinTech Startups in India | Nexa Consultancy',
        description: 'Expert financial management for FinTechs. We handle RBI/SEBI compliance, nodal account management, transaction reconciliation, and investor reporting.',
        h1: 'Finance for FinTech Startups',
        industry: 'FinTech',
        Icon: Banknote,
        problem: {
            title: 'The High-Stakes World of FinTech Finance',
            content: [
                'In FinTech, finance isn\'t just a back-office function—it\'s part of the product. Your business model is built on transactions, and every transaction has a compliance implication.',
                'Managing regulatory reporting to the RBI or SEBI, ensuring transaction-level reconciliation, and maintaining robust data security protocols requires a level of financial rigor far beyond that of a typical startup.'
            ]
        },
        keyConsiderations: {
            title: 'Essential Financial & Compliance Pillars for FinTech',
            points: [
                'Adherence to RBI guidelines for Payment Aggregators, P2P, or other licenses.',
                'Meticulous management and reconciliation of nodal or escrow accounts.',
                'Robust processes for KYC, AML, and transaction monitoring.',
                'Financial statement preparation for stringent regulatory audits.',
                'Building a financial model that accounts for complex transaction-based revenue streams.'
            ]
        },
        solution: {
            title: 'Our Solution: Your Embedded FinTech Finance Team',
            content: [
                'Our Virtual CFOs have deep expertise in the Indian FinTech landscape. We build and manage financial systems that are compliant by design.',
                'We handle everything from daily reconciliation to preparing your statutory reports, giving you, your investors, and the regulators confidence in your financial operations.'
            ]
        },
        relatedServices: ['virtual-cfo', 'regulatory-compliances', 'investor-due-diligence'],
        relatedGlossaryTerms: ['what-is-fintech', 'what-is-payment-aggregator-pa', 'what-is-kyc-for-p2p-lending-platforms', 'what-is-data-localization-for-payment-aggregators', 'what-is-nodal-account']
    },
    {
        slug: 'finance-for-manufacturing-startups-india',
        title: 'Finance for Manufacturing Startups in India | Nexa Consultancy',
        description: 'Specialized financial services for manufacturing startups. We manage inventory costing, BOM tracking, job work accounting, and working capital optimization.',
        h1: 'Finance for Manufacturing Startups',
        industry: 'Manufacturing',
        Icon: Factory,
        problem: {
            title: 'The Complexity of Manufacturing Finance',
            content: [
                'Manufacturing involves managing physical goods, which adds layers of financial complexity. Tracking the cost of raw materials, work-in-progress, and finished goods is critical for accurate financial reporting and pricing.',
                'Managing inventory, calculating the true cost of production (including overheads), and optimizing working capital are significant challenges for new manufacturing startups.'
            ]
        },
        keyConsiderations: {
            title: 'Key Financial Areas for Manufacturing',
            points: [
                'Implementing a robust inventory costing method (e.g., FIFO, Weighted Average).',
                'Creating and managing a Bill of Materials (BOM) for accurate product costing.',
                'Proper accounting for job work and subcontracting processes.',
                'Analysis of factory overheads and their allocation to product costs.',
                'Managing working capital, especially inventory and receivables, to maintain liquidity.'
            ]
        },
        solution: {
            title: 'Our Solution: Bringing Clarity to the Factory Floor',
            content: [
                'Our finance and accounting services are tailored for the manufacturing sector. We implement systems to track inventory and costs accurately, from raw material purchase to finished goods sale.',
                'We provide reports that give you clear visibility into your product margins, production variances, and working capital cycle, enabling you to optimize operations and improve profitability.'
            ]
        },
        relatedServices: ['bookkeeping', 'virtual-cfo', 'regulatory-compliances'],
        relatedGlossaryTerms: ['what-is-manufacturing', 'what-is-bill-of-materials-bom', 'what-is-cost-of-goods-sold-cogs', 'what-is-inventory-turnover', 'what-is-working-capital']
    }
];
