import { Search, Target, Megaphone, Globe2, MousePointer2 } from 'lucide-react';

export const originalSite = 'https://www.digitalmarketingdoctor.com/';

export const services = [
  {
    name: 'Google Ads',
    icon: Search,
    number: '01',
    label: 'Be there when they’re looking.',
    description:
      'Connect with people already searching for your service. Search, Shopping and remarketing campaigns built around qualified enquiries.',
    tags: ['Search & Shopping', 'Remarketing', 'Performance Max'],
    color: 'blue',
    outcome: 'Turn search intent into enquiries',
  },
  {
    name: 'Meta Ads',
    icon: Target,
    number: '02',
    label: 'Make the right people stop scrolling.',
    description:
      'Bring your offer to the right audience on Facebook and Instagram, with campaigns for enquiries, product sales and customer conversations.',
    tags: ['Facebook & Instagram', 'Lead generation', 'Message campaigns'],
    color: 'orange',
    outcome: 'Put your offer in front of the right people',
  },
  {
    name: 'Social Media',
    icon: Megaphone,
    number: '03',
    label: 'Build a presence worth following.',
    description:
      'Give your business a consistent voice. Thoughtful content and professional profiles that build familiarity before the first conversation.',
    tags: ['Content & publishing', 'Business profiles', 'Founder presence'],
    color: 'violet',
    outcome: 'Stay visible and earn customer trust',
  },
  {
    name: 'Landing Pages',
    icon: MousePointer2,
    number: '04',
    label: 'One page. One clear next step.',
    description:
      'Focused pages that connect your campaign to your offer, answer the right questions and make it easy to call, book or enquire.',
    tags: ['Campaign pages', 'Lead generation', 'Responsive design'],
    color: 'blue',
    outcome: 'Give every campaign a better destination',
  },
  {
    name: 'Website Development',
    icon: Globe2,
    number: '05',
    label: 'A better first impression starts here.',
    description:
      'Responsive business websites and online stores that present your company clearly and help interested visitors take the next step.',
    tags: ['Business websites', 'E-commerce', 'Website redesign'],
    color: 'violet',
    outcome: 'Turn your website into a clearer customer journey',
  },
];

export const cases = [
  {
    id: 'raika',
    name: 'Raika Photography',
    category: 'Photography',
    before: 55,
    after: 150,
    unit: 'bookings / month',
    image: '/portfolio/raika.webp',
    description: 'More moments. More bookings.',
    detail:
      'The original website lists a change from 55 to 150 monthly bookings for Raika Photography, a maternity and newborn photography business.',
    source: originalSite + 'assets/success-stories/c/raikaph-web.jpg',
  },
  {
    id: 'kinam',
    name: 'Kinam Engineering',
    category: 'B2B & Industrial',
    before: 30,
    after: 94,
    unit: 'leads / month',
    image: '/portfolio/kinam.webp',
    description: 'More searches becoming serious enquiries.',
    detail:
      'The original website lists a change from 30 to 94 monthly leads for Kinam Engineering, a heat exchanger business.',
    source: originalSite + 'assets/success-stories/c/kinam-lp.jpg',
  },
  {
    id: 'pearl',
    name: 'Dr. Pearl’s',
    category: 'Healthcare',
    before: 40,
    after: 114,
    unit: 'leads / month',
    image: '/portfolio/dr-pearl.webp',
    description: 'A clearer path to patient enquiries.',
    detail:
      'The original website lists a change from 40 to 114 monthly leads for Dr. Pearl’s, a dental practice.',
    source: originalSite + 'assets/success-stories/c/drpearl-lp.jpg',
  },
].map((project) => ({
  ...project,
  growth: `+${Math.round(((project.after - project.before) / project.before) * 100)}%`,
}));

export const faqs = [
  [
    'Which service is right for my business?',
    'That depends on your goals, margins, customer and what is already working. The first step is to understand your business, then recommend the service that addresses the biggest opportunity.',
  ],
  [
    'Can you work with my existing website or campaigns?',
    'Yes. The starting point is a review of what you already have. A new website or a complete campaign rebuild is only worth recommending when there is a clear reason for it.',
  ],
  [
    'Do you guarantee leads or sales?',
    'No fixed number of leads or sales is guaranteed. Results depend on demand, budget, competition, your offer and your sales process. The aim is to measure performance and improve it over time.',
  ],
  [
    'What does the free audit cover?',
    'The proposed audit looks at your website’s message, customer journey and enquiry process, then highlights practical opportunities to improve them. This assessment version lets you try the request experience without sending your details.',
  ],
];
