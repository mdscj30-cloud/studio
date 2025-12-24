export const SERVICES_DATA = {
  'business-strategic-advisory': {
    title: 'Business & Strategic Advisory',
    overview: 'In a dynamic economic landscape, strategic clarity is the most critical asset for any enterprise. Our Business & Strategic Advisory services are designed to provide leadership teams with the foresight and actionable intelligence required to navigate complexity, seize opportunities, and build resilient, high-performing organizations. We partner with you to translate vision into a structured, measurable, and executable strategy.',
    keyChallenges: [
      'Stagnant growth and declining market share',
      'Uncertainty in market entry or expansion decisions',
      'Inefficient operational processes and cost structures',
      'Lack of a long-term, coherent business roadmap',
      'Difficulty in adapting to technological disruptions and changing consumer behavior',
    ],
    ourApproach: 'Our consulting methodology is rooted in a disciplined, data-driven framework. We begin with a comprehensive diagnostic of your business and its operating environment. By combining rigorous analysis with our deep industry expertise, we co-create strategic plans that are not only ambitious but also practical. We focus on phased implementation, clear KPIs, and robust governance to ensure strategies deliver tangible results.',
    benefits: [
      'Enhanced decision-making based on robust data and analysis',
      'A clear, prioritized roadmap for achieving long-term objectives',
      'Improved operational efficiency and profitability',
      'Increased organizational agility and responsiveness to market changes',
      'Sustainable competitive advantage in your industry',
    ],
    whoFor: 'This service is structured for established MSMEs, corporate leadership (CXOs, Board Members), and family businesses seeking to professionalize operations, drive transformational growth, or navigate significant market shifts.',
    engagementModel: 'Our engagement begins with a no-obligation strategic consultation. Based on the initial diagnostic, we propose a tailored engagement model, which can range from a fixed-scope strategic project to an ongoing retainer-based advisory role to support implementation and continuous improvement.',
    cta: 'Enable strategic clarity and drive your business toward its next phase of growth.',
  },
  // Add other services here following the same structure
};

export type ServiceData = (typeof SERVICES_DATA)['business-strategic-advisory'];
