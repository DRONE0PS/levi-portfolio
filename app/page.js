"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main style={{ position: "relative" }}>
      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: scrolled ? 12 : 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "10px 10px 10px 18px",
          borderRadius: 999,
          background: "linear-gradient(180deg, #e9e9e7 0%, #d8d8d5 100%)",
          border: "1px solid rgba(0,0,0,0.15)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.8) inset, 0 -1px 0 rgba(0,0,0,0.08) inset, 0 8px 24px rgba(0,0,0,0.12)",
          transition: "top 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, paddingRight: 16, borderRight: "1px solid rgba(0,0,0,0.12)" }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#ff6a1f",
              boxShadow: "0 0 6px #ff6a1f, 0 0 2px #ff6a1f",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 14,
              letterSpacing: "0.04em",
              fontWeight: 700,
            }}
          >
            LA
          </span>
        </div>

        <div className="nav-links" style={{ display: "flex", gap: 2 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#3a3a3a",
                padding: "8px 14px",
                borderRadius: 999,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#fff",
            background: "#14141a",
            padding: "10px 18px",
            borderRadius: 999,
            marginLeft: 8,
            whiteSpace: "nowrap",
          }}
        >
          Hire Me
        </a>
      </nav>

      {/* HERO PLACEHOLDER - next step */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-soft)" }}>
          Hero section goes here — step 2
        </p>
      </section>
    </main>
  );
}
