# D Venkataramana — Portfolio v2.0 (Next.js)

A modern, production-grade portfolio built with the latest stack and packed with delightful interactions.

## Tech Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for declarative animations & layout transitions
- **GSAP** (ready to wire up) for advanced timeline animations
- **Lenis** smooth scroll engine
- **tsparticles** canvas particle background with mouse interaction
- **VanillaTilt** for 3D tilt cards
- **EmailJS** for contact form delivery (Gmail + WhatsApp)
- **react-icons** for crisp icon set

## Features

### Basic
- Fully responsive (mobile, tablet, desktop)
- Dark theme with CSS variables
- Smooth anchor navigation
- SEO meta tags + Open Graph + Twitter Cards
- Resume download
- Reduced-motion accessibility support

### Advanced
- Lenis buttery smooth-scroll across the whole page
- Interactive **canvas particle background** that follows the cursor
- **Custom dual-layer animated cursor** with hover states (auto-hidden on touch)
- Scroll progress bar pinned at the top
- Animated **typed text effect** for hero roles
- Intersection-observer based **count-up animation** with cubic easing
- **VanillaTilt 3D cards** with subtle glare on every card
- **Magnetic button** component (ready to use)
- **Active section highlighting** in the navbar with layout animation
- Animated **timeline experience** with alternating sides
- **Scroll-triggered reveals** with stagger across every section
- Animated **bar fills** for project metrics
- Marquee tools strip with edge masking
- Glass-morphism cards with gradient borders
- Real-time form validation
- EmailJS integration → email lands in inbox + WhatsApp message opens

## Quick Start

```bash
cd next-portfolio
npm install
cp .env.local.example .env.local   # Then fill in your EmailJS service & template IDs
npm run dev
```

Open http://localhost:3000

## Environment Variables

Create `.env.local` (or use `.env.local.example` as a template):

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=jtjhN7XHpbOIrNbar
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_OWNER_WHATSAPP=917981632581
NEXT_PUBLIC_OWNER_EMAIL=venkat.digitalseo@gmail.com
```

To get the Service ID and Template ID:
1. Go to https://dashboard.emailjs.com/admin
2. **Email Services** → Add New → Gmail → Connect `venkat.digitalseo@gmail.com` → copy the Service ID
3. **Email Templates** → Create New with this body:

   Subject: `[Portfolio] {{subject}} — {{from_name}}`

   Body:
   ```
   Name:    {{from_name}}
   Email:   {{from_email}}
   Phone:   {{from_phone}}
   Subject: {{subject}}

   {{message}}
   ```
   To Email: `venkat.digitalseo@gmail.com` → copy the Template ID

## Deploy

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```
Add the four `NEXT_PUBLIC_*` env vars in the Vercel dashboard.

### GitHub Pages (static export)
1. In `next.config.mjs`, uncomment the `output`, `basePath`, `assetPrefix` lines.
2. ```bash
   npm run build
   ```
3. Push `out/` to the `gh-pages` branch.

### Netlify
Drag-and-drop the `out/` folder (after static export) or connect the repo.

## Project Structure

```
next-portfolio/
├── app/
│   ├── globals.css        # Tailwind + custom CSS variables, cursor styles
│   ├── layout.tsx         # Root layout + fonts + SEO + global providers
│   └── page.tsx           # Home page composition
├── components/
│   ├── Navbar.tsx         # Sticky nav with active section + mobile menu
│   ├── Hero.tsx           # Hero with typed text + counters + animated chart
│   ├── ToolsMarquee.tsx
│   ├── About.tsx          # Avatar + quick info + expertise pills + callout
│   ├── ImpactStrip.tsx    # Animated counter strip
│   ├── Experience.tsx     # Alternating timeline
│   ├── Education.tsx
│   ├── Skills.tsx         # 4-column tilt-card grid
│   ├── Projects.tsx       # Featured + grid with bar metrics
│   ├── Certifications.tsx
│   ├── Contact.tsx        # EmailJS + WhatsApp + validation
│   ├── Footer.tsx
│   ├── SmoothScroll.tsx   # Lenis provider
│   ├── ParticleBackground.tsx
│   ├── CustomCursor.tsx
│   ├── ScrollProgress.tsx
│   ├── MagneticButton.tsx
│   ├── TiltCard.tsx
│   ├── TypedText.tsx
│   ├── Counter.tsx
│   └── SectionHeader.tsx
├── lib/
│   ├── data.ts            # All content (edit here to update copy)
│   └── utils.ts           # cn() helper
└── public/
    └── Resume.pdf
```

## Editing Content

All text, stats, experience, projects, certifications live in **`lib/data.ts`**.
Update that file and the whole site updates.

## Backup

The previous static portfolio (HTML/CSS/JS) is preserved at `../backup_v1/`.
