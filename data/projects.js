/* ============================================================
   Project Data
   ============================================================
   To add a new project, copy one of the objects below and fill
   in your details. The js/projects.js file will automatically
   render it on the page.

   Fields:
   - name:       Project name / title
   - tagline:    Short subtitle shown on the card
   - shortDesc:  Brief description shown on the project card
   - desc:       Full project description (shown in detail modal)
   - highlights: Array of key achievements/features (detail modal)
   - tech:       Array of technology tags
   - role:       Your role and year
   - image:      Image URL (Unsplash, local, etc.)
   - imageAlt:   Alt text for accessibility
   - links:      Object with optional github / live URLs
   ============================================================ */

var projectsData = [
  {
    name: "U Festival 2026",
    tagline: "Progressive Web App — Festival Guide",
    shortDesc:
      "Interactieve en offline-beschikbare PWA festivalgids voor het U Festival 2026 in Utrecht, met live programma, interactieve kaart en persoonlijk schema.",
    desc:
      "Een interactieve en offline-beschikbare Progressive Web App (PWA) voor het fictieve " +
      "U Festival 2026 op het Strijkviertel in Utrecht. Gebouwd als moderne, mobiel-vriendelijke " +
      "festivalgids waarmee bezoekers ter plekke alle praktische en programma-informatie direct " +
      "bij de hand hebben. De app is volledig client-side gebouwd — geen build-stappen, geen " +
      "npm-installatie, geen frameworks — met een sterke focus op performance, vloeiende UX " +
      "en native-achtige mobiele functionaliteit.",
    highlights: [
      "Volledig offline beschikbaar via Service Worker caching",
      "Interactief blokkenschema met favorieten & persoonlijk programma",
      "SVG-gebaseerde interactieve plattegrond met live GPS-locatie",
      "Ingebouwde QR-code scanner voor interactie op het terrein",
      "Light & Dark mode met dynamisch schakelen",
      "Meertalig: Nederlands 🇳🇱 & Engels 🇬🇧",
      "Beveiligd Admin CMS voor contentbeheer",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "PWA", "Service Worker", "SVG", "Geolocation API"],
    role: "Solo Developer · Schoolproject GLU · 2026",
    image: "assets/images/u-festival-hero.png",
    imageAlt: "U Festival 2026 — Interactieve festival PWA met programma en kaart",
    links: {
      github: "https://github.com/LarsM04/8.1---Module---U-Festival-App",
      live: "https://u-festival-app.onrender.com",
    },
  },
  {
    name: "Meridian",
    tagline: "Financial analytics platform",
    shortDesc:
      "Real-time analytics dashboard met custom D3.js visualisaties voor niet-technische stakeholders.",
    desc:
      "De klant had een manier nodig voor niet-technische stakeholders om complexe " +
      "portfoliodata in één oogopslag te begrijpen. Ik bouwde een real-time analytics " +
      "dashboard met custom D3.js visualisaties, een flexibel filtersysteem en een " +
      "component library die schaalde over vier interne producten.",
    highlights: [
      "Custom D3.js visualisaties voor complexe datasets",
      "Real-time data via WebSockets",
      "Flexibel filtersysteem met meerdere dimensies",
      "Component library geschaald over 4 producten",
    ],
    tech: ["React", "TypeScript", "D3.js", "WebSockets", "Tailwind CSS"],
    role: "Lead Front-End Developer · 2023",
    image:
      "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?w=1200&h=800&fit=crop&auto=format",
    imageAlt: "Dark analytics dashboard UI op scherm",
    links: {
      github: "https://github.com/LarsM04",
    },
  },
  {
    name: "Atelier",
    tagline: "Luxury e-commerce platform",
    shortDesc:
      "Digitale etalage voor een Frans modehuis met redactioneel storytelling als ontwerpprincipe.",
    desc:
      "Een onafhankelijk Frans modehuis had een digitale etalage nodig die overeenkwam " +
      "met de precisie van hun fysieke ervaring. Ik herbouwde hun platform vanaf nul met " +
      "redactioneel verhalen vertellen als primair ontwerpprincipe, wat resulteerde in 34% " +
      "toename in gemiddelde sessiediepte en 21% verbetering in checkout conversie.",
    highlights: [
      "34% toename in gemiddelde sessiediepte",
      "21% verbetering in checkout conversie",
      "Redactioneel storytelling als ontwerpprincipe",
      "Volledig herbouwd vanaf nul",
    ],
    tech: ["Next.js", "Framer Motion", "Shopify Hydrogen", "GSAP"],
    role: "Front-End Developer · Freelance · 2024",
    image:
      "https://images.unsplash.com/photo-1664076458686-3449062080ac?w=1200&h=800&fit=crop&auto=format",
    imageAlt: "Redactionele modefotografie voor luxe merk",
    links: {
      live: "https://example.com",
    },
  },
  {
    name: "Basis",
    tagline: "Design system voor een fintech scale-up",
    shortDesc:
      "Volledig gedocumenteerde component library met 40+ componenten, dark/light thema's en Storybook.",
    desc:
      "Acht engineers leverden conflicterende UI-patronen af zonder gedeelde basis. " +
      "Ik ontwierp en bouwde een volledig gedocumenteerde component library vanaf de " +
      "eerste principes — 40+ componenten, semantische kleurtokens, dark/light thema's " +
      "en een Storybook-integratie die het systeem binnen twee sprints de standaard van " +
      "het team maakte.",
    highlights: [
      "40+ herbruikbare componenten",
      "Semantische kleurtokens met dark/light thema",
      "Storybook-integratie voor documentatie",
      "Binnen 2 sprints teamstandaard geworden",
    ],
    tech: ["React", "Radix UI", "CSS Variables", "Storybook", "TypeScript"],
    role: "Design Systems Engineer · 2024",
    image:
      "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=1200&h=800&fit=crop&auto=format",
    imageAlt: "Kleurrijke design system component blokken",
    links: {
      github: "https://github.com/LarsM04",
      live: "https://example.com",
    },
  },
];
