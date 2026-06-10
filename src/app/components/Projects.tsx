import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Meridian",
    tagline: "Financial analytics platform",
    desc: "The client needed a way for non-technical stakeholders to understand complex portfolio data at a glance. I built a real-time analytics dashboard with custom D3.js visualisations, a flexible filter system, and a component library that scaled across four internal products.",
    stack: ["React", "TypeScript", "D3.js", "WebSockets", "Tailwind CSS"],
    year: "2023",
    role: "Lead Front-End Developer",
    photo:
      "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?w=1200&h=800&fit=crop&auto=format",
    photoAlt: "Dark analytics dashboard UI on screen",
  },
  {
    number: "02",
    name: "Atelier",
    tagline: "Luxury e-commerce platform",
    desc: "An independent French fashion house needed a digital storefront that matched the precision of their physical experience. I rebuilt their platform from scratch with editorial storytelling as the primary design principle, landing a 34% increase in average session depth and a 21% improvement in checkout conversion.",
    stack: ["Next.js", "Framer Motion", "Shopify Hydrogen", "GSAP"],
    year: "2024",
    role: "Front-End Developer · Freelance",
    photo:
      "https://images.unsplash.com/photo-1664076458686-3449062080ac?w=1200&h=800&fit=crop&auto=format",
    photoAlt: "Editorial fashion photography for luxury brand",
  },
  {
    number: "03",
    name: "Basis",
    tagline: "Design system for a fintech scale-up",
    desc: "Eight engineers were shipping conflicting UI patterns with no shared foundation. I designed and built a fully documented component library from first principles — 40+ components, semantic colour tokens, dark/light themes, and a Storybook integration that made the system the team's default choice within two sprints.",
    stack: ["React", "Radix UI", "CSS Variables", "Storybook", "TypeScript"],
    year: "2024",
    role: "Design Systems Engineer",
    photo:
      "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=1200&h=800&fit=crop&auto=format",
    photoAlt: "Colourful design system component blocks",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "#001419",
        padding: "9rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          height: "50%",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85 }}
          style={{ marginBottom: "6rem" }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.675rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#00D4FF",
              marginBottom: "1.75rem",
            }}
          >
            03 / Featured Projects
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.18,
              color: "#DFF2F7",
              maxWidth: "480px",
            }}
          >
            Work I'm{" "}
            <em style={{ fontStyle: "italic", color: "#00D4FF" }}>
              proud to have built.
            </em>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.05 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                  paddingTop: i > 0 ? "6rem" : 0,
                  paddingBottom: "6rem",
                  borderBottom:
                    i < projects.length - 1
                      ? "1px solid rgba(0,212,255,0.08)"
                      : "none",
                }}
                className={`lg:flex-row${isEven ? "" : "-reverse"}`}
              >
                {/* Text */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: "1 1 0",
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "1.25rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                        fontWeight: 400,
                        color: "rgba(0,212,255,0.12)",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        userSelect: "none",
                      }}
                    >
                      {project.number}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(0,212,255,0.5)",
                      }}
                    >
                      {project.tagline}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(2rem, 3.5vw, 2.875rem)",
                      fontWeight: 400,
                      lineHeight: 1.1,
                      color: "#DFF2F7",
                      marginBottom: "1.625rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 300,
                      lineHeight: 1.82,
                      color: "rgba(223,242,247,0.5)",
                      marginBottom: "2rem",
                      maxWidth: "480px",
                    }}
                  >
                    {project.desc}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          display: "inline-block",
                          padding: "0.25rem 0.75rem",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.7rem",
                          letterSpacing: "0.05em",
                          color: "rgba(223,242,247,0.45)",
                          border: "1px solid rgba(223,242,247,0.1)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2rem",
                      paddingTop: "0.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(223,242,247,0.3)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {project.role} · {project.year}
                    </span>
                    <button
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#00D4FF",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                    >
                      Case study <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "#011D24",
                    aspectRatio: "16 / 10",
                    flex: "0 0 48%",
                  }}
                >
                  <img
                    src={project.photo}
                    alt={project.photoAlt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.55,
                      display: "block",
                      transition: "opacity 0.5s, transform 0.6s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.72";
                      e.currentTarget.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0.55";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(0,20,25,0.35) 0%, rgba(0,212,255,0.04) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      border: "1px solid rgba(0,212,255,0.1)",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
