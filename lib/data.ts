export const SITE = {
  name: 'D Venkataramana',
  shortName: 'DVR',
  title: 'D Venkataramana | SEO Executive & Technical SEO Specialist',
  description:
    'SEO Executive with 3+ years driving organic traffic, technical SEO & AI-powered growth for B2B and EdTech organizations.',
  keywords: 'SEO Executive, Technical SEO, Digital Marketing, AI Marketing, Bengaluru SEO Expert',
  email: 'venkat.digitalseo@gmail.com',
  phone: '+91 7981632581',
  whatsapp: '917981632581',
  location: 'Bengaluru, Karnataka, India',
  website: 'https://www.digibrandbooster.tech',
  websiteLabel: 'digibrandbooster.tech',
  linkedin: 'https://www.linkedin.com/in/d-venkataramana',
  github: 'https://github.com/DVR79',
  resumeUrl: '/Resume.pdf',
};

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export const ROLES = [
  'SEO Executive',
  'Technical SEO Specialist',
  'AI-Powered Growth Marketer',
];

export const HERO_STATS = [
  { to: 3,   suffix: '+',   label: 'Years Experience' },
  { to: 35,  suffix: '%',   label: 'Traffic Growth' },
  { to: 200, suffix: '+',   label: 'Pages Optimized' },
  { to: 84,  suffix: '/100', label: 'Lighthouse' },
];

export const IMPACT_STATS = [
  { to: 35,  suffix: '%', label: 'Organic Traffic Increase' },
  { to: 200, suffix: '+', label: 'Pages Fully Optimized' },
  { to: 20,  suffix: '%', label: 'Campaign ROI Improvement' },
  { to: 12,  suffix: '%', label: 'Conversion Rate Uplift' },
  { to: 3,   suffix: '×', label: 'Content Production Scale' },
];

export const TOOLS = [
  'SEMrush', 'Ahrefs', 'Google Analytics 4', 'Google Search Console',
  'Screaming Frog', 'Webflow', 'WordPress', 'Looker Studio',
  'Google Tag Manager', 'HubSpot', 'ChatGPT', 'Claude AI',
  'Jasper AI', 'Schema Markup', 'Core Web Vitals',
];

export const ABOUT_QUICK_INFO = [
  { icon: '💼', label: 'Current Role', value: 'SEO Executive' },
  { icon: '🏢', label: 'Company',      value: 'Invensis Technologies' },
  { icon: '📍', label: 'Location',     value: 'Bengaluru, Karnataka' },
  { icon: '🎓', label: 'Education',    value: 'MBA, M.S. Ramaiah' },
  { icon: '🌐', label: 'Website',      value: 'digibrandbooster.tech', href: SITE.website },
];

export const EXPERTISE_PILLS = [
  { icon: '🔍', label: 'Technical SEO' },
  { icon: '✍️', label: 'Content Optimization' },
  { icon: '📊', label: 'Analytics & Reporting' },
  { icon: '🤖', label: 'AI Marketing' },
];

export const EXPERIENCE = [
  {
    role: 'SEO Executive',
    company: 'Invensis Technologies (Edstellar)',
    location: 'Bengaluru, India',
    date: 'Nov 2021 – Present',
    duration: '3+ years',
    current: true,
    summary:
      'Owning end-to-end SEO strategy for Edstellar, a global corporate training marketplace serving Fortune 500 clients, across 200+ landing pages and 15+ content hubs.',
    responsibilities: [
      'Led full-funnel SEO strategy aligned to quarterly revenue and pipeline targets',
      'Architected keyword cluster strategy mapping 500+ terms to topical authority hubs',
      'Executed deep technical audits across 200+ pages; shipped remediation roadmap in under 90 days',
      'Optimized Core Web Vitals: improved Lighthouse score from 52 to 84 site-wide',
      'Implemented JSON-LD schema (Course, Organization, BreadcrumbList) across all category pages',
      'Built executive SEO dashboards in Looker Studio surfacing rankings, traffic, and revenue attribution',
      'Operationalized AI-assisted content workflow (ChatGPT + Claude) tripling editorial output',
      'Partnered with engineering on site migrations, redirect maps, and pre-launch SEO QA',
      'Managed off-page SEO: digital PR, guest posts, and high-authority backlink campaigns',
      'Reported monthly KPI movements to leadership; translated SEO data into business decisions',
    ],
    achievements: [
      { num: '+35%', label: 'Organic Traffic YoY' },
      { num: '+20%', label: 'Campaign ROI Lift' },
      { num: '200+', label: 'Pages Audited' },
      { num: '3×',   label: 'Content Velocity' },
      { num: '+12%', label: 'CVR Increase' },
      { num: '84',   label: 'Lighthouse Score' },
    ],
    tools: ['SEMrush','Ahrefs','Screaming Frog','GA4','GSC','GTM','Looker Studio','ChatGPT','Claude','Webflow'],
  },
  {
    role: 'Digital Marketing Intern (SEO)',
    company: 'Digipuush',
    location: 'Bengaluru, India',
    date: 'Nov 2020 – Mar 2021',
    duration: '5 months',
    current: false,
    summary:
      'Agency-side apprenticeship: supported SEO execution across 6+ client accounts spanning B2B SaaS, local services, and e-commerce.',
    responsibilities: [
      'Supported keyword research and content brief creation across multiple verticals',
      'Assisted on-page optimization: meta tags, headers, internal linking, image SEO',
      'Executed off-page tactics including outreach, citation building, and broken link recovery',
      'Performed competitor SERP-gap analysis informing client strategy decks',
      'Tracked rankings and traffic trends via GA & GSC; flagged anomalies for senior review',
      'Supported technical SEO QA on client website launches and replatforming projects',
    ],
    outcome:
      'Contributed to ranking and visibility improvements across 6+ client websites; received offer to extend tenure based on consistent above-bar performance.',
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Business Administration (MBA)',
    school: 'M.S. Ramaiah Institute of Management',
    location: 'Bengaluru, Karnataka',
    year: '2021',
  },
  {
    degree: 'Bachelor of Science (B.Sc.)',
    school: 'Krishna University',
    location: 'Andhra Pradesh',
    year: '2019',
  },
];

export const SKILLS = [
  {
    icon: '🔍', title: 'SEO',
    tags: ['Keyword Research','Search Intent Analysis','On-Page SEO','Off-Page SEO','Technical SEO','Link Building','Competitor Analysis','Backlink Analysis','Local SEO','E-E-A-T','GEO Optimization'],
  },
  {
    icon: '⚙️', title: 'Technical SEO',
    tags: ['Core Web Vitals','Schema Markup','XML Sitemaps','Canonical Tags','Robots.txt','Website Audits','Mobile SEO','HTML','CSS','WordPress','Webflow'],
  },
  {
    icon: '📊', title: 'Analytics',
    tags: ['Google Analytics 4','Google Search Console','Google Tag Manager','Looker Studio','SEMrush','Ahrefs','Screaming Frog','Funnel Analysis','Attribution Modelling'],
  },
  {
    icon: '🤖', title: 'AI & Automation',
    tags: ['ChatGPT','Claude AI','Jasper AI','Prompt Engineering','SEO Automation','AI Content Workflows','Marketing Automation'],
  },
];

export const FEATURED_PROJECT = {
  title: 'Edstellar SEO Growth Strategy',
  description:
    'Developed and implemented a comprehensive SEO strategy combining technical SEO, content optimization, competitor analysis, and keyword planning to improve search visibility and business performance for a leading EdTech platform.',
  steps: [
    'Full technical audit: 200+ pages crawled, 80+ critical issues resolved',
    'Keyword cluster architecture: mapped 500+ keywords to content pillars',
    'AI content pipeline: 3x production output using ChatGPT & Claude',
    'Core Web Vitals remediation: page speed improved from 52 to 84',
  ],
  metrics: [
    { val: '+35%', label: 'Organic Traffic Growth',    w: 75 },
    { val: '+20%', label: 'Campaign ROI Improvement',  w: 60 },
    { val: '200+', label: 'Pages Fully Optimized',     w: 90 },
    { val: '+12%', label: 'Conversion Rate Uplift',    w: 50 },
    { val: '3×',   label: 'Content Production Scaled', w: 85, accent: true },
  ],
  stack: ['SEMrush','Screaming Frog','GA4','GSC','ChatGPT','Webflow','Looker Studio'],
};

export const PROJECTS = [
  {
    tag: 'Local SEO',
    title: 'Living Pillars SEO Strategy',
    desc: 'Executed local SEO strategies including Google Business Profile optimization, content marketing, local keyword targeting, and citation management for a wellness brand.',
    results: [
      { val: '+30%', label: 'Local Search Visibility' },
      { val: '+25%', label: 'User Engagement' },
    ],
    stack: ['Google Business Profile','GSC','Local Citations'],
  },
  {
    tag: 'Technical Audit',
    title: 'Incoban Website SEO Audit',
    desc: 'Conducted a comprehensive technical SEO audit identifying critical crawlability, metadata, site speed, and mobile usability issues with a prioritized remediation roadmap.',
    results: [
      { val: '80+',  label: 'Issues Identified' },
      { val: '100%', label: 'Actionable Report' },
    ],
    stack: ['Screaming Frog','Ahrefs','GTM'],
  },
  {
    tag: 'Technical Audit',
    title: 'Taruni Website SEO Audit',
    desc: 'Delivered actionable technical SEO recommendations to improve crawl efficiency, website performance, and search visibility for a B2B client through structured audit methodology.',
    results: [
      { val: '↑ Crawl', label: 'Efficiency Improved' },
      { val: '↑ Speed', label: 'Page Performance' },
    ],
    stack: ['Screaming Frog','SEMrush','Schema.org'],
  },
];

export const CERTIFICATIONS = [
  { name: 'Digital Marketing Certification', issuer: 'HubSpot Academy',  year: '2023' },
  { name: 'Webflow CMS Certification',       issuer: 'Webflow University', year: '2023' },
  { name: 'Technical SEO Certification',     issuer: 'SEMrush Academy',  year: '2023' },
];
