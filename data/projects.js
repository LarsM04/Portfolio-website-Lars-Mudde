/* ============================================================
   Project Data
   ============================================================
   To add a new project, copy one of the objects below and fill
   in your details. The js/projects.js file will automatically
   render it on the page.

   Fields:
   - number:    Display number (e.g. "01")
   - tagline:   Short subtitle shown above the title
   - name:      Project name / title
   - desc:      Multi-line project description
   - tech:      Array of technology tags
   - role:      Your role and year
   - image:     Image URL (Unsplash, local, etc.)
   - imageAlt:  Alt text for accessibility
   - reverse:   true to flip the layout (image on left)
   ============================================================ */

var projectsData = [
  {
    number: "01",
    tagline: "Financial analytics platform",
    name: "Meridian",
    desc:
      "De klant had een manier nodig voor niet-technische stakeholders om complexe " +
      "portfoliodata in één oogopslag te begrijpen. Ik bouwde een real-time analytics " +
      "dashboard met custom D3.js visualisaties, een flexibel filtersysteem en een " +
      "component library die schaalde over vier interne producten.",
    tech: ["React", "TypeScript", "D3.js", "WebSockets", "Tailwind CSS"],
    role: "Lead Front-End Developer · 2023",
    image:
      "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?w=1200&h=800&fit=crop&auto=format",
    imageAlt: "Dark analytics dashboard UI op scherm",
    reverse: false,
  },
  {
    number: "02",
    tagline: "Luxury e-commerce platform",
    name: "Atelier",
    desc:
      "Een onafhankelijk Frans modehuis had een digitale etalage nodig die overeenkwam " +
      "met de precisie van hun fysieke ervaring. Ik herbouwde hun platform vanaf nul met " +
      "redactioneel verhalen vertellen als primair ontwerpprincipe, wat resulteerde in 34% " +
      "toename in gemiddelde sessiediepte en 21% verbetering in checkout conversie.",
    tech: ["Next.js", "Framer Motion", "Shopify Hydrogen", "GSAP"],
    role: "Front-End Developer · Freelance · 2024",
    image:
      "https://images.unsplash.com/photo-1664076458686-3449062080ac?w=1200&h=800&fit=crop&auto=format",
    imageAlt: "Redactionele modefotografie voor luxe merk",
    reverse: true,
  },
  {
    number: "03",
    tagline: "Design system voor een fintech scale-up",
    name: "Basis",
    desc:
      "Acht engineers leverden conflicterende UI-patronen af zonder gedeelde basis. " +
      "Ik ontwierp en bouwde een volledig gedocumenteerde component library vanaf de " +
      "eerste principes — 40+ componenten, semantische kleurtokens, dark/light thema's " +
      "en een Storybook-integratie die het systeem binnen twee sprints de standaard van " +
      "het team maakte.",
    tech: ["React", "Radix UI", "CSS Variables", "Storybook", "TypeScript"],
    role: "Design Systems Engineer · 2024",
    image:
      "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=1200&h=800&fit=crop&auto=format",
    imageAlt: "Kleurrijke design system component blokken",
    reverse: false,
  },
];
