import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#001419",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(0,212,255,0.14) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "40%",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "960px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.675rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#00D4FF",
              marginBottom: "2.75rem",
            }}
          >
            Front-End Developer · Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.38 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(3.25rem, 9.5vw, 7.75rem)",
            fontWeight: 400,
            lineHeight: 1.04,
            color: "#DFF2F7",
            marginBottom: "2.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          Crafting digital
          <br />
          <em style={{ fontStyle: "italic", color: "#00D4FF" }}>
            experiences
          </em>{" "}
          that endure.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.68 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.0625rem",
            fontWeight: 300,
            lineHeight: 1.82,
            color: "rgba(223,242,247,0.48)",
            maxWidth: "500px",
            margin: "0 auto 3.25rem",
          }}
        >
          I'm Alex Morgan — a front-end developer who cares deeply about the
          intersection of design and engineering. I build interfaces that feel
          intentional, accessible, and alive.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.88 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.9375rem 2.375rem",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: "#00D4FF",
            border: "1px solid rgba(0,212,255,0.32)",
            textDecoration: "none",
            transition: "background 0.3s, border-color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,212,255,0.07)";
            e.currentTarget.style.borderColor = "rgba(0,212,255,0.65)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(0,212,255,0.32)";
          }}
        >
          View my work <ArrowDown size={12} />
        </motion.a>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        style={{
          position: "absolute",
          bottom: "2.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.625rem",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(0,212,255,0.3)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "52px",
            background: "linear-gradient(to bottom, rgba(0,212,255,0.32), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
