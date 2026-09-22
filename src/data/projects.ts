export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  role: string;
  metrics: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  heroImage: string;
  heroCaption: string;
  domainDisplay: string;
  problem: string;
  aiTools: string[];
  highlights: string[];
  architecture: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: ProjectData[] = [
  {
    id: 'kllasik-wardrobe',
    title: 'Kllasik Wardrobe E-Commerce',
    tagline: 'High-conversion minimalist apparel store powered by real-time inventory management.',
    role: 'AI-Augmented Full-Stack Development & Database Integration',
    metrics: '< 200ms Edge TTFB | Real-Time Inventory Sync',
    tags: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    gradient: 'from-[#00E676]/20 via-white/5 to-transparent',
    accentColor: 'text-[#00E676]',
    heroImage: '/projects/klasik.jpg',
    heroCaption: 'Minimalist Luxury Apparel - Real-Time Inventory & Cart',
    domainDisplay: 'kllasik-wardrobe.vercel.app',
    problem:
      'Traditional e-commerce platforms suffer from slow initial render times, inventory drift during flash sales, and clunky checkout steps that drive cart abandonment.',
    aiTools: [
      'Cursor AI - Accelerated full-stack React Server Component scaffolding and database schema mapping.',
      'Claude 3.5 Sonnet - Engineered atomic cart synchronization and Supabase Row Level Security (RLS) policies.',
      'v0 by Vercel - Prototyped high-converting responsive product catalog layout and filter drawers.',
    ],
    highlights: [
      'Multi-step shopping bag and responsive catalog with remote media caching.',
      'Supabase integration for real-time inventory and customer order management.',
      'AI-assisted schema modeling and automated UI component generation.',
      'Edge SSR & Server Actions for sub-second database mutations and instant state revalidation.',
    ],
    architecture: [
      'Next.js 14 App Router with Parallel and Intercepting Routes for product quick-views.',
      'Supabase PostgreSQL with real-time replication triggers for stock count broadcast.',
      'Optimistic cart state using atomic state slices with zero layout shift.',
    ],
    demoUrl: 'https://kllasik-wardrobe.vercel.app/',
    githubUrl: 'https://github.com/amarnath3003/quickLiquid',
  },
  {
    id: 'subtrack-global',
    title: 'SubTrack Global',
    tagline: 'Smart financial tracker that adapts to user location with dynamic multi-currency conversion.',
    role: 'UI/UX Architecture, Financial Logic & Frontend Engineering',
    metrics: '160+ Currencies | Sub-50ms Geolocation & FX Engine',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Exchange Rate API', 'Framer Motion'],
    gradient: 'from-[#00E676]/20 via-white/5 to-transparent',
    accentColor: 'text-[#00E676]',
    heroImage: '/projects/subtrack.jpg',
    heroCaption: 'Location-Aware Multi-Currency Tracker - 160+ FX Pairs',
    domainDisplay: 'helpora-cyan.vercel.app',
    problem:
      'Digital nomads and cross-border teams juggle recurring subscriptions across multiple international currencies with no unified visibility into actual localized spending.',
    aiTools: [
      'Claude 3.5 Sonnet - Built state machines for automated IP geolocation fallback and multi-currency rate calculation.',
      'ChatGPT - Generated time-series financial forecasting models and subscription renewal anomaly detection.',
      'Cursor - Prompt-crafted responsive glass analytics cards with Framer Motion transitions.',
    ],
    highlights: [
      'Automatic IP/location detection to calculate expenses in local and global currencies.',
      'Interactive expense analytics dashboards encased in liquid glass refractive cards.',
      'AI-driven UX layout generation and prompt-crafted business logic.',
      'Real-time automated conversion with offline cache persistence.',
    ],
    architecture: [
      'Client-side IndexedDB cache providing 100% offline access to historic financial entries.',
      'High-performance SVG chart tooltips with requestAnimationFrame gesture throttling.',
      'Tri-tier fallback currency exchange API integration handling automated failover.',
    ],
    demoUrl: 'https://helpora-cyan.vercel.app/',
    githubUrl: 'https://github.com/amarnath3003/quickLiquid',
  },
  {
    id: 'klingflow-studio',
    title: 'KlingFlow Studio',
    tagline: 'Workflow studio orchestrating structured prompt generation and pipeline tools for AI video generation.',
    role: 'Prompt Engineering, API Integration & Interactive Tooling',
    metrics: '4x Prompt Iteration Speed | Live Parameter Matrix',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'AI APIs', 'Lucide React'],
    gradient: 'from-[#00E676]/20 via-white/5 to-transparent',
    accentColor: 'text-[#00E676]',
    heroImage: '/projects/klingflow.jpg',
    heroCaption: 'AI Video Prompt Studio - Interactive Parameter Matrix',
    domainDisplay: 'vivosmartphone.netlify.app',
    problem:
      'Generative AI video workflows are fragmented across complex parameter syntax (camera pans, motion buckets, frame rates), making prompt repeatability challenging.',
    aiTools: [
      'Claude 3.5 Sonnet - Developed token-aware prompt optimization algorithms and aspect ratio presets.',
      'Cursor - Implemented real-time interactive parameter matrix with QuickLiquid dynamic lighting.',
      'Stable Diffusion / Kling API Orchestrator - Designed asynchronous webhook event pipelines.',
    ],
    highlights: [
      'Specialized prompt-tuning interface for text-to-video and image-to-video generators.',
      'Interactive parameter controls (camera motion, styling weights, aspect ratios).',
      'Designed with QuickLiquid dynamic lighting controls and spring press animations.',
      'Live syntax preview with instant camera trajectory visualization.',
    ],
    architecture: [
      'Asynchronous task orchestrator managing distributed prompt queue workloads.',
      'Client-side JSON schema validator guaranteeing adherence to Kling video parameters.',
      'QuickLiquid spring physics providing tactile feedback during parameter tuning.',
    ],
    demoUrl: 'https://vivosmartphone.netlify.app/',
    githubUrl: 'https://github.com/amarnath3003/quickLiquid',
  },
  {
    id: 'salon-luxe',
    title: 'Salon Luxe Booking Experience',
    tagline: 'Modern service platform with dynamic appointment scheduling and fluid UI motion.',
    role: 'Full-Stack Architecture, Booking Flow Design & Frontend Engineering',
    metrics: '99.4% Booking Completion | Zero Mobile Layout Shift',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
    gradient: 'from-[#00E676]/20 via-white/5 to-transparent',
    accentColor: 'text-[#00E676]',
    heroImage: '/projects/salon.jpg',
    heroCaption: 'Luxury Salon Atelier - Bespoke Appointment Flow',
    domainDisplay: 'hair-salun.netlify.app',
    problem:
      'Service businesses face high mobile drop-off rates due to cumbersome booking wizards, poor calendar responsiveness, and non-intuitive tier selections.',
    aiTools: [
      'v0 by Vercel - Drafted mobile-first booking calendar component and service tier comparison cards.',
      'Claude 3.5 Sonnet - Architected slot reservation state machine preventing double-booking race conditions.',
      'Cursor - Styled fluid touch gestures and responsive liquid glass pricing badges.',
    ],
    highlights: [
      'Interactive service selector and multi-tier appointment booking flow.',
      'Fluid gesture transitions and optimized mobile-first responsive layout.',
      'AI-assisted copy generation and responsive calendar state management.',
      'Automated confirmation email triggers and localized time-zone adjustment.',
    ],
    architecture: [
      'Next.js Edge rendering ensuring rapid initial viewport paint on slow mobile connections.',
      'Framer Motion layout animations providing seamless multi-step step transitions.',
      'Optimistic calendar slot reservation with automated session timeout cleanup.',
    ],
    demoUrl: 'https://hair-salun.netlify.app/visit',
    githubUrl: 'https://github.com/amarnath3003/quickLiquid',
  },
];
