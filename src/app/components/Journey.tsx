import { motion } from "motion/react";

const milestones = [
  {
    year: "2019",
    title: "B.Sc. Computer Science",
    org: "University of Exeter",
    desc: "Discovered front-end development in my first semester and never looked back. Built small tools, browser extensions, and enough bad websites to learn what actually matters.",
  },
  {
    year: "2021",
    title: "Freelance Web Developer",
    org: "Independent",
    desc: "Started taking client work — mostly small businesses and startups. Built my first real-world projects and learned that users are more important than elegant code.",
  },
  {
    year: "2022",
    title: "Junior Front-End Developer",
    org: "Horizon Digital · London",
    desc: "Joined a 14-person agency working on high-traffic campaign sites. Learned performance budgets, cross-browser consistency, and the reality of production codebases.",
  },
  {
    year: "2023",
    title: "Mid-level Developer",
    org: "Construct Studio · London",
    desc: "Led front-end on multiple product launches. Introduced our first internal design system. First time mentoring another developer — humbling in the best way.",
  },
  {
    year: "2024 → Now",
    title: "Senior Front-End Developer",
    org: "Fathom · Remote",
    desc: "Architecting front-end infrastructure for a B2B analytics platform. Building component libraries, establishing engineering standards, shipping fast.",
  },
];

export function Journey() {
  return (
    <section
      id="journey"
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
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "60%",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85 }}
          style={{ marginBottom: "5rem" }}
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
            02 / My Journey
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.18,
              color: "#DFF2F7",
              maxWidth: "520px",
            }}
          >
            Growth isn't linear. But looking back,{" "}
            <em style={{ fontStyle: "italic", color: "#00D4FF" }}>
              every step connected.
            </em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "7.5rem",
              top: 0,
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent, rgba(0,212,255,0.2) 10%, rgba(0,212,255,0.2) 90%, transparent)",
            }}
            className="hidden md:block"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "0",
                  paddingBottom: i < milestones.length - 1 ? "3.5rem" : 0,
                  position: "relative",
                }}
                className="md:grid-cols-[120px_1fr]"
              >
                {/* Year */}
                <div
                  style={{
                    position: "relative",
                    paddingTop: "0.125rem",
                    marginBottom: "0.75rem",
                  }}
                  className="md:mb-0"
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.06em",
                      color: "#00D4FF",
                      fontWeight: 400,
                      display: "block",
                    }}
                  >
                    {m.year}
                  </span>
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "0.4rem",
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#00D4FF",
                      boxShadow: "0 0 8px rgba(0,212,255,0.5)",
                      transform: "translateX(50%)",
                    }}
                    className="hidden md:block"
                  />
                </div>

                {/* Content */}
                <div
                  style={{ paddingLeft: "0" }}
                  className="md:pl-10"
                >
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.3125rem",
                      fontWeight: 400,
                      color: "#DFF2F7",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {m.title}
                  </h3>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8rem",
                      letterSpacing: "0.04em",
                      color: "rgba(0,212,255,0.55)",
                      marginBottom: "0.875rem",
                    }}
                  >
                    {m.org}
                  </span>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 300,
                      lineHeight: 1.78,
                      color: "rgba(223,242,247,0.5)",
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
