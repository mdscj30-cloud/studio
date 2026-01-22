
import { Briefcase, FileCheck, Landmark, HandCoins, Scale, BookUser, Presentation, Users, DollarSign } from 'lucide-react';

export type ProgrammaticPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  Icon: React.ElementType;
  problem: {
    title: string;
    content: string[]; // array of paragraphs
  };
  solution: {
    title: string;
    content: string[]; // array of paragraphs
  };
  complianceNeed: {
    title: string;
    points: string[]; // list of points
  };
  relatedServices: string[]; // slugs of services
  relatedGlossaryTerms: string[]; // slugs of glossary terms
};


export const PROGRAMMATIC_PAGES_DATA: ProgrammaticPage[] = [
    {
        slug: 'virtual-cfo-for-saas-startups',
        title: 'Virtual CFO for SaaS Startups | Nexa Consultancy',
        description: 'Specialized Virtual CFO services for SaaS startups focusing on metrics, fundraising, and scalable growth. Manage MRR, churn, and LTV with expert financial guidance.',
        h1: 'Virtual CFO for SaaS Startups',
        Icon: Briefcase,
        problem: {
            title: 'The SaaS Scaling Challenge: Beyond the Product',
            content: [
                'Your SaaS product is gaining traction, but your financials are a maze of spreadsheets. You\'re tracking MRR and churn, but are you confident in your LTV:CAC ratio?',
                'As you prepare to raise your Series A, you realize investors speak a different language—one of cohorts, payback periods, and capital efficiency. Your current financial reporting isn\'t providing the strategic insights you need to answer their tough questions.'
            ]
        },
        complianceNeed: {
            title: 'Key Financial Strategy & Compliance Needs',
            points: [
                'Accurate, real-time SaaS metrics (MRR, Churn, Net Dollar Retention).',
                'An investor-ready financial model and compelling pitch deck.',
                'Correct management of deferred revenue under Ind AS.',
                'Robust cash flow forecasting and runway management.',
                'Strategic guidance on pricing, unit economics, and capital efficiency.'
            ]
        },
        solution: {
            title: 'Our Solution: Your Strategic SaaS Finance Partner',
            content: [
                'Nexa Consultancy\'s Virtual CFO service acts as your strategic finance partner. We go beyond bookkeeping to implement robust financial systems and dashboards tailored for the SaaS model.',
                'We build your KPI dashboards, refine your financial models, and help you craft a data-driven narrative for investors, ensuring your financial strategy is as strong as your product.'
            ]
        },
        relatedServices: ['virtual-cfo', 'fundraising', 'pitch-deck-financial-modelling'],
        relatedGlossaryTerms: ['what-is-saas-metrics', 'what-is-annual-recurring-revenue-arr', 'what-is-customer-lifetime-value-ltv-or-clv', 'what-is-churn-rate', 'what-is-net-dollar-retention-ndr']
    },
    {
        slug: 'virtual-cfo-for-fintech-startups',
        title: 'Virtual CFO for FinTech Startups | Nexa Consultancy',
        description: 'Navigate the complex regulatory landscape of FinTech with our expert Virtual CFO services. We manage compliance, investor reporting, and financial strategy for FinTechs in India.',
        h1: 'Virtual CFO for FinTech Startups',
        Icon: Landmark,
        problem: {
            title: 'The FinTech Dilemma: Innovation vs. Regulation',
            content: [
                'Your FinTech platform is innovative, but you\'re operating in one of the most heavily regulated industries. The cost of compliance is high, and a single misstep can lead to crippling fines or loss of license.',
                'You need to maintain investor confidence with crisp financial reporting while navigating the complex rules set by RBI, SEBI, and other bodies. It feels like you need a CFO and a compliance officer rolled into one.'
            ]
        },
        complianceNeed: {
            title: 'Critical Compliance & Financial Needs',
            points: [
                'Adherence to RBI guidelines for Payment Aggregators or P2P lending.',
                'Robust KYC and Anti-Money Laundering (AML) processes.',
                'Management of nodal/escrow accounts and fund flow.',
                'Financials prepared for regulatory audits and reporting.',
                'Data security and localization compliance.'
            ]
        },
        solution: {
            title: 'Our Solution: Embedded Compliance and Financial Strategy',
            content: [
                'Our Virtual CFOs have deep expertise in the FinTech sector. We embed compliance into your financial operations, ensuring everything from revenue recognition to transaction monitoring meets regulatory standards.',
                'We manage your MIS, prepare you for board meetings and regulatory audits, and provide the strategic financial guidance you need to scale safely and efficiently in a high-stakes environment.'
            ]
        },
        relatedServices: ['virtual-cfo', 'regulatory-compliances', 'investor-due-diligence'],
        relatedGlossaryTerms: ['what-is-fintech', 'what-is-kyc-know-your-customer', 'what-is-payment-aggregator-pa', 'what-is-data-localization-for-payment-aggregators', 'what-is-reverse-charge-on-import-of-services']
    },
    {
        slug: 'gst-compliance-for-export-startups',
        title: 'GST Compliance for Export Startups | Nexa Consultancy',
        description: 'Simplify GST for your export business. We handle LUT filing, zero-rated supply compliance, and GST refunds to optimize cash flow for export-oriented startups in India.',
        h1: 'GST Compliance for Export Startups',
        Icon: FileCheck,
        problem: {
            title: 'The Export Challenge: Unlocking Capital from GST',
            content: [
                'Your startup is finding success in international markets, but your working capital is getting stuck in the GST system. You\'re exporting goods or services without charging IGST, but you\'ve paid GST on all your inputs.',
                'Claiming GST refunds is a slow, complex process, and any error in your documentation can lead to significant delays, strangling your cash flow and limiting your ability to grow.'
            ]
        },
        complianceNeed: {
            title: 'Essential GST Compliance for Exporters',
            points: [
                'Filing a Letter of Undertaking (LUT) to export without payment of IGST.',
                'Correctly reporting zero-rated supplies in GSTR-1 and GSTR-3B.',
                'Meticulous documentation, including shipping bills and foreign inward remittance certificates.',
                'Accurate calculation and filing of GST refund claims (RFD-01).',
                'Reconciliation of export turnover with financial statements.'
            ]
        },
        solution: {
            title: 'Our Solution: Streamlined Export Compliance & Faster Refunds',
            content: [
                'Nexa Consultancy specializes in GST for export-oriented businesses. We manage your entire export compliance process, from LUT filing to the meticulous preparation and filing of refund claims.',
                'Our proactive approach and deep knowledge of the process help you get your legitimate refunds faster, unlocking precious working capital that you can reinvest in your global expansion.'
            ]
        },
        relatedServices: ['regulatory-compliances', 'bookkeeping'],
        relatedGlossaryTerms: ['what-is-filing-letter-of-undertaking-lut-for-exports', 'what-is-place-of-supply', 'what-is-igst-integrated-goods-and-services-tax', 'what-is-input-tax-credit-itc', 'what-is-e-invoicing']
    },
    {
        slug: 'tds-on-foreign-payments-startups',
        title: 'TDS on Foreign Payments for Startups | Nexa Consultancy',
        description: 'Expert guidance on TDS for foreign payments under Section 195. Ensure compliance for SaaS subscriptions, marketing, and consultant payments to avoid penalties.',
        h1: 'TDS on Foreign Payments for Startups',
        Icon: DollarSign,
        problem: {
            title: 'The Global Startup\'s Tax Trap: TDS on Foreign Payments',
            content: [
                'Your startup relies on global tools and talent. You\'re paying for SaaS subscriptions like AWS or Google Workspace, running ads on Facebook, and hiring foreign consultants. But are you complying with TDS (Withholding Tax) on these payments?',
                'Failure to deduct tax under Section 195 can lead to the entire expense being disallowed, plus hefty interest and penalties from the Income Tax department. It\'s a hidden compliance trap that can have a massive impact on your bottom line.'
            ]
        },
        complianceNeed: {
            title: 'Critical Compliance for Foreign Remittances',
            points: [
                'Determining the correct nature of the payment (royalty, technical fee, etc.).',
                'Applying the correct TDS rate as per the Income Tax Act and Double Taxation Avoidance Agreement (DTAA).',
                'Filing Form 15CA (a declaration) and obtaining Form 15CB from a Chartered Accountant.',
                'Timely deposit of the deducted tax and filing of TDS returns.',
                'Issuing Form 16A to the foreign entity.'
            ]
        },
        solution: {
            title: 'Our Solution: Compliant and Hassle-Free Global Transactions',
            content: [
                'Nexa Consultancy provides end-to-end support for TDS on foreign payments. We assess each payment, determine the correct tax liability by considering DTAA benefits, and manage the entire compliance process, including Form 15CA/CB certification.',
                'We ensure you can use the best global services to grow your business without fearing tax notices or penalties, making your international operations smooth and compliant.'
            ]
        },
        relatedServices: ['regulatory-compliances', 'corporate-law'],
        relatedGlossaryTerms: ['what-is-tds-on-saas-subscriptions', 'what-is-withholding-tax', 'what-is-equalisation-levy-on-digital-advertising', 'what-is-dtaa-double-taxation-avoidance-agreement', 'what-is-form-15ca-15cb']
    }
];
