import { motion } from "motion/react";

const PHOTO =
  "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=900&h=1100&fit=crop&auto=format";

export function About() {
  const traits = [
    "React",
    "TypeScript",
    "Design Systems",
    "Accessibility",
    "Performance",
    "CSS Architecture",
  ];

  return (
    <section
      id="about"
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
          bottom: 0,
          right: 0,
          width: "55%",
          height: "65%",
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(0,212,255,0.055) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.95 }}
          >
            <span
              style={{
                display: "block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.675rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#00D4FF",
                marginBottom: "2.25rem",
              }}
            >
              01 / About Me
            </span>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.125rem)",
                fontWeight: 400,
                lineHeight: 1.18,
                color: "#DFF2F7",
                marginBottom: "2.5rem",
                maxWidth: "560px",
              }}
            >
              I believe good code and{" "}
              <em style={{ fontStyle: "italic", color: "#00D4FF" }}>
                good design
              </em>{" "}
              are the same discipline.
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.375rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.0rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "rgba(223,242,247,0.52)",
                maxWidth: "560px",
              }}
            >
              <p>
                I started building for the web because I was fascinated by how
                a few lines of code could produce something someone sees, feels,
                and interacts with. That fascination hasn't faded — it's sharpened.
              </p>
              <p>
                Today I work at the intersection of design systems and product
                engineering. I care about the things that are easy to miss: load
                performance, keyboard navigation, the 12ms delay that makes an
                animation feel wrong.
              </p>
              <p>
                Outside of code, I'm drawn to architecture, typography, and
                anything made with an unusual level of care.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "2.75rem",
              }}
            >
              {traits.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-block",
                    padding: "0.35rem 0.875rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.7375rem",
                    letterSpacing: "0.04em",
                    color: "rgba(0,212,255,0.7)",
                    border: "1px solid rgba(0,212,255,0.18)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.95, delay: 0.15 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                aspectRatio: "4 / 5",
                overflow: "hidden",
                background: "#011D24",
                position: "relative",
              }}
            >
              <img
                src={PHOTO}
                alt="Code on a monitor in a developer workspace"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.5,
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,20,25,0.15) 0%, rgba(0,20,25,0.75) 100%)",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                left: "-1rem",
                top: "4rem",
                width: "1px",
                height: "80px",
                background: "linear-gradient(to bottom, #00D4FF, transparent)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
