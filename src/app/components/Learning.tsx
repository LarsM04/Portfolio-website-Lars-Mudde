import { motion } from "motion/react";
import { Layers, Zap, Terminal, Code2, Eye, Palette } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "WebGL & Three.js",
    desc: "3D graphics and shader programming for interactive web experiences that go beyond the flat screen.",
  },
  {
    icon: Zap,
    title: "Motion Design",
    desc: "Advanced animation principles — spring physics, choreographed sequences, and the art of timing.",
  },
  {
    icon: Terminal,
    title: "Rust",
    desc: "Systems programming to understand web performance at a deeper level. Compiling to WASM for the browser.",
  },
  {
    icon: Code2,
    title: "TypeScript Patterns",
    desc: "Advanced generic types, template literal types, and building APIs that are impossible to misuse.",
  },
  {
    icon: Eye,
    title: "Accessibility",
    desc: "WCAG 2.2, ARIA patterns, and real-world testing with screen readers. Building for everyone.",
  },
  {
    icon: Palette,
    title: "Design Tokens",
    desc: "Theming at scale with Style Dictionary, multi-brand design systems, and token architecture.",
  },
];

export function Learning() {
  return (
    <section
      id="learning"
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
          left: 0,
          width: "60%",
          height: "60%",
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(0,212,255,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            05 / Currently Learning
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
            I never want to stop being{" "}
            <em style={{ fontStyle: "italic", color: "#00D4FF" }}>
              curious.
            </em>
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "0" }}
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.75, delay: i * 0.08 }}
                style={{
                  padding: "2.5rem 2.5rem 2.5rem 0",
                  borderBottom: "1px solid rgba(0,212,255,0.08)",
                  borderRight: "0px solid rgba(0,212,255,0.08)",
                  cursor: "default",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,212,255,0.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    color: "rgba(0,212,255,0.6)",
                  }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "#DFF2F7",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    lineHeight: 1.78,
                    color: "rgba(223,242,247,0.45)",
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
