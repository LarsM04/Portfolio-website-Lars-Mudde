import { motion } from "motion/react";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "X / Twitter", href: "https://x.com" },
];

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(to bottom, #001419 0%, #000E13 100%)",
        padding: "10rem 1.5rem 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow — invitation of light */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "50%",
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,212,255,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.675rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#00D4FF",
              marginBottom: "2.5rem",
            }}
          >
            06 / Contact
          </span>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#DFF2F7",
              marginBottom: "1.75rem",
              letterSpacing: "-0.015em",
            }}
          >
            Let's build something
            <br />
            <em style={{ fontStyle: "italic", color: "#00D4FF" }}>
              together.
            </em>
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.0625rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(223,242,247,0.48)",
              maxWidth: "480px",
              margin: "0 auto 4rem",
            }}
          >
            I'm currently open to new opportunities — a full-time role, a
            freelance project, or just a good conversation about something
            worth building.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:hello@alexmorgan.dev"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#DFF2F7",
              textDecoration: "none",
              borderBottom: "1px solid rgba(0,212,255,0.25)",
              paddingBottom: "0.375rem",
              marginBottom: "4rem",
              transition: "color 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00D4FF";
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#DFF2F7";
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.25)";
            }}
          >
            hello@alexmorgan.dev <ArrowUpRight size={18} />
          </a>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2.5rem",
              marginBottom: "6rem",
            }}
          >
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.05em",
                  color: "rgba(223,242,247,0.4)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#00D4FF"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(223,242,247,0.4)"; }}
              >
                <Icon size={15} strokeWidth={1.5} />
                {label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(0,212,255,0.18), transparent)",
              marginBottom: "2.5rem",
            }}
          />

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.04em",
                color: "rgba(223,242,247,0.25)",
              }}
            >
              © 2025 Alex Morgan
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.04em",
                color: "rgba(223,242,247,0.25)",
              }}
            >
              Designed &amp; built with care
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
