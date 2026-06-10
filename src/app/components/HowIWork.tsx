import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "I start by listening. Understanding the problem, the constraints, and the people involved before touching a text editor. Good questions save more time than fast typing.",
  },
  {
    number: "02",
    title: "Define",
    desc: "I map out the solution architecture, component hierarchy, and interaction flows before writing production code. A clear plan is not overhead — it's velocity.",
  },
  {
    number: "03",
    title: "Build",
    desc: "I work in close iterations, shipping working software early and often. I believe in code review, pair programming, and the value of a second pair of eyes.",
  },
  {
    number: "04",
    title: "Refine",
    desc: "I obsess over the details — performance, accessibility, and the micro-interactions that make an interface feel alive. Craft is what separates good from memorable.",
  },
];

export function HowIWork() {
  return (
    <section
      id="process"
      style={{
        background: "#001419",
        padding: "9rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent, rgba(0,212,255,0.03) 40%, rgba(0,212,255,0.03) 60%, transparent)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85 }}
          style={{ marginBottom: "5.5rem" }}
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
            04 / How I Work
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.18,
              color: "#DFF2F7",
              maxWidth: "500px",
            }}
          >
            Process is how good intentions become{" "}
            <em style={{ fontStyle: "italic", color: "#00D4FF" }}>
              good software.
            </em>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "0" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              style={{
                padding: "2.5rem 2rem 2.5rem 0",
                borderTop: "1px solid rgba(0,212,255,0.15)",
                position: "relative",
              }}
              className="lg:pr-10"
            >
              {/* Top accent line fill */}
              <div
                style={{
                  position: "absolute",
                  top: "-1px",
                  left: 0,
                  width: "2.5rem",
                  height: "1px",
                  background: "#00D4FF",
                }}
              />

              <span
                style={{
                  display: "block",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "3rem",
                  fontWeight: 400,
                  color: "rgba(0,212,255,0.1)",
                  lineHeight: 1,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.02em",
                  userSelect: "none",
                }}
              >
                {step.number}
              </span>

              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.375rem",
                  fontWeight: 400,
                  color: "#DFF2F7",
                  marginBottom: "1rem",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 1.82,
                  color: "rgba(223,242,247,0.48)",
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
