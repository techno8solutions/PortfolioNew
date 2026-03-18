export type CaseStudyResult = {
  label: string;
  value: string;
};

export type CaseStudy = {
  id: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  highlights: string[];
  deliverables: string[];
  process: string[];
  timeline: string;
  role: string;
  industries: string[];
  results: CaseStudyResult[];
  techStack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: 'techcorp-solutions',
    title: 'TechCorp Solutions',
    category: 'Web Development',
    tags: ['CORPORATE', 'FULL‑STACK', 'RESPONSIVE', 'CMS'],
    image:
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'A premium corporate website with a content workflow designed for speed, clarity, and SEO‑ready pages.',
    overview:
      'We rebuilt a corporate web presence with a modern information architecture, a clean UI system, and CMS‑driven pages for rapid iteration by internal teams.',
    challenge:
      'The previous site was slow, inconsistent across pages, and difficult to update. Messaging was unclear and conversion paths were buried.',
    solution:
      'We delivered a modern design system, fast component architecture, and structured page templates with consistent CTAs. Performance and accessibility were treated as launch blockers.',
    highlights: [
      'Modern glass UI with consistent spacing and typography',
      'SEO‑ready page structure and semantic components',
      'Reusable sections for faster content production',
      'Conversion‑focused CTAs and clearer navigation',
    ],
    deliverables: [
      'Homepage + service pages + case study template',
      'Reusable component library and style tokens',
      'Performance pass (images, lazy loading, bundle hygiene)',
      'Analytics-ready event mapping (structure)',
    ],
    process: [
      'Discovery + sitemap + content outline',
      'High‑fidelity UI in a reusable design system',
      'Build + QA across devices and browsers',
      'Launch checklist + post‑launch tuning',
    ],
    timeline: '2–3 weeks',
    role: 'Strategy • UI/UX • Full‑stack build',
    industries: ['B2B', 'Technology', 'Corporate'],
    results: [
      { label: 'Performance', value: 'Fast load + optimized assets' },
      { label: 'SEO', value: 'Cleaner structure + metadata ready' },
      { label: 'Content', value: 'CMS‑friendly page templates' },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Vite'],
  },
  {
    id: 2,
    slug: 'shopeasy-mobile-app',
    title: 'ShopEasy Mobile App',
    category: 'Mobile App',
    tags: ['REACT NATIVE', 'E‑COMMERCE', 'iOS', 'ANDROID'],
    image:
      'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'A cross‑platform shopping experience focused on frictionless browsing, checkout, and user retention flows.',
    overview:
      'We designed mobile purchase flows that feel fast and familiar, with clear product discovery and a simplified checkout experience.',
    challenge:
      'Cart abandonment was high and the browsing experience was cluttered. The app needed better structure and a stronger visual hierarchy.',
    solution:
      'We redesigned key screens, improved navigation patterns, and created a consistent component library for scalable UI updates.',
    highlights: [
      'Cleaner product discovery and category navigation',
      'Checkout UX simplified with fewer decision points',
      'Reusable UI components for fast iteration',
      'Mobile-first accessibility and tap-target improvements',
    ],
    deliverables: [
      'Core screens (home, listing, product, cart, checkout)',
      'Component library + states (loading, empty, error)',
      'Basic analytics events (view, add-to-cart, purchase)',
      'App Store listing content guidance (optional)',
    ],
    process: [
      'Flow mapping + wireframes for critical journeys',
      'UI kit + component states for speed and consistency',
      'Implementation + performance checks',
      'QA + release readiness checklist',
    ],
    timeline: '3–5 weeks',
    role: 'UI/UX • Mobile app engineering',
    industries: ['Retail', 'E‑commerce'],
    results: [
      { label: 'Checkout', value: 'Fewer steps, clearer confirmation' },
      { label: 'UX', value: 'Stronger hierarchy and readability' },
      { label: 'Scalability', value: 'Reusable components for growth' },
    ],
    techStack: ['React Native', 'TypeScript', 'REST APIs'],
  },
  {
    id: 3,
    slug: 'growthhack-campaign',
    title: 'GrowthHack Campaign',
    category: 'Digital Marketing',
    tags: ['SEO', 'PPC', 'ANALYTICS', 'CONVERSION'],
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'A measurable digital marketing campaign with landing pages built for conversion and tracking clarity.',
    overview:
      'We aligned messaging, ads, landing pages, and analytics into a single conversion system that could be iterated weekly.',
    challenge:
      'Traffic was unqualified and the funnel was poorly measured. Landing pages lacked focus and the brand story was inconsistent.',
    solution:
      'We refreshed the positioning, built conversion‑first landing pages, and established a reporting cadence with clear KPI ownership.',
    highlights: [
      'Message-market alignment and improved offer clarity',
      'Landing pages structured for conversion and speed',
      'KPI dashboard approach for weekly iteration',
      'Audience segmentation and creative testing',
    ],
    deliverables: [
      'Landing page copy outline + CTA structure',
      'Campaign structure (ad groups + intent buckets)',
      'Tracking plan (events + naming conventions)',
      'Weekly optimization checklist',
    ],
    process: [
      'Research + competitive scan + offer framing',
      'Landing page build + analytics setup',
      'Ad launch + A/B testing loop',
      'Weekly reporting + iteration',
    ],
    timeline: '4–8 weeks (campaign cycles)',
    role: 'Marketing strategy • Landing pages • Analytics',
    industries: ['SaaS', 'Services', 'B2B'],
    results: [
      { label: 'Funnel', value: 'Cleaner tracking + better attribution' },
      { label: 'Ads', value: 'More relevant audiences and creatives' },
      { label: 'Landing', value: 'Focused pages with strong CTAs' },
    ],
    techStack: ['SEO', 'Google Ads', 'Analytics'],
  },
  {
    id: 4,
    slug: 'viral-social-campaign',
    title: 'Viral Social Campaign',
    category: 'Social Media Marketing',
    tags: ['CONTENT', 'ENGAGEMENT', 'GROWTH', 'ANALYTICS'],
    image:
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'A social campaign built around a consistent content system and repeatable formats for engagement.',
    overview:
      'We developed a content calendar, templates, and engagement loops to create consistency and improve audience retention.',
    challenge:
      'Posting was inconsistent and the visuals didn’t match the brand. Performance was hard to compare across formats.',
    solution:
      'We created a structured content system, improved creative direction, and added reporting to iterate on what worked.',
    highlights: [
      'Repeatable post formats for speed and consistency',
      'Creative direction aligned to brand tone',
      'Engagement loops (comments, saves, shares) designed in',
      'Reporting to compare content formats week-to-week',
    ],
    deliverables: [
      'Content calendar template + cadence',
      'Design templates for posts/stories/reels',
      'Caption/hashtag guidelines and tone framework',
      'Monthly report structure',
    ],
    process: [
      'Audit existing content and audience signals',
      'Define pillars + formats + template system',
      'Publish cadence + community engagement',
      'Review insights + refine content mix',
    ],
    timeline: '3–6 weeks (initial system)',
    role: 'Content strategy • Creative direction • Reporting',
    industries: ['Brands', 'Creators', 'D2C'],
    results: [
      { label: 'Consistency', value: 'Repeatable content system' },
      { label: 'Brand', value: 'Unified visual identity' },
      { label: 'Insights', value: 'Better content performance signals' },
    ],
    techStack: ['Content Strategy', 'Creative Templates', 'Reporting'],
  },
  {
    id: 5,
    slug: 'interactive-dashboard',
    title: 'Interactive Dashboard',
    category: 'Frontend Development',
    tags: ['REACT', 'DASHBOARD', 'REAL‑TIME', 'UI/UX'],
    image:
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'A modern dashboard UI with readable data density, consistent components, and smooth interactions.',
    overview:
      'We built a dashboard experience that supports rapid scanning, clear hierarchy, and scalable components for new modules.',
    challenge:
      'The previous UI was hard to scan and didn’t scale to new features. Components were duplicated and inconsistent.',
    solution:
      'We introduced a UI system, improved layout and spacing, and ensured performance stays strong with modular composition.',
    highlights: [
      'High-density layouts that remain readable',
      'Reusable widgets with consistent states',
      'Performance-friendly rendering patterns',
      'Design tokens to keep UI consistent at scale',
    ],
    deliverables: [
      'Dashboard UI kit (tables, charts, cards, filters)',
      'Component patterns for loading/empty/error',
      'Responsive layout system for modules',
      'Interaction polish (hover, focus, transitions)',
    ],
    process: [
      'Information architecture for dashboard modules',
      'UI kit + components + states',
      'Build + performance validation',
      'QA + final polish',
    ],
    timeline: '2–4 weeks',
    role: 'Frontend engineering • UI system',
    industries: ['Analytics', 'SaaS', 'Operations'],
    results: [
      { label: 'Clarity', value: 'Cleaner hierarchy + typography' },
      { label: 'Speed', value: 'Efficient component rendering' },
      { label: 'Scale', value: 'Reusable UI patterns' },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 6,
    slug: 'scaleapi-backend',
    title: 'ScaleAPI Backend',
    category: 'Backend Development',
    tags: ['API', 'DATABASE', 'SECURITY', 'SCALING'],
    image:
      'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'A robust backend API designed for reliability, observability, and future scaling.',
    overview:
      'We designed a clean API surface with consistent responses and strong security practices for long‑term maintainability.',
    challenge:
      'The system had inconsistent endpoints and weak error handling. Scaling concerns were growing with traffic.',
    solution:
      'We standardized API patterns, tightened validation, and improved structure for operational clarity and future expansion.',
    highlights: [
      'Consistent API responses and error shapes',
      'Validation-first approach for safer inputs',
      'Security hardening patterns (defaults, limits)',
      'Clear structure that scales with new modules',
    ],
    deliverables: [
      'API spec conventions + route structure',
      'Validation patterns + error handling strategy',
      'Basic logging/observability hooks (structure)',
      'Documentation outline for consumers',
    ],
    process: [
      'Define API boundaries and data model',
      'Implement endpoints + validation',
      'Hardening pass (security + reliability)',
      'Docs + handoff',
    ],
    timeline: '2–3 weeks',
    role: 'Backend architecture • API engineering',
    industries: ['Platforms', 'B2B', 'Infrastructure'],
    results: [
      { label: 'Reliability', value: 'Consistent API patterns' },
      { label: 'Security', value: 'Validation + safer defaults' },
      { label: 'Maintain', value: 'Cleaner structure for teams' },
    ],
    techStack: ['Node.js', 'REST APIs', 'Database Design'],
  },
  {
    id: 7,
    slug: 'financeflow-ux',
    title: 'FinanceFlow UX',
    category: 'UI/UX Design',
    tags: ['FIGMA', 'RESEARCH', 'PROTOTYPING', 'TESTING'],
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'A UX refresh that improved clarity, reduced friction, and strengthened trust through visual polish.',
    overview:
      'We redesigned key journeys with a focus on clear interaction states, accessibility, and a premium visual system.',
    challenge:
      'Users struggled with onboarding and key actions. Visual hierarchy and feedback states were unclear.',
    solution:
      'We created a modern UI system, improved flows, and validated designs with quick iteration cycles.',
    highlights: [
      'Premium UI that builds trust in financial flows',
      'Clear feedback states and micro-interactions',
      'Accessibility-first typography and contrast',
      'Reusable design system for faster iteration',
    ],
    deliverables: [
      'High‑fidelity flows + key screens',
      'Design system components + tokens',
      'Prototype for usability testing',
      'Handoff notes for engineering teams',
    ],
    process: [
      'User journey mapping + pain point audit',
      'Wireframes → high‑fidelity UI',
      'Prototype + usability feedback',
      'Iterate and finalize design system',
    ],
    timeline: '2–4 weeks',
    role: 'UX strategy • UI design • Prototyping',
    industries: ['Fintech', 'Finance', 'Apps'],
    results: [
      { label: 'UX', value: 'Cleaner onboarding + flows' },
      { label: 'Trust', value: 'Premium UI + feedback states' },
      { label: 'Access', value: 'Better readability and contrast' },
    ],
    techStack: ['Figma', 'Design System', 'Prototyping'],
  },
  {
    id: 8,
    slug: 'smartbot-ai-assistant',
    title: 'SmartBot AI Assistant',
    category: 'AI Solutions',
    tags: ['CHATBOT', 'NLP', 'AUTOMATION', 'SUPPORT'],
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1400',
    summary:
      'An AI assistant concept for automating FAQs, routing requests, and improving first‑response speed.',
    overview:
      'We designed a conversational experience and automation rules that reduce support load and keep answers consistent.',
    challenge:
      'Support response times were inconsistent and repetitive questions consumed team bandwidth.',
    solution:
      'We implemented structured intents, a clean escalation path, and analytics-ready events to improve over time.',
    highlights: [
      'Intent structure for consistent answers',
      'Escalation flow for edge cases and handoff',
      'Automation rules to reduce repetitive workload',
      'Analytics-ready events for continuous improvement',
    ],
    deliverables: [
      'Intent map + conversation scripts',
      'Escalation logic and fallback strategy',
      'Implementation plan for integration',
      'Reporting outline (top intents, deflection rate)',
    ],
    process: [
      'FAQ + ticket audit to identify top intents',
      'Conversation design + edge-case handling',
      'Integration planning + rollout approach',
      'Monitor, improve, and expand intents',
    ],
    timeline: '2–4 weeks (pilot)',
    role: 'Automation strategy • Conversation design',
    industries: ['Support', 'Services', 'SaaS'],
    results: [
      { label: 'Speed', value: 'Faster first responses' },
      { label: 'Consistency', value: 'Standard answers and routing' },
      { label: 'Automation', value: 'Reduced repetitive workload' },
    ],
    techStack: ['Automation', 'Intent Design', 'Analytics'],
  },
];

export const caseStudyCategories = [
  'All',
  ...Array.from(new Set(caseStudies.map((c) => c.category))),
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
