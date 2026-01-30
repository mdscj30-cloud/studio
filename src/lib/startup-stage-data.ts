
import { Briefcase, FileCheck, Landmark, HandCoins, Scale, BookUser, Presentation, Users, DollarSign, BarChart3, ShieldCheck } from 'lucide-react';

export interface StartupStage {
  id: string;
  name: string;
  description: string;
}

export interface FinanceProblem {
  id: string;
  name: string;
  verb: string; // e.g., "Navigating", "Managing", "Preparing for"
  relatedServiceSlugs: string[];
  relatedGlossarySlugs: string[];
  Icon: React.ElementType;
}

export interface StageProblemPage {
  slug: string;
  stage: StartupStage;
  problem: FinanceProblem;
  title: string;
  description: string;
  h1: string;
}

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

export const STARTUP_STAGES: StartupStage[] = [
  { id: 'pre-seed', name: 'Pre-Seed Startups', description: 'in the earliest idea or prototyping phase, typically before any significant funding.' },
  { id: 'seed', name: 'Seed-Funded Startups', description: 'having raised their first round of capital to achieve product-market fit.' },
  { id: 'series-a', name: 'Series A Startups', description: 'focused on scaling their user base and revenue streams after finding product-market fit.' },
  // Future expansion:
  // { id: 'series-b', name: 'Series B+ Startups', description: 'expanding into new markets and solidifying their market leadership.' },
  // { id: 'bootstrapped', name: 'Bootstrapped Businesses', description: 'growing organically using their own revenue without external funding.' },
];

export const FINANCE_PROBLEMS: FinanceProblem[] = [
  { 
    id: 'compliance', 
    name: 'Basic Compliance',
    verb: 'Navigating',
    relatedServiceSlugs: ['regulatory-compliances', 'business-setup'],
    relatedGlossarySlugs: ['what-is-roc-compliance-for-board-meetings', 'what-is-goods-and-services-tax', 'what-is-tax-deducted-at-source'],
    Icon: ShieldCheck,
  },
  { 
    id: 'fundraising-prep', 
    name: 'Fundraising Prep',
    verb: 'Preparing for',
    relatedServiceSlugs: ['fundraising', 'pitch-deck-financial-modelling'],
    relatedGlossarySlugs: ['what-is-fundraising', 'what-is-pitch-deck', 'what-is-financial-model'],
    Icon: HandCoins,
  },
  { 
    id: 'burn-rate-management', 
    name: 'Burn Rate Management',
    verb: 'Managing',
    relatedServiceSlugs: ['virtual-cfo', 'bookkeeping'],
    relatedGlossarySlugs: ['what-is-burn-rate', 'what-is-runway', 'what-is-net-burn-vs-gross-burn'],
    Icon: BarChart3,
  },
  // Future expansion:
  // {
  //   id: 'esop-management',
  //   name: 'ESOP Management',
  //   verb: 'Structuring',
  //   relatedServiceSlugs: ['corporate-law', 'virtual-cfo'],
  //   relatedGlossarySlugs: ['what-is-esop', 'what-is-vesting', 'what-is-valuation-cap'],
  //   Icon: Users,
  // },
  // {
  //   id: 'due-diligence',
  //   name: 'Due Diligence',
  //   verb: 'Preparing for',
  //   relatedServiceSlugs: ['investor-due-diligence', 'corporate-law'],
  //   relatedGlossarySlugs: ['what-is-due-diligence', 'what-is-data-room', 'what-is-a-messy-or-inaccurate-cap-table'],
  //   Icon: FileCheck,
  // }
];

function generateStageProblemPages(): StageProblemPage[] {
    const pages: StageProblemPage[] = [];
    STARTUP_STAGES.forEach(stage => {
        FINANCE_PROBLEMS.forEach(problem => {
            const slug = `${slugify(problem.name)}-for-${stage.id}-startups`;
            const h1 = `${problem.name} for ${stage.name}`;
            const title = `${problem.verb} ${problem.name} in ${stage.name} | Nexa Consultancy`;
            const description = `Expert guidance on ${problem.name.toLowerCase()} for startups ${stage.description}. Learn how Nexa can help you scale.`;

            pages.push({
                slug,
                stage,
                problem,
                title,
                description,
                h1,
            });
        });
    });
    return pages;
}

export const STAGE_PROBLEM_PAGES: StageProblemPage[] = generateStageProblemPages();
