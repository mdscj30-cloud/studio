import { GlossaryClient } from './GlossaryClient';

export const metadata = {
  title: 'Startup Finance Glossary — 600+ Terms Defined',
  description: 'Comprehensive glossary of startup and finance terms for Indian founders — from EBITDA and ARR to MCA filings and ESOP pools. 600+ terms defined.',
  alternates: { canonical: '/startup-finance-glossary' },
  openGraph: {
    title: 'Startup Finance Glossary | Nexa Consultancy',
    description: '600+ startup and finance terms defined for Indian founders — EBITDA, ARR, ESOP, MCA, GST, and more.',
    url: '/startup-finance-glossary',
    type: 'website',
  },
};

export default function StartupFinanceGlossaryPage() {
  return <GlossaryClient />;
}
