export type Service = {
  id: number;
  slug: string;
  contactValue:
    | 'web-development'
    | 'mobile-app'
    | 'digital-marketing'
    | 'social-media'
    | 'frontend'
    | 'backend'
    | 'ui-ux'
    | 'ai-solutions';
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  deliverables: string[];
  process: string[];
  timeline: string;
  bestFor: string[];
  image: string;
  gradient: string;
  iconKey:
    | 'globe'
    | 'smartphone'
    | 'trendingUp'
    | 'instagram'
    | 'code'
    | 'database'
    | 'palette'
    | 'bot';
};

export const services: Service[] = [
  {
    id: 1,
    slug: 'website-development',
    contactValue: 'web-development',
    iconKey: 'globe',
    title: 'Website Development',
    shortDescription:
      'High-performance websites with premium UI, clean structure, and conversion-ready sections.',
    longDescription:
      'We build modern websites that feel premium, load fast, and convert. From landing pages to multi-page sites, we focus on clear messaging, strong visual hierarchy, and a build that’s easy to maintain.',
    features: ['Responsive Design', 'SEO Foundations', 'Fast Loading', 'CMS Integration', 'E-commerce Ready'],
    deliverables: [
      'Information architecture + section plan',
      'Modern UI system (glass/clean aesthetic)',
      'Performance and accessibility pass',
      'Deployment-ready build',
    ],
    process: ['Discovery + content outline', 'UI design direction + structure', 'Build + QA', 'Launch + optimization'],
    timeline: '1–3 weeks',
    bestFor: ['Startups', 'Service businesses', 'Corporate sites', 'Product launches'],
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    slug: 'mobile-app-development',
    contactValue: 'mobile-app',
    iconKey: 'smartphone',
    title: 'Mobile App Development',
    shortDescription:
      'Native-feeling mobile apps with polished UX, scalable architecture, and production readiness.',
    longDescription:
      'We design and develop mobile apps that feel smooth and reliable. From MVPs to full-featured releases, we focus on user flows, performance, and a clean codebase that scales.',
    features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'Release Readiness', 'Push Notifications'],
    deliverables: ['Core user journeys', 'Reusable component system', 'Analytics event plan', 'Store-ready builds'],
    process: ['Flow mapping + wireframes', 'UI kit + component states', 'Implementation + QA', 'Release support'],
    timeline: '3–6 weeks',
    bestFor: ['E-commerce', 'Bookings', 'Membership apps', 'Internal tools'],
    image:
      'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    slug: 'digital-marketing',
    contactValue: 'digital-marketing',
    iconKey: 'trendingUp',
    title: 'Digital Marketing',
    shortDescription:
      'Campaigns built for measurable growth: clear funnels, strong creatives, and conversion-first landing pages.',
    longDescription:
      'We run modern digital marketing with a performance mindset. We align positioning, messaging, ads, landing pages, and tracking into a single system that improves week over week.',
    features: ['SEO Strategy', 'PPC Campaigns', 'Content Marketing', 'Analytics & Reporting', 'Conversion Optimization'],
    deliverables: ['Campaign structure', 'Tracking + KPI plan', 'Landing page recommendations', 'Optimization checklist'],
    process: ['Research + positioning', 'Launch + setup', 'Testing + iteration', 'Reporting + scaling'],
    timeline: '4–8 weeks (cycles)',
    bestFor: ['Lead generation', 'SaaS', 'Service businesses', 'Local + global campaigns'],
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    slug: 'social-media-marketing',
    contactValue: 'social-media',
    iconKey: 'instagram',
    title: 'Social Media Marketing',
    shortDescription:
      'A repeatable content system with premium design templates and a consistent growth cadence.',
    longDescription:
      'We build a social system you can sustain: content pillars, templates, posting cadence, and reporting so you can grow consistently without guessing.',
    features: ['Content Creation', 'Community Management', 'Influencer Outreach', 'Social Analytics', 'Paid Social Ads'],
    deliverables: ['Content calendar', 'Template pack', 'Tone + caption guidelines', 'Monthly performance report'],
    process: ['Audit + pillars', 'Template system', 'Publishing cadence', 'Review + refine'],
    timeline: '3–6 weeks (initial system)',
    bestFor: ['Brands', 'D2C', 'Creators', 'Local businesses'],
    image:
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 5,
    slug: 'frontend-development',
    contactValue: 'frontend',
    iconKey: 'code',
    title: 'Frontend Development',
    shortDescription:
      'Modern interfaces with clean component architecture, animations, and strong performance.',
    longDescription:
      'We build premium UIs using modern frontend stacks. Expect consistent components, responsive layouts, accessibility, and performance that holds up as your product grows.',
    features: ['React/Vue/Angular', 'Responsive Design', 'Performance Optimization', 'Modern UI/UX', 'Progressive Web Apps'],
    deliverables: ['Component library', 'Design tokens', 'Performance pass', 'Responsive QA'],
    process: ['UI architecture', 'Component build', 'Polish + accessibility', 'Performance validation'],
    timeline: '1–4 weeks',
    bestFor: ['Dashboards', 'Marketing sites', 'Web apps', 'Design system builds'],
    image:
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    id: 6,
    slug: 'backend-development',
    contactValue: 'backend',
    iconKey: 'database',
    title: 'Backend Development',
    shortDescription:
      'Secure APIs, solid data models, and scalable backend foundations for modern products.',
    longDescription:
      'We build backend systems that are reliable and maintainable. From APIs to database design, we focus on validation, security, consistent patterns, and clean structure.',
    features: ['API Development', 'Database Design', 'Cloud Integration', 'Security Implementation', 'Scalable Architecture'],
    deliverables: ['API conventions', 'Core endpoints', 'Validation patterns', 'Documentation outline'],
    process: ['Model + boundaries', 'Implementation', 'Hardening', 'Docs + handoff'],
    timeline: '2–5 weeks',
    bestFor: ['SaaS backends', 'Integrations', 'Data-heavy apps', 'Internal platforms'],
    image:
      'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    id: 7,
    slug: 'ui-ux-design',
    contactValue: 'ui-ux',
    iconKey: 'palette',
    title: 'UI/UX Design',
    shortDescription:
      'Premium design systems, user flows, and prototypes that turn complexity into clarity.',
    longDescription:
      'We design interfaces that feel trustworthy and modern. Expect clean hierarchy, thoughtful interaction design, and prototypes that make development smooth.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing'],
    deliverables: ['Design system', 'Key screens + flows', 'Clickable prototype', 'Handoff notes'],
    process: ['Journey mapping', 'Wireframes', 'High-fidelity UI', 'Prototype + iterate'],
    timeline: '1–4 weeks',
    bestFor: ['New products', 'Redesigns', 'Fintech + SaaS', 'Conversion pages'],
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 8,
    slug: 'ai-automation-solutions',
    contactValue: 'ai-solutions',
    iconKey: 'bot',
    title: 'AI & Automation Solutions',
    shortDescription:
      'Automations, assistants, and workflows that reduce manual work and speed up operations.',
    longDescription:
      'We design practical AI and automation solutions: lead capture, customer support automation, internal workflows, and structured data pipelines—built for reliability and clear outcomes.',
    features: ['Chatbot Development', 'Process Automation', 'AI Integration', 'Data Analytics', 'Workflow Design'],
    deliverables: ['Use-case mapping', 'Automation flow', 'Pilot rollout plan', 'Reporting metrics'],
    process: ['Audit + intents', 'Design flow', 'Implementation plan', 'Iterate + expand'],
    timeline: '2–6 weeks',
    bestFor: ['Support teams', 'Sales ops', 'Service workflows', 'Internal automation'],
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gradient: 'from-violet-500 to-purple-500',
  },
];

export const serviceCategories = ['All'];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
