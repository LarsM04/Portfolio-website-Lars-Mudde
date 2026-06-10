import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Work", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.5s, border-color 0.5s, backdrop-filter 0.5s",
        background: scrolled ? "rgba(0,20,25,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(0,212,255,0.1)" : "transparent"}`,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2.5rem",
          height: "4.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.28em",
            color: "#00D4FF",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          A·M
        </a>

        <div className="hidden md:flex" style={{ alignItems: "center", gap: "2.75rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.07em",
                color: "rgba(223,242,247,0.5)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#00D4FF"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(223,242,247,0.5)"; }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          style={{
            color: "rgba(223,242,247,0.7)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.25rem",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          style={{
            background: "rgba(0,18,24,0.97)",
            borderTop: "1px solid rgba(0,212,255,0.08)",
            padding: "1rem 2.5rem 2rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                color: "rgba(223,242,247,0.6)",
                padding: "0.875rem 0",
                textDecoration: "none",
                borderBottom: "1px solid rgba(0,212,255,0.06)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
