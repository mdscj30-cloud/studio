import { Scale } from 'lucide-react';

export interface ComparisonPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  Icon: React.ElementType;
  itemA: {
    name: string;
    pros: string[];
    cons: string[];
  };
  itemB: {
    name: string;
    pros: string[];
    cons: string[];
  };
  comparisonTable: {
    title: string;
    headers: string[];
    rows: {
      feature: string;
      valueA: string;
      valueB: string;
    }[];
  };
  cost: {
    title: string;
    content: string[];
  };
  whenToChoose: {
    title: string;
    choiceA: string;
    choiceB: string;
  };
}

export const COMPARE_PAGES_DATA: ComparisonPage[] = [
  {
    slug: 'virtual-cfo-vs-in-house-cfo',
    title: 'Virtual CFO vs In-house CFO: Which is Right for Your Startup?',
    description: 'A detailed comparison of Virtual CFO services and a full-time in-house CFO, covering cost, expertise, and scalability to help you make the right choice.',
    h1: 'Virtual CFO vs. In-house CFO',
    Icon: Scale,
    itemA: {
      name: 'Virtual CFO (vCFO)',
      pros: [
        'Cost-effective: Access senior-level expertise for a fraction of the cost of a full-time hire.',
        'Broad Expertise: Benefit from a team with experience across multiple industries and startup stages.',
        'Scalable: Services can be scaled up or down as your business needs change.',
        'No HR Overhead: Avoid costs related to salary, benefits, and recruitment.'
      ],
      cons: [
        'Not on-site: Communication is primarily remote, which may not suit all company cultures.',
        'Less dedicated time: A vCFO splits their time between multiple clients, unlike a full-time employee.'
      ]
    },
    itemB: {
      name: 'In-house CFO',
      pros: [
        'Dedicated Focus: A full-time employee deeply embedded in your company culture and daily operations.',
        'On-site Presence: Available for immediate, face-to-face interaction and leadership.',
        'Full Control: Direct management and control over the finance function and team.'
      ],
      cons: [
        'High Cost: A senior CFO salary is one of the highest expenses for a startup.',
        'Single Point of Failure: Relies on the expertise of one individual.',
        'Recruitment Challenge: Finding a high-quality CFO with startup experience is difficult and time-consuming.'
      ]
    },
    comparisonTable: {
      title: 'Feature Comparison',
      headers: ['Feature', 'Virtual CFO', 'In-house CFO'],
      rows: [
        { feature: 'Cost', valueA: 'Fraction of full-time salary', valueB: 'High fixed salary + benefits + equity' },
        { feature: 'Focus', valueA: 'Strategic, forward-looking', valueB: 'Both strategic and operational' },
        { feature: 'Expertise', valueA: 'Broad team-based expertise', valueB: 'Depends on the individual hired' },
        { feature: 'Scalability', valueA: 'Highly scalable', valueB: 'Less flexible' },
      ]
    },
    cost: {
      title: 'Cost Analysis',
      content: [
        'An in-house CFO in India can cost anywhere from ₹40 Lakhs to over ₹1 Crore annually, including benefits. A Virtual CFO service typically ranges from ₹12 Lakhs to ₹30 Lakhs annually, providing significant cost savings.'
      ]
    },
    whenToChoose: {
      title: 'When to Choose Which',
      choiceA: 'Choose a Virtual CFO when you are an early-stage to Series A startup needing high-level strategic guidance without the high fixed cost of an executive hire. It\'s ideal for professionalizing your finance function and preparing for growth.',
      choiceB: 'Choose an In-house CFO when your company has reached a significant scale (typically post-Series B) and complexity, requiring a dedicated, on-site leader to manage a growing finance team and complex daily operations.'
    }
  },
  // Add 24 more comparison pages here...
];
